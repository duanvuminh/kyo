// Điểm gọi chung cho mọi request ra API bên ngoài (Discord, Slack, GitHub, iTunes, video market...).
// Không tự ý can thiệp cache - mỗi call site vẫn tự truyền cache/next như cũ qua init. Chỗ này
// chỉ log + là nơi cắm thêm retry/interceptor sau này mà không phải sửa từng repository.
export async function apiFetch(input: string, init?: RequestInit): Promise<Response> {
  const method = init?.method ?? "GET";
  const start = Date.now();
  try {
    const res = await fetch(input, init);
    console.log(`[apiFetch] ${method} ${input} -> ${res.status} (${Date.now() - start}ms)`);
    return res;
  } catch (e) {
    console.log(`[apiFetch] ${method} ${input} -> lỗi network (${Date.now() - start}ms)`, e);
    throw e;
  }
}
