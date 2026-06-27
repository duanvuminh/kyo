"use server";
import { getPhonetic } from "@/shared/repository/external-dictionary";

export async function getFurigana(text: string): Promise<string | undefined> {
  const phonetic = await getPhonetic(text);
  return phonetic ?? undefined;
}
