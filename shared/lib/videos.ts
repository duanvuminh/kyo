export const videoMarketUrl = (videoId: string): string => {
  const suffix = videoId.includes("2Y") ? "002999H01" : "001999H01";
  return `https://www.videomarket.jp/player/${videoId}/A${videoId}${suffix}`;
};
