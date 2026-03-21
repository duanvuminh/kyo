import index from "@/shared/data/huusennarare-index.json";

const kanjiIndex: Record<string, string[]> = index;

export function findHuusennarareSlug(kanji: string): string | undefined {
  const slugs = kanjiIndex[kanji];
  return slugs?.[0];
}
