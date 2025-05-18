import { videoMarketUrl } from "@/lib/videos";
import { VideoMarketDto } from "@/types/dto/videos-market";

export class Video {
  id: string;
  title: string;
  imgUrl: string;
  url: string;

  constructor(id: string, title: string, imgUrl: string, url: string) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.url = url;
  }

  static fromDTO(data: VideoMarketDto): Video {
    return {
      id: data.fullTitleId,
      title: data.titleName,
      imgUrl: data.titleImageUrl16x9,
      url: videoMarketUrl(data.fullTitleId),
    };
  }
}
