import {
  getListMessageFromSlack,
  getListReplyFromSlack,
  type SlackMessageEntity,
} from "@/lib/repositories/slack.repository";
import type { PaginatedFetch } from "@/lib/types";
import matter from "gray-matter";

export const SHORT_PAGE_LIMIT = 5;
const defaultPage = "newest";
const channelId = "C071E9YUDHU";

function parseMultipleMetadata(
  text: string,
  baseItem: SlackMessageEntity
): SlackMessageEntity[] {
  const result: SlackMessageEntity[] = [];
  const regex = /---\n([\s\S]*?)\n---/g;
  let match;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    const metadataStart = match.index;
    const metadataEnd = regex.lastIndex;
    const nextMatch = regex.exec(text);
    regex.lastIndex = metadataEnd;

    const contentEnd = nextMatch ? nextMatch.index : text.length;
    const fullBlock = text.slice(metadataStart, contentEnd).trim();

    if (fullBlock) {
      const parsed = matter(fullBlock);
      if (parsed.data?.title != null) {
        result.push({
          ...baseItem,
          text: fullBlock,
          ts: `${baseItem.ts}_${index}`,
          // Map theo thứ tự 1 file : 1 block metadata, tránh mọi episode share chung cả mảng files
          // (khiến bấm qua tập khác chỉ đổi tiêu đề, video vẫn giữ nguyên).
          files: baseItem.files?.[index] ? [baseItem.files[index]] : undefined,
        });
        index++;
      }
    }
  }

  return result;
}

function hasTitle(text: string): boolean {
  return matter(text).data?.title != null;
}

function pushIfExists(result: SlackMessageEntity[], item: SlackMessageEntity | null) {
  if (item) {
    result.push(item);
  }
}

function parseRelatedItems(threads: SlackMessageEntity[]): SlackMessageEntity[] {
  const result: SlackMessageEntity[] = [];
  let current: SlackMessageEntity | null = null;

  // threads[0] luôn là message gốc của thread (chính short hiện tại, conversations.replies của
  // Slack trả kèm), không tính là 1 "episode" riêng — nếu không sẽ trùng lặp với short chính.
  for (const item of threads.slice(1)) {
    const text = item.text ?? "";
    const multipleItems = parseMultipleMetadata(text, item);

    if (multipleItems.length > 1) {
      pushIfExists(result, current);
      current = null;
      result.push(...multipleItems);
      continue;
    }

    if (hasTitle(text)) {
      pushIfExists(result, current);
      current = { ...item };
    } else if (current) {
      current.text = (current.text ?? "") + "\n\n" + text;
    }
  }

  pushIfExists(result, current);
  return result;
}

function parseReplyContent(threads: SlackMessageEntity[]): string {
  const result: string[] = [];
  for (let i = 0; i < threads.length; i++) {
    const item = threads[i];
    const parsed = matter(item.text ?? "");
    if (parsed.data?.title != null && i != 0) {
      break;
    }
    result.push(item.text ?? "");
  }
  return result.join("\n\n");
}

export const fetchShortEntities = async ({
  page,
}: {
  page: string;
}): Promise<PaginatedFetch<SlackMessageEntity>> => {
  const data = await getListMessageFromSlack({
    channelId,
    cursor: page === defaultPage ? undefined : page,
    limit: SHORT_PAGE_LIMIT,
  });

  const entities = await Promise.all(
    data.messages.map(async (item) => {
      if (item.thread_ts) {
        const threads = await getThreadMessages(channelId, item.thread_ts);
        const content = parseReplyContent(threads);
        const relateds = parseRelatedItems(threads);
        return {
          ...item,
          text: content,
          // relateds giờ không còn tính message gốc (đã bỏ ở parseRelatedItems) nên chỉ cần >0
          // là đã có ít nhất 1 tập khác thật sự ngoài short chính.
          relatedMessages: relateds.length > 0 ? relateds : [],
        };
      }
      return item;
    }),
  );

  return {
    entities,
    nextPage: data.response_metadata?.next_cursor,
  };
};

async function getThreadMessages(
  channelId: string,
  ts: string,
): Promise<SlackMessageEntity[]> {
  const replies = await getListReplyFromSlack({ channelId, ts });
  return replies.messages;
}
