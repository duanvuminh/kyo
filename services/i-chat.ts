import { kStreamText } from "@/lib/stream";
import { updateWordsContent } from "@/repository/dictionary-repository";
import { searchWord } from "@/services/dictionary";
import { KWordType } from "@/types/models/word-type";
import { CoreMessage, StreamTextResult, ToolSet } from "ai";

const instructionKanji = `Giải thích kanji tiếng nhật sau`;
const instructionGrammar = `Giải thích ngữ pháp, cách dùng tiếng nhật của từ sau`;
const instructionWord = `Ý nghĩa của từ tiếng nhật sau`;

export abstract class ChatBase {
  async handleMessages(
    messages: CoreMessage[]
  ): Promise<StreamTextResult<ToolSet, never> | string> {
    const message = messages.at(-1)?.content as string;
    const word = await searchWord(message.trim().replaceAll(/[\r\n]+/g, ""));
    let result: StreamTextResult<ToolSet, never>;
    result = this.send(messages);
    if (word.content == null) {
      switch (word.type) {
        case KWordType.kanji:
          result = this.send(
            messages,
            `${instructionKanji} hán tự ${word.hantu}`
          );
          break;
        case KWordType.grammar:
          result = this.send(messages, instructionGrammar);
          break;
        case KWordType.word:
          result = this.send(messages, instructionWord);
          break;
        default:
          result = this.send(messages);
          break;
      }
      if (word.type != KWordType.other) {
        kStreamText(result).then((full) => {
          updateWordsContent(word.words, full);
        });
      }
    } else {
      return word.content;
    }
    return result;
  }
  abstract send(
    messages: CoreMessage[],
    system?: string
  ): StreamTextResult<ToolSet, never>;
}
