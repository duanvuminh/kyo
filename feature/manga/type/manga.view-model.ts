import type { Manga, MangaPage } from "@/feature/manga/type/manga.domain";

export type MangaViewModel = MangaPage;

const defaultPage = "newest";

export function hasData(pageData: MangaViewModel | undefined): boolean {
  return !!pageData && pageData.mangaList.length > 0;
}

export function displayData(pageData: MangaViewModel | undefined): Manga[] {
  return pageData?.mangaList ?? [];
}

export function showNextPage(pageData: MangaViewModel | undefined): boolean {
  const data = displayData(pageData);
  return data.length === pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(pageData: MangaViewModel | undefined): string {
  const data = displayData(pageData);
  return data.at(-1)?.id ?? defaultPage;
}
