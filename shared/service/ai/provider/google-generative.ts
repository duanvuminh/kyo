import { AiBase } from "@/shared/service/ai/ai";
import { google } from "@ai-sdk/google";

export class AiGoogleGenerative extends AiBase {
  model = google("gemini-2.0-flash-lite-001");
}
