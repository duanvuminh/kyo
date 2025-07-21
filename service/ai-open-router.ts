import { AiBase } from "@/service/ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

const openrouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_AI_API_KEY || "",
});

export class AIOpenRouterMetaLlama extends AiBase {
  private model = openrouter.chat("meta-llama/llama-3.1-405b-instruct");
  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      prompt,
      system,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: this.model,
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class AiOpenRouterMetaLlama1 extends AiBase {
  private model = openrouter.chat("meta-llama/llama-4-maverick:free");
  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      prompt,
      system,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: this.model,
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class AiOpenRouterMetaLlama2 extends AiBase {
  private model = openrouter.chat("meta-llama/llama-4-scout:free");
  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      prompt,
      system,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: this.model,
      prompt: message.toString(),
      system,
    });
    return result;
  }
}

export class AiOpenRouterMicrosoft extends AiBase {
  private model = openrouter.chat("microsoft/mai-ds-r1:free");
  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      prompt,
      system,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    if (!messages || messages.length === 0) {
      throw new Error("Messages are undefined or empty.");
    }
    const message = messages[messages.length - 1].content;
    const result = streamText({
      model: this.model,
      prompt: message.toString(),
      system,
    });
    return result;
  }
}
