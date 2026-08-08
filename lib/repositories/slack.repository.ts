import { discordChannelTag, discordThreadTag, getFetchCacheConfig } from "@/lib/constants";
import { env } from "@/lib/env";
import { AppError, ErrorCode } from "@/lib/types";

export interface SlackMessageEntity {
  type: string;
  subtype?: string;
  text: string;
  ts: string;
  user?: string;
  bot_id?: string;
  thread_ts?: string;
  reply_count?: number;
  replies?: {
    user: string;
    ts: string;
  }[];
  reactions?: {
    name: string;
    count: number;
    users: string[];
  }[];
  blocks?: [];
  attachments?: [];
  files?: {
    id: string;
    name: string;
    mimetype: string;
    url_private: string;
  }[];
  relatedMessages?: SlackMessageEntity[];
}

export interface SlackHistoryEntity {
  ok: boolean;
  messages: SlackMessageEntity[];
  has_more: boolean;
  response_metadata?: {
    next_cursor?: string;
  };
}

export const getListMessageFromSlack = async ({
  channelId,
  cursor,
  limit,
}: {
  channelId: string;
  cursor?: string;
  limit?: number;
}): Promise<SlackHistoryEntity> => {
  const params = new URLSearchParams({
    channel: channelId,
  });
  if (cursor) {
    params.append("cursor", cursor);
  }
  if (limit) {
    params.append("limit", `${limit}`);
  }

  const res = await fetch(
    `https://slack.com/api/conversations.history?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${env.SLACK_API_KEY}`,
      },
      ...getFetchCacheConfig([discordChannelTag(channelId)]),
    }
  );

  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }

  const data = await res.json();
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }

  return data as SlackHistoryEntity;
};

export const sendSlackMessage = async ({
  channelId,
  text,
  threadTs,
}: {
  channelId: string;
  text: string;
  threadTs?: string;
}): Promise<{ ts: string }> => {
  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SLACK_API_KEY}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      channel: channelId,
      text,
      thread_ts: threadTs,
      unfurl_links: false,
      // Tắt mrkdwn để Slack không tự HTML-escape < > trong text (content của mình là SVG thô)
      mrkdwn: false,
    }),
  });
  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  const data = await res.json();
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }
  return { ts: data.ts as string };
};

export const updateSlackMessage = async ({
  channelId,
  ts,
  text,
}: {
  channelId: string;
  ts: string;
  text: string;
}): Promise<void> => {
  const res = await fetch("https://slack.com/api/chat.update", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SLACK_API_KEY}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ channel: channelId, ts, text, mrkdwn: false }),
  });
  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  const data = await res.json();
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }
};

async function getSlackUploadUrl(
  filename: string,
  length: number
): Promise<{ upload_url: string; file_id: string }> {
  const res = await fetch("https://slack.com/api/files.getUploadURLExternal", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SLACK_API_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ filename, length: `${length}` }),
  });
  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  const data = await res.json();
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }
  return data as { upload_url: string; file_id: string };
}

async function _completeSlackUpload(fileId: string, title: string): Promise<string> {
  const res = await fetch("https://slack.com/api/files.completeUploadExternal", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SLACK_API_KEY}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ files: [{ id: fileId, title }] }),
  });
  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  const data = await res.json();
  const url = data.ok ? (data.files?.[0]?.url_private as string | undefined) : undefined;
  if (!url) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.ok ? "missing url_private in response" : (data.error ?? "unknown Slack error")),
    });
  }
  return url;
}

export const uploadSlackImage = async ({
  buffer,
  filename,
}: {
  buffer: Buffer;
  filename: string;
}): Promise<string> => {
  const uploadUrl = await getSlackUploadUrl(filename, buffer.byteLength);

  const uploadRes = await fetch(uploadUrl.upload_url, {
    method: "POST",
    body: new Uint8Array(buffer),
  });
  if (!uploadRes.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${uploadRes.status} ${uploadRes.statusText}`),
    });
  }

  return _completeSlackUpload(uploadUrl.file_id, filename);
};

export const getListReplyFromSlack = async ({
  channelId,
  ts,
}: {
  channelId: string;
  ts: string;
}): Promise<SlackHistoryEntity> => {
  const params = new URLSearchParams({
    channel: channelId,
  });
  params.append("ts", `${ts}`);

  const res = await fetch(
    `https://slack.com/api/conversations.replies?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${env.SLACK_API_KEY}`,
      },
      ...getFetchCacheConfig([discordThreadTag(ts)]),
    }
  );

  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }

  const data = await res.json();
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }

  return data as SlackHistoryEntity;
};
