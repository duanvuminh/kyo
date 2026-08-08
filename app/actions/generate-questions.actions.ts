"use server";
import { mapToQuestions, questionSchema } from "@/lib/services/question";
import { freeAiService } from "@/lib/services/ai/factory";
import {
  instructionGenerateGrammarQuestions,
  promptGenerateGrammarQuestions,
} from "@/lib/services/ai/instructions";
import { Question } from "@/lib/types";

export async function generateQuestions({
  grammarPoint,
  front,
}: {
  grammarPoint: string;
  front: string;
}): Promise<Question[]> {
  const result = await freeAiService().generateObject({
    schema: questionSchema,
    prompt: promptGenerateGrammarQuestions(front, grammarPoint),
    system: instructionGenerateGrammarQuestions,
  });
  return mapToQuestions(result.questions);
}
