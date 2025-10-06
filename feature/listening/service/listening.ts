import { ListeningPage } from "@/feature/listening/model/listening";
import { mapDatas } from "@/shared/lib/data-convert";
import { getListMessageFromDisCord } from "@/shared/repository/discord";
import { Question } from "@/shared/types/models/question";

const limit = 10;
const defaultPage = "newest";

export const getListening = async ({
  page,
}: {
  page: string;
}): Promise<ListeningPage> => {
  const data = await getListMessageFromDisCord({
    channelId: "1421561218455310476",
    before: page == defaultPage ? undefined : page,
    limit,
  });
  return {
    listeningList: mapDatas(data, Question.fromDTO),
    limit,
    nextPage: data.length == 10 ? data.at(-1)?.id : undefined,
  };
};

export function hasData(pageData: ListeningPage | undefined): boolean {
  return !!pageData && pageData.listeningList.length > 0;
}

export function displayData(pageData: ListeningPage | undefined): Question[] {
  return pageData?.listeningList ?? [];
}

export function showNextPage(pageData: ListeningPage | undefined): boolean {
  const data = displayData(pageData);
  return data.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(
  pageData: ListeningPage | undefined
): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}
