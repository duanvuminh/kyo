import { Button } from "@/shared/component/ui/button";
export function FlashCardPagination({
  totalPages,
  page,
  goToPage,
}: {
  totalPages: number;
  page: number;
  goToPage: (i: number) => void;
}) {
  return (
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
  );
}
