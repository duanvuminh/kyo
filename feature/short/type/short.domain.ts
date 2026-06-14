import type { Sub } from "@/shared/type/models/sub";

export enum ShortType {
  SUBTITLE = "subtitle",
  EMBED = "embed",
  OTHER = "other",
}

export interface KFile {
  name: string;
  url: string;
  mimetype: string;
}

export interface Short {
  id: string;
  content: string;
  title?: string;
  type?: ShortType;
  files?: KFile[];
  poster?: string;
  subVi?: Sub[];
  subJa?: Sub[];
  subs?: Sub[];
  relateShort?: Short[];
  hidden?: boolean;
}

export interface ShortPage {
  shorts: Short[];
  nextPage?: string;
  limit: number;
}
