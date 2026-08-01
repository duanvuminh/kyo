import { updateQuestionAction } from "@/feature/practice/actions/update-question";
import { QuestionDetail } from "@/shared/component/question-detail/question-detail";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";
import { Textarea } from "@/shared/component/ui/textarea";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { Question } from "@/shared/type/models/question";
import { useState } from "react";
import { toast } from "sonner";

interface QuestionContentProps {
  question?: Question;
  onNextQuestion: () => void;
  practiceId: string;
  currentIndex: number;
  total: number;
}

interface QuestionEditFormProps {
  threadId: string;
  question: Question;
  onSaved: (question: Question) => void;
  onCancel: () => void;
}

function QuestionAnswerInput({
  value,
  isCorrect,
  disabled,
  onChange,
  onSelectCorrect,
}: {
  value: string;
  isCorrect: boolean;
  disabled: boolean;
  onChange: (value: string) => void;
  onSelectCorrect: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="correctAnswer"
        checked={isCorrect}
        onChange={onSelectCorrect}
        disabled={disabled}
      />
      <Input value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} />
    </div>
  );
}

interface SaveQuestionParams {
  threadId: string;
  question: Question;
  content: string;
  answers: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  yomi: string;
  onSaved: (question: Question) => void;
  setPending: (pending: boolean) => void;
}

function withUpdatedFields(
  question: Question,
  content: string,
  answers: [string, string, string, string],
  correctAnswer: 0 | 1 | 2 | 3,
  yomi?: string
): Question {
  return new Question(question.id, content, answers, correctAnswer, question.attachments, yomi, question.memo);
}

async function saveQuestion({
  threadId,
  question,
  content,
  answers,
  correctAnswer,
  yomi,
  onSaved,
  setPending,
}: SaveQuestionParams) {
  setPending(true);
  try {
    const trimmedContent = content.trim();
    const trimmedYomi = yomi.trim() || undefined;
    await updateQuestionAction({
      threadId,
      messageId: question.id,
      content: trimmedContent,
      answers,
      correctAnswer,
      yomi: trimmedYomi,
    });
    toast.success("Đã lưu câu hỏi");
    onSaved(withUpdatedFields(question, trimmedContent, answers, correctAnswer, trimmedYomi));
  } catch (e) {
    const message =
      e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
    toast.error(message);
  } finally {
    setPending(false);
  }
}

function QuestionAnswerList({
  answers,
  correctAnswer,
  disabled,
  onChangeAnswer,
  onSelectCorrect,
}: {
  answers: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  disabled: boolean;
  onChangeAnswer: (index: number, value: string) => void;
  onSelectCorrect: (index: 0 | 1 | 2 | 3) => void;
}) {
  return (
    <>
      {answers.map((answer, index) => (
        <QuestionAnswerInput
          key={index}
          value={answer}
          isCorrect={correctAnswer === index}
          disabled={disabled}
          onChange={(value) => onChangeAnswer(index, value)}
          onSelectCorrect={() => onSelectCorrect(index as 0 | 1 | 2 | 3)}
        />
      ))}
    </>
  );
}

function QuestionEditFormActions({
  pending,
  onSave,
  onCancel,
}: {
  pending: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="flex gap-2">
      <Button type="button" size="sm" disabled={pending} onClick={onSave}>
        Lưu
      </Button>
      <Button type="button" size="sm" variant="ghost" disabled={pending} onClick={onCancel}>
        Huỷ
      </Button>
    </div>
  );
}

function useQuestionEditForm(threadId: string, question: Question, onSaved: (question: Question) => void) {
  const [content, setContent] = useState(question.content);
  const [answers, setAnswers] = useState<[string, string, string, string]>(question.answers);
  const [correctAnswer, setCorrectAnswer] = useState<0 | 1 | 2 | 3>(question.correctAnswer);
  const [yomi, setYomi] = useState(question.yomi ?? "");
  const [pending, setPending] = useState(false);

  const setAnswerAt = (index: number, value: string) => {
    const next = [...answers] as [string, string, string, string];
    next[index] = value;
    setAnswers(next);
  };

  const handleSave = () =>
    saveQuestion({
      threadId,
      question,
      content,
      answers,
      correctAnswer,
      yomi,
      onSaved,
      setPending,
    });

  return {
    content, setContent,
    answers, setAnswerAt,
    correctAnswer, setCorrectAnswer,
    yomi, setYomi,
    pending, handleSave,
  };
}

function QuestionEditForm({ threadId, question, onSaved, onCancel }: QuestionEditFormProps) {
  const {
    content, setContent,
    answers, setAnswerAt,
    correctAnswer, setCorrectAnswer,
    yomi, setYomi,
    pending, handleSave,
  } = useQuestionEditForm(threadId, question, onSaved);

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={pending}
        rows={4}
        placeholder="Nội dung câu hỏi"
      />
      <QuestionAnswerList
        answers={answers}
        correctAnswer={correctAnswer}
        disabled={pending}
        onChangeAnswer={setAnswerAt}
        onSelectCorrect={setCorrectAnswer}
      />
      <Input
        value={yomi}
        onChange={(e) => setYomi(e.target.value)}
        placeholder="Cách đọc (yomi, không bắt buộc)"
        disabled={pending}
      />
      <QuestionEditFormActions pending={pending} onSave={handleSave} onCancel={onCancel} />
    </div>
  );
}

function QuestionView({
  question,
  onNextQuestion,
  onEdit,
}: {
  question: Question;
  onNextQuestion: () => void;
  onEdit: () => void;
}) {
  return (
    <>
      <QuestionDetail question={question} onNextQuestion={onNextQuestion} />
      <Button
        type="button"
        variant="link"
        className="p-0 h-auto text-xs text-muted-foreground self-start"
        onClick={onEdit}
      >
        Edit
      </Button>
    </>
  );
}

export const QuestionContent = ({
  question,
  onNextQuestion,
  practiceId,
  currentIndex,
  total,
}: QuestionContentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [savedQuestion, setSavedQuestion] = useState<Question | null>(null);
  // savedQuestion chỉ còn hợp lệ khi vẫn đang xem đúng câu hỏi đó (chưa next sang câu khác)
  const displayQuestion = savedQuestion?.id === question?.id ? savedQuestion : question;

  return (
    <div className="flex flex-col gap-2">
      {total > 0 && (
        <p className="text-xs text-muted-foreground">
          {currentIndex + 1} / {total}
        </p>
      )}
      {!displayQuestion ? (
        <p className="text-sm text-muted-foreground">Hiện tại chưa có dữ liệu</p>
      ) : isEditing ? (
        <QuestionEditForm
          threadId={practiceId}
          question={displayQuestion}
          onSaved={(updated) => {
            setSavedQuestion(updated);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <QuestionView
          question={displayQuestion}
          onNextQuestion={onNextQuestion}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};
