import { shuffle } from "@/core/utils/utils";
import { useMemo, useState } from "react";
import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

interface CardPosition {
  page: number;
  index: number;
}

function getNextPosition(index: number, page: number, totalPages: number, currentLength: number): CardPosition {
  if (index + 1 < currentLength) {
    return { page, index: index + 1 };
  }
  if (page + 1 < totalPages) {
    return { page: page + 1, index: 0 };
  }
  return { page: 0, index: 0 };
}

function getPrevPosition(index: number, page: number, totalPages: number): CardPosition {
  if (index > 0) {
    return { page, index: index - 1 };
  }
  if (page > 0) {
    return { page: page - 1, index: 0 };
  }
  return { page: totalPages - 1, index: 0 };
}

export function useFlashCard(cards: FlashCardItem[], cardsPerPage = 20) {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const totalPages = Math.max(1, Math.ceil(cards.length / cardsPerPage));
  const startIndex = page * cardsPerPage;
  const currentCards = useMemo(() => {
    const start = page * cardsPerPage;
    return shuffle(cards.slice(start, start + cardsPerPage));
  }, [cards, page, cardsPerPage]);

  const applyPosition = (pos: CardPosition) => {
    setPage(pos.page);
    setIndex(pos.index);
    setShowBack(false);
  };

  const goToPage = (newPage: number) => applyPosition({ page: newPage, index: 0 });
  const toggleShowBack = () => setShowBack((v) => !v);
  const nextCard = () => applyPosition(getNextPosition(index, page, totalPages, currentCards.length));
  const prevCard = () => applyPosition(getPrevPosition(index, page, totalPages));

  return {
    currentCards,
    currentCard: currentCards[index] ?? currentCards[0],
    index,
    page,
    totalPages,
    startIndex,
    showBack,
    goToPage,
    nextCard,
    prevCard,
    toggleShowBack,
  };
}
