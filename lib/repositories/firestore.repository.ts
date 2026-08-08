import { db } from "@/lib/db";
import { stripUndefined } from "@/lib/utils/utils";
import { KWordType, type WordDTO } from "@/lib/types";

function mapWordDocFromFirestore(doc: FirebaseFirestore.DocumentData): WordDTO {
  return {
    words: doc.words,
    type: doc.type,
    content: doc.content ?? null,
    hantu: doc.hantu ?? null,
    practiceId: doc.practiceId ?? null,
  };
}

export const getWordById = async (
  word: string,
): Promise<WordDTO | undefined> => {
  const docRef = db.collection("dictionary").doc(word);
  const snapshot = await docRef.get();

  if (!snapshot.exists) {
    return undefined;
  }
  return mapWordDocFromFirestore(snapshot.data()!);
};

export const updateDocument = (
  words: string,
  { content, practiceId }: { content?: string; practiceId?: string },
): void => {
  const docRef = db.collection("dictionary").doc(words);
  docRef.update(stripUndefined({ content, practiceId }));
};

export const createDocument = (
  words: string,
  {
    content,
    practiceId,
    type,
  }: { content?: string; practiceId?: string; type?: KWordType },
): void => {
  const docRef = db.collection("dictionary").doc(words);
  docRef.set(
    stripUndefined({
      content,
      practiceId,
      words,
      type: type ?? (words.length === 1 ? KWordType.KANJI : KWordType.WORD),
    }),
    { merge: true },
  );
};

export const upsertDocument = (
  words: string,
  payload: { content?: string; practiceId?: string },
): void => {
  const docRef = db.collection("dictionary").doc(words);
  docRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      updateDocument(words, payload);
    } else {
      createDocument(words, payload);
    }
  });
};
