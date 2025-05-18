import { Button } from "@/components/ui/button";
import { getCategorys } from "@/services/video";
import { cn } from "@/utils/utils";
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
        <Button asChild key={index} variant="link" size="sm">
          <Link
            href={`/videos/${itemCategory}`}
            className={cn(
              itemCategory == decodeURI(category) ? "text-red-500" : ""
            )}
          >
            {itemCategory}
          </Link>
        </Button>
      ))}
      {children}
    </section>
  );
}
