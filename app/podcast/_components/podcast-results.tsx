import { PodcastResultItem } from "@/app/podcast/_components/podcast-result-item";
import { findPodcasts } from "@/lib/services/podcast.service";

export async function PodcastResults({ q, onlyWithTranscript }: { q?: string; onlyWithTranscript: boolean }) {
  const results = q ? await findPodcasts(q, { onlyWithTranscript }) : [];

  return (
    <>
      {q && results.length === 0 && (
        <p className="text-sm text-muted-foreground">Không tìm thấy podcast nào.</p>
      )}
      <ul className="flex flex-col gap-3">
        {results.map((podcast) => (
          <PodcastResultItem key={podcast.id} podcast={podcast} onlyWithTranscript={onlyWithTranscript} />
        ))}
      </ul>
    </>
  );
}
