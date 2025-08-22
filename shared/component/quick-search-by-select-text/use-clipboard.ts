import { useCallback } from "react";

export function useClipboard() {
  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          return true;
        }
        return false;
      } catch (error) {
        console.warn("Failed to copy to clipboard:", error);
        return false;
      }
    },
    []
  );

  const readFromClipboard = useCallback(async (): Promise<string | null> => {
    try {
      if (navigator.clipboard) {
        return await navigator.clipboard.readText();
      }
      return null;
    } catch (error) {
      console.warn("Failed to read from clipboard:", error);
      return null;
    }
  }, []);

  return {
    copyToClipboard,
    readFromClipboard,
  };
}
