import { mapDatas } from "@/lib/data-convert";
import { DiscordMessageDto } from "@/types/dto/discord-message";

export const getListMessage = async ({
  channel_id,
  before,
  after,
}: {
  channel_id: string;
  before?: string;
  after?: string;
}) => {
  const params = new URLSearchParams();
  if (before) params.append("before", before);
  if (after) params.append("after", after);
  const res = await fetch(
    `https://discord.com/api/v10/channels/${channel_id}/messages?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return mapDatas(data, DiscordMessageDto.fromJson);
};
