const _JISHO_URL = "https://jisho.org/api/v1/search/words";

interface JishoEntry {
  slug: string;
  japanese: { word?: string; reading?: string }[];
}

async function _fetchJisho(keyword: string, timeoutMs = 8000): Promise<{ data: JishoEntry[] } | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${_JISHO_URL}?keyword=${encodeURIComponent(keyword)}`, {
      signal: controller.signal,
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export const isJapaneseWord = async (word: string): Promise<boolean> => {
  const result = await _fetchJisho(word);
  return (result?.data?.length ?? 0) > 0;
};

export const getPhonetic = async (word: string): Promise<string | null> => {
  const result = await _fetchJisho(word);
  const entry = result?.data?.[0];
  if (!entry) return null;
  return entry.japanese?.[0]?.reading ?? null;
};
