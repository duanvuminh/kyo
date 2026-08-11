import {
  PodcastEpisode,
  PodcastSearchResult,
  extractPodcastIdFromUrl,
  feedHasTranscript,
  getEpisodes,
  lookupPodcast,
  searchPodcasts,
} from "@/lib/repositories/podcast.repository";

export async function findPodcasts(
  query: string,
  opts?: { onlyWithTranscript?: boolean },
): Promise<PodcastSearchResult[]> {
  const id = extractPodcastIdFromUrl(query);
  const results = id
    ? await lookupPodcast(id).then((p) => (p ? [p] : []))
    : await searchPodcasts(query);

  if (!opts?.onlyWithTranscript) {
    return results;
  }

  const flags = await Promise.all(results.map((r) => feedHasTranscript(r.feedUrl)));
  return results.filter((_, i) => flags[i]);
}

export interface PodcastWithEpisodes {
  podcast: PodcastSearchResult;
  episodes: PodcastEpisode[];
}

export async function getPodcastWithEpisodes(id: string): Promise<PodcastWithEpisodes | null> {
  const podcast = await lookupPodcast(id);
  if (!podcast) {
    return null;
  }

  const episodes = await getEpisodes(podcast.feedUrl);
  return { podcast, episodes };
}
