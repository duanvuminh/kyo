"use client";
import { KPaging } from "@/shared/component/paging";
import { usePathname, useRouter } from "next/navigation";

export const KanjiN1Paging = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();

  const match = pathname.match(/page(\d+)/);
  const initPage = match ? Number(match[1]) - 1 : 0;

  const refine = (page: number) => {
    router.push(`/words/n1/page${page + 1}`);
  };

  return (
    <KPaging totalPages={totalPages} refine={refine} initPage={initPage} />
  );
};
