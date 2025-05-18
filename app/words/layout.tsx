export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="prose p-2">{children}</article>;
}
