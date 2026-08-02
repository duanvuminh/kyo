"use client";

import { submitGrammarCardsAction } from "@/feature/update-content/actions/submit-grammar-cards";
import { CardEditor } from "@/feature/update-content/component/grammar-editor/card-editor";
import { useGrammarCardsEditor } from "@/feature/update-content/component/grammar-editor/use-grammar-cards-editor";
import type { EditableCard } from "@/feature/update-content/types/cards";
import { Button } from "@/shared/component/ui/button";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { useState } from "react";
import { toast } from "sonner";

interface GrammarCardsEditorProps {
  documentId: string;
  initialCards: EditableCard[];
}

async function submitCards(
  documentId: string,
  cards: EditableCard[],
  setPending: (pending: boolean) => void
) {
  setPending(true);
  try {
    await submitGrammarCardsAction({ documentId, cards });
    toast.success("Đã tạo Pull Request, chờ duyệt");
  } catch (e) {
    const message = e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
    toast.error(message);
  } finally {
    setPending(false);
  }
}

export function GrammarCardsEditor({ documentId, initialCards }: GrammarCardsEditorProps) {
  const { cards, updateCard, addCard, removeCard, updateQuestion, addQuestion, removeQuestion } =
    useGrammarCardsEditor(initialCards);
  const [pending, setPending] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-4 pb-24 w-full">
      {cards.map((card, index) => (
        <CardEditor
          key={index}
          card={card}
          onChange={(patch) => updateCard(index, patch)}
          onRemove={() => removeCard(index)}
          onAddQuestion={() => addQuestion(index)}
          onUpdateQuestion={(qIndex, patch) => updateQuestion(index, qIndex, patch)}
          onRemoveQuestion={(qIndex) => removeQuestion(index, qIndex)}
        />
      ))}
      <Button type="button" variant="secondary" onClick={addCard} className="self-start">
        + Thêm card
      </Button>
      <Button
        type="button"
        disabled={pending}
        onClick={() => submitCards(documentId, cards, setPending)}
        className="sticky bottom-4 self-start"
      >
        {pending ? "Đang gửi..." : "Gửi"}
      </Button>
    </div>
  );
}
