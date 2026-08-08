import { getListMessageFromDisCord, type DiscordMessageEntity } from "@/lib/repositories/discord.repository";
import type { PaginatedFetch } from "@/lib/types";

export const LISTENING_PAGE_LIMIT = 10;
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
}): Promise<PaginatedFetch<DiscordMessageEntity>> => {
  const channelId = CHANNEL_IDS[level] ?? CHANNEL_IDS.default;
  const messages = await getListMessageFromDisCord({
    channelId,
    before: page === defaultPage ? undefined : page,
    limit: LISTENING_PAGE_LIMIT,
  });

  return {
    entities: messages,
    nextPage: messages.length === LISTENING_PAGE_LIMIT ? messages.at(-1)?.id : undefined,
  };
};
