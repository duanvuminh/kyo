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
}: {
  currentCard: FlashCardItem;
  showBack: boolean;
  toggleShowBack: () => void;
  nextCard: () => void;
  prevCard: () => void;
  contributeHref?: string;
}) {
  const zoneTapHandlers = useCardZoneTap({ onNext: nextCard, onPrev: prevCard, onTap: toggleShowBack });
  // Mặt sau nội dung phức tạp (câu hỏi trắc nghiệm dùng <li onClick>, không phải <button>) và
  // card có thể có khoảng trống dưới nội dung (do min-h-48) - không gắn handler ở mặt sau để
  // tránh bấm nhầm next/prev vào vùng trống đó; mặt sau chuyển trang qua nút Trước/Tiếp bên ngoài.
  const cardProps = showBack ? {} : zoneTapHandlers;

  return (
    <Card className="w-full min-h-48 p-2" {...cardProps}>
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
