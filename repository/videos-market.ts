import { VideoMarketDTO } from "@/types/dto/videos-market";

export const getVideosMarket = async ({
  categoryTagIds,
  page,
}: {
  categoryTagIds?: number;
  page: number;
}) => {
  const data = {
    operationName: "searchTitles",
    variables: {
      page: {
        current: page + 1,
        size: 30,
      },
      categoryTagIds: categoryTagIds ? [categoryTagIds] : [],
      searchOptionIds: [1],
      sortType: "MONTHLY_RANKING",
    },
    query:
      "query searchTitles($word: String, $genreIds: [Int], $categoryTagIds: [Int], $genreTagIds: [Int], $tagGroupIds: [Int], $searchOptionIds: [Int], $castIds: [Int], $seriesIds: [Int], $ageIds: [Int], $publisherIds: [String], $excludePurchased: Boolean, $sortType: SortType, $page: PageInput!) {\n  searchTitles(\n    word: $word\n    genreIds: $genreIds\n    categoryTagIds: $categoryTagIds\n    genreTagIds: $genreTagIds\n    tagGroupIds: $tagGroupIds\n    searchOptionIds: $searchOptionIds\n    castIds: $castIds\n    seriesIds: $seriesIds\n    ageIds: $ageIds\n    publisherIds: $publisherIds\n    excludePurchased: $excludePurchased\n    sortType: $sortType\n    page: $page\n  ) {\n    fullTitleId\n    titleName\n    titleImageUrl16x9\n    courseIds\n    hasFreePack\n    hasEstPack\n    hasDownloadablePack\n    isCouponTarget\n    couponDiscountRate\n    year\n    counter {\n      currentPage\n      currentResult\n      totalPages\n      totalResults\n      __typename\n    }\n    __typename\n  }\n}\n",
  };
  const response = await fetch("https://www.videomarket.jp/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.VIDEO_MARKET as string}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  if (jsonData.data?.searchTitles == undefined) return [];
  return jsonData.data?.searchTitles as VideoMarketDTO[];
};
