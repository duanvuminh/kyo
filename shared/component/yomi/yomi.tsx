"use client";

import { Skeleton } from "@/shared/component/ui/skeleton";
import { useYomi } from "@/shared/component/yomi/use-yomi";

export const Yomi = ({ text }: { text: string }) => {
  const yomi = useYomi(text);

  return (
    <>
      {!yomi && <Skeleton className="h-20 w-full rounded-xl" />}
      {yomi && <div>{yomi}</div>}
    </>
  );
};
