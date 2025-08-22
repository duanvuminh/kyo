import { KManga } from "@/feature/manga/component/manga";
import { MangaPage } from "@/feature/manga/model/manga";
import {
  displayData,
  getManga,
  getNextPageOrDefault,
  hasData,
  showNextPage,
} from "@/feature/manga/service/manga";
import { CenterMessage } from "@/shared/component/center-message";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: MangaPage | undefined = await getManga({ page });
  return hasData(pageData) ? (
    <div className="p-2 prose mx-auto">
      {displayData(pageData).map((manga) => (
        <KManga key={manga.id} manga={manga} />
      ))}
      {showNextPage(pageData) && (
        <Link href={`/manga/${getNextPageOrDefault(pageData)}`}>
          Bài viết cũ hơn
        </Link>
      )}
      <QuickSearchBySelectText />
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/manga/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
