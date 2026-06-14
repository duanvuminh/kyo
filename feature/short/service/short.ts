import { slackMessageToShort } from "@/feature/short/mapper/short.mapper";
import { fetchShortEntities } from "@/feature/short/repository/short";
import type { ShortPage } from "@/feature/short/type/short.domain";
import { mapDatas } from "@/shared/lib/data-convert";

export async function getShort({ page }: { page: string }): Promise<ShortPage> {
  const { entities, limit, nextPage } = await fetchShortEntities({ page });
  return {
    shorts: mapDatas(entities, slackMessageToShort),
    limit,
    nextPage,
  };
}
