import { Short, isSubtitle } from "@/app/short/_lib/short.types";
import Markdown from "react-markdown";

export const KShortTitleContent = ({ short }: { short: Short }) => {
  return (
    <>
      <h1>{short.title}</h1>
      {!isSubtitle(short) && <Markdown>{short.content}</Markdown>}
    </>
  );
};
