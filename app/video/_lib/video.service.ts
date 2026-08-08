import type { Video } from "@/app/video/_lib/video.types";
import { getVideosMarket, type VideoMarketEntity } from "@/lib/repositories/videos-market.repository";
import { videoMarketUrl } from "@/lib/utils/videos";

function videoMarketToVideo(data: VideoMarketEntity): Video {
  return {
    id: data.fullTitleId,
    title: data.titleName,
    image: data.titleImageUrl16x9,
    url: videoMarketUrl(data.fullTitleId),
  };
}

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
