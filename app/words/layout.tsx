import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import { SelectedTextViewer } from "@/components/selected-text-viewer";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MdxWrapperStyle>{children}</MdxWrapperStyle>
      <SelectedTextViewer />
    </>
  );
}
