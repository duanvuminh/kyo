import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import { SelectedTextViewer } from "@/components/selected-text-viewer";
import { Fragment } from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <MdxWrapperStyle>{children}</MdxWrapperStyle>
      <SelectedTextViewer />
    </Fragment>
  );
}
