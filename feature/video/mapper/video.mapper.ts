import type { VideoMarketEntity } from "@/feature/video/type/video-market.entity";
import type { Video } from "@/feature/video/type/video.domain";
import { videoMarketUrl } from "@/shared/lib/videos";

export function videoMarketToVideo(data: VideoMarketEntity): Video {
  return {
    id: data.fullTitleId,
    title: data.titleName,
    image: data.titleImageUrl16x9,
    url: videoMarketUrl(data.fullTitleId),
  };
}
