import { ReadingN1Paging } from "@/app/reading/_components/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ReadingN1Paging totalPages={3} />
    </>
  );
}
