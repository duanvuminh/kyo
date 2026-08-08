import { trimLineBreak } from "@/lib/utils/utils";
import { AIService } from "@/lib/services/ai/ai";
import { classifyWord } from "@/lib/services/ai/classify-word";
import { instructionKanji } from "@/lib/services/ai/instructions";
import { createWordsContent, searchWord } from "@/lib/services/dictionary.service";
import { AppError, ErrorCode, KWord, KWordType } from "@/lib/types";
import { ModelMessage } from "ai";

function getTextFromModelMessage(msg?: ModelMessage): string | undefined {
  if (!msg) {
    return undefined;
  }
  if (Array.isArray(msg.content)) {
    const t = msg.content.find((p) => p?.type === "text")?.text;
    return typeof t === "string" ? t : undefined;
  }
}

function createOnFinish(word: KWord) {
  return async ({ text }: { text: string }) => {
    await createWordsContent({
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
  const system = instructionKanji.replace("$1", word.words);
  return aiService.chat(messages, { system, onFinish: createOnFinish(word) });
}

async function _handleClassifiable(word: KWord): Promise<string> {
  const classified = await classifyWord(word.words);
  if (classified.type === KWordType.OTHER) {
    return classified.content;
  }

  await createWordsContent({
    words: word.words,
    source: word.source,
    documentId: word.words,
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

    return await _handleClassifiable(word);
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    const err =
      error instanceof Error ? error : new Error("Chat handler error");
    throw new AppError(ErrorCode.AI_MODEL_ERROR, { cause: err });
  }
}
