import { Infor } from "@/types/models/Infor";
import Markdown from "react-markdown";

export const KInfor = ({ infor }: { infor: Infor }) => {
  return (
    <>
      <h1>{infor.title}</h1>
      <Markdown>{infor.content}</Markdown>
    </>
  );
};
