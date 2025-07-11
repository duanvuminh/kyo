import { CenterMessage } from "@/components/center-message";
import { KManga } from "@/components/manga";
import { SelectedTextViewer } from "@/components/selected-text-viewer";
import {
  displayData,
  getManga,
  getNextPageOrDefault,
  hasData,
  showNextPage,
} from "@/services/manga";
import { MangaPage } from "@/types/models/manga";
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
      <SelectedTextViewer />
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/manga/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
