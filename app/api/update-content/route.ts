import { getAuthInfor } from "@/service/auth";
import { updateWordsContent } from "@/service/dictionary";
import { BaseItem } from "@/types/models/word";
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
