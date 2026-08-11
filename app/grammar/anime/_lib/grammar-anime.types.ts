export interface GrammarAnimeImage {
  url: string;
  width: number;
  height: number;
}

export interface GrammarAnime {
  id: string;
  level: string;
  page: string;
  title: string;
  images: GrammarAnimeImage[];
  updatedAt: number;
}
