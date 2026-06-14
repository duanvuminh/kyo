import type { Question } from "@/shared/type/models/question";

export interface ListeningPage {
  listeningList: Question[];
  nextPage?: string;
  limit: number;
}
