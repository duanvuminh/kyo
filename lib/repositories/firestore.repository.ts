import { db } from "@/lib/db";
import { stripUndefined } from "@/lib/utils/utils";
import { KWordType, type WordDTO } from "@/lib/types";

function mapWordDocFromFirestore(doc: FirebaseFirestore.DocumentData): WordDTO {
  return {
    words: doc.words,
    type: doc.type,
    content: doc.content ?? null,
    practiceId: doc.practiceId ?? null,
    huusenSynced: doc.huusenSynced ?? false,
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

export const updateDocument = async (
  words: string,
  { content, practiceId, huusenSynced }: { content?: string; practiceId?: string; huusenSynced?: boolean },
): Promise<void> => {
  const docRef = db.collection("dictionary").doc(words);
  await docRef.update(stripUndefined({ content, practiceId, huusenSynced }));
};

export const createDocument = async (
  words: string,
  {
    content,
    practiceId,
    type,
  }: { content?: string; practiceId?: string; type?: KWordType },
): Promise<void> => {
  const docRef = db.collection("dictionary").doc(words);
  await docRef.set(
    stripUndefined({
      content,
      practiceId,
      words,
      type: type ?? (words.length === 1 ? KWordType.KANJI : KWordType.WORD),
    }),
    { merge: true },
  );
};

export const upsertDocument = async (
  words: string,
  payload: { content?: string; practiceId?: string },
): Promise<void> => {
  const docRef = db.collection("dictionary").doc(words);
  const docSnapshot = await docRef.get();
  if (docSnapshot.exists) {
    await updateDocument(words, payload);
  } else {
    await createDocument(words, payload);
  }
};
