import { apiFetch } from "@/lib/api-fetch";
import { fetchCacheConfig } from "@/lib/constants";
import { AppError, ErrorCode } from "@/lib/types";
import { XMLParser } from "fast-xml-parser";

const ITUNES_API = "https://itunes.apple.com";

export interface PodcastSearchResult {
  id: string;
  name: string;
  artist: string;
  artworkUrl: string;
  feedUrl: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  pubDate: string;
  audioUrl: string;
  duration?: string;
  description?: string;
  transcriptUrl?: string;
}

interface ItunesResult {
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl600?: string;
  artworkUrl100?: string;
  feedUrl?: string;
}

async function itunesRequest<T>(path: string): Promise<T> {
  const res = await apiFetch(`${ITUNES_API}${path}`, fetchCacheConfig);
  if (!res.ok) {
    throw new AppError(ErrorCode.PODCAST, {
      cause: new Error(`iTunes API error: ${res.status}`),
    });
  }
  return res.json() as Promise<T>;
}

function toSearchResult(item: ItunesResult): PodcastSearchResult | null {
  if (!item.feedUrl) {
    return null;
  }
  return {
    id: String(item.collectionId),
    name: item.collectionName,
    artist: item.artistName,
    artworkUrl: item.artworkUrl600 ?? item.artworkUrl100 ?? "",
    feedUrl: item.feedUrl,
  };
}

export async function searchPodcasts(term: string): Promise<PodcastSearchResult[]> {
  const data = await itunesRequest<{ results: ItunesResult[] }>(
    `/search?term=${encodeURIComponent(term)}&media=podcast&limit=20`,
  );
  return data.results
    .map(toSearchResult)
    .filter((r): r is PodcastSearchResult => r !== null);
}

export async function lookupPodcast(id: string): Promise<PodcastSearchResult | null> {
  const data = await itunesRequest<{ results: ItunesResult[] }>(`/lookup?id=${encodeURIComponent(id)}`);
  const item = data.results[0];
  return item ? toSearchResult(item) : null;
}

export function extractPodcastIdFromUrl(input: string): string | null {
  return input.match(/id(\d+)/)?.[1] ?? null;
}

// Check nhanh feed có khai báo podcast:transcript hay không, không parse full XML
// (dùng để filter nhiều feed song song khi search).
export async function feedHasTranscript(feedUrl: string): Promise<boolean> {
  try {
    const res = await apiFetch(feedUrl, fetchCacheConfig);
    if (!res.ok) {
      return false;
    }
    const xml = await res.text();
    return xml.includes("<podcast:transcript");
  } catch {
    return false;
  }
}

const xmlParser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });

// Podcasting 2.0 (podcastindex.org): 1 episode có thể khai báo nhiều <podcast:transcript>
// (vtt/srt/json/html) khác nhau. Ưu tiên vtt/srt vì có timestamp, dùng được cho subtitle.
function extractTranscriptUrl(item: Record<string, unknown>): string | undefined {
  const raw = item["podcast:transcript"];
  const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
  const entries = list as { "@_url"?: string; "@_type"?: string }[];
  const preferred = entries.find((e) =>
    ["text/vtt", "application/srt", "text/srt"].includes(e["@_type"] ?? ""),
  );
  return (preferred ?? entries[0])?.["@_url"];
}

function toEpisode(item: Record<string, unknown>, fallbackId: string): PodcastEpisode | null {
  const enclosure = item.enclosure as { "@_url"?: string } | undefined;
  const audioUrl = enclosure?.["@_url"];
  if (!audioUrl) {
    return null;
  }

  const guid = item.guid as string | { "#text"?: string } | undefined;
  const id = typeof guid === "string" ? guid : guid?.["#text"] ?? fallbackId;

  return {
    id,
    title: String(item.title ?? ""),
    pubDate: String(item.pubDate ?? ""),
    audioUrl,
    duration: item["itunes:duration"] != null ? String(item["itunes:duration"]) : undefined,
    description: typeof item.description === "string" ? item.description : undefined,
    transcriptUrl: extractTranscriptUrl(item),
  };
}

export async function getEpisodes(feedUrl: string): Promise<PodcastEpisode[]> {
  const res = await apiFetch(feedUrl, fetchCacheConfig);
  if (!res.ok) {
    throw new AppError(ErrorCode.PODCAST, {
      cause: new Error(`RSS fetch error: ${res.status}`),
    });
  }

  const xml = await res.text();
  const parsed = xmlParser.parse(xml);
  const rawItems = parsed?.rss?.channel?.item;
  const items: Record<string, unknown>[] = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

  return items
    .map((item, index) => toEpisode(item, String(index)))
    .filter((e): e is PodcastEpisode => e !== null);
}
