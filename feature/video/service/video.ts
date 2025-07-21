import { Video } from "@/feature/video/model/video";
import { getVideosMarket } from "@/repository/videos-market";

export const getVideos = async (
  page: number,
  category: string
): Promise<Video[]> => {
  try {
    const index = getCategorys().findIndex(
      (item) => item == decodeURI(category)
    );
    const videoDto = await getVideosMarket({
      page,
      categoryTagIds: index == -1 ? undefined : index + 1,
    });
    return videoDto.map((video) => Video.fromDTO(video));
  } catch {
    return [];
  }
};

export const getCategorys = () => {
  return ["Phim", "Drama", "Anime", "Trẻ em", "Giải trí", "Phóng sự"];
};
