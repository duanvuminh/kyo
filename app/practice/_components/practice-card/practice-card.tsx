"use client";
import { Actions } from "@/app/practice/_components/actions";
import { NextWordButton } from "@/app/practice/_components/next-word-button";
import { PracticeCardContent } from "@/app/practice/_components/practice-card-content";
import { usePracticeCard } from "@/app/practice/_components/practice-card/use-practice-card";
import { Practice } from "@/lib/types";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PracticeStorage } from "@/lib/services/storage.service";
import { toast } from "sonner";

interface PracticeCardProps {
  word: string;
  flashCard: Practice;
  practice: Practice[];
}

export const 

  KPracticeCard = ({ word, flashCard, practice }: PracticeCardProps) => {
  const { mode, practiceIndex, question, handleModeChange, handleNextQuestion, nextWord, removeWordsToPractice } =
    usePracticeCard(word, practice);

  const handleRemove = () => {
    removeWordsToPractice(word);
    toast("Đã xóa khỏi danh sách luyện tập", {
      action: {
        label: "Hoàn tác",
        onClick: () => PracticeStorage.addToPracticeList(word),
      },
    });
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
      </CardAction>
      <PracticeCardContent
        mode={mode}
        flashCard={flashCard}
        word={word}
        question={question}
        onNextQuestion={handleNextQuestion}
        practiceIndex={practiceIndex}
        practiceTotal={practice.length}
      />
      <NextWordButton nextWord={nextWord} mode={mode} />
    </Card>
  );
};
