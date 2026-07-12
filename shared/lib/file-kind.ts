export type FileKind =
  | { kind: "youtube"; videoId: string }
  | { kind: "facebook" }
  | { kind: "image" }
  | { kind: "pdf" }
  | { kind: "video" }
  | { kind: "file" };

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\.|^m\./, "");
}

function extractYouTubeVideoId(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = normalizeHost(parsed.hostname);
  if (host === "youtu.be") {
    return parsed.pathname.slice(1).split("/")[0] || null;
  }
  if (host === "youtube.com") {
    const videoId = parsed.searchParams.get("v");
    if (videoId) {
      return videoId;
    }
    const shortsMatch = parsed.pathname.match(/^\/shorts\/([^/]+)/);
    return shortsMatch?.[1] ?? null;
  }
  return null;
}

function isFacebookUrl(url: string): boolean {
  try {
    return normalizeHost(new URL(url).hostname) === "facebook.com";
  } catch {
    return false;
  }
}

export function resolveFileKind(rawUrl: string, mimetype: string): FileKind {
  const url = rawUrl.replace(/[<>]/g, "");

  const youtubeVideoId = extractYouTubeVideoId(url);
  if (youtubeVideoId) {
    return { kind: "youtube", videoId: youtubeVideoId };
  }
  if (isFacebookUrl(url)) {
    return { kind: "facebook" };
  }
  if (mimetype.startsWith("image/")) {
    return { kind: "image" };
  }
  if (mimetype === "application/pdf") {
    return { kind: "pdf" };
  }
  if (mimetype.startsWith("video/")) {
    return { kind: "video" };
  }
  return { kind: "file" };
}
