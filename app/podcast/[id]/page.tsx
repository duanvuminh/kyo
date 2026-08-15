import { EpisodeItem } from "@/app/podcast/_components/episode-item";
import { PodcastHeader } from "@/app/podcast/_components/podcast-header";
import { getPodcastWithEpisodes } from "@/lib/services/podcast.service";
import Link from "next/link";
import { notFound } from "next/navigation";

const EPISODES_PER_PAGE = 5;

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ transcript?: string; limit?: string }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const { transcript, limit } = await searchParams;
  // Mặc định check sẵn (đồng bộ với trang search), trừ khi user đã bỏ check rõ ràng.
  const onlyWithTranscript = transcript === undefined ? true : transcript === "1";
  const data = await getPodcastWithEpisodes(id);

  if (!data) {
    notFound();
  }

  const { podcast, episodes: allEpisodes } = data;
  const filteredEpisodes = onlyWithTranscript ? allEpisodes.filter((e) => e.transcriptUrl) : allEpisodes;
  // Mỗi episode render <audio preload="metadata"> + fetch transcript ngay khi mount -> render
  // hết cả feed cùng lúc sẽ dồn hàng chục request cùng lúc, dễ nghẽn/timeout trên mobile.
  const currentLimit = Math.max(EPISODES_PER_PAGE, Number(limit) || EPISODES_PER_PAGE);
  const episodes = filteredEpisodes.slice(0, currentLimit);
  const hasMore = filteredEpisodes.length > currentLimit;

  return (
    <div className="max-w-sm mx-auto mt-8 px-2 flex flex-col gap-4">
      <PodcastHeader artworkUrl={podcast.artworkUrl} name={podcast.name} artist={podcast.artist} />
      {episodes.length === 0 && (
        <p className="text-sm text-muted-foreground">
          {allEpisodes.length === 0 ? "Không có tập nào." : "Không có tập nào có transcript."}
        </p>
      )}
      <ul className="flex flex-col gap-4">
        {episodes.map((episode) => (
          <EpisodeItem key={episode.id} episode={episode} />
        ))}
      </ul>
      {hasMore && (
        <Link
          href={`/podcast/${id}?transcript=${onlyWithTranscript ? "1" : "0"}&limit=${currentLimit + EPISODES_PER_PAGE}`}
          className="text-sm text-center text-blue-600 hover:underline"
        >
          Xem thêm ({filteredEpisodes.length - currentLimit} tập)
        </Link>
      )}
    </div>
  );
}
