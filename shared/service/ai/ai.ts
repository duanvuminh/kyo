import { askAi } from "@/shared/repository/ai";
import {
  instructionPracticeGrammar,
  instructionPracticeWord,
} from "@/shared/service/ai/instructions";
import { AIModelConfig } from "@/shared/service/ai/provider/google-generative";
import { KWord } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import {
  generateObject as aiGenerateObject,
  ModelMessage,
  Schema,
  StreamTextResult,
  ToolSet,
} from "ai";
import { z } from "zod";

export class AIService {
  constructor(private config: AIModelConfig) {}

  get model() {
    return this.config.model;
  }

  get maxOutputTokens() {
    return this.config.maxOutputTokens;
  }

  async chat(
    messages: ModelMessage[],
    options?: {
      system?: string;
      onFinish?: (result: { text: string }) => void;
    }
  ): Promise<StreamTextResult<ToolSet, never> | undefined> {
    return askAi({
      model: this.model,
      messages,
      system: options?.system,
      maxOutputTokens: this.maxOutputTokens,
      onFinish: options?.onFinish,
    });
  }

  async generateObject<T>({
    prompt,
    system,
    schema,
  }: {
    prompt: string;
    system?: string;
    schema: z.ZodType<T> | Schema<T>;
  }): Promise<T> {
    const result = await aiGenerateObject({
      model: this.model,
      prompt,
      system,
      schema,
    });
    return result.object;
  }

  async summaryWord(word: KWord): Promise<string | undefined> {
    const system =
      word.type === KWordType.GRAMMAR
        ? instructionPracticeGrammar.replace("$1", word.words)
        : instructionPracticeWord.replace("$1", word.words);

    const result = askAi({
      model: this.model,
      prompt: word.words,
      system,
      maxOutputTokens: this.maxOutputTokens,
    });

    return result?.text;
  }
}
