import { ChatBase } from "@/services/i-chat";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

const openrouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_AI_API_KEY || "",
});

export class KOpenRouterMetaLlama extends ChatBase {
  send(
    messages: CoreMessage[],
    system: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: openrouter.chat("meta-llama/llama-3.1-405b-instruct"),
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class KOpenRouterMetaLlama1 extends ChatBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: openrouter.chat("meta-llama/llama-4-maverick:free"),
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class KOpenRouterMetaLlama2 extends ChatBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: openrouter.chat("meta-llama/llama-4-scout:free"),
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class KOpenRouterMicrosoft extends ChatBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: openrouter.chat("microsoft/mai-ds-r1:free"),
      prompt: message.toString(),
      system,
    });
    return result;
  }
}
