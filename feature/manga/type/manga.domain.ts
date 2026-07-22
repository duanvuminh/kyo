export interface MangaPanel {
  id: string;
  index: number;
  content: string;
}

export interface Manga {
  id: string;
  title: string;
  panels: MangaPanel[];
}

export interface MangaPage {
  mangaList: Manga[];
  nextPage?: string;
  limit: number;
}
