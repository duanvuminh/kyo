import { AiBase } from "@/shared/service/ai/ai";
import { openai } from "@ai-sdk/openai";

export class AiGpt extends AiBase {
  model = openai("gpt-4o");
}
