import { getListening } from "@/app/listening/_lib/listening.service";
import { displayData, getNextPageOrDefault, hasData, ListeningViewModel, showNextPage } from "@/app/listening/_lib/listening.types";
import { QuestionDetail } from "@/lib/components/question-detail/question-detail";
import { QuickSearchBySelectText } from "@/lib/components/quick-search-by-select-text/quick-search-by-select-text";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: ListeningViewModel = await getListening({ page, level: "n1" });
  if (!hasData(pageData)) {
    notFound();
  }
  const nextPage = getNextPageOrDefault(pageData);
  return (
    <div className="p-2 prose mx-auto">
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
  );
}
