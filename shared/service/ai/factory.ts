import { AIService } from "@/shared/service/ai/ai";
import {
  AIModelConfig,
  freeModel,
} from "@/shared/service/ai/provider/google-generative";

let freeInstance: AIService | null = null;

export const freeAiService = (): AIService => {
  if (!freeInstance) {
    freeInstance = new AIService(freeModel);
  }
  return freeInstance;
};

export type { AIModelConfig };
