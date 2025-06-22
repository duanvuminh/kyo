import { DiscordMessageDTO } from "@/types/dto/discord-message";

export class Practice {
  constructor(public id: string, public content: string) {}

  static fromDTO(data: DiscordMessageDTO): Practice {
    return {
      id: data.id,
      content: data.content,
    };
  }
}
