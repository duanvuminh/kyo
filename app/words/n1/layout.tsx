import { WordPaging } from "@/app/words/_components/paging";

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
