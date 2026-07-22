import { isDev } from "@/shared/config/env";

const ONE_WEEK = 604800;

export const fetchCacheConfig = isDev
  ? { cache: "no-store" as const }
  : { next: { revalidate: ONE_WEEK } };

export function getFetchCacheConfig(tags: string[]) {
  if (isDev) {
    return { cache: "no-store" as const };
  }
  return { next: { revalidate: ONE_WEEK, tags } };
}

export function discordThreadTag(threadId: string): string {
  return `discord-thread-${threadId}`;
}
