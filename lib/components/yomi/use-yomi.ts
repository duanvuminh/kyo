import { getFurigana } from "@/app/actions/furigana.actions";
import { useEffect, useState } from "react";

export function useYomi(text: string) {
  const [yomi, setYomi] = useState<string | undefined>(undefined);

  useEffect(() => {
    getFurigana(text)
      .then(setYomi)
      .catch(() => setYomi(undefined));
  }, [text]);

  return yomi;
}
