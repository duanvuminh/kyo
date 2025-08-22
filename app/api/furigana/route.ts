import { getWordFromExternalService } from "@/shared/repository/mazzi";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const word = await getWordFromExternalService(text);
  const data = word.data?.at(0)?.phonetic;

  if (!data || text != word.data?.at(0)?.word) {
    return NextResponse.json<ApiResponse>({ success: false });
  }
  return NextResponse.json<ApiResponse<string>>({
    data,
    success: true,
  });
}
