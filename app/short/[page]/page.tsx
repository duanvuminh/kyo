import { ShortBlock } from "@/feature/short/component/short-block";
import { ShortPage } from "@/feature/short/model/short";
import {
  displayData,
  getShort,
  hasData,
  showNextPage,
} from "@/feature/short/service/short";
import { CenterMessage } from "@/shared/component/center-message";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: ShortPage = await getShort({ page });

  if (!hasData(pageData)) {
    return (
      <CenterMessage>
        Không tìm thấy bài viết.
        <Link href="/short/newest">Click để quay lại</Link>.
      </CenterMessage>
    );
  }

  return (
    <div className="p-2 prose mx-auto relative flex flex-col gap-12">
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
