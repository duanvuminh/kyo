"use client";
import { Question } from "@/shared/types/models/question";
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
        const response = await fetch("/api/generate-questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ grammarPoint, front }),
        });

        if (!response.ok) {
          throw new Error("Failed to generate questions");
        }

        const data = await response.json();
        setGeneratedQuestions((prev) => [...prev, ...data.questions]);
        return data.questions as Question[];
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(message);
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
