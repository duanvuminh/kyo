import type { FileKind } from "@/lib/utils/file-kind";
import type { Sub } from "@/lib/types";

export enum ShortType {
  SUBTITLE = "subtitle",
  OTHER = "other",
}

export interface KFile {
  name: string;
  url: string;
  mimetype: string;
  source: FileKind;
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

export type ShortViewModel = ShortPage;

const defaultPage = "newest";

export function hasData(pageData: ShortViewModel | undefined): boolean {
  return !!pageData && pageData.shorts.length > 0;
}

export function displayData(pageData: ShortViewModel | undefined): Short[] {
  return (pageData?.shorts ?? []).filter((short) => !short.hidden);
}

export function showNextPage(pageData: ShortViewModel | undefined): boolean {
  return pageData?.shorts.length === pageData?.limit && displayData(pageData).length > 0;
}

export function getNextPageOrDefault(pageData: ShortViewModel | undefined): string {
  return displayData(pageData).at(-1)?.id ?? defaultPage;
}

export function isSubtitle(short: Short): boolean {
  return short.type === ShortType.SUBTITLE;
}
