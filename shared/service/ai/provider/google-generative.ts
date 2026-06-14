import { createGoogleGenerativeAI, google } from "@ai-sdk/google";
import { LanguageModel } from "ai";

export interface AIModelConfig {
  id: string;
  name: string;
  model: LanguageModel;
  maxOutputTokens?: number;
}

export const defaultModel: AIModelConfig = {
  id: "gemini-flash-lite",
  name: "Gemini 2.0 Flash",
  model: google("gemini-2.0-flash"),
};

const googleFree = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY_FREE,
});

export const freeModel: AIModelConfig = {
  id: "gemini-flash-free",
  name: "Gemini 2.5 Flash Lite",
  model: googleFree("gemini-2.5-flash-lite"),
};
