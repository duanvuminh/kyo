import { DiscordMessageDTO } from "@/types/dto/discord-message";

const discordBaseUrl = "https://discord.com/api/v10";

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
    `${discordBaseUrl}/channels/${channelId}/messages?${params.toString()}`,
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

export const getMessageFromDisCord = async ({
  channelId,
  messageId,
}: {
  channelId: string;
  messageId: string;
}) => {
  const res = await fetch(
    `${discordBaseUrl}/channels/${channelId}/messages/${messageId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data;
};

export const sendDiscordMessage = async ({
  channelId,
  message,
}: {
  channelId: string;
  message: string;
}) => {
  const res = await fetch(`${discordBaseUrl}/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });

  const data = await res.json();
  return data as DiscordMessageDTO;
};

export const getThreadMessages = async ({
  threadId,
  limit = 100,
  before,
}: {
  threadId: string;
  limit?: number;
  before?: string;
}) => {
  const params = new URLSearchParams();
  if (limit) params.append("limit", `${limit}`);
  if (before) params.append("before", before);

  const res = await fetch(
    `${discordBaseUrl}/channels/${threadId}/messages?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  if (!Array.isArray(data)) {
    return [];
  }
  return data as DiscordMessageDTO[];
};

export const updateDiscordMessage = async ({
  channelId,
  messageId,
  content,
}: {
  channelId: string;
  messageId: string;
  content?: string;
}): Promise<DiscordMessageDTO> => {
  const res = await fetch(
    `${discordBaseUrl}/channels/${channelId}/messages/${messageId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    }
  );

  const data = await res.json();

  return data as DiscordMessageDTO;
};
