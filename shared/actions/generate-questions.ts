"use server";
import { mapToQuestions, questionSchema } from "@/shared/lib/question-mapper";
import { aiService } from "@/shared/service/ai/factory";
import {
  instructionGenerateGrammarQuestions,
  promptGenerateGrammarQuestions,
} from "@/shared/service/ai/instructions";
import { Question } from "@/shared/types/models/question";

export async function generateQuestions({
  grammarPoint,
  front,
}: {
  grammarPoint: string;
  front: string;
}): Promise<Question[]> {
  const result = await aiService().generateObject({
    schema: questionSchema,
    prompt: promptGenerateGrammarQuestions(front, grammarPoint),
    system: instructionGenerateGrammarQuestions,
  });
  return mapToQuestions(result.questions);
}
