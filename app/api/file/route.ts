import { buildProxyHeaders, fetchWithSlackAuth } from "@/shared/lib/proxy-fetch";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get("url");
    if (!url) {
      return NextResponse.json<ApiResponse>({ error: ErrorCode.UNKNOWN }, { status: 400 });
    }

    const range = req.headers.get("range") ?? undefined;
    const upstream = await fetchWithSlackAuth(url, range);

    const isValidResponse = (upstream.ok || upstream.status === 206) && upstream.body;
    if (!isValidResponse) {
      return NextResponse.json<ApiResponse>({ error: ErrorCode.UNKNOWN }, { status: upstream.status || 502 });
    }

    const headers = buildProxyHeaders(upstream.headers);
    return new NextResponse(upstream.body, { status: upstream.status, headers });
  } catch (error) {
    const errorCode = error instanceof AppError ? error.code : ErrorCode.UNKNOWN;
    return NextResponse.json<ApiResponse>({ error: errorCode }, { status: 500 });
  }
}
