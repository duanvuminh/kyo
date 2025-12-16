import { checkAuthenticated } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { BaseItem } from "@/shared/types/models/word";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
      return NextResponse.json<ApiResponse>(
        { error: ErrorCode.UNKNOWN },
        { status: 401 }
      );
    }
    const item = (await request.json()) as BaseItem;
    if (item) {
      updateWordsContent(item);
    }
    return NextResponse.json<ApiResponse<boolean>>({ data: true });
  } catch (error) {
    const errorCode =
      error instanceof AppError ? error.code : ErrorCode.UNKNOWN;
    return NextResponse.json<ApiResponse>(
      { error: errorCode },
      { status: 500 }
    );
  }
}
