"use client";
import { FlashCardBack } from "@/shared/component/flash-card/flash-card-back";
import { FlashCardControls } from "@/shared/component/flash-card/flash-card-controls";
import { FlashCardFront } from "@/shared/component/flash-card/flash-card-front";
import { FlashCardPagination } from "@/shared/component/flash-card/flash-card-pagination";
import { useFlashCard } from "@/shared/component/flash-card/use-flash-card";
import { Card, CardContent } from "@/shared/component/ui/card";
import { Question } from "@/shared/types/models/question";

export interface FlashCardItem {
  front: string;
  back: string[];
  more?: string[];
  questions?: Question[];
}

export function FlashCard({ cards }: { cards: FlashCardItem[] }) {
  const {
    currentCards,
    currentCard,
    index,
    page,
    totalPages,
    showBack,
    goToPage,
    nextCard,
    prevCard,
    toggleShowBack,
  } = useFlashCard(cards);

  if (cards.length === 0) return <div>Không có flash card nào.</div>;

  return (
    <div className="flex flex-col items-center gap-4 max-w-sm mx-auto mt-8">
      <Card className="w-full min-h-48 p-2" onClick={toggleShowBack}>
        <CardContent>
          {showBack ? (
            <div onClick={(e) => e.stopPropagation()}>
              <FlashCardBack
                back={currentCard.back}
                more={currentCard.more}
                questions={currentCard.questions}
                front={currentCard.front}
              />
            </div>
          ) : (
            <FlashCardFront front={currentCard.front} />
          )}
        </CardContent>
      </Card>
      <FlashCardControls prevCard={prevCard} nextCard={nextCard} />
      <FlashCardPagination
        totalPages={totalPages}
        page={page}
        goToPage={goToPage}
      />
      <div className="text-sm text-gray-500">
        Thẻ {index + 1}/{currentCards.length}
      </div>
      <div className="text-xs text-gray-400">Nhấn vào thẻ để lật mặt sau</div>
    </div>
  );
}
