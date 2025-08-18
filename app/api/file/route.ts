import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const range = req.headers.get("range") || undefined;

  const upstream = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_API_KEY ?? ""}`,
      ...(range ? { range } : {}),
    },
  });

  if ((!upstream.ok && upstream.status !== 206) || !upstream.body) {
    return NextResponse.json(
      { error: "Failed to fetch stream" },
      { status: upstream.status || 502 }
    );
  }

  const headers = new Headers();
  const pass = [
    "content-type",
    "content-length",
    "accept-ranges",
    "content-range",
    "etag",
    "last-modified",
    "cache-control",
    "content-disposition",
  ];
  for (const k of pass) {
    const v = upstream.headers.get(k);
    if (v) headers.set(k, v);
  }

  if (!headers.has("content-disposition"))
    headers.set("content-disposition", "inline");
  if (!headers.has("content-type")) headers.set("content-type", "video/mp4");
  if (!headers.has("accept-ranges")) headers.set("accept-ranges", "bytes");
  headers.set("Access-Control-Allow-Origin", "*");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
