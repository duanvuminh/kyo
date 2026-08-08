"use client";

import { checkWord } from "@/app/actions/check.actions";
import { useEffect, useState } from "react";

export function useIsWordCommand(text: string): boolean {
  const [result, setResult] = useState<{ text: string; isWord: boolean }>({ text: "", isWord: false });

  useEffect(() => {
    if (!text) {
      return;
    }

    let cancelled = false;
    checkWord(text).then((isWord) => {
      if (!cancelled) {
        setResult({ text, isWord });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [text]);

  return result.text === text && result.isWord;
}
