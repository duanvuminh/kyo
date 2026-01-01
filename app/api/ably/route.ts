import { getUserMail } from "@/shared/service/auth";
import crypto from "crypto";
import { NextResponse } from "next/server";

function createAblyTokenRequest(email: string, apiKey: string) {
  const [keyName, keySecret] = apiKey.split(":");
  if (!keyName || !keySecret) {
    throw new Error("Invalid Ably API key");
  }

  const clientId = email;
  const ttl = ""; // use default TTL
  const capability = ""; // use key's full capability
  const timestamp = Date.now();
  const nonce = crypto.randomBytes(16).toString("hex");

  const signText =
    keyName +
    "\n" +
    ttl +
    "\n" +
    capability +
    "\n" +
    clientId +
    "\n" +
    timestamp +
    "\n" +
    nonce +
    "\n";

  const mac = crypto
    .createHmac("sha256", keySecret)
    .update(signText)
    .digest("base64");

  return {
    keyName,
    clientId,
    timestamp,
    nonce,
    mac,
  };
}

export async function GET() {
  const email = await getUserMail();
  if (!email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.ABLY_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Ably API key not configured" },
      { status: 500 }
    );
  }

  try {
    const tokenRequest = createAblyTokenRequest(email, apiKey);
    return NextResponse.json(tokenRequest);
  } catch (error) {
    console.error("Failed to create Ably token request", error);
    return NextResponse.json(
      { error: "Failed to create Ably token request" },
      { status: 500 }
    );
  }
}
