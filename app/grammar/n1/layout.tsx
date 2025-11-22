import { GrammarPaging } from "@/feature/grammar/component/paging";

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
