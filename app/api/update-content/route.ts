import { updateWordsContent } from "@/repository/dictionary-repository";
import { getAuthInfor } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const isAuth = await getAuthInfor();
  if (!isAuth) {
    return NextResponse.json({ success: true });
  }
  const { words, content } = (await request.json()) as {
    words: string;
    content: string;
  };
  updateWordsContent(words, content);
  return NextResponse.json({ success: true });
}
