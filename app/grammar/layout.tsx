import { GrammarEditButton } from "@/feature/grammar/component/grammar-edit-button";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";

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
