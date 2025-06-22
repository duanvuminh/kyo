import { AiBase } from "@/services/ai";
import { google } from "@ai-sdk/google";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

export class AiGoogleGenerative extends AiBase {
  private model = google("gemini-2.0-flash-lite-001");

  sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      system,
      prompt,
      maxTokens: 4096,
      temperature: 0.7,
      topP: 0.4,
    });
    return result;
  }
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const result = streamText({
      model: this.model,
      system,
      messages,
      maxTokens: 4096,
      temperature: 0.7,
      topP: 0.4,
    });
    return result;
  }
}
