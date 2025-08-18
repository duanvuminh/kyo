import { Infor, InforPage } from "@/feature/infor/model/infor";
import { mapDatas } from "@/shared/lib/data-convert";
import { getListMessageFromDisCord } from "@/shared/repository/discord";

const limit = 5;
const defaultPage = "newest";

export const getInfor = async ({
  page,
}: {
  page: string;
}): Promise<InforPage | undefined> => {
  try {
    const data = await getListMessageFromDisCord({
      channelId: "1274351146789507115",
      before: page == defaultPage ? undefined : page,
      limit,
    });
    return {
      inforList: mapDatas(data, Infor.fromDTO),
      limit,
      nextPage: data.length == 10 ? data.at(-1)?.id : undefined,
    };
  } catch {
    return undefined;
  }
};

export function hasData(pageData: InforPage | undefined): boolean {
  return !!pageData && pageData.inforList.length > 0;
}

export function displayData(pageData: InforPage | undefined): Infor[] {
  return pageData?.inforList ?? [];
}

export function showNextPage(pageData: InforPage | undefined): boolean {
  const data = displayData(pageData);
  return data.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(pageData: InforPage | undefined): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}
