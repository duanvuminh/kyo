import { checkAuthenticated } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { BaseItem } from "@/shared/types/models/word";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return NextResponse.json<ApiResponse>({ success: false });
  }
  const item = (await request.json()) as BaseItem;
  if (item) {
    updateWordsContent(item);
  }
  return NextResponse.json<ApiResponse>({ success: true });
}
