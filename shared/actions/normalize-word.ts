"use server";

import { normalizeWordViaAi } from "@/shared/service/ai/normalize-word";

export async function normalizeWordAction(word: string): Promise<string> {
  if (!word.trim()) {
    return word;
  }
  try {
    return await normalizeWordViaAi(word);
  } catch {
    return word;
  }
}
