import { ApiResponse } from "@/shared/types/dto/api-responses";
import { useEffect, useState } from "react";

export function useYomi(text: string) {
  const [yomi, setYomi] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/api/furigana", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const result = (await res.json()) as ApiResponse<string>;
      setYomi(result.data);
    });
  }, [text]);

  return yomi;
}
