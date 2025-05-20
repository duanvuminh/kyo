export interface VideoMarket {
  fullTitleId: string;
  titleName: string;
  titleImageUrl16x9: string;
  year: number;
  counter: {
    totalPages: number;
  };
}

export class VideoMarketDto {
  constructor(
    public fullTitleId: string,
    public titleName: string,
    public titleImageUrl16x9: string
  ) {}

  static fromJson(json: VideoMarket): VideoMarketDto {
    return {
      fullTitleId: json.fullTitleId,
      titleName: json.titleName,
      titleImageUrl16x9: json.titleImageUrl16x9,
    };
  }
}
