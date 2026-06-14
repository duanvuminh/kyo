import { fetchListeningEntities } from "@/feature/listening/repository/listening";
import type { ListeningPage } from "@/feature/listening/type/listening.domain";
import { mapDatas } from "@/shared/lib/data-convert";
import { discordMessageToQuestion } from "@/shared/mapper/question.mapper";

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
