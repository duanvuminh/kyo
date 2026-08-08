import { protectApi } from "@/lib/utils/api-protection";
import { createAblyTokenRequest } from "@/lib/services/ably";
import { getUserMail } from "@/lib/auth";
import { env } from "@/lib/env";
import { AppError, ErrorCode } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const protection = protectApi(req, { maxRequests: 5, windowMs: 60000 });
  if (!protection.success) {
    return protection.response;
  }

  const email = await getUserMail();
  if (!email) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const apiKey = env.ABLY_API_KEY;
  if (!apiKey) {
    throw new AppError(ErrorCode.ABLY_KEY_INVALID);
  }

  const tokenRequest = createAblyTokenRequest(email, apiKey);
  return NextResponse.json(tokenRequest);
}
