import { Manga } from "@/feature/manga/model/manga";
import Link from "next/link";
import Markdown from "react-markdown";

export const KManga = ({ manga }: { manga: Manga }) => {
  return (
    <>
      <h1>{manga.title}</h1>
      <Markdown>{manga.content}</Markdown>
      <Link href={manga.source}>Xem trang gốc</Link>
      <iframe src={manga.source} className="w-full h-96 border rounded my-2" />
    </>
  );
};
