"use client";

import { AnswerItem } from "@/shared/component/question-detail/answer-item";
import { QuestionAttachments } from "@/shared/component/question-detail/question-attachments";
import { useQuestionDetail } from "@/shared/component/question-detail/use-question-detail";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { Button } from "@/shared/component/ui/button";
import { Question } from "@/shared/types/models/question";
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
