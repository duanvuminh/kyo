import { Short, ShortPage, ShortType } from "@/feature/short/model/short";
import {
  parseRelatedItems,
  parseReplyContent,
} from "@/feature/short/service/short-parser";
import { mapDatas } from "@/shared/lib/data-convert";
import {
  getListMessageFromSlack,
  getListReplyFromSlack,
} from "@/shared/repository/slack";
import { SlackMessageDTO } from "@/shared/types/dto/slack-message";

const limit = 5;
const defaultPage = "newest";
const channelId = "C071E9YUDHU";

export async function getShort({ page }: { page: string }): Promise<ShortPage> {
  const data = await getListMessageFromSlack({
    channelId,
    cursor: page == defaultPage ? undefined : page,
    limit,
  });

  const newData = await Promise.all(
    data.messages.map(async (item) => {
      if (item.thread_ts) {
        const threads = await getThreadMessages(channelId, item.thread_ts);
        const content = parseReplyContent(threads);
        const relateds = parseRelatedItems(threads);
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
}

async function getThreadMessages(
  channelId: string,
  ts: string
): Promise<SlackMessageDTO[]> {
  const replies = await getListReplyFromSlack({ channelId, ts });
  return replies.messages;
}

// Page utilities
export function hasData(pageData: ShortPage | undefined): boolean {
  return !!pageData && pageData.shorts.length > 0;
}

export function displayData(pageData: ShortPage | undefined): Short[] {
  console.log(pageData?.shorts.length);
  return (pageData?.shorts ?? []).filter((short) => !short.hidden);
}

export function showNextPage(pageData: ShortPage | undefined): boolean {
  const data = displayData(pageData);
  return pageData?.shorts.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(pageData: ShortPage | undefined): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}

export function isSubtitle(short: Short): boolean {
  return short.type == ShortType.SUBTITLE;
}
