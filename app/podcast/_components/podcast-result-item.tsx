import { PodcastSearchResult } from "@/lib/repositories/podcast.repository";
import Image from "next/image";
import Link from "next/link";

export function PodcastResultItem({
  podcast,
  onlyWithTranscript,
}: {
  podcast: PodcastSearchResult;
  onlyWithTranscript: boolean;
}) {
  const href = onlyWithTranscript ? `/podcast/${podcast.id}?transcript=1` : `/podcast/${podcast.id}`;
  return (
    <li>
      <Link href={href} className="flex items-center gap-3">
        {podcast.artworkUrl && (
          <Image src={podcast.artworkUrl} alt={podcast.name} width={56} height={56} className="rounded" />
        )}
        <div>
          <p className="font-medium">{podcast.name}</p>
          <p className="text-sm text-muted-foreground">{podcast.artist}</p>
        </div>
      </Link>
    </li>
  );
}
