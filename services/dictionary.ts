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
    const wordDto = await getWordById(word);
    if (wordDto) return KWord.fromDTO(wordDto);
    const grammars = await searchGrammar(word);
    if (grammars.length > 0) {
      return KWord.fromDTO(grammars[0]);
    }
    const wordFromInternet = await getWordFromExternalService(word);
    if (wordFromInternet?.data && wordFromInternet.data[0]?.word === word) {
      addWords({
        words: word,
        type: "word",
        hantu: null,
        content: null,
      });
      return {
        words: word,
        type: KWordType.WORD,
      } as KWord;
    }
    if (wordFromInternet?.data && wordFromInternet?.data.length > 0) {
      return {
        words: word,
        type: KWordType.OTHER_WORD,
      };
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
  updateDocument(words, content);
};
