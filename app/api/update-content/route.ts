import { getAuthInfor } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { BaseItem } from "@/shared/types/models/word";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const isAuth = await getAuthInfor();
  if (!isAuth) {
    return NextResponse.json({ success: true });
  }
  const item = (await request.json()) as BaseItem;
  if (item) {
    updateWordsContent(item);
  }
  return NextResponse.json({});
}
