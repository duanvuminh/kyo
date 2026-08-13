import { toast } from "sonner";

export async function copyText(
  text: string,
  successMessage = "Đã copy",
  // navigator.clipboard.writeText() chỉ chạy khi document gọi nó đang focus. Trong PiP window
  // (Document Picture-in-Picture) đây là 1 document/window riêng biệt -> phải dùng navigator của
  // đúng window đang focus (truyền vào từ nơi gọi), không phải navigator global của trang chính.
  targetWindow: Window = window,
): Promise<void> {
  try {
    await targetWindow.navigator.clipboard.writeText(text);
    toast.success(successMessage);
  } catch {
    toast.error("Không thể copy vào clipboard");
  }
}
