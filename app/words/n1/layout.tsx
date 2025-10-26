import { KanjiN1Paging } from "@/feature/kanji/component/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <KanjiN1Paging totalPages={95} />
    </>
  );
}
