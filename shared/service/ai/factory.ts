import { getEnumValues, randomArrayElement } from "@/core/utils/utils";
import { AiBase } from "@/shared/service/ai/ai";
import { AiGoogleGenerative } from "@/shared/service/ai/provider/google-generative";
import { AiGpt } from "@/shared/service/ai/provider/gpt";
import {
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
  AI_GPT,
}
function createInstance(type: AIProvider): AiBase {
  switch (type) {
    case AIProvider.AI_OPENROUTER_META_LLAMA:
      return new AIOpenRouterMetaLlama();
    case AIProvider.AI_OPENROUTER_META_LLAMA1:
      return new AiOpenRouterMetaLlama1();
    case AIProvider.AI_OPENROUTER_META_LLAMA2:
      return new AiOpenRouterMetaLlama2();
    case AIProvider.AI_OPENROUTER_MICROSOFT:
      return new AiOpenRouterMicrosoft();
    case AIProvider.AI_GPT:
      return new AiGpt();
    default:
      return new AiGoogleGenerative();
  }
}
const blacklist: Set<AIProvider> = new Set([]);
const availableProviders = getEnumValues(AIProvider).filter(
  (provider) => !blacklist.has(provider)
);
const aiProvider = randomArrayElement<AIProvider>(availableProviders);
export const aiService = createInstance(aiProvider);
