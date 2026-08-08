import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "word-history";
const MAX_HISTORY = 20;

export interface WordHistoryItem {
  words: string;
  content?: string;
}

let cachedRaw: string | null = null;
let cachedParsed: WordHistoryItem[] = [];

function getSnapshot(): WordHistoryItem[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedParsed = raw ? JSON.parse(raw) : [];
  }
  return cachedParsed;
}

const EMPTY: WordHistoryItem[] = [];

function getServerSnapshot(): WordHistoryItem[] {
  return EMPTY;
}

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function notify() {
  cachedRaw = null;
  listeners.forEach((cb) => cb());
}

export function useWordHistory() {
  const history = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const addWord = useCallback((item: WordHistoryItem) => {
    const prev: WordHistoryItem[] = getSnapshot();
    const filtered = prev.filter((h) => h.words !== item.words);
    const next = [item, ...filtered].slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    notify();
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    notify();
  }, []);

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
          className="text-xs px-2 py-0.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors max-w-30 truncate"
        >
          {item.words}
        </button>
      ))}
    </div>
  );
}
