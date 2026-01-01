"use client";

import dynamic from "next/dynamic";

const MangaChat = dynamic(
  () =>
    import("@/feature/manga/component/manga-chat/manga-chat").then(
      (mod) => mod.MangaChat
    ),
  { ssr: false }
);

export function MangaChatEntry() {
  return <MangaChat />;
}
