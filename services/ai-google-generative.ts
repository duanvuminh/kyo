import { AiBase } from "@/services/ai";
import { google } from "@ai-sdk/google";
import { CoreMessage, streamText, StreamTextResult, ToolSet } from "ai";

export class AiGoogleGenerative extends AiBase {
  send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never> {
    const model = google("gemini-2.0-flash-lite-001");
    const result = streamText({
      model,
      system,
      messages,
      maxTokens: 4096,
      temperature: 0.7,
      topP: 0.4,
    });
    return result;
  }
}
