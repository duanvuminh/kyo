"use client";

import { submitGrammarCardsAction } from "@/app/actions/submit-grammar-cards.actions";
import { CardEditor } from "@/app/update-content/_components/grammar-editor/card-editor";
import { useGrammarCardsEditor } from "@/app/update-content/_components/grammar-editor/use-grammar-cards-editor";
import type {
  EditableCard,
  EditableQuestion,
  SubmitGrammarCardsInput,
} from "@/app/update-content/_lib/update-content.types";
import { Button } from "@/components/ui/button";
import { ActionState } from "@/lib/types";
import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface GrammarCardsEditorProps {
  documentId: string;
  initialCards: EditableCard[];
  focusFront?: string;
}

function useToastOnSaved(state: ActionState<boolean>) {
  useEffect(() => {
    if (state.data !== undefined) {
      toast.success("Đã tạo Pull Request, chờ duyệt");
    }
  }, [state]);
}

function getVisibleCards(cards: EditableCard[], showAll: boolean, focusIndex: number) {
  if (showAll) {
    return cards.map((card, index) => ({ card, index }));
  }
  return [{ card: cards[focusIndex], index: focusIndex }];
}

function GrammarCardEditorList({
  visibleCards,
  updateCard,
  removeCard,
  addQuestion,
  updateQuestion,
  removeQuestion,
}: {
  visibleCards: { card: EditableCard; index: number }[];
  updateCard: (index: number, patch: Partial<EditableCard>) => void;
  removeCard: (index: number) => void;
  addQuestion: (index: number) => void;
  updateQuestion: (index: number, questionIndex: number, patch: Partial<EditableQuestion>) => void;
  removeQuestion: (index: number, questionIndex: number) => void;
}) {
  return (
    <>
      {visibleCards.map(({ card, index }) => (
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
    </>
  );
}

function GrammarCardsSubmitFooter({
  documentId,
  cards,
  submitAction,
  pending,
  message,
}: {
  documentId: string;
  cards: EditableCard[];
  submitAction: (input: SubmitGrammarCardsInput) => void;
  pending: boolean;
  message?: string;
}) {
  return (
    <div className="sticky bottom-4 flex flex-col gap-1 items-start">
      <Button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => submitAction({ documentId, cards }))}
      >
        {pending ? "Đang gửi..." : "Gửi"}
      </Button>
      {message && <p className="text-xs text-destructive">{message}</p>}
    </div>
  );
}

export function GrammarCardsEditor({ documentId, initialCards, focusFront }: GrammarCardsEditorProps) {
  const { cards, updateCard, addCard, removeCard, updateQuestion, addQuestion, removeQuestion } =
    useGrammarCardsEditor(initialCards);
  const [state, submitAction, pending] = useActionState(submitGrammarCardsAction, {});
  const focusIndex = focusFront ? initialCards.findIndex((c) => c.front === focusFront) : -1;
  const [showAll, setShowAll] = useState(focusIndex === -1);
  useToastOnSaved(state);
  const visibleCards = getVisibleCards(cards, showAll, focusIndex);

  return (
    <div className="flex flex-col gap-4 px-4 pb-24 w-full">
      {!showAll && (
        <Button type="button" variant="link" onClick={() => setShowAll(true)} className="self-start px-0">
          Xem tất cả {cards.length} card
        </Button>
      )}
      <GrammarCardEditorList
        visibleCards={visibleCards}
        updateCard={updateCard}
        removeCard={removeCard}
        addQuestion={addQuestion}
        updateQuestion={updateQuestion}
        removeQuestion={removeQuestion}
      />
      {showAll && (
        <Button type="button" variant="secondary" onClick={addCard} className="self-start">
          + Thêm card
        </Button>
      )}
      <GrammarCardsSubmitFooter
        documentId={documentId}
        cards={cards}
        submitAction={submitAction}
        pending={pending}
        message={state.message}
      />
    </div>
  );
}
