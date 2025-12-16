import { Question } from "@/shared/types/models/question";
import { fetchApi } from "./client";

interface GenerateQuestionsParams {
  grammarPoint: string;
  front: string;
}

export async function generateQuestions(
  params: GenerateQuestionsParams
): Promise<Question[]> {
  return fetchApi<Question[]>("/api/generate-questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
}
