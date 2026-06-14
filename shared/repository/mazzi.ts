import type { DictionaryResponseDTO, KanjiResponseDTO } from "@/shared/type/dto/mazzi-dictionary";

export const getWordFromExternalService = async (
  word: string
): Promise<DictionaryResponseDTO> => {
  const data = await fetch("https://mazii.net/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dict: "javi", type: "word", query: word, page: 0, limit: 1 }),
  });
  const post = await data.json();
  return post as DictionaryResponseDTO;
};

export const getKanjiFromExternalService = async (
  kanji: string
): Promise<KanjiResponseDTO> => {
  const data = await fetch("https://mazii.net/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dict: "javi", type: "kanji", query: kanji, page: 0, limit: 1 }),
  });
  const post = await data.json();
  return post as KanjiResponseDTO;
};
