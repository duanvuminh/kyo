import { DictionaryResponseDTO } from "@/shared/type/dto/mazzi-dictionary";

export const getWordFromExternalService = async (
  word: string,
  type: "word" | "kanji" = "word"
): Promise<DictionaryResponseDTO> => {
  const data = await fetch("https://mazii.net/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dict: "javi",
      type,
      query: word,
      page: 0,
      limit: 1,
    }),
  });
  const post = await data.json();
  return post as DictionaryResponseDTO;
};
