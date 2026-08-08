export interface DictionaryResponseDTO {
  status: number | null;
  found: boolean | null;
  data: DictionaryEntry[] | null;
}

export interface KanjiResponseDTO {
  status: number | null;
  results: KanjiEntry[] | null;
}

export interface KanjiEntry {
  kanji: string | null;
  mean: string | null;
  on: string | null;
  kun: string | null;
  stroke_count: string | null;
}

interface DictionaryEntry {
  phonetic: string | null;
  synsets: string | null;
  type: string | null;
  short_mean: string | null;
  word: string | null;
  weight: number | null;
  means: Meaning[] | null;
  opposite_word: string | null;
  pronunciation: Pronunciation[] | null;
  mobileId: number | null;
  label: string | null;
  _id: string | null;
  _rev: string | null;
}

interface Meaning {
  mean: string;
  kind: string | null;
  examples: Example[] | null;
}

interface Example {
  content: string | null;
  mean: string | null;
  transcription: string | null;
}

interface Pronunciation {
  word: string | null;
  transcriptions: Transcription[] | null;
  type: string | null;
}

interface Transcription {
  romaji: string | null;
  kana: string | null;
}
