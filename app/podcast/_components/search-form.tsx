"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Form GET thuần sẽ gây full page navigation -> trên PWA "Add to Home Screen" (iOS) sẽ
// thoát khỏi standalone mode và bật ra Safari/Chrome ngoài. Dùng router.push để ở lại SPA.
export function PodcastSearchForm({ q, onlyWithTranscript }: { q?: string; onlyWithTranscript: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState(q ?? "");
  const [transcriptOnly, setTranscriptOnly] = useState(onlyWithTranscript);

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ q: query });
    if (transcriptOnly) {
      params.set("transcript", "1");
    }
    router.push(`/podcast?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tên podcast hoặc link Apple Podcasts"
          className="flex-1"
        />
        <Button type="submit">Tìm</Button>
      </div>
      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={transcriptOnly}
          onChange={(e) => setTranscriptOnly(e.target.checked)}
        />
        Chỉ hiện podcast có transcript
      </label>
    </form>
  );
}
