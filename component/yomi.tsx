"use client";

import { Skeleton } from "@/component/ui/skeleton";
import { useEffect, useState } from "react";

export const Yomi = ({ text }: { text: string }) => {
  const [yomi, setYomi] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/api/furigana", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      setYomi(data.result ?? text);
    });
  }, [text]);

  return (
    <>
      {!yomi && <Skeleton className="h-20 w-full rounded-xl" />}
      {yomi && <div>{yomi}</div>}
    </>
  );
};
