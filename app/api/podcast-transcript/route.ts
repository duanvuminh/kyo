import { apiFetch } from "@/lib/api-fetch";
import { fetchCacheConfig, ONE_WEEK } from "@/lib/constants";
import { isDev } from "@/lib/env";
import { AppError, ErrorCode } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

// Proxy transcript RSS trỏ tới (vtt/srt) để tránh CORS khi fetch từ client.
// Transcript hiếm khi đổi sau khi publish -> cache dài cho cả Next data cache (server)
// lẫn browser ở production, tránh tải lại nguyên file mỗi lần mở lại episode.
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const upstream = await apiFetch(url, fetchCacheConfig);
  if (!upstream.ok) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const text = await upstream.text();
  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": isDev ? "no-store" : `public, max-age=${ONE_WEEK}, stale-while-revalidate=${ONE_WEEK}`,
    },
  });
}
