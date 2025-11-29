import { ReadingN1Paging } from "@/feature/reading/component/paging";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ReadingN1Paging totalPages={55} />
    </>
  );
}
