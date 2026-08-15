import { AnimeEditView } from "@/lib/components/anime-form/anime-edit-view";

interface PageProps {
  params: Promise<{ level: string; page: string }>;
}

export default async function Page({ params }: PageProps) {
  const { level, page } = await params;
  return <AnimeEditView section="kanji" level={level} page={page} />;
}
