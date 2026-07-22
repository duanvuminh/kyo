export interface MangaArea {
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MangaPanel {
  id: string;
  index: number;
  imageUrl: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  areas: MangaArea[];
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
