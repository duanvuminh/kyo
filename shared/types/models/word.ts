import { WordDTO } from "@/shared/types/dto/word";
import { KWordType } from "@/shared/types/models/word-type";

export enum Source {
  FIREBASE = "firebase",
  DISCORD = "discord",
  SLACK = "slack",
  ALGOLIA = "algolia",
}
export interface BaseItem {
  source: Source;
  collection?: string;
  documentId: string;
  words: string;
  content?: string;
}

const stringToKWordType: Record<string, KWordType> = {
  kanji: KWordType.KANJI,
  grammar: KWordType.GRAMMAR,
  word: KWordType.WORD,
  other: KWordType.OTHER,
};

function mapStringToKWordType(str: string): KWordType {
  return stringToKWordType[str] ?? KWordType.OTHER;
}

export class KWord implements BaseItem {
  words: string;
  documentId: string;
  type: KWordType;
  content?: string;
  hantu?: string;
  practiceId?: string;

  constructor(
    words: string,
    documentId: string,
    source: Source,
    type: KWordType,
    content?: string,
    practiceId?: string
  ) {
    this.source = source;
    this.words = words;
    this.documentId = documentId;
    this.type = type;
    this.content = content;
    this.practiceId = practiceId;
  }
  source: Source;
  collection?: string | undefined;

  static fromDTO(data: WordDTO): KWord {
    const type = mapStringToKWordType(data.type);
    return {
      ...data,
      source: Source.FIREBASE,
      documentId: data.words,
      hantu: data.hantu ?? undefined,
      content: data.content ?? undefined,
      type,
      practiceId: data.practiceId ?? undefined,
    };
  }
}
