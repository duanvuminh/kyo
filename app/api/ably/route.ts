import { getUserMail } from "@/shared/service/auth";
import Ably from "ably";
import { NextResponse } from "next/server";

export async function GET() {
  const email = await getUserMail();
  if (!email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.ABLY_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Ably API key not configured" }, { status: 500 });
  }

  const client = new Ably.Rest(apiKey);
  const tokenRequest = await client.auth.createTokenRequest({ clientId: email });

  return NextResponse.json(tokenRequest);
}
