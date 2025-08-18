import { KShort } from "@/feature/short/component/short";
import { ShortFileViewer } from "@/feature/short/component/short-file";
import { ShortPage } from "@/feature/short/model/short";
import {
  displayData,
  getShort,
  hasData,
  isSubtitle,
  showNextPage,
} from "@/feature/short/service/short";
import { CenterMessage } from "@/shared/component/center-message";
import LazyHlsPlayer from "@/shared/component/lazy-hls-player";
import { SelectedTextViewer } from "@/shared/component/selected-text-viewer";
import Link from "next/link";
import { Fragment } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pagaData: ShortPage | undefined = await getShort({ page });
  return hasData(pagaData) ? (
    <div className="p-2 prose mx-auto relative">
      {displayData(pagaData).map((short) => (
        <Fragment key={short.id}>
          <KShort short={short} />
          {short.files?.map((file, index) => {
            return isSubtitle(short) ? (
              <LazyHlsPlayer
                key={index}
                src={file.url}
                sub={short.content}
                controls
                className="max-w-full rounded my-2"
              />
            ) : (
              <ShortFileViewer key={index} file={file} />
            );
          })}
        </Fragment>
      ))}
      {showNextPage(pagaData) && (
        <Link href={`/short/${pagaData!.nextPage}`}>Bài viết cũ hơn</Link>
      )}
      <SelectedTextViewer />
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/short/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
