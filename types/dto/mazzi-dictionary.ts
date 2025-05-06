export interface DictionaryResponse {
  status: number | null;
  found: boolean | null;
  data: DictionaryEntry[] | null;
}

export interface DictionaryEntry {
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

export interface Meaning {
  mean: string;
  kind: string | null;
  examples: Example[] | null;
}

export interface Example {
  content: string | null;
  mean: string | null;
  transcription: string | null;
}

export interface Pronunciation {
  word: string | null;
  transcriptions: Transcription[] | null;
  type: string | null;
}

export interface Transcription {
  romaji: string | null;
  kana: string | null;
}
export class DictionaryResponseDto {
  constructor(
    public status: number | null,
    public found: boolean | null,
    public data: DictionaryEntryDto[] | null
  ) {}

  static fromJson(json: DictionaryResponse): DictionaryResponseDto {
    return new DictionaryResponseDto(
      json.status,
      json.found,
      json.data?.map((item: DictionaryEntry) =>
        DictionaryEntryDto.fromJson(item)
      ) ?? null
    );
  }
}

export class DictionaryEntryDto {
  constructor(
    public phonetic: string | null,
    public synsets: string | null,
    public type: string | null,
    public short_mean: string | null,
    public word: string | null,
    public weight: number | null,
    public means: MeaningDto[] | null,
    public opposite_word: string | null,
    public pronunciation: PronunciationDto[] | null,
    public mobileId: number | null,
    public label: string | null,
    public _id: string | null,
    public _rev: string | null
  ) {}

  static fromJson(json: DictionaryEntry): DictionaryEntryDto {
    return new DictionaryEntryDto(
      json.phonetic,
      json.synsets,
      json.type,
      json.short_mean,
      json.word,
      json.weight,
      json.means?.map((m: Meaning) => MeaningDto.fromJson(m)) ?? null,
      json.opposite_word,
      json.pronunciation?.map((p: Pronunciation) =>
        PronunciationDto.fromJson(p)
      ) ?? null,
      json.mobileId,
      json.label,
      json._id,
      json._rev
    );
  }
}

export class MeaningDto {
  constructor(
    public mean: string | null,
    public kind: string | null,
    public examples: ExampleDto[] | null
  ) {}

  static fromJson(json: Meaning): MeaningDto {
    return new MeaningDto(
      json.mean,
      json.kind,
      json.examples?.map((e: Example) => ExampleDto.fromJson(e)) ?? null
    );
  }
}

export class ExampleDto {
  constructor(
    public content: string | null,
    public mean: string | null,
    public transcription: string | null
  ) {}

  static fromJson(json: Example): ExampleDto {
    return new ExampleDto(json.content, json.mean, json.transcription);
  }
}

export class PronunciationDto {
  constructor(
    public word: string | null,
    public transcriptions: TranscriptionDto[] | null,
    public type: string | null
  ) {}

  static fromJson(json: Pronunciation): PronunciationDto {
    return new PronunciationDto(
      json.word,
      json.transcriptions?.map((t: Transcription) =>
        TranscriptionDto.fromJson(t)
      ) ?? null,
      json.type
    );
  }
}

export class TranscriptionDto {
  constructor(public romaji: string | null, public kana: string | null) {}

  static fromJson(json: Transcription): TranscriptionDto {
    return new TranscriptionDto(json.romaji, json.kana);
  }
}
