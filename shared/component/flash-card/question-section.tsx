"use client";
import { useGenerateQuestions } from "@/shared/component/flash-card/use-generate-questions";
import { QuestionDetail } from "@/shared/component/question-detail/question-detail";
import { Button } from "@/shared/component/ui/button";
import { Question } from "@/shared/types/models/question";

interface QuestionSectionProps {
  questions?: Question[];
  grammarPoint?: string;
  front?: string;
}

export function QuestionSection({ questions, grammarPoint, front }: QuestionSectionProps) {
  const { generatedQuestions, isLoading, generateQuestions } = useGenerateQuestions();
  const allQuestions = [...(questions ?? []), ...generatedQuestions];
  const canGenerate = grammarPoint && front;

  if (!questions && !canGenerate) { return null; }

  const handleGenerate = () => {
    if (canGenerate) { generateQuestions({ grammarPoint, front }); }
  };

  return (
    <details className="mt-3">
      <summary className="cursor-pointer text-sm text-gray-600">Câu hỏi trắc nghiệm ({allQuestions.length})</summary>
      <div className="mt-2 flex flex-col gap-1">
        {allQuestions.map((q, i) => <QuestionDetail key={q.id || i} question={q} />)}
        {canGenerate && (
          <Button variant="outline" size="sm" onClick={handleGenerate} disabled={isLoading} className="mt-2">
            {isLoading ? "Đang tạo..." : "+ Thêm 3 câu hỏi"}
          </Button>
        )}
      </div>
    </details>
  );
}
