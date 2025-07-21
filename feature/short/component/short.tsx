import { Short } from "@/feature/short/model/short";
import { isSubtitle } from "@/feature/short/service/short";
import Markdown from "react-markdown";

export const KShort = ({ short }: { short: Short }) => {
  return (
    <>
      <h1>{short.title}</h1>
      {!isSubtitle(short) && <Markdown>{short.content}</Markdown>}
    </>
  );
};
