import { Practice } from "@/feature/practice/model/practice";
import { mapDatas } from "@/lib/data-convert";
import {
  getMessageFromDisCord,
  getThreadMessages,
  sendDiscordMessage,
} from "@/repository/discord";
import { getWordById, updateDocument } from "@/repository/firestore";
import { chatService } from "@/service/ai-factory";
import { DiscordMessageDTO } from "@/types/dto/discord-message";
import { KWord } from "@/types/models/word";

const channelId = "1386090536753958952";

export const getMainPractice = async (
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

export const getSubPractice = async (
  practice: Practice
): Promise<Practice[]> => {
  const discordMessage = await getThreadMessages({
    threadId: practice.id,
  });
  return mapDatas<DiscordMessageDTO, Practice>(
    discordMessage.filter((msg) => msg.type === 0),
    Practice.fromDTO
  );
};
