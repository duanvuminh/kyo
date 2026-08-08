import { CenterContent } from "@/lib/components/center-content";
import Link from "next/link";

export default function NotFound() {
  return (
    <CenterContent>
      <div className="flex flex-col items-center gap-2">
        <p>Không tìm thấy nội dung này.</p>
        <Link href="/">↪︎ Về trang chủ</Link>
      </div>
    </CenterContent>
  );
}
