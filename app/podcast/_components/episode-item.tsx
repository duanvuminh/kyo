import { TranscriptPlayer } from "@/app/podcast/_components/transcript-player";

interface EpisodeItemProps {
  episode: { id: string; title: string; pubDate: string; audioUrl: string; transcriptUrl?: string };
}

export function EpisodeItem({ episode }: EpisodeItemProps) {
  return (
    <li className="flex flex-col gap-1 border-b pb-4">
      <p className="font-medium">{episode.title}</p>
      <p className="text-xs text-muted-foreground">{episode.pubDate}</p>
      <TranscriptPlayer audioUrl={episode.audioUrl} transcriptUrl={episode.transcriptUrl} title={episode.title} />
    </li>
  );
}
