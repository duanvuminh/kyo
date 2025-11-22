import { shuffle } from "@/core/utils/utils";
import { QuestionDetail } from "@/shared/component/question-detail/question-detail";
import { Question } from "@/shared/types/models/question";

export function QuestionSection({ questions }: { questions?: Question[] }) {
  if (!questions) return null;
  return (
    <details className="mt-3">
      <summary className="cursor-pointer text-sm text-gray-600">
        Câu hỏi trắc nghiệm
      </summary>
      <div className="mt-2 flex flex-col gap-1">
        {shuffle(questions).map((q, i) => (
          <QuestionDetail key={i} question={q} />
        ))}
      </div>
    </details>
  );
}
