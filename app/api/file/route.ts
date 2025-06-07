import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const slackRes = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_API_KEY}`,
    },
  });

  if (!slackRes.ok || !slackRes.body) {
    return NextResponse.json(
      { error: "Failed to fetch stream" },
      { status: slackRes.status || 500 }
    );
  }

  return new NextResponse(slackRes.body, {
    headers: {
      "Content-Type":
        slackRes.headers.get("content-type") || "application/octet-stream",
      "Content-Disposition":
        slackRes.headers.get("content-disposition") || "inline",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=2592000",
    },
  });
}
