import { fetchApi } from "./client";

export async function getFurigana(text: string): Promise<string | undefined> {
  return fetchApi<string | undefined>("/api/furigana", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });
}
