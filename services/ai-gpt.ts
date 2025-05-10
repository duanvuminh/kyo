import { AiBase } from "@/services/ai";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

export class AiGpt extends AiBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      system,
      model: openai("gpt-4o"),
      messages,
    });
    return result;
  }
}
