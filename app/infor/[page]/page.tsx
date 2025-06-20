import { CenterMessage } from "@/components/center-message";
import { KInfor } from "@/components/infor";
import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import { SelectedTextViewer } from "@/components/selected-text-viewer";
import {
  displayData,
  getInfor,
  getNextPageOrDefault,
  hasData,
  showNextPage,
} from "@/services/infor";
import { InforPage } from "@/types/models/Infor";
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
      <SelectedTextViewer />
    </MdxWrapperStyle>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/infor/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
