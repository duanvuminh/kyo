import { trimLineBreak } from "@/core/utils/utils";
import { getTextFromModelMessage } from "@/shared/lib/chat";
import { AIService } from "@/shared/service/ai/ai";
import { getWordById } from "@/shared/repository/firestore";
import { classifyWord } from "@/shared/service/ai/classify-word";
import { instructionKanji } from "@/shared/service/ai/instructions";
import { createWordsContent, searchWord } from "@/shared/service/dictionary";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { KWord } from "@/shared/type/models/word";
import { KWordType } from "@/shared/type/models/word-type";
import { ModelMessage } from "ai";

function createOnFinish(word: KWord) {
  return ({ text }: { text: string }) => {
    createWordsContent({
      words: word.words,
      source: word.source,
      documentId: word.words,
      content: text,
      type: word.type,
    });
  };
}

function _handleKanji(
  aiService: AIService,
  messages: ModelMessage[],
  word: KWord
) {
  const system = instructionKanji
    .replace("$1", word.words)
    .replace("$2", word.hantu ?? "");
  return aiService.chat(messages, { system, onFinish: createOnFinish(word) });
}

async function _handleClassifiable(
  word: KWord,
  message: string
): Promise<string> {
  const classified = await classifyWord(message);

  if (classified.type === KWordType.OTHER) {
    return classified.content;
  }

  const existing = await getWordById(classified.normalizedWord);
  if (existing?.content) {
    return existing.content;
  }

  createWordsContent({
    words: classified.normalizedWord,
    source: word.source,
    documentId: classified.normalizedWord,
    content: classified.content,
    type: classified.type,
  });

  return classified.content;
}

export async function handleChatMessages(
  aiService: AIService,
  messages: ModelMessage[]
): Promise<ReturnType<AIService["chat"]> | string | undefined> {
  try {
    const message = trimLineBreak(
      getTextFromModelMessage(messages.at(-1)) ?? ""
    );
    const word = await searchWord(message);

    if (word.content != null) {
      return word.content;
    }

    if (word.type === KWordType.KANJI) {
      return _handleKanji(aiService, messages, word);
    }

    return await _handleClassifiable(word, message);
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    const err =
      error instanceof Error ? error : new Error("Chat handler error");
    throw new AppError(ErrorCode.AI_MODEL_ERROR, { cause: err });
  }
}
