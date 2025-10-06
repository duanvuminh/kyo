import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import { AppError, ErrorCode } from "@/shared/types/models/error";

const discordBaseUrl = "https://discord.com/api/v10";

export const getListMessageFromDisCord = async ({
  channelId,
  before,
  limit,
}: {
  channelId: string;
  before?: string;
  limit?: number;
}): Promise<DiscordMessageDTO[]> => {
  try {
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
    if (!res.ok) {
      throw new Error(`Discord API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data as DiscordMessageDTO[];
  } catch (e) {
    throw new AppError(ErrorCode.DISCORD, (e as Error).message);
  }
};

export const getMessageFromDisCord = async ({
  channelId,
  messageId,
}: {
  channelId: string;
  messageId: string;
}): Promise<DiscordMessageDTO | null> => {
  try {
    const res = await fetch(
      `${discordBaseUrl}/channels/${channelId}/messages/${messageId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
        },
      }
    );

    const data = (await res.json()) as DiscordMessageDTO;
    return data;
  } catch (e) {
    throw new AppError(
      ErrorCode.DISCORD,
      e instanceof Error ? e.message : String(e)
    );
  }
};

export const sendDiscordMessage = async ({
  channelId,
  message,
}: {
  channelId: string;
  message: string;
}): Promise<DiscordMessageDTO | null> => {
  try {
    const res = await fetch(
      `${discordBaseUrl}/channels/${channelId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
        }),
      }
    );

    const data = await res.json();
    return data as DiscordMessageDTO;
  } catch {
    return null;
  }
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
  try {
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
  } catch {
    return [];
  }
};

export const updateDiscordMessage = async ({
  channelId,
  messageId,
  content,
}: {
  channelId: string;
  messageId: string;
  content?: string;
}): Promise<DiscordMessageDTO | null> => {
  try {
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
  } catch {
    return null;
  }
};
