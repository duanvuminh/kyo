import {
  AIOpenRouterMetaLlama,
  AiOpenRouterMetaLlama1,
  AiOpenRouterMetaLlama2,
  AiOpenRouterMicrosoft,
} from "@/services/ai-open-router";
import { getEnumValues, randomArrayElement } from "@/utils/utils";
import { AiBase } from "./ai";
import { AiGoogleGenerative } from "./ai-google-generative";
import { AiGpt } from "./ai-gpt";

enum ChatType {
  aiGoogleGenerative,
  aIOpenRouterMetaLlama,
  aiOpenRouterMetaLlama1,
  aiOpenRouterMetaLlama2,
  aiOpenRouterMicrosoft,
  aiGpt,
}
function createInstance(type: ChatType): AiBase {
  switch (type) {
    case ChatType.aIOpenRouterMetaLlama:
      return new AIOpenRouterMetaLlama();
    case ChatType.aiOpenRouterMetaLlama1:
      return new AiOpenRouterMetaLlama1();
    case ChatType.aiOpenRouterMetaLlama2:
      return new AiOpenRouterMetaLlama2();
    case ChatType.aiOpenRouterMicrosoft:
      return new AiOpenRouterMicrosoft();
    case ChatType.aiGpt:
      return new AiGpt();
    default:
      return new AiGoogleGenerative();
  }
}

const chatType = randomArrayElement<ChatType>(getEnumValues(ChatType));
// const chatService = createInstance(chatType);

export const chatService = createInstance(ChatType.aiGoogleGenerative);
