const PASSTHROUGH_HEADERS = [
  "content-type",
  "content-length",
  "accept-ranges",
  "content-range",
  "etag",
  "last-modified",
  "cache-control",
  "content-disposition",
];

export function buildProxyHeaders(upstreamHeaders: Headers): Headers {
  const headers = new Headers();

  for (const key of PASSTHROUGH_HEADERS) {
    const value = upstreamHeaders.get(key);
    if (value) {
      headers.set(key, value);
    }
  }

  headers.set("content-disposition", headers.get("content-disposition") ?? "inline");
  headers.set("content-type", headers.get("content-type") ?? "video/mp4");
  headers.set("accept-ranges", headers.get("accept-ranges") ?? "bytes");
  headers.set("Access-Control-Allow-Origin", "*");

  return headers;
}

export async function fetchWithSlackAuth(url: string, range?: string) {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_API_KEY ?? ""}`,
      ...(range ? { range } : {}),
    },
  });
}
