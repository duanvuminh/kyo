export const dynamic = "force-dynamic";

import { KManga } from "@/app/manga/_components/manga-panel";
import { getManga } from "@/app/manga/_lib/manga.service";
import {
  displayData,
  getNextPageOrDefault,
  hasData,
  showNextPage,
  type MangaViewModel,
} from "@/app/manga/_lib/manga.types";
import { CenterContent } from "@/lib/components/center-content";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageData: MangaViewModel = await getManga({ page });

  if (!hasData(pageData)) {
    // "newest" rỗng là empty state hợp lệ (chưa có manga nào) — không phải 404;
    // chỉ 1 trang cursor cụ thể không có dữ liệu mới thật sự "không tìm thấy"
    if (page !== "newest") {
      notFound();
    }
    return (
      <CenterContent>
        <div className="flex flex-col items-center gap-2">
          <p>Chưa có manga nào.</p>
          <Link href="/manga/new" className="text-muted-foreground text-sm">
            Tạo manga mới
          </Link>
        </div>
      </CenterContent>
    );
  }

  return (
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
  );
}
