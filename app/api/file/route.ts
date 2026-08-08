import { buildProxyHeaders, fetchWithSlackAuth } from "@/lib/proxy-fetch";
import { AppError, ErrorCode } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const range = req.headers.get("range") ?? undefined;
  const upstream = await fetchWithSlackAuth(url, range);

  const isValidResponse = (upstream.ok || upstream.status === 206) && upstream.body;
  if (!isValidResponse) {
    throw new AppError(ErrorCode.UNKNOWN);
  }

  const headers = buildProxyHeaders(upstream.headers);
  return new NextResponse(upstream.body, { status: upstream.status, headers });

}
