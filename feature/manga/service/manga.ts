import { mapToManga } from "@/feature/manga/mapper/manga.mapper";
import { fetchMangaEntities } from "@/feature/manga/repository/manga";
import type { MangaPage } from "@/feature/manga/type/manga.domain";

export const getManga = async ({
  page,
}: {
  page: string;
}): Promise<MangaPage> => {
  const { entities, limit, nextPage } = await fetchMangaEntities({ page });
  return {
    mangaList: entities.map(mapToManga),
    limit,
    nextPage,
  };
};
