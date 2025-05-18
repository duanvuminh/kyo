import { getVideosMarket } from "@/repository/videos-market";
import { Video } from "@/types/models/video";

export const getVideos = async (page: number, category: string) => {
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
