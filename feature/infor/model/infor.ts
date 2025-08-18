import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export class Infor {
  constructor(
    public id: string,
    public content: string,
    public title: string
  ) {}

  static fromDTO(data: DiscordMessageDTO): Infor {
    const parsed = matter(data.content);
    return {
      id: data.id,
      content: parsed.content,
      title: parsed.data.title,
    };
  }
}

export interface InforPage {
  inforList: Infor[];
  nextPage?: string;
  limit: number;
}
