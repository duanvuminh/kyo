import { AIService } from "@/lib/services/ai/ai";
import {
  AIModelConfig,
  freeModel,
} from "@/lib/services/ai/provider/google-generative";

let freeInstance: AIService | null = null;

export const freeAiService = (): AIService => {
  if (!freeInstance) {
    freeInstance = new AIService(freeModel);
  }
  return freeInstance;
};

export type { AIModelConfig };
