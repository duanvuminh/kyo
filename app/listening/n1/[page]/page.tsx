import { getListening } from "@/feature/listening/service/listening";
import { displayData, getNextPageOrDefault, hasData, ListeningViewModel, showNextPage } from "@/feature/listening/type/listening.view-model";
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
  const pageData: ListeningViewModel = await getListening({ page, level: "n1" });
  const nextPage = getNextPageOrDefault(pageData);
  return hasData(pageData) ? (
    <div className="p-2 prose mx-auto">z
      {displayData(pageData).map((listening) => (
        <QuestionDetail key={listening.id} question={listening} />
      ))}
      {showNextPage(pageData) && nextPage && (
        <Link href={`/listening/n1/${nextPage}`}>
          Bài viết cũ hơn
        </Link>
      )}
      <QuickSearchBySelectText />
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/listening/n1/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
