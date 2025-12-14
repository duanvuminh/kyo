import { AIService } from "@/shared/service/ai/ai";
import {
  AIModelConfig,
  defaultModel,
} from "@/shared/service/ai/provider/google-generative";

let instance: AIService | null = null;

export const aiService = (): AIService => {
  if (!instance) {
    instance = new AIService(defaultModel);
  }
  return instance;
};

export type { AIModelConfig };
