"use client";

import { Skeleton } from "@/shared/component/ui/skeleton";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { useEffect, useState } from "react";

export const Yomi = ({ text }: { text: string }) => {
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

  return (
    <>
      {!yomi && <Skeleton className="h-20 w-full rounded-xl" />}
      {yomi && <div>{yomi}</div>}
    </>
  );
};
