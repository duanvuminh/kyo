import { ShortBlock } from "@/app/short/_components/short-block";
import { getShort } from "@/app/short/_lib/short.service";
import {
  displayData,
  hasData,
  showNextPage,
  type ShortViewModel,
} from "@/app/short/_lib/short.types";
import { QuickSearchBySelectText } from "@/lib/components/quick-search-by-select-text/quick-search-by-select-text";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 604800; // 1 week

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: ShortViewModel = await getShort({ page });

  if (!hasData(pageData)) {
    notFound();
  }

  return (
    <div className="p-2 prose mx-auto relative flex flex-col gap-12">
      <Link href="/video/random">Xen thêm Anime không phụ đề</Link>

      {displayData(pageData).map((short) => (
        <ShortBlock key={short.id} short={short} />
      ))}

      {showNextPage(pageData) && (
        <Link href={`/short/${pageData.nextPage}`}>Bài viết cũ hơn</Link>
      )}

      <QuickSearchBySelectText />
    </div>
  );
}
