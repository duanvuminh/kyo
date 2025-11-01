import { shuffle } from "@/core/utils/utils";
import { useEffect, useState } from "react";
import { FlashCardItem } from "./flash-card";

export function useFlashCard(cards: FlashCardItem[], cardsPerPage = 20) {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = page * cardsPerPage;
  const pageCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const [currentCards, setCurrentCards] = useState(pageCards);

  useEffect(() => {
    setCurrentCards(shuffle(pageCards));
    setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const goToPage = (newPage: number) => {
    setPage(newPage);
    setShowBack(false);
  };

  const nextCard = () => {
    if (index + 1 < currentCards.length) {
      setIndex(index + 1);
    } else if (page + 1 < totalPages) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
    setShowBack(false);
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(totalPages - 1);
    }
    setShowBack(false);
  };

  const toggleShowBack = () => setShowBack((v) => !v);

  return {
    currentCards,
    currentCard: currentCards[index],
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
