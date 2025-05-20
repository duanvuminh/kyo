import { DiscordMessageDto } from "../dto/discord-message";

export class Manga {
  constructor(
    public id: string,
    public content: string,
    public title: string,
    public image: string,
    public source: string
  ) {}

  static fromDTO(data: DiscordMessageDto): Manga {
    return {
      id: data.id,
      content: data.content,
      title: data.title,
      image: data.image,
      source: data.source,
    };
  }
}
