"use server";
import { classifyWord } from "@/lib/services/ai/classify-word";
import { searchWord } from "@/lib/services/dictionary.service";
import { KWordType } from "@/lib/types";

export async function wordExists(words: string): Promise<boolean> {
  const word = await searchWord(words);
  return word.content != null;
}

export async function checkWord(words: string): Promise<boolean> {
  const word = await searchWord(words);
  if (word.content != null || word.type === KWordType.KANJI) {
    return true;
  }

  const classified = await classifyWord(words);
  return classified.type !== KWordType.OTHER;
}
