import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export class Manga {
  constructor(
    public id: string,
    public content: string,
    public title: string,
    public images: string[]
  ) {}

  static fromDTO(data: DiscordMessageDTO): Manga {
    const parsed = matter(data.content);
    return {
      id: data.id,
      content: parsed.content,
      title: parsed.data.title,
      images: (data.attachments ?? [])
        .filter((a) => a.content_type?.startsWith("image/"))
        .map((a) => a.url),
    };
  }
}

export interface MangaPage {
  mangaList: Manga[];
  nextPage?: string;
  limit: number;
}
