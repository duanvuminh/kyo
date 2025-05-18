"use client";

import { useEffect, useState } from "react";

export const Yomi = ({ text }: { text: string }) => {
  const [yomi, setYomi] = useState("");

  useEffect(() => {
    fetch("/api/furigana", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      setYomi(data.result);
    });
  }, [text]);

  return <div className="flex justify-end">{yomi}</div>;
};
