import { isDev } from "@/shared/config/env";

const ONE_WEEK = 604800;

export const fetchCacheConfig = isDev
  ? { cache: "no-store" as const }
  : { next: { revalidate: ONE_WEEK } };
