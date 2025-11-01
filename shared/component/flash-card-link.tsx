import Link from "next/link";

interface FlashCardLinkProps {
  href: string;
}

export default function FlashCardLink({ href }: FlashCardLinkProps) {
  return (
    <Link href={href} className="fixed top-1/2 right-2 z-50">
      🧠💬
    </Link>
  );
}
