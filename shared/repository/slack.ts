import { discordChannelTag, discordThreadTag, getFetchCacheConfig } from "@/shared/config/cache";
import { SlackHistoryEntity } from "@/shared/type/dto/slack-message";

const emptyResponse: SlackHistoryEntity = {
  ok: false,
  messages: [],
  has_more: false,
};

export const getListMessageFromSlack = async ({
  channelId,
  cursor,
  limit,
}: {
  channelId: string;
  cursor?: string;
  limit?: number;
}) => {
  const params = new URLSearchParams({
    channel: channelId,
  });
  if (cursor) {
    params.append("cursor", cursor);
  }
  if (limit) {
    params.append("limit", `${limit}`);
  }

  try {
    const res = await fetch(
      `https://slack.com/api/conversations.history?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
        },
        ...getFetchCacheConfig([discordChannelTag(channelId)]),
      }
    );

    if (!res.ok) {
      return emptyResponse;
    }

    const data = await res.json();
    return data.ok ? (data as SlackHistoryEntity) : emptyResponse;
  } catch {
    return emptyResponse;
  }
};

export const sendSlackMessage = async ({
  channelId,
  text,
  threadTs,
}: {
  channelId: string;
  text: string;
  threadTs?: string;
}): Promise<{ ts: string } | null> => {
  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
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
      return null;
    }
    const data = await res.json();
    return data.ok ? { ts: data.ts as string } : null;
  } catch {
    return null;
  }
};

export const updateSlackMessage = async ({
  channelId,
  ts,
  text,
}: {
  channelId: string;
  ts: string;
  text: string;
}): Promise<boolean> => {
  try {
    const res = await fetch("https://slack.com/api/chat.update", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ channel: channelId, ts, text, mrkdwn: false }),
    });
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return !!data.ok;
  } catch {
    return false;
  }
};

async function getSlackUploadUrl(filename: string, length: number) {
  const res = await fetch("https://slack.com/api/files.getUploadURLExternal", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ filename, length: `${length}` }),
  });
  const data = await res.json();
  return data.ok ? (data as { upload_url: string; file_id: string }) : null;
}

async function completeSlackUpload(fileId: string, title: string): Promise<string | null> {
  const res = await fetch("https://slack.com/api/files.completeUploadExternal", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ files: [{ id: fileId, title }] }),
  });
  const data = await res.json();
  return data.ok ? (data.files?.[0]?.url_private ?? null) : null;
}

export const uploadSlackImage = async ({
  buffer,
  filename,
}: {
  buffer: Buffer;
  filename: string;
}): Promise<string | null> => {
  try {
    const uploadUrl = await getSlackUploadUrl(filename, buffer.byteLength);
    if (!uploadUrl) {
      return null;
    }

    const uploadRes = await fetch(uploadUrl.upload_url, {
      method: "POST",
      body: new Uint8Array(buffer),
    });
    if (!uploadRes.ok) {
      return null;
    }

    return await completeSlackUpload(uploadUrl.file_id, filename);
  } catch {
    return null;
  }
};

export const getListReplyFromSlack = async ({
  channelId,
  ts,
}: {
  channelId: string;
  ts: string;
}) => {
  const params = new URLSearchParams({
    channel: channelId,
  });
  params.append("ts", `${ts}`);

  try {
    const res = await fetch(
      `https://slack.com/api/conversations.replies?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
        },
        ...getFetchCacheConfig([discordThreadTag(ts)]),
      }
    );

    if (!res.ok) {
      return emptyResponse;
    }

    const data = await res.json();
    return data.ok ? (data as SlackHistoryEntity) : emptyResponse;
  } catch {
    return emptyResponse;
  }
};
