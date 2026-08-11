import { buildProxyHeaders } from "@/lib/proxy-fetch";
import { AppError, ErrorCode } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

// Nhiều feed podcast dùng URL redirect/tracking (anchor.fm, podtrac...) trước khi tới
// file audio thật. Node fetch() tự follow redirect + forward Range header ổn định hơn
// so với để mobile Safari tự xử lý redirect+range trực tiếp -> proxy qua server cho chắc.
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const range = req.headers.get("range") ?? undefined;
  const upstream = await fetch(url, { headers: range ? { range } : undefined });

  const isValidResponse = (upstream.ok || upstream.status === 206) && upstream.body;
  if (!isValidResponse) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const headers = buildProxyHeaders(upstream.headers);
  return new NextResponse(upstream.body, { status: upstream.status, headers });
}
