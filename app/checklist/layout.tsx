import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MdxWrapperStyle>{children}</MdxWrapperStyle>
    </>
  );
}
