import { fetchListeningEntities, LISTENING_PAGE_LIMIT } from "@/app/listening/_lib/listening.repository";
import type { ListeningViewModel } from "@/app/listening/_lib/listening.types";
import type { DiscordMessageEntity } from "@/lib/repositories/discord.repository";
import { mapDatas } from "@/lib/utils/data-convert";
import { Question } from "@/lib/types";
import matter from "gray-matter";

function discordMessageToQuestion(data: DiscordMessageEntity): Question {
  const parsed = matter(data.content);
  return {
    id: data.id,
    content: parsed.content,
    answers: parsed.data.answers ?? [],
    correctAnswer: parsed.data.correctAnswer ?? 0,
    attachments: data.attachments?.map((item) => item.url) ?? [],
    yomi: parsed.data.yomi,
  };
}

export const getListening = async ({
  page,
  level,
}: {
  page: string;
  level: string;
}): Promise<ListeningViewModel> => {
  const { entities, nextPage } = await fetchListeningEntities({ page, level });
  return {
    listeningList: mapDatas(entities, discordMessageToQuestion),
    limit: LISTENING_PAGE_LIMIT,
    nextPage,
  };
};
