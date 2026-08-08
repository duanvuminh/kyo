import { discordThreadTag } from "@/lib/constants";
import {
  createThreadFromMessage,
  getMessageFromDisCord,
  getThreadMessages,
  sendDiscordMessage,
  sendMessageToThread,
  updateDiscordMessage,
  type DiscordMessageEntity,
} from "@/lib/repositories/discord";
import { revalidateTag } from "next/cache";

export const PRACTICE_CHANNEL_ID = "1386090536753958952";

export const getFlashCardMessage = (
  messageId: string
): Promise<DiscordMessageEntity | null> => {
  return getMessageFromDisCord({ channelId: PRACTICE_CHANNEL_ID, messageId });
};

export const getQuestionMessages = (
  threadId: string
): Promise<DiscordMessageEntity[]> => {
  return getThreadMessages({ threadId });
};

export const postFlashCard = (
  content: string
): Promise<DiscordMessageEntity | null> => {
  return sendDiscordMessage({ channelId: PRACTICE_CHANNEL_ID, message: content });
};

export const createQuestionThread = (messageId: string, name: string) => {
  return createThreadFromMessage({
    channelId: PRACTICE_CHANNEL_ID,
    messageId,
    name,
  });
};

export const postQuestionMessage = (
  threadId: string,
  content: string
): Promise<DiscordMessageEntity | null> => {
  return sendMessageToThread({ threadId, message: content });
};

export const updateQuestionMessage = async (
  threadId: string,
  messageId: string,
  content: string
): Promise<boolean> => {
  const updated = await updateDiscordMessage({
    channelId: threadId,
    messageId,
    content,
  });

  if (updated) {
    revalidateTag(discordThreadTag(threadId), "max");
  }

  return !!updated;
};
