"use client";
import { KPaging } from "@/shared/component/paging";
import { usePathname, useRouter } from "next/navigation";

export const WordPaging = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isFlashCard = pathname.includes("flash-card");

  const match = pathname.match(/page(\d+)/);
  const initPage = match ? Number(match[1]) - 1 : 0;

  const refine = (page: number) => {
    router.push(`/words/n1/page${page + 1}`);
  };

  return (
    !isFlashCard && (
      <KPaging totalPages={totalPages} refine={refine} initPage={initPage} />
    )
  );
};
