import { Short, ShortPage, ShortType } from "@/feature/short/model/short";
import { mapDatas } from "@/shared/lib/data-convert";
import {
  getListMessageFromSlack,
  getListReplyFromSlack,
} from "@/shared/repository/slack";
import { SlackMessageDTO } from "@/shared/types/dto/slack-message";
import matter from "gray-matter";

const limit = 5;
const defaultPage = "newest";
const channelId = "C071E9YUDHU";

export const getShort = async ({
  page,
}: {
  page: string;
}): Promise<ShortPage> => {
  const data = await getListMessageFromSlack({
    channelId,
    cursor: page == defaultPage ? undefined : page,
    limit,
  });
  const newData = await Promise.all(
    data.messages.map(async (item) => {
      if (item.thread_ts) {
        const threads = await _getThread({
          channelId,
          ts: item.thread_ts,
        });
        const content = await _getReplyContent({ threads });
        const relateds = await _getRelated({ threads });
        return {
          ...item,
          text: content,
          relatedMessages: relateds.length > 1 ? relateds : [],
        };
      }
      return item;
    })
  );
  const shorts = mapDatas(newData, Short.fromDTO);
  return {
    shorts,
    nextPage: data.response_metadata?.next_cursor,
    limit,
  };
};

const _getThread = async ({
  channelId,
  ts,
}: {
  channelId: string;
  ts: string;
}): Promise<SlackMessageDTO[]> => {
  const replies = await getListReplyFromSlack({ channelId, ts });
  return replies.messages;
};

const _getRelated = async ({
  threads,
}: {
  threads: SlackMessageDTO[];
}): Promise<SlackMessageDTO[]> => {
  const result: SlackMessageDTO[] = [];
  let current: SlackMessageDTO | null = null;

  for (const item of threads) {
    const parsed = matter(item.text ?? "");
    if (parsed.data?.title != null) {
      if (current) {
        result.push(current);
      }
      current = { ...item };
    } else if (current) {
      current.text = (current.text ?? "") + "\n\n" + (item.text ?? "");
    }
  }
  if (current) {
    result.push(current);
  }
  return result;
};

const _getReplyContent = async ({
  threads,
}: {
  threads: SlackMessageDTO[];
}): Promise<string> => {
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
};

export function hasData(pageData: ShortPage | undefined): boolean {
  return !!pageData && pageData.shorts.length > 0;
}

export function displayData(pageData: ShortPage | undefined): Short[] {
  return pageData?.shorts ?? [];
}

export function showNextPage(pageData: ShortPage | undefined): boolean {
  const data = displayData(pageData);
  return data.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(pageData: ShortPage | undefined): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}

export function isSubtitle(short: Short): boolean {
  return short.type == ShortType.SUBTITLE;
}
