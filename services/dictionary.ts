import {
  addWords,
  getAllGrammar,
  getWordById,
  getWordFromInternet,
} from "@/repository/dictionary-repository";
import { WordDTO } from "@/types/dto/word";
import { KWord } from "@/types/models/word";
import { KWordType } from "@/types/models/word-type";
import Fuse from "fuse.js";

export async function searchWord(word: string): Promise<KWord> {
  const wordDto = await getWordById(word);
  if (wordDto) return KWord.fromDTO(wordDto);
  const grammars = await searchGrammar(word);
  if (grammars.length > 0) {
    return KWord.fromDTO(grammars[0]);
  }
  const wordFromInternet = await getWordFromInternet(word);
  if (wordFromInternet?.data && wordFromInternet.data[0]?.word === word) {
    addWords({
      words: word,
      type: "word",
      hantu: null,
      content: null,
    });
    return {
      words: word,
      type: KWordType.word,
    } as KWord;
  }
  return {
    words: word,
    type: KWordType.other,
  };
}

export async function searchGrammar(value: string) {
  const allGrammar: WordDTO[] = await getAllGrammar();
  const fuse = new Fuse<WordDTO>(allGrammar, {
    keys: ["words"],
    threshold: 0.6,
  });

  return fuse.search(value).map((result) => result.item);
}
