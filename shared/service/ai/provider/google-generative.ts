import { google } from "@ai-sdk/google";
import { LanguageModel } from "ai";

export interface AIModelConfig {
  id: string;
  name: string;
  model: LanguageModel;
  maxOutputTokens?: number;
}

// Gemini 2.0 Flash Lite - model rẻ nhất của Google
export const defaultModel: AIModelConfig = {
  id: "gemini-flash-lite",
  name: "Gemini 2.0 Flash Lite",
  model: google("gemini-2.0-flash-lite-001"),
};
