import { AIService } from "@/shared/service/ai/ai";
import {
  AIModelConfig,
  defaultModel,
  freeModel,
} from "@/shared/service/ai/provider/google-generative";

let instance: AIService | null = null;
let freeInstance: AIService | null = null;

export const aiService = (): AIService => {
  if (!instance) {
    instance = new AIService(defaultModel);
  }
  return instance;
};

export const freeAiService = (): AIService => {
  if (!freeInstance) {
    freeInstance = new AIService(freeModel);
  }
  return freeInstance;
};

export type { AIModelConfig };
