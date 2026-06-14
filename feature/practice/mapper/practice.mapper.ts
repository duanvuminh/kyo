import type { DiscordMessageEntity } from "@/shared/type/dto/discord-message";
import type { Practice } from "@/feature/practice/model/practice";

export function discordMessageToPractice(data: DiscordMessageEntity): Practice {
  return {
    id: data.id,
    content: data.content,
    attachments: data.attachments?.map((a) => a.url) ?? [],
  };
}
