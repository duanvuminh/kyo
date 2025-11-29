import { SlackHistoryResponseDTO } from "@/shared/types/dto/slack-message";

const emptyResponse: SlackHistoryResponseDTO = {
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
  if (cursor) params.append("cursor", cursor);
  if (limit) params.append("limit", `${limit}`);

  try {
    const res = await fetch(
      `https://slack.com/api/conversations.history?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
        },
        ...(process.env.NODE_ENV !== "development" && {
          next: { revalidate: 604800 },
        }),
      }
    );

    if (!res.ok) return emptyResponse;

    const data = await res.json();
    return data.ok ? (data as SlackHistoryResponseDTO) : emptyResponse;
  } catch {
    return emptyResponse;
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
        ...(process.env.NODE_ENV !== "development" && {
          next: { revalidate: 604800 },
        }),
      }
    );

    if (!res.ok) return emptyResponse;

    const data = await res.json();
    return data.ok ? (data as SlackHistoryResponseDTO) : emptyResponse;
  } catch {
    return emptyResponse;
  }
};
