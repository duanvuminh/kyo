import { KGoogleGenerativeAI } from "@/services/google-generative-ai";
import { ChatBase } from "@/services/i-chat";
import {
  KOpenRouterMetaLlama,
  KOpenRouterMetaLlama1,
  KOpenRouterMetaLlama2,
  KOpenRouterMicrosoft,
} from "@/services/open-router-ai";
import { getEnumValues, randomArrayElement } from "@/utils/utils";
import { CoreMessage } from "ai";

enum ChatType {
  googleGenerativeAI,
  kOpenRouterMetaLlama,
  kOpenRouterMetaLlama1,
  kOpenRouterMetaLlama2,
  kOpenRouterMicrosoft,
}

function createInstance(type: ChatType): ChatBase {
  switch (type) {
    case ChatType.kOpenRouterMetaLlama:
      return new KOpenRouterMetaLlama();
    case ChatType.kOpenRouterMetaLlama1:
      return new KOpenRouterMetaLlama1();
    case ChatType.kOpenRouterMetaLlama2:
      return new KOpenRouterMetaLlama2();
    case ChatType.kOpenRouterMicrosoft:
      return new KOpenRouterMicrosoft();
    default:
      return new KGoogleGenerativeAI();
  }
}

const chatType = randomArrayElement<ChatType>(getEnumValues(ChatType));
// const chatService = createInstance(chatType);
const chatService = createInstance(ChatType.googleGenerativeAI);

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: CoreMessage[] };
  const result = await chatService.handleMessages(messages);
  if (typeof result === "string") {
    const stringify = JSON.stringify(result);
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(`0:${stringify}`);
        controller.close();
      },
    });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
  return result.toDataStreamResponse();
}
