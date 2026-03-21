import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export interface MangaPanel {
  image: string;
  width: number;
  height: number;
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
      .filter((m) => m.attachments && m.attachments.length > 0)
      .map((m) => {
        const attachment = m.attachments!.find((a) =>
          a.content_type?.startsWith("image/"),
        )!;
        const image = attachment.url;
        const width = attachment.width ?? 0;
        const height = attachment.height ?? 0;
        const content = m.content
          .replace(/(<image[^>]*\s)href="[^"]*"/g, `$1href="${image}"`)
          .replace(
            /(<image[^>]*\s)xlink:href="[^"]*"/g,
            `$1xlink:href="${image}"`,
          );
        return { image, width, height, content };
      });
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
