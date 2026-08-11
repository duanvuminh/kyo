import { AppError, ErrorCode } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

// Proxy transcript RSS trỏ tới (vtt/srt) để tránh CORS khi fetch từ client.
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const upstream = await fetch(url);
  if (!upstream.ok) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const text = await upstream.text();
  return new NextResponse(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
