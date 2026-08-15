import { PodcastResults } from "@/app/podcast/_components/podcast-results";
import { PodcastResultsSkeleton } from "@/app/podcast/_components/podcast-results-skeleton";
import { PodcastSearchForm } from "@/app/podcast/_components/search-form";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ q?: string; transcript?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { q, transcript } = await searchParams;
  // Trước khi search lần đầu (chưa có q trong URL) thì mặc định check sẵn.
  // Sau khi đã search rồi thì tôn trọng đúng lựa chọn user gửi lên (kể cả bỏ check).
  const onlyWithTranscript = q === undefined ? true : transcript === "1";

  return (
    <div className="max-w-md mx-auto mt-8 px-2 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Podcast</h1>
      <PodcastSearchForm q={q} onlyWithTranscript={onlyWithTranscript} />
      <Suspense key={`${q ?? ""}-${onlyWithTranscript}`} fallback={<PodcastResultsSkeleton />}>
        <PodcastResults q={q} onlyWithTranscript={onlyWithTranscript} />
      </Suspense>
    </div>
  );
}
