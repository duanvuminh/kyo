import { SlackHistoryResponseDTO } from "@/types/dto/slack-message";

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

  const res = await fetch(
    `https://slack.com/api/conversations.history?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data as SlackHistoryResponseDTO;
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

  const res = await fetch(
    `https://slack.com/api/conversations.replies?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data as SlackHistoryResponseDTO;
};
