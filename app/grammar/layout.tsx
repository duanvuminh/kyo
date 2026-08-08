import { GrammarEditButton } from "@/app/grammar/_components/grammar-edit-button";
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
      <div className="flex justify-center py-4 text-muted-foreground">
        <GrammarEditButton />
      </div>
      <QuickSearchBySelectText />
    </>
  );
}
