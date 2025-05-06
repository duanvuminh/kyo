import {
  addWords,
  getAllGrammar,
  getWordById,
  getWordFromInternet,
} from "@/repository/dictionary-repository";
import { KWord } from "@/types/models/word";
import { KWordType } from "@/types/models/word-type";
import Fuse from "fuse.js";

export async function searchWord(word: string): Promise<KWord> {
  const wordDto = await getWordById(word);
  if (wordDto) return KWord.fromDTO(wordDto);
  const grammars = await _searchGrammar(word);
  if (grammars.length > 0) {
    return KWord.fromDTO(grammars[0].item);
  }
  const wordFromInternet = await getWordFromInternet(word);
  if (wordFromInternet?.data && wordFromInternet.data[0]?.word === word) {
    addWords({
      words: word,
      type: "word",
      hantu: null,
      content: null,
      pronunciationWithSoundUrl: null,
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

const _searchGrammar = async (word: string) => {
  "use cache";
  const options = {
    keys: ["words"],
  };
  const list = (await getAllGrammar()).map((item) => item);
  return new Fuse(list, options).search(word);
};
