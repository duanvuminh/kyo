import type { MangaEntity } from "@/feature/manga/repository/manga";
import type { Manga, MangaPanel } from "@/feature/manga/type/manga.domain";
import matter from "gray-matter";

export function mapToManga({ message, threadMessages }: MangaEntity): Manga {
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
