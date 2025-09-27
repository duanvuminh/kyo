"use client";

interface FacebookVideoEmbedProps {
  videoUrl: string;
}

export default function FacebookVideoEmbed({
  videoUrl,
}: FacebookVideoEmbedProps) {
  const encodedUrl = encodeURIComponent(videoUrl);

  return (
    <iframe
      className="w-full aspect-video flex justify-center"
      src={`https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false`}
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
    />
  );
}
