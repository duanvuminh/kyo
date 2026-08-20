import { apiFetch } from "@/lib/api-fetch";
import {
  discordChannelTag,
  discordThreadTag,
  fetchCacheConfig,
  getFetchCacheConfig,
} from "@/lib/constants";
import { env } from "@/lib/env";
import { AppError, ErrorCode } from "@/lib/types";

export interface DiscordAttachmentEntity {
  id: string;
  filename: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  description?: string;
}

export interface DiscordMessageEntity {
  content: string;
  type: number;
  id: string;
  attachments?: DiscordAttachmentEntity[];
}

const discordBaseUrl = "https://discord.com/api/v10";

async function discordRequest<T>(
  path: string,
  init: RequestInit | undefined,
  opts: { allow404: true }
): Promise<T | null>;
async function discordRequest<T>(path: string, init?: RequestInit, opts?: { allow404?: false }): Promise<T>;
async function discordRequest<T>(
  path: string,
  init?: RequestInit,
  opts?: { allow404?: boolean }
): Promise<T | null> {
  const res = await apiFetch(`${discordBaseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bot ${env.DISCORD_API_KEY}`,
      ...init?.headers,
    },
  });

  if (opts?.allow404 && res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new AppError(ErrorCode.DISCORD, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  return res.json() as Promise<T>;
}

function buildMessageParams(before?: string, limit?: number) {
  const params = new URLSearchParams();
  if (before) {
    params.append("before", before);
  }
  if (limit) {
    params.append("limit", `${limit}`);
  }
  return params;
}

export const getListMessageFromDisCord = async ({
  channelId,
  before,
  limit,
}: {
  channelId: string;
  before?: string;
  limit?: number;
}): Promise<DiscordMessageEntity[]> => {
  try {
    const params = buildMessageParams(before, limit);
    return await discordRequest<DiscordMessageEntity[]>(
      `/channels/${channelId}/messages?${params.toString()}`,
      { method: "GET", ...getFetchCacheConfig([discordChannelTag(channelId)]) }
    );
  } catch (e) {
    if (e instanceof AppError) {
      throw e;
    }
    const err = e instanceof Error ? e : new Error(String(e));
    throw new AppError(ErrorCode.DISCORD, { cause: err });
  }
};

export const getMessageFromDisCord = async ({
  channelId,
  messageId,
}: {
  channelId: string;
  messageId: string;
}): Promise<DiscordMessageEntity | null> => {
  try {
    return await discordRequest<DiscordMessageEntity>(
      `/channels/${channelId}/messages/${messageId}`,
      { method: "GET", ...fetchCacheConfig },
      { allow404: true }
    );
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    throw new AppError(ErrorCode.DISCORD, { cause: err });
  }
};

export const sendDiscordMessage = async ({
  channelId,
  message,
}: {
  channelId: string;
  message: string;
}): Promise<DiscordMessageEntity> => {
  return discordRequest<DiscordMessageEntity>(`/channels/${channelId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message }),
  });
};

function buildThreadMessagesParams(limit?: number, before?: string): URLSearchParams {
  const params = new URLSearchParams();
  if (limit) {
    params.append("limit", `${limit}`);
  }
  if (before) {
    params.append("before", before);
  }
  return params;
}

export const getThreadMessages = async ({
  threadId,
  limit = 100,
  before,
}: {
  threadId: string;
  limit?: number;
  before?: string;
}): Promise<DiscordMessageEntity[]> => {
  const params = buildThreadMessagesParams(limit, before);

  // 404 = thread chưa tồn tại (vd. câu hỏi practice đang được tạo nền, chưa kịp createThread)
  // → coi như chưa có message nào, không phải lỗi hạ tầng thật
  const data = await discordRequest<DiscordMessageEntity[]>(
    `/channels/${threadId}/messages?${params.toString()}`,
    { method: "GET", ...getFetchCacheConfig([discordThreadTag(threadId)]) },
    { allow404: true }
  );

  if (data === null) {
    return [];
  }
  if (!Array.isArray(data)) {
    throw new AppError(ErrorCode.DISCORD, {
      cause: new Error("expected array of messages"),
    });
  }
  return data;
};

export const createThreadFromMessage = async ({
  channelId,
  messageId,
  name,
}: {
  channelId: string;
  messageId: string;
  name: string;
}): Promise<{ id: string }> => {
  // Cần đọc body kể cả khi lỗi (để phát hiện code 160004) nên không dùng discordRequest chung.
  const res = await apiFetch(`${discordBaseUrl}/channels/${channelId}/messages/${messageId}/threads`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${env.DISCORD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => undefined);
    // Discord error code 160004 = "Thread already created for this message" — không phải lỗi
    // thật, thread đã tồn tại từ lần gọi trước. ID của thread luôn trùng ID message gốc.
    if (body?.code === 160004) {
      return { id: messageId };
    }
    throw new AppError(ErrorCode.DISCORD, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}${body?.message ? `: ${body.message}` : ""}`),
    });
  }

  return res.json();
};

export const sendMessageToThread = async ({
  threadId,
  message,
}: {
  threadId: string;
  message: string;
}): Promise<DiscordMessageEntity> => {
  return discordRequest<DiscordMessageEntity>(`/channels/${threadId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message }),
  });
};

export const updateDiscordMessage = async ({
  channelId,
  messageId,
  content,
}: {
  channelId: string;
  messageId: string;
  content?: string;
}): Promise<DiscordMessageEntity> => {
  return discordRequest<DiscordMessageEntity>(`/channels/${channelId}/messages/${messageId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
};
