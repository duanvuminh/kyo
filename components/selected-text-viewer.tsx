"use client";

import { AudioPlayer } from "@/components/audio-player";
import { SvgFromUrl } from "@/components/svg-from-url";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { svgFromWord } from "@/lib/dictionary";
import { useEffect, useState } from "react";
import { Yomi } from "./yomi";

export function SelectedTextViewer() {
  const [selectedText, setSelectedText] = useState("");
  useEffect(() => {
    const handleMouseUp = async () => {
      const selection = window.getSelection();
      if (selection) {
        const text = selection.toString().trim();
        setSelectedText(text);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <Dialog open={selectedText != ""}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cách viết</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap justify-items-center">
          {selectedText.split("").map((item, index) => (
            <SvgFromUrl key={index} url={svgFromWord(item)} />
          ))}
        </div>
        <Yomi text={selectedText} />
        <DialogFooter>
          <AudioPlayer text={selectedText} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
