export class WordDTO {
  words: string;
  type: string;
  hantu: string | null;
  content: string | null;
  practiceId: string | null;

  constructor(data: {
    words: string;
    type: string;
    hantu: string | null;
    content: string | null;
    practiceId: string | null;
  }) {
    this.words = data.words;
    this.type = data.type;
    this.content = data.content;
    this.hantu = data.hantu;
    this.practiceId = data.practiceId;
  }

  static fromFirestore(doc: FirebaseFirestore.DocumentData): WordDTO {
    return {
      words: doc.words,
      type: doc.type,
      content: doc.content ?? null,
      hantu: doc.hantu ?? null,
      practiceId: doc.practiceId ?? null,
    };
  }
}
