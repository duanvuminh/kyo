import { Short } from "@/types/models/short";
import { Fragment } from "react";
import Markdown from "react-markdown";

export const KShort = ({ short }: { short: Short }) => {
  return (
    <Fragment>
      <h1>{short.title}</h1>
      {!short.useSub && <Markdown>{short.content}</Markdown>}
    </Fragment>
  );
};
