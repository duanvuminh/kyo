import { searchWord } from "@/shared/service/dictionary";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { KWordType } from "@/shared/types/models/word-type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const words = req.nextUrl.searchParams.get("words");
    if (!words)
      return NextResponse.json<ApiResponse>(
        { error: ErrorCode.UNKNOWN },
        { status: 400 }
      );
    const result = await searchWord(words);
    const isValid = result.words === words && result.type !== KWordType.OTHER;
    return NextResponse.json<ApiResponse<boolean>>({ data: isValid });
  } catch (error) {
    const errorCode =
      error instanceof AppError ? error.code : ErrorCode.UNKNOWN;
    return NextResponse.json<ApiResponse>(
      { error: errorCode },
      { status: 500 }
    );
  }
}
