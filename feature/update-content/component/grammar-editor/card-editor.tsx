"use client";

import { parseCardTextAction } from "@/feature/update-content/actions/parse-card-text";
import { QuestionListEditor } from "@/feature/update-content/component/grammar-editor/question-editor";
import { StringListEditor } from "@/feature/update-content/component/grammar-editor/string-list-editor";
import { serializeCard } from "@/feature/update-content/mapper/cards-serializer";
import type { EditableCard, EditableQuestion } from "@/feature/update-content/types/cards";
import { Button } from "@/shared/component/ui/button";
import { Card, CardContent } from "@/shared/component/ui/card";
import { Input } from "@/shared/component/ui/input";
import { AppError } from "@/shared/type/models/error";
import { useState } from "react";
import { toast } from "sonner";

interface CardEditorProps {
  card: EditableCard;
  onChange: (patch: Partial<EditableCard>) => void;
  onRemove: () => void;
  onAddQuestion: () => void;
  onUpdateQuestion: (questionIndex: number, patch: Partial<EditableQuestion>) => void;
  onRemoveQuestion: (questionIndex: number) => void;
}

async function copyCard(card: EditableCard) {
  try {
    await navigator.clipboard.writeText(serializeCard(card));
    toast.success("Đã copy card");
  } catch {
    toast.error("Không thể copy vào clipboard");
  }
}

async function pasteCard(onReplace: (card: EditableCard) => void, setPending: (pending: boolean) => void) {
  setPending(true);
  try {
    const text = await navigator.clipboard.readText();
    const card = await parseCardTextAction(text);
    onReplace(card);
    toast.success("Đã dán card");
  } catch (e) {
    const message = e instanceof AppError ? e.customMessage : "Không đọc được nội dung clipboard";
    toast.error(message);
  } finally {
    setPending(false);
  }
}

function CardCopyPasteActions({ card, onReplace }: { card: EditableCard; onReplace: (card: EditableCard) => void }) {
  const [pending, setPending] = useState(false);

  return (
    <>
      <Button type="button" variant="outline" size="sm" onClick={() => copyCard(card)}>
        Copy
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={pending}
        onClick={() => pasteCard(onReplace, setPending)}
      >
        {pending ? "..." : "Dán"}
      </Button>
    </>
  );
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
          <CardCopyPasteActions card={card} onReplace={onChange} />
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
