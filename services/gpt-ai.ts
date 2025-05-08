import { ChatBase } from "@/services/i-chat";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

export class KGptAI extends ChatBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
    });
    return result;
  }
}
