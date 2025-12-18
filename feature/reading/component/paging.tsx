"use client";
import { KPaging } from "@/shared/component/paging/paging";
import { usePathname, useRouter } from "next/navigation";

export const ReadingN1Paging = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();

  const match = pathname.match(/practice(\d+)/);
  const initPage = match ? Number(match[1]) - 1 : 0;

  const refine = (page: number) => {
    const pageNum = String(page + 1).padStart(2, "0");
    router.push(`/reading/n1/practice${pageNum}`);
  };

  return <KPaging totalPages={totalPages} refine={refine} initPage={initPage} />;
};
