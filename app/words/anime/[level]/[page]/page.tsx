import { AnimeView } from "@/lib/components/anime-form/anime-view";

interface PageProps {
  params: Promise<{ level: string; page: string }>;
}

export default async function Page({ params }: PageProps) {
  const { level, page } = await params;
  return <AnimeView section="words" level={level} page={page} />;
}
