import { mapDatas } from "@/lib/data-convert";
import { getListMessage } from "@/repository/discord";
import { Manga } from "@/types/models/manga";

export const getManga = async () => {
  const data = await getListMessage({
    channel_id: "1225629428420186122",
  });
  return mapDatas(data, Manga.fromDTO);
};
