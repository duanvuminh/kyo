import { kStreamText } from "@/lib/chat";
import { searchWord, updateWordsContent } from "@/service/dictionary";
import { KWord } from "@/types/models/word";
import { KWordType } from "@/types/models/word-type";
import { trimLineBreak } from "@/utils/utils";
import { CoreMessage, StreamTextResult, ToolSet } from "ai";

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
    messages: CoreMessage[]
  ): Promise<StreamTextResult<ToolSet, never> | string> {
    const message = trimLineBreak(messages.at(-1)?.content as string);
    const word = await searchWord(message);
    let result: StreamTextResult<ToolSet, never>;
    if (word.content == null) {
      switch (word.type) {
        case KWordType.KANJI:
          result = this.send(
            messages,
            instructionKanji
              .replace("$1", word.words)
              .replace("$2", word.hantu ?? "")
          );
          break;
        case KWordType.GRAMMAR:
          result = this.send(messages, instructionGrammar);
          break;
        case KWordType.WORD:
          result = this.send(messages, instructionWord.replace("$1", message));
          break;
        default:
          result = this.send(messages);
          break;
      }
      if (word.type != KWordType.OTHER && word.words != "") {
        kStreamText(result).then((full) => {
          updateWordsContent({ words: word.words, content: full });
        });
      }
    } else {
      return word.content;
    }
    return result;
  }
  handleMessagesPractice(word: KWord) {
    let result: StreamTextResult<ToolSet, never>;
    switch (word.type) {
      case KWordType.GRAMMAR:
        result = this.sendPrompt(
          word.words,
          instructionPracticeGrammar.replace("$1", word.words)
        );
        break;
      default:
        result = this.sendPrompt(
          word.words,
          instructionPracticeWord.replace("$1", word.words)
        );
        break;
    }
    return kStreamText(result);
  }
  abstract send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never>;
  abstract sendPrompt(
    prompt: string,
    system?: string
  ): StreamTextResult<ToolSet, never>;
}
