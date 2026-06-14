import {
  fetchMangaEntities,
  type MangaEntity,
} from "@/feature/manga/repository/manga";
import type {
  Manga,
  MangaPage,
  MangaPanel,
} from "@/feature/manga/type/manga.domain";
import matter from "gray-matter";

function mapToManga({ message, threadMessages }: MangaEntity): Manga {
  const parsed = matter(message.content);
  const panels: MangaPanel[] = [...threadMessages]
    .reverse()
    .map((m) => ({ content: m.content }));
  return {
    id: message.id,
    title: parsed.data.title,
    panels,
  };
}

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
