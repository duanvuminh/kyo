import { mapDatas } from "@/lib/data-convert";
import { DiscordMessageDTO } from "@/types/dto/discord-message";

export class Practice {
  constructor(
    public id: string,
    public content: string,
    public attachments: string[]
  ) {}

  static fromDTO(data: DiscordMessageDTO): Practice {
    return {
      id: data.id,
      content: data.content,
      attachments: mapDatas(
        data.attachments ?? [],
        (attachment) => attachment.url
      ),
    };
  }
}
