import { Practice } from "@/feature/practice/model/practice";
import { mapDatas } from "@/shared/lib/data-convert";
import {
  getMessageFromDisCord,
  getThreadMessages,
  sendDiscordMessage,
} from "@/shared/repository/discord";
import { getWordById, updateDocument } from "@/shared/repository/firestore";
import { chatService } from "@/shared/service/ai/factory";
import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import { KWord } from "@/shared/types/models/word";

const channelId = "1386090536753958952";

export const getFlashCard = async (
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
      const result = await chatService.summaryWord(
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

export const getPractice = async (practice: Practice): Promise<Practice[]> => {
  const discordMessage = await getThreadMessages({
    threadId: practice.id,
  });
  return mapDatas<DiscordMessageDTO, Practice>(
    discordMessage.filter((msg) => msg.type === 0),
    Practice.fromDTO
  );
};
