import { AiBase } from "@/service/ai";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

export class AiGpt extends AiBase {
  private model = openai("gpt-4o");
  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      system,
      model: this.model,
      prompt,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      system,
      model: this.model,
      messages,
    });
    return result;
  }
}
