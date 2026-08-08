"use client";

import { AudioPlayer } from "@/lib/components/audio-player/audio-player";
import { AnswerItem } from "@/lib/components/question-detail/answer-item";
import { QuestionAttachments } from "@/lib/components/question-detail/question-attachments";
import { useQuestionDetail } from "@/lib/components/question-detail/use-question-detail";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/types";
import Markdown from "react-markdown";

export const QuestionDetail = ({ question, onNextQuestion }: { question: Question; onNextQuestion?: () => void }) => {
  const { selectedAnswer, showResult, handleAnswerClick, handleSubmit, handleReset, onNextQuestionCustom } = useQuestionDetail(onNextQuestion);

  return (
    <div className="question-view">
      <h2 className="text-lg font-semibold">Question</h2>
      <QuestionAttachments attachments={question.attachments} />
      <Markdown>{question.content}</Markdown>
      {question.yomi && <AudioPlayer key={question.yomi} text={question.yomi} active />}
      <ul className="answers-list space-y-2">
        {question.answers.map((answer, index) => (
          <AnswerItem key={index} answer={answer} index={index} selectedAnswer={selectedAnswer} showResult={showResult} correctAnswer={question.correctAnswer} memo={question.memo?.[index]} onClick={() => handleAnswerClick(index)} />
        ))}
      </ul>
      <div className="mt-4 space-x-2">
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={selectedAnswer === null}>Trả lời</Button>
        ) : (
          <div className="space-x-2">
            <Button onClick={handleReset} variant="outline">Thử lại</Button>
            {onNextQuestion && <Button onClick={onNextQuestionCustom} variant="default">Tiếp</Button>}
          </div>
        )}
      </div>
    </div>
  );
};
