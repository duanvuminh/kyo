import { SvgFromUrl } from "@/shared/component/svg-from-url";
import { svgURLFromWord } from "@/shared/lib/svg";

export const Write = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {text.split("").map((item, index) => (
        <SvgFromUrl key={index} url={svgURLFromWord(item)} />
      ))}
    </div>
  );
};
