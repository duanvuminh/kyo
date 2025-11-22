import { AiBase } from "@/shared/service/ai/ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_AI_API_KEY || "",
});

export class AIOpenRouterMetaLlama extends AiBase {
  maxOutputTokens = 10000;
  saveAiReply = () => {};
  model = openrouter.chat("meta-llama/llama-3.1-405b-instruct");
}

export class AiOpenRouterMetaLlama1 extends AiBase {
  maxOutputTokens = 10000;
  saveAiReply = () => {};
  model = openrouter.chat("meta-llama/llama-4-maverick:free");
}

export class AiOpenRouterMetaLlama2 extends AiBase {
  maxOutputTokens = 10000;
  saveAiReply = () => {};
  model = openrouter.chat("meta-llama/llama-4-scout:free");
}

export class AiOpenRouterMicrosoft extends AiBase {
  maxOutputTokens = 10000;
  saveAiReply = () => {};
  model = openrouter.chat("microsoft/mai-ds-r1:free");
}

export class AiOpenRouterDeepseekR1 extends AiBase {
  maxOutputTokens = 10000;
  saveAiReply = () => {};
  model = openrouter.chat("tngtech/deepseek-r1t2-chimera:free");
}
