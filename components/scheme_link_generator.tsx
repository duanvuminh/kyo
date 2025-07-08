"use client";

import { useState } from "react";

const predefinedLinks = [
  "tokyo-tokyopoint://tokyo/digitalauthapp?result=OidcUserInfoError",
  "tokyo-tokyopoint://tokyo/digitalauthapp?result=LinkFinished&linkResult=1",
  "tokyo-tokyopoint://tokyo/digitalauthapp?result=LinkFinished&linkResult=3&temporaryId=123456",
];

export default function SchemeLinkGenerator() {
  const [inputPath, setInputPath] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerate = () => {
    const trimmed = inputPath.trim().replace(/^\/+/, "");
    if (trimmed) {
      setGeneratedLink(`tokyo-tokyopoint://${trimmed}`);
    } else {
      setGeneratedLink("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow space-y-6">
      <h1 className="text-xl font-bold">Tạo và test custom scheme link</h1>

      <div>
        <p className="font-semibold mb-2">🔗 3 link mẫu:</p>
        <ul className="space-y-1 list-disc list-inside">
          {predefinedLinks.map((link, index) => (
            <li key={index}>
              <a href={link} className="text-blue-600 underline break-all">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-2">🔧 Tự tạo thêm link:</p>
        <input
          type="text"
          placeholder="VD: tokyo/digitalauthapp?result=..."
          value={inputPath}
          onChange={(e) => setInputPath(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tạo link
        </button>

        {generatedLink && (
          <div className="mt-4">
            <p className="font-semibold">🔗 Link vừa tạo:</p>
            <a
              href={generatedLink}
              className="text-blue-600 underline break-all"
            >
              {generatedLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
