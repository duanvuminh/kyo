"use client";

import { QuestionListEditor } from "@/feature/update-content/component/grammar-editor/question-editor";
import { StringListEditor } from "@/feature/update-content/component/grammar-editor/string-list-editor";
import type { EditableCard, EditableQuestion } from "@/feature/update-content/types/cards";
import { Button } from "@/shared/component/ui/button";
import { Card, CardContent } from "@/shared/component/ui/card";
import { Input } from "@/shared/component/ui/input";

interface CardEditorProps {
  card: EditableCard;
  onChange: (patch: Partial<EditableCard>) => void;
  onRemove: () => void;
  onAddQuestion: () => void;
  onUpdateQuestion: (questionIndex: number, patch: Partial<EditableQuestion>) => void;
  onRemoveQuestion: (questionIndex: number) => void;
}

export function CardEditor({
  card,
  onChange,
  onRemove,
  onAddQuestion,
  onUpdateQuestion,
  onRemoveQuestion,
}: CardEditorProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Input
            value={card.front}
            placeholder="Từ / mẫu ngữ pháp"
            onChange={(e) => onChange({ front: e.target.value })}
            className="font-medium"
          />
          <Button type="button" variant="destructive" size="sm" onClick={onRemove}>
            Xoá card
          </Button>
        </div>
        <StringListEditor label="Ý nghĩa (back)" items={card.back} onChange={(back) => onChange({ back })} />
        <StringListEditor label="Ghi chú thêm (more)" items={card.more} onChange={(more) => onChange({ more })} />
        <QuestionListEditor
          questions={card.questions}
          onAdd={onAddQuestion}
          onUpdate={onUpdateQuestion}
          onRemove={onRemoveQuestion}
        />
      </CardContent>
    </Card>
  );
}
