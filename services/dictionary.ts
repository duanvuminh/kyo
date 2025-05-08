import {
  addWords,
  getWordById,
  getWordFromInternet,
} from "@/repository/dictionary-repository";
import { KWord } from "@/types/models/word";
import { KWordType } from "@/types/models/word-type";

export async function searchWord(word: string): Promise<KWord> {
  const wordDto = await getWordById(word);
  if (wordDto) return KWord.fromDTO(wordDto);
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
