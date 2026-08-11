import { AppError, ErrorCode } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

// Nhiều feed podcast dùng URL redirect/tracking (anchor.fm, podtrac...) trước khi tới file
// audio thật, mobile Safari xử lý Range request qua lớp redirect này không ổn định.
// Server chỉ resolve redirect (HEAD, không tải body) rồi 302 cho client tự tải thẳng từ
// CDN cuối cùng - không proxy toàn bộ audio qua server để tránh tốn băng thông/execution time.
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const resolved = await fetch(url, { method: "HEAD" }).catch(() => null);
  const finalUrl = resolved?.url && resolved.ok ? resolved.url : url;

  return NextResponse.redirect(finalUrl, 302);
}
