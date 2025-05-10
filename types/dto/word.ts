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

  static fromFirestore(doc: FirebaseFirestore.DocumentData): WordDTO {
    return {
      words: doc.data().words,
      type: doc.data().type,
      content: doc.data().content ?? null,
      pronunciationWithSoundUrl: doc.data().pronunciationWithSoundUrl ?? null,
      hantu: doc.data().hantu ?? null,
    };
  }
}
