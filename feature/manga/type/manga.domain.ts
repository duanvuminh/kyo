export interface MangaPanel {
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
