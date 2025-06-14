import { CenterMessage } from "@/components/center-message";
import { KSheet } from "@/components/chat-sheet";
import { ChatWidget } from "@/components/chat-widget";
import { KInfor } from "@/components/infor";
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
    <div className="p-2 prose mx-auto">
      {displayData(pageData).map((infor) => (
        <KInfor key={infor.id} infor={infor} />
      ))}
      {showNextPage(pageData) && (
        <Link href={`/infor/${getNextPageOrDefault(pageData)}`}>
          Bài viết cũ hơn
        </Link>
      )}
      <KSheet>
        <ChatWidget />
      </KSheet>
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/infor/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
