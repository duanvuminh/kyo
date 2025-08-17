import { AiBase } from "@/service/ai";
import { google } from "@ai-sdk/google";

export class AiGoogleGenerative extends AiBase {
  model = google("gemini-2.0-flash-lite-001");
}
