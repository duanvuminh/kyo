"use client";
import { Actions } from "@/feature/practice/component/actions";
import { NextWordButton } from "@/feature/practice/component/next-word-button";
import { PracticeCardContent } from "@/feature/practice/component/practice-card-content";
import { usePracticeCard } from "@/feature/practice/component/practice-card/use-practice-card";
import { Practice } from "@/feature/practice/model/practice";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/shared/component/ui/card";
import { toast } from "sonner";

interface PracticeCardProps {
  word: string;
  flashCard: Practice;
  practice: Practice[];
}

export const KPracticeCard = ({ word, flashCard, practice }: PracticeCardProps) => {
  const { mode, question, handleModeChange, handleNextQuestion, nextWord, removeWordsToPractice } =
    usePracticeCard(word, practice);

  const handleRemove = () => {
    removeWordsToPractice(word);
    toast("Đã xóa khỏi danh sách luyện tập");
  };

  return (
    <Card className="p-1 border-none bg-background">
      <CardHeader className="text-2xl">
        <CardTitle>{word}</CardTitle>
      </CardHeader>
      <CardAction>
        <Actions
          mode={mode}
          handleModeChange={handleModeChange}
          word={word}
          onRemove={handleRemove}
        />
        <NextWordButton nextWord={nextWord} mode={mode} />
      </CardAction>
      <PracticeCardContent
        mode={mode}
        flashCard={flashCard}
        word={word}
        question={question}
        onNextQuestion={handleNextQuestion}
      />
    </Card>
  );
};
