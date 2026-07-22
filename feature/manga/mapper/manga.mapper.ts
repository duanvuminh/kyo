import type { MangaEntity } from "@/feature/manga/repository/manga";
import type { Manga, MangaPanel } from "@/feature/manga/type/manga.domain";
import matter from "gray-matter";

export function mapToManga({ message, threadMessages }: MangaEntity): Manga {
  const parsed = matter(message.content);
  const panels: MangaPanel[] = [...threadMessages]
    .reverse()
    .map((m, chronoIndex) => {
      const panelParsed = matter(m.content);
      const index =
        typeof panelParsed.data.index === "number"
          ? panelParsed.data.index
          : chronoIndex;
      return { id: m.id, index, content: panelParsed.content.trim() };
    })
    .sort((a, b) => a.index - b.index);
  return {
    id: message.id,
    title: parsed.data.title,
    panels,
  };
}
