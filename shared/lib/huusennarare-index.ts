import index from "@/shared/data/huusennarare-index.json";

const kanjiIndex: Record<string, string> = index;

export function findHuusennarareUrl(kanji: string): string | undefined {
  return kanjiIndex[kanji];
}
