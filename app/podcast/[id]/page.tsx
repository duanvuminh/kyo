import { TranscriptPlayer } from "@/app/podcast/_components/transcript-player";
import { getPodcastWithEpisodes } from "@/lib/services/podcast.service";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ transcript?: string }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const { transcript } = await searchParams;
  // Mặc định check sẵn (đồng bộ với trang search), trừ khi user đã bỏ check rõ ràng.
  const onlyWithTranscript = transcript === undefined ? true : transcript === "1";
  const data = await getPodcastWithEpisodes(id);

  if (!data) {
    notFound();
  }

  const { podcast, episodes: allEpisodes } = data;
  const episodes = onlyWithTranscript ? allEpisodes.filter((e) => e.transcriptUrl) : allEpisodes;

  return (
    <div className="max-w-sm mx-auto mt-8 px-2 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {podcast.artworkUrl && (
          <Image src={podcast.artworkUrl} alt={podcast.name} width={64} height={64} className="rounded" />
        )}
        <div>
          <h1 className="text-xl font-bold">{podcast.name}</h1>
          <p className="text-sm text-muted-foreground">{podcast.artist}</p>
        </div>
      </div>
      {episodes.length === 0 && (
        <p className="text-sm text-muted-foreground">
          {allEpisodes.length === 0 ? "Không có tập nào." : "Không có tập nào có transcript."}
        </p>
      )}
      <ul className="flex flex-col gap-4">
        {episodes.map((episode) => (
          <li key={episode.id} className="flex flex-col gap-1 border-b pb-4">
            <p className="font-medium">{episode.title}</p>
            <p className="text-xs text-muted-foreground">{episode.pubDate}</p>
            <TranscriptPlayer audioUrl={episode.audioUrl} transcriptUrl={episode.transcriptUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
}
