import Link from "next/link";

interface UpdateContentLinkProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const UpdateContentLink = ({
  children,
  onClick,
}: UpdateContentLinkProps) => {
  return (
    <Link
      href="/update-content"
      className="text-xs text-muted-foreground"
      onClick={onClick}
    >
      {children ?? "Đóng góp"}
    </Link>
  );
};
