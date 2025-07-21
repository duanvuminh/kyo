import { chatService } from "@/service/ai-factory";
import { CoreMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = (await req.json()) as {
    messages: CoreMessage[] | undefined;
  };
  if (!messages) {
    return NextResponse.json(null, {
      status: 500,
    });
  }
  const result = await chatService.handleMessages(messages);
  if (typeof result === "string") {
    const stringify = JSON.stringify(result);
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(`0:${stringify}`);
        controller.close();
      },
    });
    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
  return result.toDataStreamResponse();
}
