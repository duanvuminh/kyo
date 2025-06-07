import { mapDocs } from "@/lib/data-convert";
import { db } from "@/lib/firebase-admin";
import { WordDTO } from "@/types/dto/word";

export const getWordById = async (
  word: string
): Promise<WordDTO | undefined> => {
  const docRef = db.collection("dictionary").doc(word);
  const snapshot = await docRef.get();

  if (!snapshot.exists) return undefined;
  return WordDTO.fromFirestore(snapshot.data()!);
};

export const addWords = (wordDTO: WordDTO): void => {
  const docRef = db.collection("dictionary").doc(wordDTO.words);
  docRef.set({ ...wordDTO });
};

export const updateDocument = (words: string, content: string): void => {
  const docRef = db.collection("dictionary").doc(words);
  docRef.update({ content: content });
};

export const getAllGrammar = async (): Promise<WordDTO[]> => {
  "use cache";
  const query = db.collection("dictionary").where("type", "==", "grammar");
  const snapshot = await query.get();
  if (snapshot.empty) return [];
  const result = mapDocs(snapshot, WordDTO.fromFirestore);
  return result;
};
