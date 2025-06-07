import { DiscordMessageDTO } from "@/types/dto/discord-message";

export const getListMessageFromDisCord = async ({
  channelId,
  before,
  limit,
}: {
  channelId: string;
  before?: string;
  limit?: number;
}) => {
  const params = new URLSearchParams();
  if (before) params.append("before", before);
  if (limit) params.append("limit", `${limit}`);
  const res = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data as DiscordMessageDTO[];
};
