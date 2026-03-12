import { useCallback, useState } from "react";

const STORAGE_KEY = "word-history";
const MAX_HISTORY = 20;

export interface WordHistoryItem {
  words: string;
  content?: string;
}

function loadHistory(): WordHistoryItem[] {
  if (typeof window === "undefined") { return []; }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function useWordHistory() {
  const [history, setHistory] = useState<WordHistoryItem[]>(loadHistory);

  const addWord = useCallback((item: WordHistoryItem) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.words !== item.words);
      const next = [item, ...filtered].slice(0, MAX_HISTORY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }

  return { history, addWord, clearHistory };
}

interface WordHistoryProps {
  history: WordHistoryItem[];
  onSelect: (item: WordHistoryItem) => void;
}

export function WordHistory({ history, onSelect }: WordHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1 px-1 py-1">
      {history.map((item) => (
        <button
          key={item.words}
          type="button"
          onClick={() => onSelect(item)}
          className="text-xs px-2 py-0.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
        >
          {item.words.split(" ").slice(0, 3).join(" ")}
        </button>
      ))}
    </div>
  );
}
