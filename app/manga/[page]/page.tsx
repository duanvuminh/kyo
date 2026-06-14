export const dynamic = "force-dynamic";

import { KManga } from "@/feature/manga/component/manga-panel";
import { getManga } from "@/feature/manga/service/manga";
import {
  displayData,
  getNextPageOrDefault,
  hasData,
  showNextPage,
  type MangaViewModel,
} from "@/feature/manga/type/manga.view-model";
import { CenterMessage } from "@/shared/component/center-message";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: MangaViewModel = await getManga({ page });
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
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/manga/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
