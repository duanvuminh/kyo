import { KanjiN1Paging } from "@/app/kanji/_components/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <KanjiN1Paging totalPages={18} />
    </>
  );
}
