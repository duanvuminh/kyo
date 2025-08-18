import { Question } from "@/feature/practice/model/question";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { Button } from "@/shared/component/ui/button";
import { cn } from "@/shared/utils/utils";
import Image from "next/image";
import { useState } from "react";
import Markdown from "react-markdown";

export const QuestionDetail = ({
  question,
  onNextQuestion,
}: {
  question: Question;
  onNextQuestion: () => void;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const onNextQuestionCustom = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    onNextQuestion();
  };

  return (
    <div className="question-view">
      <h2>Question</h2>
      {question.imageUrl && question.imageUrl.length > 0 && (
        <div className="relative h-20">
          {question.imageUrl.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Question image ${index + 1}`}
              fill
              className="object-contain"
            />
          ))}
        </div>
      )}
      <Markdown>{question.content}</Markdown>
      {question.yomi && <AudioPlayer text={question.yomi} active />}
      <ul className="answers-list space-y-2">
        {question.answers.map((answer, index) => (
          <li
            key={index}
            className={cn(
              "p-3 border rounded cursor-pointer transition-colors",
              selectedAnswer === index
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-foreground",
              showResult &&
                index === question.correctAnswer &&
                "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400",
              showResult &&
                selectedAnswer === index &&
                index !== question.correctAnswer &&
                "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400",
              showResult ? "cursor-not-allowed" : "hover:bg-muted"
            )}
            onClick={() => handleAnswerClick(index)}
          >
            <span className="font-medium">
              {String.fromCharCode(65 + index)}.{" "}
            </span>
            {answer}
            {showResult && index === question.correctAnswer && (
              <span className="ml-2 text-green-600">✓</span>
            )}
            {showResult &&
              selectedAnswer === index &&
              index !== question.correctAnswer && (
                <span className="ml-2 text-red-600">✗</span>
              )}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-x-2">
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
            Trả lời
          </Button>
        ) : (
          <div className="space-x-2">
            <Button onClick={handleReset} variant="outline">
              Thử lại
            </Button>
            <Button onClick={onNextQuestionCustom} variant="default">
              Tiếp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
