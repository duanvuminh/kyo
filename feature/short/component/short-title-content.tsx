import { Short } from "@/feature/short/type/short.domain";
import { isSubtitle } from "@/feature/short/type/short.view-model";
import Markdown from "react-markdown";

export const KShortTitleContent = ({ short }: { short: Short }) => {
  return (
    <>
      <h1>{short.title}</h1>
      {!isSubtitle(short) && <Markdown>{short.content}</Markdown>}
    </>
  );
};
