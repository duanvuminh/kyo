import { WordDTO } from "@/types/dto/word";
import { KWordType } from "@/types/models/word-type";

export class KWord {
  words: string;
  type: KWordType;
  content?: string;
  hantu?: string;
  pronunciationWithSoundUrl?: string;

  constructor(
    words: string,
    type: KWordType,
    content?: string,
    pronunciationWithSoundUrl?: string
  ) {
    this.pronunciationWithSoundUrl = pronunciationWithSoundUrl;
    this.words = words;
    this.type = type;
    this.content = content;
  }

  static fromDTO(data: WordDTO): KWord {
    return {
      ...data,
      hantu: data.hantu ?? undefined,
      content: data.content ?? undefined,
      pronunciationWithSoundUrl: data.pronunciationWithSoundUrl ?? undefined,
      type: KWordType[data.type as keyof typeof KWordType],
    };
  }
}
