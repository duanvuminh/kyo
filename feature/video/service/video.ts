import { Video } from "@/feature/video/model/video";
import { getVideosMarket } from "@/shared/repository/videos-market";

export const getVideos = async (
  page: number,
  category: string
): Promise<Video[]> => {
  const index = getCategorys().findIndex((item) => item == decodeURI(category));
  const videoDto = await getVideosMarket({
    page,
    categoryTagIds: index == -1 ? undefined : index + 1,
  });
  return videoDto.map((video) => Video.fromDTO(video));
};

export const getCategorys = () => {
  return ["Phim", "Drama", "Anime", "Trẻ em", "Giải trí", "Phóng sự"];
};
