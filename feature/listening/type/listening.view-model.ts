import { Question } from "@/shared/type/models/question";

export interface ListeningViewModel {
  listeningList: Question[];
  nextPage?: string;
  limit: number;
}

export function hasData(pageData: ListeningViewModel | undefined): boolean {
  return !!pageData && pageData.listeningList.length > 0;
}

export function displayData(pageData: ListeningViewModel | undefined): Question[] {
  return pageData?.listeningList ?? [];
}

export function showNextPage(pageData: ListeningViewModel | undefined): boolean {
  const data = displayData(pageData);
  return data.length == pageData?.limit && data.length > 0;
}

export function getNextPageOrDefault(
  pageData: ListeningViewModel | undefined,
): string | undefined {
  const data = displayData(pageData);
  return data.at(-1)?.id;
}