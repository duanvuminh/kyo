import {
  LanguageModel,
  ModelMessage,
  GenerateTextEndEvent,
  streamText,
  ToolSet,
} from "ai";

export const askAi = ({
  model,
  messages,
  system,
  prompt,
  maxOutputTokens,
  onFinish,
}: {
  model: LanguageModel;
  messages?: ModelMessage[];
  system?: string;
  prompt?: string;
  maxOutputTokens?: number;
  onFinish?: (event: GenerateTextEndEvent<ToolSet>) => void | Promise<void>;
}) => {
  return streamText({
    model,
    system,
    maxOutputTokens,
    onFinish,
    ...(prompt ? { prompt } : { messages: messages ?? [] }),
    onError: (error: unknown) => {
      console.error("AI stream error (get it next time):", error);
    },
  });
};
