export class WordDTO {
  words: string;
  type: string;
  hantu: string | null;
  content: string | null;
  pronunciationWithSoundUrl: string | null;

  constructor(data: {
    words: string;
    type: string;
    hantu: string | null;
    content: string | null;
    pronunciationWithSoundUrl: string | null;
  }) {
    this.words = data.words;
    this.type = data.type;
    this.content = data.content;
    this.pronunciationWithSoundUrl = data.pronunciationWithSoundUrl;
    this.hantu = data.hantu;
  }

  static fromFirestore(data: FirebaseFirestore.DocumentData): WordDTO {
    return new WordDTO({
      words: data.words,
      type: data.type,
      content: data.content ?? null,
      pronunciationWithSoundUrl: data.pronunciationWithSoundUrl ?? null,
      hantu: data.hantu ?? null,
    });
  }
}
