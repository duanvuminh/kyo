import { shuffle } from "@/core/utils/utils";
import { useMemo, useState } from "react";
import { FlashCardItem } from "./flash-card";

export function useFlashCard(cards: FlashCardItem[], cardsPerPage = 20) {
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = page * cardsPerPage;
  const currentCards = useMemo(() => {
    const start = page * cardsPerPage;
    return shuffle(cards.slice(start, start + cardsPerPage));
  }, [cards, page, cardsPerPage]);

  const [prevPage, setPrevPage] = useState(page);
  if (prevPage !== page) {
    setPrevPage(page);
    setIndex(0);
  }

  const goToPage = (newPage: number) => { setPage(newPage); setShowBack(false); };
  const toggleShowBack = () => setShowBack((v) => !v);

  const nextCard = () => {
    if (index + 1 < currentCards.length) { setIndex(index + 1); }
    else if (page + 1 < totalPages) { setPage(page + 1); }
    else { setPage(0); }
    setShowBack(false);
  };

  const prevCard = () => {
    if (index > 0) { setIndex(index - 1); }
    else if (page > 0) { setPage(page - 1); }
    else { setPage(totalPages - 1); }
    setShowBack(false);
  };

  return { currentCards, currentCard: currentCards[index], index, page, totalPages, startIndex, showBack, goToPage, nextCard, prevCard, toggleShowBack };
}
