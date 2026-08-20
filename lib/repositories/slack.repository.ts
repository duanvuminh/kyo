import { apiFetch } from "@/lib/api-fetch";
import { getFetchCacheConfig, slackChannelTag, slackThreadTag } from "@/lib/constants";
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

interface SlackApiResponse {
  ok: boolean;
  error?: string;
}

async function slackRequest<T extends SlackApiResponse>(url: string, init?: RequestInit): Promise<T> {
  const res = await apiFetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.SLACK_API_KEY}`,
      ...init?.headers,
    },
  });
  if (!res.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(`HTTP ${res.status} ${res.statusText}`),
    });
  }
  const data = (await res.json()) as T;
  if (!data.ok) {
    throw new AppError(ErrorCode.SLACK, {
      cause: new Error(data.error ?? "unknown Slack error"),
    });
  }
  return data;
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

  return slackRequest<SlackHistoryEntity>(
    `https://slack.com/api/conversations.history?${params.toString()}`,
    { ...getFetchCacheConfig([slackChannelTag(channelId)]) }
  );
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
  const data = await slackRequest<SlackApiResponse & { ts: string }>("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      channel: channelId,
      text,
      thread_ts: threadTs,
      unfurl_links: false,
      // Tắt mrkdwn để Slack không tự HTML-escape < > trong text (content của mình là SVG thô)
      mrkdwn: false,
    }),
  });
  return { ts: data.ts };
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
  await slackRequest("https://slack.com/api/chat.update", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ channel: channelId, ts, text, mrkdwn: false }),
  });
};

async function getSlackUploadUrl(
  filename: string,
  length: number
): Promise<{ upload_url: string; file_id: string }> {
  return slackRequest<SlackApiResponse & { upload_url: string; file_id: string }>(
    "https://slack.com/api/files.getUploadURLExternal",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ filename, length: `${length}` }),
    }
  );
}

async function _completeSlackUpload(fileId: string, title: string): Promise<string> {
  const data = await slackRequest<SlackApiResponse & { files?: { url_private?: string }[] }>(
    "https://slack.com/api/files.completeUploadExternal",
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ files: [{ id: fileId, title }] }),
    }
  );
  const url = data.files?.[0]?.url_private;
  if (!url) {
    throw new AppError(ErrorCode.SLACK, { cause: new Error("missing url_private in response") });
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

  // Upload nhị phân thẳng lên URL được cấp - không có body {ok,error} như API Slack khác nên
  // không đi qua slackRequest.
  const uploadRes = await apiFetch(uploadUrl.upload_url, {
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

  return slackRequest<SlackHistoryEntity>(
    `https://slack.com/api/conversations.replies?${params.toString()}`,
    { ...getFetchCacheConfig([slackThreadTag(ts)]) }
  );
};
