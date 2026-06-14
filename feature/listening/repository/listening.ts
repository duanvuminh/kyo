import type { DiscordMessageEntity } from "@/shared/type/dto/discord-message";
import { getListMessageFromDisCord } from "@/shared/repository/discord";

export type ListeningEntity = DiscordMessageEntity;

const limit = 10;
const defaultPage = "newest";

const CHANNEL_IDS: Record<string, string> = {
  n1: "1439409864488259624",
  default: "1421561218455310476",
};

export const fetchListeningEntities = async ({
  page,
  level,
}: {
  page: string;
  level: string;
}): Promise<{ entities: ListeningEntity[]; limit: number; nextPage?: string }> => {
  const channelId = CHANNEL_IDS[level] ?? CHANNEL_IDS.default;
  const messages = await getListMessageFromDisCord({
    channelId,
    before: page === defaultPage ? undefined : page,
    limit,
  });

  return {
    entities: messages,
    limit,
    nextPage: messages.length === limit ? messages.at(-1)?.id : undefined,
  };
};
