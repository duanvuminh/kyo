import Link from "next/link";

interface UpdateContentLinkProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}

export const UpdateContentLink = ({
  children,
  onClick,
  href = "/update-content",
}: UpdateContentLinkProps) => {
  return (
    <Link
      href={href}
      className="text-xs text-muted-foreground"
      onClick={onClick}
    >
      {children ?? "Đóng góp"}
    </Link>
  );
};
