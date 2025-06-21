import { mapDatas } from "@/lib/data-convert";
import {
  getListMessageFromSlack,
  getListReplyFromSlack,
} from "@/repository/slack";
import { Short, ShortPage, ShortType } from "@/types/models/short";

const limit = 10;
const defaultPage = "newest";
const channelId = "C071E9YUDHU";

export const getShort = async ({
  page,
}: {
  page: string;
}): Promise<ShortPage | undefined> => {
  try {
    const data = await getListMessageFromSlack({
      channelId,
      cursor: page == defaultPage ? undefined : page,
      limit,
    });
    const newData = await Promise.all(
      data.messages.map(async (item) => {
        if (item.thread_ts) {
          const content = await _getReplyContent({
            channelId,
            ts: item.thread_ts,
          });
          return {
            ...item,
            text: content,
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
  } catch (e) {
    console.log(e);
    return undefined;
  }
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

const _getReplyContent = async ({
  channelId,
  ts,
}: {
  channelId: string;
  ts: string;
}): Promise<string> => {
  const result = await getListReplyFromSlack({ channelId, ts });
  return result.messages.map((item) => item.text).join("\n\n");
};
