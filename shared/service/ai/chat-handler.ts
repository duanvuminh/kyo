import { trimLineBreak } from "@/core/utils/utils";
import { getTextFromModelMessage } from "@/shared/lib/chat";
import { AIService } from "@/shared/service/ai/ai";
import {
  instructionGrammar,
  instructionKanji,
  instructionWord,
} from "@/shared/service/ai/instructions";
import { searchWord, updateWordsContent } from "@/shared/service/dictionary";
import { KWordType } from "@/shared/types/models/word-type";
import { ModelMessage, StreamTextResult, ToolSet } from "ai";

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

    const onFinish = ({ text }: { text: string }) => {
      if (word.type !== KWordType.OTHER && word.words !== "") {
        updateWordsContent({
          words: word.words,
          source: word.source,
          documentId: word.words,
          content: text,
        });
      }
    };

    let system = "";
    switch (word.type) {
      case KWordType.KANJI:
        system = instructionKanji
          .replace("$1", word.words)
          .replace("$2", word.hantu ?? "");
        break;
      case KWordType.GRAMMAR:
        system = instructionGrammar;
        break;
      case KWordType.WORD:
        system = instructionWord.replace("$1", message);
        break;
      case KWordType.OTHER:
        break;
    }

    return await aiService.chat(messages, { system, onFinish });
  } catch (error) {
    console.error("Chat handler error:", error);
    return undefined;
  }
}
