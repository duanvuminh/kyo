import {
  addWords,
  getAllGrammar,
  getWordById,
  updateDocument,
} from "@/repository/firestore";
import { getWordFromExternalService } from "@/repository/mazzi";
import { WordDTO } from "@/types/dto/word";
import { KWord } from "@/types/models/word";
import { KWordType } from "@/types/models/word-type";
import Fuse from "fuse.js";

export async function searchWord(word: string): Promise<KWord> {
  try {
    const wordFromDictionary = await getWordById(word);
    if (wordFromDictionary) return KWord.fromDTO(wordFromDictionary);
    const grammars = await searchGrammar(word);
    if (grammars.length > 0) {
      return KWord.fromDTO(grammars[0]);
    }
    const wordFromInternet = await getWordFromExternalService(word);
    if (wordFromInternet?.data && wordFromInternet?.data.length > 0) {
      const searchWord = wordFromInternet.data[0]?.word;
      if (searchWord) {
        if (word != searchWord) {
          const newWordDto = await getWordById(word);
          if (newWordDto) return KWord.fromDTO(newWordDto);
        } else {
          addWords({
            words: searchWord,
            type: "word",
            hantu: null,
            content: null,
            practiceId: null,
          });
        }
        return {
          words: word == searchWord ? word : "",
          type: KWordType.WORD,
        } as KWord;
      }
    }
    return {
      words: word,
      type: KWordType.OTHER,
    };
  } catch {
    return {
      words: word,
      type: KWordType.OTHER,
    };
  }
}

export async function searchGrammar(value: string): Promise<WordDTO[]> {
  try {
    const allGrammar: WordDTO[] = await getAllGrammar();
    const fuse = new Fuse<WordDTO>(allGrammar, {
      keys: ["words"],
      threshold: 0.6,
    });

    return fuse.search(value).map((result) => result.item);
  } catch {
    return [];
  }
}

export const updateWordsContent = ({
  words,
  content,
}: {
  words: string;
  content: string;
}) => {
  updateDocument(words, { content });
};
