import type { DiscordMessageEntity } from "@/shared/type/dto/discord-message";
import {
  getListMessageFromDisCord,
  getThreadMessages,
} from "@/shared/repository/discord";

const CHANNEL_ID = "1225629428420186122";
const limit = 1;
const defaultPage = "newest";

export interface MangaEntity {
  message: DiscordMessageEntity;
  threadMessages: DiscordMessageEntity[];
}

export const fetchMangaEntities = async ({
  page,
}: {
  page: string;
}): Promise<{ entities: MangaEntity[]; limit: number; nextPage?: string }> => {
  const messages = await getListMessageFromDisCord({
    channelId: CHANNEL_ID,
    before: page === defaultPage ? undefined : page,
    limit,
  });

  const entities = await Promise.all(
    messages.map(async (msg) => {
      const threadMessages = await getThreadMessages({ threadId: msg.id });
      return { message: msg, threadMessages };
    }),
  );

  return {
    entities,
    limit,
    nextPage: messages.length === limit ? messages.at(-1)?.id : undefined,
  };
};
