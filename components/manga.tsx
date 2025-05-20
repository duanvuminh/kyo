import { Manga } from "@/types/models/manga";
import Link from "next/link";
import { Fragment } from "react";
import Markdown from "react-markdown";

export const KManga = ({ manga }: { manga: Manga }) => {
  return (
    <Fragment>
      <h1>{manga.title}</h1>
      <Markdown>{manga.content}</Markdown>
      <Link href={manga.source}>Xem trang gốc</Link>
      <iframe src={manga.source} className="w-full h-150" />
    </Fragment>
  );
};
