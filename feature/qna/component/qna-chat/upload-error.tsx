export function UploadError({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="mb-2 p-2 bg-destructive/10 text-destructive text-sm rounded-md flex justify-between items-center">
      <span>{message}</span>
      <button type="button" onClick={onClose} className="text-xs underline">Đóng</button>
    </div>
  );
}
