interface FacebookVideoEmbedProps {
  videoUrl: string;
}

export default function FacebookVideoEmbed({
  videoUrl,
}: FacebookVideoEmbedProps) {
  const encodedUrl = encodeURIComponent(videoUrl);

  return (
    <iframe
      className="w-full aspect-square flex justify-center"
      src={`https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false`}
      style={{ border: "none", overflow: "hidden" }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
    />
  );
}
