import { WordPaging } from "@/feature/word/component/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <WordPaging totalPages={95} />
    </>
  );
}
