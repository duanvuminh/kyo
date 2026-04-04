import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export interface MangaPanel {
  content: string;
}

export class Manga {
  constructor(
    public id: string,
    public title: string,
    public panels: MangaPanel[],
  ) {}

  static fromDTO(
    data: DiscordMessageDTO,
    threadMessages: DiscordMessageDTO[],
  ): Manga {
    const parsed = matter(data.content);
    const panels: MangaPanel[] = [...threadMessages]
      .reverse()
      .map((m) => ({ content: m.content }));
    return {
      id: data.id,
      title: parsed.data.title,
      panels,
    };
  }
}

export interface MangaPage {
  mangaList: Manga[];
  nextPage?: string;
  limit: number;
}
