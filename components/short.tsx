import { isSubtitle } from "@/services/short";
import { Short } from "@/types/models/short";
import Markdown from "react-markdown";

export const KShort = ({ short }: { short: Short }) => {
  return (
    <>
      <h1>{short.title}</h1>
      {!isSubtitle(short) && <Markdown>{short.content}</Markdown>}
    </>
  );
};
