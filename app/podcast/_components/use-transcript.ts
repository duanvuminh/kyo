import { parseVTT } from "@/lib/utils/videos";
import { Sub } from "@/lib/types";
import { useEffect, useState } from "react";

export function useTranscript(transcriptUrl?: string) {
  const [cues, setCues] = useState<Sub[]>([]);

  useEffect(() => {
    if (!transcriptUrl) {
      return;
    }

    let cancelled = false;
    fetch(`/api/podcast-transcript?url=${encodeURIComponent(transcriptUrl)}`)
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) {
          setCues(parseVTT(text));
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCues([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [transcriptUrl]);

  return cues;
}
