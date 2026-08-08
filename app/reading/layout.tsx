import { MdxWrapperStyle } from "@/lib/components/mdx-wrapper-style";
import { QuickSearchBySelectText } from "@/lib/components/quick-search-by-select-text/quick-search-by-select-text";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MdxWrapperStyle>{children}</MdxWrapperStyle>
      <QuickSearchBySelectText />
    </>
  );
}
