import { getEnumValues, randomArrayElement } from "@/core/utils/utils";
import { AiBase } from "@/shared/service/ai/ai";
import { AiGoogleGenerative } from "@/shared/service/ai/provider/google-generative";
import {
  AiOpenRouterDeepseekR1,
  AIOpenRouterMetaLlama,
  AiOpenRouterMetaLlama1,
  AiOpenRouterMetaLlama2,
  AiOpenRouterMicrosoft,
} from "@/shared/service/ai/provider/open-router";

enum AIProvider {
  AI_GOOGLE_GENERATIVE,
  AI_OPENROUTER_META_LLAMA,
  AI_OPENROUTER_META_LLAMA1,
  AI_OPENROUTER_META_LLAMA2,
  AI_OPENROUTER_MICROSOFT,
  AI_OPENROUTER_DEEPSEEK_R1,
}
function createInstance(type: AIProvider): AiBase {
  console.log("AI Provider:", AIProvider[type]);
  switch (type) {
    case AIProvider.AI_OPENROUTER_META_LLAMA:
      return new AIOpenRouterMetaLlama();
    case AIProvider.AI_OPENROUTER_META_LLAMA1:
      return new AiOpenRouterMetaLlama1();
    case AIProvider.AI_OPENROUTER_META_LLAMA2:
      return new AiOpenRouterMetaLlama2();
    case AIProvider.AI_OPENROUTER_MICROSOFT:
      return new AiOpenRouterMicrosoft();
    case AIProvider.AI_OPENROUTER_DEEPSEEK_R1:
      return new AiOpenRouterDeepseekR1();
    default:
      return new AiGoogleGenerative();
  }
}
const availableProviders = getEnumValues(AIProvider);
const aiProvider = () => {
  if (process.env.NODE_ENV === "development") {
    return AIProvider.AI_GOOGLE_GENERATIVE;
  }
  return randomArrayElement<AIProvider>(availableProviders);
};
export const aiService = () => createInstance(aiProvider());
