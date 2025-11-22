import {
  LanguageModel,
  ModelMessage,
  streamText,
  StreamTextOnFinishCallback,
  StreamTextResult,
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
  onFinish?: StreamTextOnFinishCallback<ToolSet>;
}): StreamTextResult<ToolSet, never> | undefined => {
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
