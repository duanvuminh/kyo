import { WordDTO } from "@/types/dto/word";
import { KWordType } from "@/types/models/word-type";

export enum Source {
  FIREBASE = "firebase",
  DISCORD = "discord",
  SLACK = "slack",
}
export interface BaseItem {
  source?: Source;
  collection?: string;
  documentId: string;
  words: string;
  content?: string;
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
    type: KWordType,
    content?: string,
    practiceId?: string
  ) {
    this.words = words;
    this.documentId = documentId;
    this.type = type;
    this.content = content;
    this.practiceId = practiceId;
  }

  static fromDTO(data: WordDTO): KWord {
    const keyKWordType = data.type.toUpperCase();
    return {
      ...data,
      documentId: data.words,
      hantu: data.hantu ?? undefined,
      content: data.content ?? undefined,
      type:
        KWordType[keyKWordType as keyof typeof KWordType] ?? KWordType.OTHER,
      practiceId: data.practiceId ?? undefined,
    };
  }
}
