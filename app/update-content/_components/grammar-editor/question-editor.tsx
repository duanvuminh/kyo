"use client";

import { StringListEditor } from "@/app/update-content/_components/grammar-editor/string-list-editor";
import type { EditableQuestion } from "@/app/update-content/_lib/update-content.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuestionListEditorProps {
  questions: EditableQuestion[];
  onAdd: () => void;
  onUpdate: (index: number, patch: Partial<EditableQuestion>) => void;
  onRemove: (index: number) => void;
}

export function QuestionListEditor({ questions, onAdd, onUpdate, onRemove }: QuestionListEditorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground">Câu hỏi trắc nghiệm</span>
      {questions.map((question, index) => (
        <QuestionEditor
          key={index}
          question={question}
          onChange={(patch) => onUpdate(index, patch)}
          onRemove={() => onRemove(index)}
        />
      ))}
      <Button type="button" variant="outline" size="sm" onClick={onAdd} className="self-start">
        + Thêm câu hỏi
      </Button>
    </div>
  );
}

interface QuestionEditorProps {
  question: EditableQuestion;
  onChange: (patch: Partial<EditableQuestion>) => void;
  onRemove: () => void;
}

function QuestionEditor({ question, onChange, onRemove }: QuestionEditorProps) {
  const updateAnswer = (index: number, value: string) => {
    const answers = [...question.answers] as EditableQuestion["answers"];
    answers[index] = value;
    onChange({ answers });
  };

  return (
    <div className="rounded-md border p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Input
          value={question.id}
          placeholder="ID (vd: 11-1)"
          onChange={(e) => onChange({ id: e.target.value })}
          className="w-28 text-xs"
        />
        <Button type="button" variant="ghost" size="sm" onClick={onRemove} className="text-destructive">
          Xoá câu hỏi
        </Button>
      </div>
      <Input
        value={question.content}
        placeholder="Nội dung câu hỏi"
        onChange={(e) => onChange({ content: e.target.value })}
      />
      <AnswerList answers={question.answers} correctAnswer={question.correctAnswer} onChangeAnswer={updateAnswer} onChangeCorrect={(i) => onChange({ correctAnswer: i })} />
      <StringListEditor label="Giải thích (memo)" items={question.memo} onChange={(memo) => onChange({ memo })} />
    </div>
  );
}

interface AnswerListProps {
  answers: EditableQuestion["answers"];
  correctAnswer: 0 | 1 | 2 | 3;
  onChangeAnswer: (index: number, value: string) => void;
  onChangeCorrect: (index: 0 | 1 | 2 | 3) => void;
}

function AnswerList({ answers, correctAnswer, onChangeAnswer, onChangeCorrect }: AnswerListProps) {
  return (
    <div className="flex flex-col gap-1">
      {answers.map((answer, index) => (
        <label key={index} className="flex items-center gap-2">
          <input
            type="radio"
            checked={correctAnswer === index}
            onChange={() => onChangeCorrect(index as 0 | 1 | 2 | 3)}
            aria-label={`Đáp án đúng ${index + 1}`}
          />
          <Input
            value={answer}
            placeholder={`Đáp án ${index + 1}`}
            onChange={(e) => onChangeAnswer(index, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}
