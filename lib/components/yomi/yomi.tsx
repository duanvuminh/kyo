"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useYomi } from "@/lib/components/yomi/use-yomi";

export const Yomi = ({ text }: { text: string }) => {
  const yomi = useYomi(text);

  return (
    <>
      {!yomi && <Skeleton className="h-20" />}
      {yomi && <div>{yomi}</div>}
    </>
  );
};
