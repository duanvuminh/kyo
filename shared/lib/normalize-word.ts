const DECORATIVE_PREFIX_REGEX = /^[〜～-]+/;

export function normalizeWordText(word: string): string {
  return word.trim().replace(DECORATIVE_PREFIX_REGEX, "").trim();
}
