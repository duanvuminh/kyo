"use client";

import type { EditableCard, EditableQuestion } from "@/app/update-content/_lib/update-content.types";
import { useState } from "react";

function emptyQuestion(): EditableQuestion {
  return { id: "", content: "", answers: ["", "", "", ""], correctAnswer: 0, memo: [] };
}

function emptyCard(): EditableCard {
  return { front: "", back: [], more: [], questions: [] };
}

export function useCardsEditor(initialCards: EditableCard[]) {
  const [cards, setCards] = useState(initialCards);

  const updateCard = (index: number, patch: Partial<EditableCard>) => {
    setCards((prev) => prev.map((c, i) => (i === index ? { ...c, ...patch } : c)));
  };

  const addCard = () => setCards((prev) => [...prev, emptyCard()]);

  const removeCard = (index: number) => {
    setCards((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuestion = (
    cardIndex: number,
    questionIndex: number,
    patch: Partial<EditableQuestion>
  ) => {
    setCards((prev) =>
      prev.map((c, i) =>
        i !== cardIndex
          ? c
          : {
              ...c,
              questions: c.questions.map((q, j) => (j === questionIndex ? { ...q, ...patch } : q)),
            }
      )
    );
  };

  const addQuestion = (cardIndex: number) => {
    setCards((prev) =>
      prev.map((c, i) => (i === cardIndex ? { ...c, questions: [...c.questions, emptyQuestion()] } : c))
    );
  };

  const removeQuestion = (cardIndex: number, questionIndex: number) => {
    setCards((prev) =>
      prev.map((c, i) =>
        i === cardIndex ? { ...c, questions: c.questions.filter((_, j) => j !== questionIndex) } : c
      )
    );
  };

  return { cards, updateCard, addCard, removeCard, updateQuestion, addQuestion, removeQuestion };
}
