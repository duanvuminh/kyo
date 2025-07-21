import { MdxWrapperStyle } from "@/component/mdx-wrapper-style";
import { SelectedTextViewer } from "@/component/selected-text-viewer";

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
