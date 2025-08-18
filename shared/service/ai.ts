import { getTextFromModelMessage } from "@/shared/lib/chat";
import { searchWord, updateWordsContent } from "@/shared/service/dictionary";
import { KWord } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import { trimLineBreak } from "@/shared/utils/utils";
import {
  LanguageModel,
  ModelMessage,
  streamText,
  StreamTextOnFinishCallback,
  StreamTextResult,
  ToolSet,
} from "ai";

const instructionKanji = `Giải thích kanji tiếng nhật theo format dưới đây

$1 ($2)

1. Ý nghĩa(bạn cho cả ví dụ nhé)
2. Cách đọc(bạn cho cả ví dụ nhé)
3. Cách viết/Nhớ

Tổng quan (bạn đánh giá độ quan trọng, tần suất sử dụng)`;
const instructionGrammar = `Giải thích ngữ pháp, cách dùng tiếng nhật, so sánh ngữ pháp tương tự của từ sau`;
const instructionWord = `Giải thích ý nghĩa của từ tiếng nhật sau
$1(cách phát âm)
1. Ý nghĩa
2. Ví dụ
3. Phân biệt các từ có nghĩa tương tự nếu có
`;
const instructionPracticeGrammar = `Giải thích ngắn gọn cách phát âm, ngữ pháp $1 trong 2 dòng`;
const instructionPracticeWord = `Giải thích ngắn gọn cách phát âm, ý nghĩa $1 trong 2 dòng`;

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
  async handleMessagesPractice(word: KWord): Promise<string> {
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

    return new Promise<string>((resolve) => {
      this._sendPrompt({
        ...opts,
        onFinish: ({ text }) => resolve(text),
      });
    });
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
