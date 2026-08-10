import huusennarareIndex from "@/lib/data/huusennarare-index.json";

const kanjiIndex: Record<string, string> = huusennarareIndex;

export function findHuusennarareUrl(kanji: string): string | undefined {
  return kanjiIndex[kanji];
}
