import { NextResponse } from "next/server";

export function createTextStreamResponse(text: string): NextResponse {
  const stringify = JSON.stringify(text);
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(`data: {"type":"start"}\n\n`);
      controller.enqueue(`data: {"type":"start-step"}\n\n`);
      controller.enqueue(`data: {"type":"text-start","id":"0"}\n\n`);
      controller.enqueue(
        `data: {"type":"text-delta","id":"0","delta":${stringify}}\n\n`
      );
      controller.enqueue(`data: {"type":"text-end","id":"0"}\n\n`);
      controller.enqueue(`data: {"type":"finish-step"}\n\n`);
      controller.enqueue(`data: {"type":"finish"}\n\n`);
      controller.enqueue(`data: [DONE]\n\n`);
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
