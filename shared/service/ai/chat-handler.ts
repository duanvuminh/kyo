import { trimLineBreak } from "@/core/utils/utils";
import { getTextFromModelMessage } from "@/shared/lib/chat";
import { AIService } from "@/shared/service/ai/ai";
import {
  instructionGrammar,
  instructionKanji,
  instructionWord,
} from "@/shared/service/ai/instructions";
import { createWordsContent, searchWord } from "@/shared/service/dictionary";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { KWord } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import { ModelMessage, StreamTextResult, ToolSet } from "ai";

function getSystemInstruction(word: KWord, message: string): string {
  switch (word.type) {
    case KWordType.KANJI:
      return instructionKanji
        .replace("$1", word.words)
        .replace("$2", word.hantu ?? "");
    case KWordType.GRAMMAR:
      return instructionGrammar;
    case KWordType.WORD:
      return instructionWord.replace("$1", message);
    default:
      return "";
  }
}

function createOnFinish(word: KWord) {
  return ({ text }: { text: string }) => {
    if (word.type !== KWordType.OTHER && word.words !== "") {
      createWordsContent({
        words: word.words,
        source: word.source,
        documentId: word.words,
        content: text,
      });
    }
  };
}

export async function handleChatMessages(
  aiService: AIService,
  messages: ModelMessage[]
): Promise<StreamTextResult<ToolSet, never> | string | undefined> {
  try {
    const message = trimLineBreak(
      getTextFromModelMessage(messages.at(-1)) ?? ""
    );
    const word = await searchWord(message);

    if (word.content != null) {
      return word.content;
    }

    const system = getSystemInstruction(word, message);
    const onFinish = createOnFinish(word);

    return await aiService.chat(messages, { system, onFinish });
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    const err =
      error instanceof Error ? error : new Error("Chat handler error");
    throw new AppError(ErrorCode.AI_MODEL_ERROR, { cause: err });
  }
}
