"use server";
import { searchWord } from "@/shared/service/dictionary";
import { KWordType } from "@/shared/types/models/word-type";

export async function checkWord(words: string): Promise<boolean> {
  const result = await searchWord(words);
  return result.words === words && result.type !== KWordType.OTHER;
}
