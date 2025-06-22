import {
  getMessageFromDisCord,
  sendDiscordMessage,
} from "@/repository/discord";
import { getWordById, updateDocument } from "@/repository/firestore";
import { chatService } from "@/services/ai-factory";
import { Practice } from "@/types/models/practice";
import { KWord } from "@/types/models/word";

const channelId = "1386090536753958952";

export const getPractice = async (
  word: string
): Promise<Practice | undefined> => {
  const wordFromDictionary = await getWordById(word);
  if (wordFromDictionary) {
    if (wordFromDictionary.practiceId) {
      const discordMessage = await getMessageFromDisCord({
        channelId,
        messageId: wordFromDictionary.practiceId,
      });
      return Practice.fromDTO(discordMessage);
    } else {
      // add new practice
      const result = await chatService.handleMessagesPractice(
        KWord.fromDTO(wordFromDictionary)
      );
      const discordMessage = await sendDiscordMessage({
        channelId,
        message: result,
      });
      updateDocument(word, { practiceId: discordMessage.id });
      return Practice.fromDTO(discordMessage);
    }
  }
  return undefined;
};
