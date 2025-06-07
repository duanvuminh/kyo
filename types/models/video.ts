import { videoMarketUrl } from "@/lib/videos";
import { VideoMarketDTO } from "@/types/dto/videos-market";

export class Video {
  id: string;
  title: string;
  image: string;
  url: string;

  constructor(id: string, title: string, image: string, url: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.url = url;
  }

  static fromDTO(data: VideoMarketDTO): Video {
    return {
      id: data.fullTitleId,
      title: data.titleName,
      image: data.titleImageUrl16x9,
      url: videoMarketUrl(data.fullTitleId),
    };
  }
}
