import { getWordFromExternalService } from "@/shared/repository/mazzi";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const word = await getWordFromExternalService(text);
    const data = word.data?.at(0)?.phonetic;

    if (!data || text != word.data?.at(0)?.word) {
      return NextResponse.json<ApiResponse>({});
    }
    return NextResponse.json<ApiResponse<string>>({ data });
  } catch (error) {
    const errorCode =
      error instanceof AppError ? error.code : ErrorCode.UNKNOWN;
    return NextResponse.json<ApiResponse>(
      { error: errorCode },
      { status: 500 }
    );
  }
}
