"use server";
import { getWordFromExternalService } from "@/shared/repository/mazzi";

export async function getFurigana(text: string): Promise<string | undefined> {
  const word = await getWordFromExternalService(text);
  const data = word.data?.at(0)?.phonetic;
  if (!data || text !== word.data?.at(0)?.word) { return undefined; }
  return data;
}
