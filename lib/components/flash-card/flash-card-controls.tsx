import { Button } from "@/components/ui/button";
export function FlashCardControls({
  prevCard,
  nextCard,
}: {
  prevCard: () => void;
  nextCard: () => void;
}) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={prevCard}>← Trước</Button>
      <Button variant="outline" size="sm" onClick={nextCard}>Tiếp →</Button>
    </div>
  );
}
