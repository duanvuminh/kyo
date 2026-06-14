import { videoMarketToVideo } from "@/feature/video/mapper/video.mapper";
import type { Video } from "@/feature/video/type/video.domain";
import { getVideosMarket } from "@/shared/repository/videos-market";

export const getVideos = async (
  page: number,
  category: string
): Promise<Video[]> => {
  const index = getCategorys().findIndex((item) => item === decodeURI(category));
  const entities = await getVideosMarket({
    page,
    categoryTagIds: index === -1 ? undefined : index + 1,
  });
  return entities.map(videoMarketToVideo);
};

export const getCategorys = () => {
  return ["Phim", "Drama", "Anime", "Trẻ em", "Giải trí", "Phóng sự"];
};
