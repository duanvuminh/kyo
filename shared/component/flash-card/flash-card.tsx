"use client";
import { shuffle } from "@/core/utils/utils";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { useFlashCard } from "@/shared/component/flash-card/use-flash-card";
import { QuestionDetail } from "@/shared/component/question-detail/question-detail";
import { Button } from "@/shared/component/ui/button";
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
              <details open>
                <summary>Ý nghĩa</summary>
                {currentCard.back.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </details>
              {currentCard.more && currentCard.more.length > 0 && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-sm text-gray-600">
                    Cách dùng và ví dụ
                  </summary>
                  <div className="mt-2 flex flex-col gap-1">
                    {currentCard.more.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <AudioPlayer text={currentCard.front} />
                  </div>
                </details>
              )}
              {currentCard.questions && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-sm text-gray-600">
                    Câu hỏi trắc nghiệm
                  </summary>
                  <div className="mt-2 flex flex-col gap-1">
                    {shuffle(currentCard.questions).map((q, i) => (
                      <QuestionDetail key={i} question={q} />
                    ))}
                  </div>
                </details>
              )}
            </div>
          ) : (
            currentCard.front
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button onClick={prevCard}>Trước</Button>
        <Button onClick={nextCard}>Tiếp</Button>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={page === i ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <div className="text-sm text-gray-500">
        Thẻ {index + 1}/{currentCards.length}
      </div>
      <div className="text-xs text-gray-400">Nhấn vào thẻ để lật mặt sau</div>
    </div>
  );
}
