import { mapDatas } from "@/lib/data-convert";
import { getListMessageFromSlack } from "@/repository/slack";
import { Short, ShortPage, ShortType } from "@/types/models/short";

const limit = 10;
const defaultPage = "newest";

export const getShort = async ({
  page,
}: {
  page: string;
}): Promise<ShortPage | undefined> => {
  try {
    const data = await getListMessageFromSlack({
      channelId: "C071E9YUDHU",
      cursor: page == defaultPage ? undefined : page,
      limit,
    });
    return {
      shorts: mapDatas(data.messages, Short.fromDTO),
      nextPage: data.response_metadata?.next_cursor,
      limit,
    };
  } catch {
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
