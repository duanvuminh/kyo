import { Question } from "@/shared/types/models/question";

export interface ListeningPage {
  listeningList: Question[];
  nextPage?: string;
  limit: number;
}
