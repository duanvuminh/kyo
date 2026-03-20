import { Manga, MangaPage } from "@/feature/manga/model/manga";
import {
  getListMessageFromDisCord,
  getThreadMessages,
} from "@/shared/repository/discord";

const CHANNEL_ID = "1225629428420186122";
const limit = 1;
const defaultPage = "newest";

export const getManga = async ({
  page,
}: {
  page: string;
}): Promise<MangaPage> => {
  const data = await getListMessageFromDisCord({
    channelId: CHANNEL_ID,
    before: page == defaultPage ? undefined : page,
    limit,
  });

  const mangaList = await Promise.all(
    data.map(async (msg) => {
      const threadMessages = await getThreadMessages({ threadId: msg.id });
      return Manga.fromDTO(msg, threadMessages);
    }),
  );

  return {
    mangaList,
    limit,
    nextPage: data.length == limit ? data.at(-1)?.id : undefined,
  };
};

export function hasData(pageData: MangaPage | undefined): boolean {
  return !!pageData && pageData.mangaList.length > 0;
}

export function displayData(pageData: MangaPage | undefined): Manga[] {
  return pageData?.mangaList ?? [];
}

export function showNextPage(pageData: MangaPage | undefined): boolean {
  const data = displayData(pageData);
  return data.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(pageData: MangaPage | undefined): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}
