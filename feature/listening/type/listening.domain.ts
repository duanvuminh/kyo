import { Question } from "@/shared/type/models/question";

export interface ListeningDTO {
  listeningList: Question[];
  nextPage?: string;
  limit: number;
}