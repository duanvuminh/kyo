import {
  instructionPracticeGrammar,
  instructionPracticeWord,
} from "@/lib/services/ai/instructions";
import { AIModelConfig } from "@/lib/services/ai/provider/google-generative";
import { KWord, KWordType } from "@/lib/types";
import {
  generateText as aiGenerateText,
  ModelMessage,
  Output,
  Schema,
  streamText,
} from "ai";
import { z } from "zod";

export class AIService {
  constructor(private config: AIModelConfig) { }

  get model() {
    return this.config.model;
  }

  get maxOutputTokens() {
    return this.config.maxOutputTokens;
  }

  chat(
    messages: ModelMessage[],
    options?: {
      system?: string;
      onFinish?: (result: { text: string }) => void;
    }
  ) {
    return streamText({
      model: this.model,
      messages,
      system: options?.system,
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
    const result = await aiGenerateText({
      model: this.model,
      prompt,
      system,
      output: Output.object({ schema }),
    });
    return result.output as T;
  }

  async summaryWord(word: KWord): Promise<string | undefined> {
    const system =
      word.type === KWordType.GRAMMAR
        ? instructionPracticeGrammar.replace("$1", word.words)
        : instructionPracticeWord.replace("$1", word.words);

    const result = await aiGenerateText({
      model: this.model,
      prompt: word.words,
      system,
    });

    return result.text;
  }
}
