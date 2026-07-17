import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { LanguageModel } from "ai";

export interface AIModelConfig {
  id: string;
  name: string;
  model: LanguageModel;
  maxOutputTokens?: number;
}

const googleFree = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY_FREE,
});

export const freeModel: AIModelConfig = {
  id: "gemini-flash-free",
  name: "Gemini 2.5 Flash Lite",
  model: googleFree("gemini-2.5-flash-lite"),
};
