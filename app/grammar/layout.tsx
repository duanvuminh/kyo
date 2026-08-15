import { ContentAnimeButton } from "@/lib/components/content-anime-button";
import { ContentEditButton } from "@/lib/components/content-edit-button";
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
      <div className="flex justify-center gap-4 py-4 text-muted-foreground">
        <ContentEditButton />
        <ContentAnimeButton />
      </div>
      <QuickSearchBySelectText />
    </>
  );
}
