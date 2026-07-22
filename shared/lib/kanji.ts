const KANJI_REGEX = /^[一-龯]$/;

export function isKanjiWord(word: string): boolean {
  return KANJI_REGEX.test(word);
}
