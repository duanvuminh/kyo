import {
  AIOpenRouterMetaLlama,
  AiOpenRouterMetaLlama1,
  AiOpenRouterMetaLlama2,
  AiOpenRouterMicrosoft,
} from "@/shared/service/ai-open-router";
import { AiBase } from "./ai";
import { AiGoogleGenerative } from "./ai-google-generative";
import { AiGpt } from "./ai-gpt";

enum ChatType {
  AI_GOOGLE_GENERATIVE,
  AI_OPENROUTER_META_LLAMA,
  AI_OPENROUTER_META_LLAMA1,
  AI_OPENROUTER_META_LLAMA2,
  AI_OPENROUTER_MICROSOFT,
  AI_GPT,
}
function createInstance(type: ChatType): AiBase {
  switch (type) {
    case ChatType.AI_OPENROUTER_META_LLAMA:
      return new AIOpenRouterMetaLlama();
    case ChatType.AI_OPENROUTER_META_LLAMA1:
      return new AiOpenRouterMetaLlama1();
    case ChatType.AI_OPENROUTER_META_LLAMA2:
      return new AiOpenRouterMetaLlama2();
    case ChatType.AI_OPENROUTER_MICROSOFT:
      return new AiOpenRouterMicrosoft();
    case ChatType.AI_GPT:
      return new AiGpt();
    default:
      return new AiGoogleGenerative();
  }
}

// const chatType = randomArrayElement<ChatType>(getEnumValues(ChatType));
// const chatService = createInstance(chatType);

export const chatService = createInstance(ChatType.AI_GOOGLE_GENERATIVE);
