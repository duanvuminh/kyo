import { createGoogleGenerativeAI, google } from "@ai-sdk/google";
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

// Gemini 1.5 Flash - dùng API key free từ AI Studio
const googleFree = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY_FREE,
});

export const freeModel: AIModelConfig = {
  id: "gemini-flash-free",
  name: "Gemini 2.0 Flash",
  model: googleFree("gemini-2.0-flash"),
};
