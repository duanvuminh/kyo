"use client";

import { submitCardsAction } from "@/app/actions/submit-cards.actions";
import { CardEditor } from "@/app/update-content/_components/cards-editor/card-editor";
import { useCardsEditor } from "@/app/update-content/_components/cards-editor/use-cards-editor";
import type {
  EditableCard,
  EditableQuestion,
  SubmitCardsInput,
} from "@/app/update-content/_lib/update-content.types";
import { Button } from "@/components/ui/button";
import { ContentSection } from "@/lib/content-section";
import { ActionState } from "@/lib/types";
import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface CardsEditorProps {
  section: ContentSection;
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

function CardEditorList({
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

function CardsSubmitFooter({
  section,
  documentId,
  cards,
  submitAction,
  pending,
  message,
}: {
  section: ContentSection;
  documentId: string;
  cards: EditableCard[];
  submitAction: (input: SubmitCardsInput) => void;
  pending: boolean;
  message?: string;
}) {
  return (
    <div className="sticky bottom-4 flex flex-col gap-1 items-start">
      <Button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => submitAction({ section, documentId, cards }))}
      >
        {pending ? "Đang gửi..." : "Gửi"}
      </Button>
      {message && <p className="text-xs text-destructive">{message}</p>}
    </div>
  );
}

export function CardsEditor({ section, documentId, initialCards, focusFront }: CardsEditorProps) {
  const { cards, updateCard, addCard, removeCard, updateQuestion, addQuestion, removeQuestion } =
    useCardsEditor(initialCards);
  const [state, submitAction, pending] = useActionState(submitCardsAction, {});
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
      <CardEditorList
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
      <CardsSubmitFooter
        section={section}
        documentId={documentId}
        cards={cards}
        submitAction={submitAction}
        pending={pending}
        message={state.message}
      />
    </div>
  );
}
