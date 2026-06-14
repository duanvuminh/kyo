import { ShortType, type Short, type ShortPage } from "@/feature/short/type/short.domain";

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
