import { Infor } from "@/types/models/Infor";
import { Fragment } from "react";
import Markdown from "react-markdown";

export const KInfor = ({ infor }: { infor: Infor }) => {
  return (
    <Fragment>
      <h1>{infor.title}</h1>
      <Markdown>{infor.content}</Markdown>
    </Fragment>
  );
};
