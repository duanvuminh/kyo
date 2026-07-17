import { stripUndefined } from "@/core/utils/utils";
import { db } from "@/shared/lib/firebase-admin";
import { WordDTO } from "@/shared/type/dto/word";
import { KWordType } from "@/shared/type/models/word-type";

export const getWordById = async (
  word: string,
): Promise<WordDTO | undefined> => {
  const docRef = db.collection("dictionary").doc(word);
  const snapshot = await docRef.get();

  if (!snapshot.exists) {
    return undefined;
  }
  return WordDTO.fromFirestore(snapshot.data()!);
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
