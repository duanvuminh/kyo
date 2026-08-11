import { PodcastSearchForm } from "@/app/podcast/_components/search-form";
import { PodcastSearchResult } from "@/lib/repositories/podcast.repository";
import { findPodcasts } from "@/lib/services/podcast.service";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ q?: string; transcript?: string }>;
}

function PodcastResultItem({ podcast, onlyWithTranscript }: { podcast: PodcastSearchResult; onlyWithTranscript: boolean }) {
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

export default async function Page({ searchParams }: Props) {
  const { q, transcript } = await searchParams;
  // Trước khi search lần đầu (chưa có q trong URL) thì mặc định check sẵn.
  // Sau khi đã search rồi thì tôn trọng đúng lựa chọn user gửi lên (kể cả bỏ check).
  const onlyWithTranscript = q === undefined ? true : transcript === "1";
  const results = q ? await findPodcasts(q, { onlyWithTranscript }) : [];

  return (
    <div className="max-w-md mx-auto mt-8 px-2 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Podcast</h1>
      <PodcastSearchForm q={q} onlyWithTranscript={onlyWithTranscript} />
      {q && results.length === 0 && (
        <p className="text-sm text-muted-foreground">Không tìm thấy podcast nào.</p>
      )}
      <ul className="flex flex-col gap-3">
        {results.map((podcast) => (
          <PodcastResultItem key={podcast.id} podcast={podcast} onlyWithTranscript={onlyWithTranscript} />
        ))}
      </ul>
    </div>
  );
}
