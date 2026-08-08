import { discordChannelTag, discordThreadTag } from "@/lib/constants";
import {
  getListMessageFromSlack,
  getListReplyFromSlack,
  sendSlackMessage,
  updateSlackMessage,
  uploadSlackImage,
  type SlackMessageEntity,
} from "@/lib/repositories/slack";
import { revalidateTag } from "next/cache";

export const MANGA_CHANNEL_ID = "C0BMBA82Q6N";
const limit = 1;
const defaultPage = "newest";

export interface MangaEntity {
  message: SlackMessageEntity;
  threadMessages: SlackMessageEntity[];
}

export const fetchMangaEntities = async ({
  page,
}: {
  page: string;
}): Promise<{ entities: MangaEntity[]; limit: number; nextPage?: string }> => {
  const history = await getListMessageFromSlack({
    channelId: MANGA_CHANNEL_ID,
    cursor: page === defaultPage ? undefined : page,
    limit,
  });

  const entities = await Promise.all(
    history.messages.map(async (msg) => {
      const replies = await getListReplyFromSlack({
        channelId: MANGA_CHANNEL_ID,
        ts: msg.ts,
      });
      // conversations.replies trả cả message gốc ở đầu mảng, bỏ ra để chỉ còn panel thật
      const threadMessages = replies.messages.filter((m) => m.ts !== msg.ts);
      return { message: msg, threadMessages };
    }),
  );

  return {
    entities,
    limit,
    nextPage: history.has_more ? history.response_metadata?.next_cursor : undefined,
  };
};

// Slack không có bước "tạo thread" riêng như Discord — 1 message bất kỳ tự
// trở thành thread cha ngay khi có reply dùng thread_ts = ts của nó.
export const createMangaEntry = async (
  content: string,
): Promise<{ entryId: string; threadId: string } | null> => {
  const posted = await sendSlackMessage({ channelId: MANGA_CHANNEL_ID, text: content });
  return posted ? { entryId: posted.ts, threadId: posted.ts } : null;
};

export const postPanelMessage = async (
  threadId: string,
  content: string,
): Promise<{ id: string } | null> => {
  const posted = await sendSlackMessage({
    channelId: MANGA_CHANNEL_ID,
    text: content,
    threadTs: threadId,
  });
  return posted ? { id: posted.ts } : null;
};

// Slack cho phép bot tự sửa tin nhắn của chính nó qua chat.update
// → không cần workaround đăng mới + xoá cũ như Discord.
export const replacePanelMessage = async (
  threadId: string,
  messageId: string,
  content: string,
): Promise<{ id: string } | null> => {
  const updated = await updateSlackMessage({
    channelId: MANGA_CHANNEL_ID,
    ts: messageId,
    text: content,
  });
  if (!updated) {
    return null;
  }

  revalidateTag(discordThreadTag(threadId), "max");

  return { id: messageId };
};

export const updateMangaEntry = async (
  entryId: string,
  content: string,
): Promise<boolean> => {
  const updated = await updateSlackMessage({
    channelId: MANGA_CHANNEL_ID,
    ts: entryId,
    text: content,
  });

  if (updated) {
    revalidateTag(discordChannelTag(MANGA_CHANNEL_ID), "max");
  }

  return updated;
};

export const notifyNewMangaCreated = () => {
  revalidateTag(discordChannelTag(MANGA_CHANNEL_ID), "max");
};

export async function uploadMangaImage(imageBase64: string): Promise<string | null> {
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const filename = `manga-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;

  const urlPrivate = await uploadSlackImage({ buffer, filename });
  if (!urlPrivate) {
    return null;
  }

  // Slack file URL yêu cầu Bearer token mới fetch được → phải đi qua proxy có sẵn của app
  return `/api/file?url=${encodeURIComponent(urlPrivate)}`;
}
