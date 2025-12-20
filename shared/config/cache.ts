const isDev = process.env.NODE_ENV === "development";

// Cache 1 tuần
const ONE_WEEK = 604800;

export const fetchCacheConfig = isDev
  ? {}
  : { next: { revalidate: ONE_WEEK } };
