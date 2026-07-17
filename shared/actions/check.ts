"use server";
import { classifyAndPersistWord, searchWord } from "@/shared/service/dictionary";
import { KWordType } from "@/shared/type/models/word-type";

export async function checkWord(words: string): Promise<boolean> {
  const word = await searchWord(words);
  if (word.content != null || word.type === KWordType.KANJI) {
    return true;
  }

  const classified = await classifyAndPersistWord(word, words);
  return classified.type !== KWordType.OTHER;
}
