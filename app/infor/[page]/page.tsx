import { KInfor } from "@/feature/infor/component/infor";
import { InforPage } from "@/feature/infor/model/infor";
import {
  displayData,
  getInfor,
  getNextPageOrDefault,
  hasData,
  showNextPage,
} from "@/feature/infor/service/infor";
import { CenterMessage } from "@/shared/component/center-message";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: InforPage | undefined = await getInfor({ page });
  return hasData(pageData) ? (
    <MdxWrapperStyle>
      {displayData(pageData).map((infor) => (
        <KInfor key={infor.id} infor={infor} />
      ))}
      {showNextPage(pageData) && (
        <Link href={`/infor/${getNextPageOrDefault(pageData)}`}>
          Bài viết cũ hơn
        </Link>
      )}
      <QuickSearchBySelectText />
    </MdxWrapperStyle>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/infor/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
