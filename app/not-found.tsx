import { CenterMessage } from "@/lib/components/center-message";
import Link from "next/link";

export default function NotFound() {
  return (
    <CenterMessage>
      <div className="flex flex-col items-center gap-2">
        <p>Không tìm thấy nội dung này.</p>
        <Link href="/">↪︎ Về trang chủ</Link>
      </div>
    </CenterMessage>
  );
}
