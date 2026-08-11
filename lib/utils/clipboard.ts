import { toast } from "sonner";

export async function copyText(text: string, successMessage = "Đã copy"): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(successMessage);
  } catch {
    toast.error("Không thể copy vào clipboard");
  }
}
