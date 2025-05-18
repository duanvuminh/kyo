import { WordDTO } from "@/types/dto/word";
import { KWordType } from "@/types/models/word-type";

export class KWord {
  words: string;
  type: KWordType;
  content?: string;
  hantu?: string;

  constructor(words: string, type: KWordType, content?: string) {
    this.words = words;
    this.type = type;
    this.content = content;
  }

  static fromDTO(data: WordDTO): KWord {
    return {
      ...data,
      hantu: data.hantu ?? undefined,
      content: data.content ?? undefined,
      type: KWordType[data.type as keyof typeof KWordType],
    };
  }
}
