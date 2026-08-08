import { GrammarPaging } from "@/app/grammar/_components/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GrammarPaging totalPages={12} />
    </>
  );
}
