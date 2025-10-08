import { ListeningPage } from "@/feature/listening/model/listening";
import {
  displayData,
  getListening,
  getNextPageOrDefault,
  hasData,
  showNextPage,
} from "@/feature/listening/service/listening";
import { CenterMessage } from "@/shared/component/center-message";
import { QuestionDetail } from "@/shared/component/question-detail/question-detail";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: ListeningPage = await getListening({ page });
  return hasData(pageData) ? (
    <div className="p-2 prose mx-auto">
      {displayData(pageData).map((listening) => (
        <QuestionDetail key={listening.id} question={listening} />
      ))}
      {showNextPage(pageData) && (
        <Link href={`/listening/n5/${getNextPageOrDefault(pageData)}`}>
          Bài viết cũ hơn
        </Link>
      )}
      <QuickSearchBySelectText />
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/listening/n5/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
