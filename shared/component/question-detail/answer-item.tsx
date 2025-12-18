"use client";

import { cn } from "@/core/utils/utils";
import Markdown from "react-markdown";

interface AnswerItemProps {
  answer: string;
  index: number;
  selectedAnswer: number | null;
  showResult: boolean;
  correctAnswer: number;
  memo?: string;
  onClick: () => void;
}

function getAnswerClassName(isSelected: boolean, showResult: boolean, isCorrect: boolean) {
  const base = "p-3 border rounded cursor-pointer transition-colors";
  const selectedStyle = isSelected ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground";
  const correctStyle = showResult && isSelected && isCorrect ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400" : "";
  const wrongStyle = showResult && isSelected && !isCorrect ? "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400" : "";
  const cursorStyle = showResult ? "cursor-not-allowed" : "hover:bg-muted";
  return cn(base, selectedStyle, correctStyle, wrongStyle, cursorStyle);
}

export function AnswerItem({ answer, index, selectedAnswer, showResult, correctAnswer, memo, onClick }: AnswerItemProps) {
  const isSelected = selectedAnswer === index;
  const isCorrect = index === correctAnswer;
  const showMemo = showResult && isSelected && memo;

  return (
    <li className={getAnswerClassName(isSelected, showResult, isCorrect)} onClick={onClick}>
      <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
      {answer}
      {showResult && isSelected && isCorrect && <span className="ml-2 text-green-600">✓</span>}
      {showResult && isSelected && !isCorrect && <span className="ml-2 text-red-600">✗</span>}
      {showMemo && (
        <div className="mt-2 text-sm">
          <Markdown>{memo}</Markdown>
        </div>
      )}
    </li>
  );
}
