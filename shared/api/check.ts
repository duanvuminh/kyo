import { fetchApi } from "./client";

export async function checkWord(words: string): Promise<boolean> {
  return fetchApi<boolean>(`/api/check?words=${encodeURIComponent(words)}`);
}
