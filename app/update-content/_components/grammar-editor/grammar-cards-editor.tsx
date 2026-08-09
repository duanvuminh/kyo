"use client";

import { submitGrammarCardsAction } from "@/app/actions/submit-grammar-cards.actions";
import { CardEditor } from "@/app/update-content/_components/grammar-editor/card-editor";
import { useGrammarCardsEditor } from "@/app/update-content/_components/grammar-editor/use-grammar-cards-editor";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { Button } from "@/components/ui/button";
import { startTransition, useActionState, useEffect } from "react";
import { toast } from "sonner";

interface GrammarCardsEditorProps {
  documentId: string;
  initialCards: EditableCard[];
}

export function GrammarCardsEditor({ documentId, initialCards }: GrammarCardsEditorProps) {
  const { cards, updateCard, addCard, removeCard, updateQuestion, addQuestion, removeQuestion } =
    useGrammarCardsEditor(initialCards);
  const [state, submitAction, pending] = useActionState(submitGrammarCardsAction, {});

  useEffect(() => {
    if (state.data !== undefined) {
      toast.success("Đã tạo Pull Request, chờ duyệt");
    }
  }, [state]);

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
      <div className="sticky bottom-4 flex flex-col gap-1 items-start">
        <Button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => submitAction({ documentId, cards }))}
        >
          {pending ? "Đang gửi..." : "Gửi"}
        </Button>
        {state.message && <p className="text-xs text-destructive">{state.message}</p>}
      </div>
    </div>
  );
}
