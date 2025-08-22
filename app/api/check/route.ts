import { searchWord } from "@/shared/service/dictionary";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { KWordType } from "@/shared/types/models/word-type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const words = req.nextUrl.searchParams.get("words");
  if (!words) return NextResponse.json<ApiResponse>({ success: false });
  const result = await searchWord(words);
  return NextResponse.json<ApiResponse>({
    success: result.type !== KWordType.OTHER,
  });
}
