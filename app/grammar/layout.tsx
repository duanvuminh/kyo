import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { SelectedTextViewer } from "@/shared/component/selected-text-viewer";

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
