import { AppError, ErrorCode } from "@/shared/types/models/error";
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
  onFinish,
}: {
  model: LanguageModel;
  messages?: ModelMessage[];
  system?: string;
  prompt?: string;
  onFinish?: StreamTextOnFinishCallback<ToolSet>;
}): StreamTextResult<ToolSet, never> | undefined => {
  try {
    return streamText({
      model,
      system,
      onFinish,
      ...(prompt ? { prompt } : { messages: messages ?? [] }),
    });
  } catch (error) {
    throw new AppError(ErrorCode.AI_MODEL_ERROR, (error as Error).message);
  }
};
