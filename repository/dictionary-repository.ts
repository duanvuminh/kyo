import { db } from "@/lib/firebase-admin";
import { mapDocs } from "@/lib/firebase-store";
import { DictionaryResponseDto } from "@/types/dto/mazzi-dictionary";
import { WordDTO } from "@/types/dto/word";

export const getWordById = async (
  word: string
): Promise<WordDTO | undefined> => {
  const docRef = db.collection("dictionary").doc(word);
  const snapshot = await docRef.get();

  if (!snapshot.exists) return undefined;

  return WordDTO.fromFirestore(snapshot.data()!);
};

export const getWordFromInternet = async (
  word: string
): Promise<DictionaryResponseDto> => {
  const data = await fetch("https://mazii.net/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dict: "javi",
      type: "word",
      query: word,
      page: 0,
      limit: 1,
    }),
  });
  const posts = await data.json();
  return DictionaryResponseDto.fromJson(posts);
};

export const addWords = (wordDTO: WordDTO): void => {
  const docRef = db.collection("dictionary").doc(wordDTO.words);
  docRef.set({ ...wordDTO });
};

export const updateWordsContent = (words: string, content: string): void => {
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

// export const addKanjiToDatabase = (): void => {
//   for (const key in hantuList) {
//     const { hantu } = hantuList[key];
//     const wordDTO = {
//       words: key,
//       type: "kanji",
//       hantu: hantu,
//       content: null,
//       pronunciationWithSoundUrl: null,
//     };
//     const docRef = db.collection("dictionary").doc(wordDTO.words);
//     docRef.set(wordDTO);
//   }
// };

// export const addGrammarToDatabase = (): void => {
//   grammarList.forEach((element) => {
//     const docRef = db.collection("dictionary").doc(element.words);
//     docRef.set(element);
//   });
// };
