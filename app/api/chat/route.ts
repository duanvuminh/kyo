import { chatService } from "@/service/ai-factory";
import { convertToModelMessages, UIMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  if (!messages) {
    return NextResponse.json(null, {
      status: 500,
    });
  }

  const result = await chatService.handleMessages(
    convertToModelMessages(messages)
  );
  if (typeof result === "string") {
    const stringify = JSON.stringify(result);
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
  return result.toUIMessageStreamResponse();
}
