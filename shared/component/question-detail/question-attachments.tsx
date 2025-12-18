"use client";

import Image from "next/image";

interface QuestionAttachmentsProps {
  attachments?: string[];
}

export function QuestionAttachments({ attachments }: QuestionAttachmentsProps) {
  if (!attachments || attachments.length === 0) {
    return null;
  }

  return (
    <div className="not-prose mb-2 space-y-2">
      {attachments.map((url, index) => {
        const isAudio = url.match(/\.(mp3|wav|ogg)(\?|#|$)/i);
        if (isAudio) {
          return (
            <audio key={index} controls className="w-full">
              <source src={url} />
              Trình duyệt của bạn không hỗ trợ audio.
            </audio>
          );
        }
        return (
          <div key={index} className="relative w-full aspect-video">
            <Image
              src={url}
              alt={`Question attachment ${index + 1}`}
              fill
              className="object-contain w-full"
            />
          </div>
        );
      })}
    </div>
  );
}
