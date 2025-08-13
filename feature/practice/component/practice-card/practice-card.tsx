"use client";
import { Card, CardAction } from "@/component/ui/card";
import { Actions } from "@/feature/practice/component/actions";
import { PracticeActions } from "@/feature/practice/component/practice-actions";
import { PracticeCardContent } from "@/feature/practice/component/practice-card-content";
import { usePracticeCard } from "@/feature/practice/component/practice-card/use-practice-card";
import { Practice } from "@/feature/practice/model/practice";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { toast } from "sonner";

interface PracticeCardProps {
  word: string;
  practice: Practice;
  subPractice: Practice[];
}

export const KPracticeCard = ({
  word,
  practice,
  subPractice,
}: PracticeCardProps) => {
  const {
    mode,
    question,
    handleModeChange,
    handleNextQuestion,
    nextWord,
    removeWordsToPractice,
  } = usePracticeCard(word, subPractice);

  const remove = () => {
    removeWordsToPractice(word);
    toast("Đã xóa khỏi danh sách luyện tập");
  };

  return (
    <Card className="p-1 h-[80vh] mt-12">
      <PracticeCardContent
        mode={mode}
        practice={practice}
        word={word}
        question={question}
        onNextQuestion={handleNextQuestion}
      />
      <CardAction>
        {mode === PracticeCardMode.PRACTICE && (
          <PracticeActions
            mode={mode}
            handleModeChange={handleModeChange}
            nextWord={nextWord}
          />
        )}
        <Actions
          mode={mode}
          handleModeChange={handleModeChange}
          word={word}
          onRemove={remove}
        />
      </CardAction>
    </Card>
  );
};
