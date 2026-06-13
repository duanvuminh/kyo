import { ListeningDTO } from "@/feature/listening/type/listening.domain";
import { mapDatas } from "@/shared/lib/data-convert";
import { getListMessageFromDisCord } from "@/shared/repository/discord";
import { Question } from "@/shared/type/models/question";

const limit = 10;
const defaultPage = "newest";

export const getListening = async ({
  page,
  level,
}: {
  page: string;
  level: string;
}): Promise<ListeningDTO> => {
  let channelId: string;
  switch (level) {
    case "n1":
      channelId = "1439409864488259624";
      break;
    default:
      channelId = "1421561218455310476";
      break;
  }
  const data = await getListMessageFromDisCord({
    channelId,
    before: page == defaultPage ? undefined : page,
    limit,
  });
  return {
    listeningList: mapDatas(data, Question.fromDTO),
    limit,
    nextPage: data.length == 10 ? data.at(-1)?.id : undefined,
  };
};
