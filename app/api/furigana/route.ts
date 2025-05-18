import { getWordFromInternet } from "@/repository/dictionary-repository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const word = await getWordFromInternet(text);
  console.log(word);
  if (text != word.data?.at(0)?.word) {
    return NextResponse.json({ result: "" });
  }
  return NextResponse.json({ result: word.data?.at(0)?.phonetic });
}
