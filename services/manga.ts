import { mapDatas } from "@/lib/data-convert";
import { getListMessageFromDisCord } from "@/repository/discord";
import { Manga, MangaPage } from "@/types/models/manga";

const limit = 10;
const defaultPage = "newest";

export const getManga = async ({
  page,
}: {
  page: string;
}): Promise<MangaPage | undefined> => {
  try {
    const data = await getListMessageFromDisCord({
      channelId: "1225629428420186122",
      before: page == defaultPage ? undefined : page,
      limit,
    });
    return {
      mangaList: mapDatas(data, Manga.fromDTO),
      limit,
      nextPage: data.length == 10 ? data.at(-1)?.id : undefined,
    };
  } catch {
    return undefined;
  }
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
