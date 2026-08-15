import { Short, isSubtitle } from "@/app/short/_lib/short.types";
import { LazyMarkdown } from "@/lib/components/lazy-markdown";

export const KShortTitleContent = ({ short }: { short: Short }) => {
  return (
    <>
      <h1>{short.title}</h1>
      {!isSubtitle(short) && <LazyMarkdown>{short.content}</LazyMarkdown>}
    </>
  );
};
