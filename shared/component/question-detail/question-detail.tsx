"use client";
import { cn } from "@/core/utils/utils";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { useQuestionDetail } from "@/shared/component/question-detail/use-question-detail";
import { Button } from "@/shared/component/ui/button";
import { Question } from "@/shared/types/models/question";
import Image from "next/image";
import Markdown from "react-markdown";

export const QuestionDetail = ({
  question,
  onNextQuestion,
}: {
  question: Question;
  onNextQuestion?: () => void;
}) => {
  const {
    selectedAnswer,
    showResult,
    handleAnswerClick,
    handleSubmit,
    handleReset,
    onNextQuestionCustom,
  } = useQuestionDetail(onNextQuestion);

  return (
    <div className="question-view">
      <h2 className="text-lg font-semibold">Question</h2>
      {question.attachments && question.attachments.length > 0 && (
        <div className="not-prose mb-2 space-y-2">
          {question.attachments.map((url, index) => {
            const isAudio = url.match(/\.(mp3|wav|ogg)(\?|#|$)/i);
            if (isAudio) {
              return (
                <audio key={index} controls className="w-full">
                  <source src={url} />
                  Trình duyệt của bạn không hỗ trợ audio.
                </audio>
              );
            }
            return (
              <div key={index} className="relative w-full aspect-video">
                <Image
                  src={url}
                  alt={`Question attachment ${index + 1}`}
                  fill
                  className="object-contain w-full"
                />
              </div>
            );
          })}
        </div>
      )}
      <Markdown>{question.content}</Markdown>
      {question.yomi && (
        <AudioPlayer key={question.yomi} text={question.yomi} active />
      )}
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
                selectedAnswer === index &&
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
            {showResult &&
              index === question.correctAnswer &&
              selectedAnswer === index && (
                <span className="ml-2 text-green-600">✓</span>
              )}
            {showResult &&
              selectedAnswer === index &&
              index !== question.correctAnswer && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            {showResult &&
              selectedAnswer === index &&
              question.memo?.[index] && (
                <div className="mt-2 text-sm">
                  <Markdown>{question.memo[index]}</Markdown>
                </div>
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
            {onNextQuestion && (
              <Button onClick={onNextQuestionCustom} variant="default">
                Tiếp
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
