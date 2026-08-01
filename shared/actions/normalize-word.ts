"use server";

import { normalizeWordViaAi, type NormalizeResult } from "@/shared/service/ai/normalize-word";

export async function normalizeWordAction(word: string): Promise<NormalizeResult> {
  if (!word.trim()) {
    return { normalized: word, type: "word" };
  }
  try {
    return await normalizeWordViaAi(word);
  } catch {
    // Lỗi AI thì không chặn add, coi như hợp lệ và giữ nguyên chữ gốc
    return { normalized: word, type: "word" };
  }
}
