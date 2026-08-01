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
    <div className="prose mx-auto w-full p-2">
      {displayData(pageData).map((manga) => (
        <KManga key={manga.id} manga={manga} />
      ))}
      <div className="not-prose flex items-center gap-3 pt-2 text-sm">
        {showNextPage(pageData) && (
          <Link href={`/manga/${getNextPageOrDefault(pageData)}`}>
            Bài viết cũ hơn
          </Link>
        )}
        <Link href="/manga/new" className="text-muted-foreground">
          Tạo manga mới
        </Link>
      </div>
    </div>
  ) : (
    <CenterMessage>
      <div className="flex flex-col items-center gap-2">
        <p>{page === "newest" ? "Chưa có manga nào." : "Không tìm thấy bài viết cũ hơn."}</p>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/manga/new" className="text-muted-foreground">
            Tạo manga mới
          </Link>
          {page !== "newest" && <Link href="/manga/newest">↪︎ Quay lại</Link>}
        </div>
      </div>
    </CenterMessage>
  );
}
