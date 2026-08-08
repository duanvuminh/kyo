import { updateQuestionAction } from "@/app/actions/update-question.actions";
import { QuestionDetail } from "@/lib/components/question-detail/question-detail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/lib/types";
import { useActionState, useEffect, useState } from "react";
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

function withUpdatedFields(
  question: Question,
  content: string,
  answers: [string, string, string, string],
  correctAnswer: 0 | 1 | 2 | 3,
  yomi?: string
): Question {
  return new Question(question.id, content, answers, correctAnswer, question.attachments, yomi, question.memo);
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
  message,
  onSave,
  onCancel,
}: {
  pending: boolean;
  message?: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <Button type="button" size="sm" disabled={pending} onClick={onSave}>
          Lưu
        </Button>
        <Button type="button" size="sm" variant="ghost" disabled={pending} onClick={onCancel}>
          Huỷ
        </Button>
      </div>
      {message && <p className="text-xs text-destructive">{message}</p>}
    </div>
  );
}

function useQuestionEditForm(threadId: string, question: Question, onSaved: (question: Question) => void) {
  const [content, setContent] = useState(question.content);
  const [answers, setAnswers] = useState<[string, string, string, string]>(question.answers);
  const [correctAnswer, setCorrectAnswer] = useState<0 | 1 | 2 | 3>(question.correctAnswer);
  const [yomi, setYomi] = useState(question.yomi ?? "");
  const [state, submitAction, pending] = useActionState(updateQuestionAction, {});

  useEffect(() => {
    if (state.data) {
      onSaved(withUpdatedFields(question, content.trim(), answers, correctAnswer, yomi.trim() || undefined));
      toast.success("Đã lưu câu hỏi");
    }
    // chỉ chạy lại khi có kết quả dispatch mới, không phải mỗi khi field/onSaved đổi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const setAnswerAt = (index: number, value: string) => {
    const next = [...answers] as [string, string, string, string];
    next[index] = value;
    setAnswers(next);
  };

  const handleSave = () =>
    submitAction({
      threadId,
      messageId: question.id,
      content: content.trim(),
      answers,
      correctAnswer,
      yomi: yomi.trim() || undefined,
    });

  return {
    content, setContent,
    answers, setAnswerAt,
    correctAnswer, setCorrectAnswer,
    yomi, setYomi,
    pending, handleSave, message: state.message,
  };
}

function QuestionEditForm({ threadId, question, onSaved, onCancel }: QuestionEditFormProps) {
  const {
    content, setContent,
    answers, setAnswerAt,
    correctAnswer, setCorrectAnswer,
    yomi, setYomi,
    pending, handleSave, message,
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
      <QuestionEditFormActions pending={pending} message={message} onSave={handleSave} onCancel={onCancel} />
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
