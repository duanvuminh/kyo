import { Manga } from "@/feature/manga/model/manga";
import Image from "next/image";
import Markdown from "react-markdown";

export const KManga = ({ manga }: { manga: Manga }) => {
  return (
    <>
      <h1>{manga.title}</h1>
      <Markdown>{manga.content}</Markdown>
      <div className="flex flex-col items-center gap-1 not-prose">
        {manga.images.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt={`${manga.title} trang ${i + 1}`}
            width={800}
            height={1200}
            className="w-full max-w-2xl h-auto"
            unoptimized
          />
        ))}
      </div>
    </>
  );
};
