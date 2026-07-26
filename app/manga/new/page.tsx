import { KCreateMangaForm } from "@/feature/manga/component/create-manga-form";

export default function Page() {
  return (
    <div className="prose mx-auto w-full p-2">
      <h1>Tạo manga mới</h1>
      <KCreateMangaForm />
    </div>
  );
}
