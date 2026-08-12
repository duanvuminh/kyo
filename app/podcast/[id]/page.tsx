import { TranscriptPlayer } from "@/app/podcast/_components/transcript-player";
import { getPodcastWithEpisodes } from "@/lib/services/podcast.service";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EPISODES_PER_PAGE = 5;

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ transcript?: string; limit?: string }>;
}

interface EpisodeItemProps {
  episode: { id: string; title: string; pubDate: string; audioUrl: string; transcriptUrl?: string };
}

function EpisodeItem({ episode }: EpisodeItemProps) {
  return (
    <li className="flex flex-col gap-1 border-b pb-4">
      <p className="font-medium">{episode.title}</p>
      <p className="text-xs text-muted-foreground">{episode.pubDate}</p>
      <TranscriptPlayer audioUrl={episode.audioUrl} transcriptUrl={episode.transcriptUrl} title={episode.title} />
    </li>
  );
}

function PodcastHeader({ artworkUrl, name, artist }: { artworkUrl: string; name: string; artist: string }) {
  return (
    <div className="flex items-center gap-3">
      {artworkUrl && <Image src={artworkUrl} alt={name} width={64} height={64} className="rounded" />}
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
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
