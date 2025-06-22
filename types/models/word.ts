import { WordDTO } from "@/types/dto/word";
import { KWordType } from "@/types/models/word-type";

export class KWord {
  words: string;
  type: KWordType;
  content?: string;
  hantu?: string;
  practiceId?: string;

  constructor(
    words: string,
    type: KWordType,
    content?: string,
    practiceId?: string
  ) {
    this.words = words;
    this.type = type;
    this.content = content;
    this.practiceId = practiceId;
  }

  static fromDTO(data: WordDTO): KWord {
    const keyKWordType = data.type.toUpperCase();
    return {
      ...data,
      hantu: data.hantu ?? undefined,
      content: data.content ?? undefined,
      type:
        KWordType[keyKWordType as keyof typeof KWordType] ?? KWordType.OTHER,
      practiceId: data.practiceId ?? undefined,
    };
  }
}
