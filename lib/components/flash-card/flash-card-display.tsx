import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlashCardBack } from "@/lib/components/flash-card/flash-card-back";
import { FlashCardFront } from "@/lib/components/flash-card/flash-card-front";
import { FlashCardItem } from "@/lib/components/flash-card/flash-card";
import { useCardZoneTap } from "@/lib/components/flash-card/use-card-zone-tap";

interface CardBackFaceProps {
  currentCard: FlashCardItem;
  toggleShowBack: () => void;
  contributeHref?: string;
}

function CardBackFace({ currentCard, toggleShowBack, contributeHref }: CardBackFaceProps) {
  return (
    <div>
      <Button variant="ghost" size="sm" onClick={toggleShowBack} className="mb-2 -ml-2">
        ← Lật lại
      </Button>
      <FlashCardBack
        back={currentCard.back}
        more={currentCard.more}
        questions={currentCard.questions}
        front={currentCard.front}
        contributeHref={contributeHref}
      />
    </div>
  );
}

export function FlashCardDisplay({
  currentCard,
  showBack,
  toggleShowBack,
  nextCard,
  prevCard,
  contributeHref,
  index,
  total,
}: {
  currentCard: FlashCardItem;
  showBack: boolean;
  toggleShowBack: () => void;
  nextCard: () => void;
  prevCard: () => void;
  contributeHref?: string;
  index: number;
  total: number;
}) {
  const zoneTapHandlers = useCardZoneTap({ onNext: nextCard, onPrev: prevCard, onTap: toggleShowBack });
  // Mặt sau nội dung phức tạp (câu hỏi trắc nghiệm dùng <li onClick>, không phải <button>) và
  // card có thể có khoảng trống dưới nội dung (do min-h-48) - không gắn handler ở mặt sau để
  // tránh bấm nhầm next/prev vào vùng trống đó; mặt sau chuyển trang qua nút Trước/Tiếp bên ngoài.
  const cardProps = showBack ? {} : zoneTapHandlers;

  return (
    <Card className="relative w-full min-h-48 p-2" {...cardProps}>
      <div className="absolute right-3 top-2 text-xs text-gray-500">
        Thẻ {index + 1}/{total}
      </div>
      <CardContent>
        {showBack ? (
          <CardBackFace currentCard={currentCard} toggleShowBack={toggleShowBack} contributeHref={contributeHref} />
        ) : (
          <FlashCardFront front={currentCard.front} />
        )}
      </CardContent>
    </Card>
  );
}
