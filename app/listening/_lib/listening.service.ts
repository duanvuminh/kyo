import { fetchListeningEntities } from "@/app/listening/_lib/discord.repository";
import type { ListeningPage } from "@/app/listening/_lib/listening.types";
import type { DiscordMessageEntity } from "@/lib/repositories/discord";
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
}): Promise<ListeningPage> => {
  const { entities, limit, nextPage } = await fetchListeningEntities({ page, level });
  return {
    listeningList: mapDatas(entities, discordMessageToQuestion),
    limit,
    nextPage,
  };
};
