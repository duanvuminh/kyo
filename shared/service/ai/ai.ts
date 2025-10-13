import { trimLineBreak } from "@/core/utils/utils";
import { getTextFromModelMessage } from "@/shared/lib/chat";
import { askAi } from "@/shared/repository/ai";
import {
  instructionGrammar,
  instructionKanji,
  instructionPracticeGrammar,
  instructionPracticeWord,
  instructionWord,
} from "@/shared/service/ai/instructions";
import { searchWord } from "@/shared/service/dictionary";
import { BaseItem, KWord } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import { LanguageModel, ModelMessage, StreamTextResult, ToolSet } from "ai";

export abstract class AiBase {
  abstract model: LanguageModel;
  abstract saveAiReply: (item: BaseItem) => void;
  async handleMessages(
    messages: ModelMessage[]
  ): Promise<StreamTextResult<ToolSet, never> | string | undefined> {
    try {
      return await this._handleMessages(messages);
    } catch (error) {
      console.error("AI model error:", error);
      return undefined;
    }
  }
  async _handleMessages(
    messages: ModelMessage[]
  ): Promise<StreamTextResult<ToolSet, never> | string | undefined> {
    const message = trimLineBreak(
      getTextFromModelMessage(messages.at(-1)) ?? ""
    );
    const word = await searchWord(message);

    if (word.content != null) return word.content;

    const onFinish = ({ text }: { text: string }) => {
      if (word.type !== KWordType.OTHER && word.words !== "") {
        this.saveAiReply({
          words: word.words,
          source: word.source,
          documentId: word.words,
          content: text,
        });
      }
    };

    const opts = { model: this.model, messages, onFinish, system: "" };

    switch (word.type) {
      case KWordType.KANJI:
        opts.system = instructionKanji
          .replace("$1", word.words)
          .replace("$2", word.hantu ?? "");
        break;
      case KWordType.GRAMMAR:
        opts.system = instructionGrammar;
        break;
      case KWordType.WORD:
        opts.system = instructionWord.replace("$1", message);
        break;
      case KWordType.OTHER:
        break;
    }

    return await askAi(opts);
  }
  async summaryWord(word: KWord): Promise<string | undefined> {
    const opts =
      word.type === KWordType.GRAMMAR
        ? {
            model: this.model,
            prompt: word.words,
            system: instructionPracticeGrammar.replace("$1", word.words),
          }
        : {
            model: this.model,
            prompt: word.words,
            system: instructionPracticeWord.replace("$1", word.words),
          };
    const result = askAi({
      ...opts,
    });
    return result?.text;
  }
}
