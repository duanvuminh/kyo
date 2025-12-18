"use client";

interface JumpToPageProps {
  totalPages: number;
  inputPage: string;
  setInputPage: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function JumpToPage({ totalPages, inputPage, setInputPage, onSubmit }: JumpToPageProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center gap-1">
      <input
        type="number"
        min={1}
        max={totalPages}
        value={inputPage}
        onChange={(e) => setInputPage(e.target.value)}
        placeholder={`1-${totalPages}`}
        className="w-16 px-2 py-1 text-sm border rounded"
      />
      <button type="submit" className="px-2 py-1 text-sm border rounded hover:bg-gray-100">Go</button>
    </form>
  );
}
