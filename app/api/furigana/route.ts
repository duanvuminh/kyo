import { getWordFromExternalService } from "@/shared/repository/mazzi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const word = await getWordFromExternalService(text);
  if (text != word.data?.at(0)?.word) {
    return NextResponse.json({ result: undefined });
  }
  return NextResponse.json({ result: word.data?.at(0)?.phonetic });
}
