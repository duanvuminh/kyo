"use client";

import { strokeColorList } from "@/lib/dictionary";
import { useEffect, useRef } from "react";

export function SvgFromUrl({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((svgText) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = `<svg${svgText.split("<svg")[1]}`;
          const svg = containerRef.current.querySelector("svg");
          if (svg) {
            const paths = Array.from(svg.querySelectorAll("path"));
            paths.forEach((path, i) => {
              const length = path.getTotalLength();
              path.setAttribute("stroke", strokeColorList[i % 8]);
              path.setAttribute("fill", "none");
              path.setAttribute("stroke-width", "3");
              path.style.strokeDasharray = `${length}`;
              path.style.strokeDashoffset = `${length}`;
              path.style.animation = `draw 0.5s ease forwards`;
              path.style.animationDelay = `${i * 0.3}s`;
            });
            const style = document.createElement("style");
            style.innerHTML = `
              @keyframes draw {
                to {
                  stroke-dashoffset: 0;
                }
              }
            `;
            document.head.appendChild(style);
          }
        }
      });
  }, [url]);

  return <div ref={containerRef} />;
}
