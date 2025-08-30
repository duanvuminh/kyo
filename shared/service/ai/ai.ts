import { trimLineBreak } from "@/core/utils/utils";
import { getTextFromModelMessage } from "@/shared/lib/chat";
import {
  instructionGrammar,
  instructionKanji,
  instructionPracticeGrammar,
  instructionPracticeWord,
  instructionWord,
} from "@/shared/service/ai/instructions";
import { searchWord, updateWordsContent } from "@/shared/service/dictionary";
import { KWord } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import {
  LanguageModel,
  ModelMessage,
  streamText,
  StreamTextOnFinishCallback,
  StreamTextResult,
  ToolSet,
} from "ai";

export abstract class AiBase {
  async handleMessages(
    messages: ModelMessage[]
  ): Promise<StreamTextResult<ToolSet, never> | string> {
    const message = trimLineBreak(
      getTextFromModelMessage(messages.at(-1)) ?? ""
    );
    const word = await searchWord(message);
    let result: StreamTextResult<ToolSet, never>;
    if (word.content == null) {
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
      switch (word.type) {
        case KWordType.KANJI:
          result = this._send({
            messages,
            system: instructionKanji
              .replace("$1", word.words)
              .replace("$2", word.hantu ?? ""),
            onFinish,
          });
          break;
        case KWordType.GRAMMAR:
          result = this._send({
            messages,
            system: instructionGrammar,
            onFinish,
          });
          break;
        case KWordType.WORD:
          result = this._send({
            messages,
            system: instructionWord.replace("$1", message),
            onFinish,
          });
          break;
        case KWordType.OTHER:
          result = this._send({ messages });
          break;
      }
    } else {
      return word.content;
    }
    return result;
  }
  async summaryWord(word: KWord): Promise<string> {
    const opts =
      word.type === KWordType.GRAMMAR
        ? {
            prompt: word.words,
            system: instructionPracticeGrammar.replace("$1", word.words),
          }
        : {
            prompt: word.words,
            system: instructionPracticeWord.replace("$1", word.words),
          };
    console.log("opts", opts);
    return this._sendPrompt({
      ...opts,
    }).text;
  }

  async verifyArticle(): Promise<boolean> {
    return (
      (await this._sendPrompt({
        prompt:
          "So sánh hai bài viết sau và nếu bài viết sau tốt hơn bài viết trước thì trả về 'correct', ngược lại trả về 'incorrect'.",
      }).text) === "correct"
    );
  }

  abstract model: LanguageModel;
  private _send({
    messages,
    system,
    onFinish,
  }: {
    messages: ModelMessage[];
    system?: string;
    onFinish?: StreamTextOnFinishCallback<ToolSet> | undefined;
  }): StreamTextResult<ToolSet, never> {
    return streamText({
      model: this.model,
      system,
      messages,
      onFinish,
    });
  }
  private _sendPrompt({
    prompt,
    system,
    onFinish,
  }: {
    prompt: string;
    system?: string;
    onFinish?: StreamTextOnFinishCallback<ToolSet> | undefined;
  }): StreamTextResult<ToolSet, never> {
    return streamText({
      model: this.model,
      prompt,
      system,
      onFinish,
    });
  }
}
