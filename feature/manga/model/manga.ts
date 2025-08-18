import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export class Manga {
  constructor(
    public id: string,
    public content: string,
    public title: string,
    public source: string
  ) {}

  static fromDTO(data: DiscordMessageDTO): Manga {
    const parsed = matter(data.content);
    return {
      id: data.id,
      content: parsed.content,
      title: parsed.data.title,
      source: parsed.data.source,
    };
  }
}

export interface MangaPage {
  mangaList: Manga[];
  nextPage?: string;
  limit: number;
}
