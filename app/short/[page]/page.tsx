import { CenterMessage } from "@/components/center-message";
import { KSheet } from "@/components/chat-sheet";
import { ChatWidget } from "@/components/chat-widget";
import LazyHlsPlayer from "@/components/lazy-hls-player";
import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import { KShort } from "@/components/short";
import { ShortFileViewer } from "@/components/short-file";
import {
  displayData,
  getShort,
  hasData,
  isSubtitle,
  showNextPage,
} from "@/services/short";
import { ShortPage } from "@/types/models/short";
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
      <KSheet>
        <MdxWrapperStyle>
          <ChatWidget />
        </MdxWrapperStyle>
      </KSheet>
    </div>
  ) : (
    <CenterMessage>
      Không tìm thấy bài viết cũ hơn.
      <Link href="/short/newest">↪︎Click để quay lại</Link>.
    </CenterMessage>
  );
}
