import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();
  const elevenRes = await fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128",
    {
      method: "POST",
      headers: {
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_API_KEY ?? "",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_turbo_v2_5",
        voice_settings: { stability: 0.7, similarity_boost: 0.7 },
        language_code: "ja",
      }),
    }
  );

  const audioBuffer = await elevenRes.arrayBuffer();
  return new NextResponse(audioBuffer, {
    status: 200,
    headers: { "Content-Type": "audio/mpeg" },
  });
}
