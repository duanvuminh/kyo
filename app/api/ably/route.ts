import { protectApi } from "@/core/utils/api-protection";
import { createAblyTokenRequest } from "@/feature/qna/services/ably";
import { getUserMail } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";
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

  const apiKey = process.env.ABLY_API_KEY;
  if (!apiKey) {
    throw new AppError(ErrorCode.ABLY_KEY_INVALID);
  }

  const tokenRequest = createAblyTokenRequest(email, apiKey);
  return NextResponse.json(tokenRequest);
}
