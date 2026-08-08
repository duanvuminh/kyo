"use client";
import { generateQuestions as generateQuestionsApi } from "@/app/actions/generate-questions.actions";
import { AppError, ErrorCode, ErrorMessage, Question } from "@/lib/types";
import { useCallback, useState } from "react";

interface GenerateQuestionsParams {
  grammarPoint: string;
  front: string;
}

export function useGenerateQuestions() {
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuestions = useCallback(
    async ({ grammarPoint, front }: GenerateQuestionsParams) => {
      setIsLoading(true);
      setError(null);

      try {
        const questions = await generateQuestionsApi({ grammarPoint, front });
        setGeneratedQuestions((prev) => [...prev, ...questions]);
        return questions;
      } catch (e) {
        const code =
          e instanceof AppError ? e.code : ErrorCode.AI_MODEL_ERROR;
        setError(ErrorMessage[code]);
        return [];
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const clearGeneratedQuestions = useCallback(() => {
    setGeneratedQuestions([]);
  }, []);

  return {
    generatedQuestions,
    isLoading,
    error,
    generateQuestions,
    clearGeneratedQuestions,
  };
}
