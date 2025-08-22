import { cn } from "@/core/utils/utils";
import { getCategorys } from "@/feature/video/service/video";
import { Button } from "@/shared/component/ui/button";
import Link from "next/link";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ category: string }>;
  children: React.ReactNode;
}) {
  const { category } = await params;
  const categories = getCategorys();
  return (
    <section>
      {categories.map((itemCategory, index) => (
        <Button
          asChild
          key={index}
          variant="link"
          size="sm"
          className={cn(
            "hover:text-primary",
            itemCategory == decodeURI(category) ? "" : "text-muted"
          )}
        >
          <Link href={`/video/${itemCategory}`}>{itemCategory}</Link>
        </Button>
      ))}
      {children}
    </section>
  );
}
