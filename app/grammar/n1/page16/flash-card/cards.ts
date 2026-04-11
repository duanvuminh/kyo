import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～に至って",
    back: [
      "✨ Đến mức / Đến khi...mới (tình huống tiến đến điểm nghiêm trọng)",
      "・Ví dụ: Đến khi bệnh trở nên nghiêm trọng rồi mới bắt đầu điều trị thì đã quá muộn.",
      "📌 Tình huống tiến triển đến mức nghiêm trọng thì mới xảy ra hành động/nhận thức. Thường tiêu cực.",
    ],
    more: [
      "🧩 N / V辞書形 + に至って（は）/ に至り / に至った",
      "⚖️ ～になって（から）(sau khi trở thành), に至って nhấn mức độ nghiêm trọng đã đạt đến",
      "💬 Thường đi với: 今に至って、この段階に至って、～するに至って",
      "📝 Ví dụ:",
      "・病気が深刻になるに至って、ようやく治療を始めた。",
      "・今に至っても、彼からの連絡はない。",
    ],
    questions: [
      {
        id: "16-1",
        content: "事態が悪化する___、対策を講じることにした。",
        answers: ["に至って", "始末だ", "っぱなしで", "に至っては"],
        correctAnswer: 0,
        memo: [
          "に至って: Đến khi tình huống xấu đi đến mức đó thì mới đưa ra biện pháp. (Đúng)",
          "始末だ: Kết cục xấu — dùng ở cuối câu, không phù hợp vị trí này.",
          "っぱなしで: Bỏ mặc — không phù hợp nghĩa.",
          "に至っては: Nêu ví dụ cực đoan — không phù hợp ngữ cảnh.",
        ],
      },
    ],
  },
  {
    front: "～に至っては",
    back: [
      "✨ Thậm chí...còn (nêu ví dụ cực đoan nhất)",
      "・Ví dụ: Nhiều sản phẩm bị lỗi, thậm chí có sản phẩm còn gây nguy hiểm đến tính mạng.",
      "📌 Nêu ví dụ cực đoan nhất trong một chuỗi. Thường mang nghĩa tiêu cực, nhấn mạnh sự trầm trọng.",
    ],
    more: [
      "🧩 N + に至っては",
      "⚖️ ～に至って (đến mức nghiêm trọng), に至っては nhấn cực đoan nhất trong chuỗi liệt kê",
      "💬 Thường xuất hiện sau khi đã đề cập các trường hợp nhẹ hơn",
      "📝 Ví dụ:",
      "・多くの製品に欠陥があり、中には命にかかわるものに至っては回収対象となった。",
    ],
    questions: [
      {
        id: "16-2",
        content: "多くの社員が残業しており、部長___は毎日深夜まで働いている。",
        answers: ["に至っては", "に至って", "始末だ", "っぱなし"],
        correctAnswer: 0,
        memo: [
          "に至っては: Thậm chí trưởng phòng còn làm đến tận khuya — nêu ví dụ cực đoan nhất. (Đúng)",
          "に至って: Đến mức — dùng cho hành động xảy ra sau khi đạt mức đó, không nêu ví dụ cực đoan.",
          "始末だ: Kết cục xấu — dùng ở cuối câu.",
          "っぱなし: Bỏ mặc — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～始末だ",
    back: [
      "✨ Rốt cuộc lại / Kết cục là (kết quả xấu sau chuỗi sự việc)",
      "・Ví dụ: Anh ấy không chịu nghe lời khuyên, rốt cuộc còn bỏ việc luôn.",
      "📌 Kết cục xấu sau chuỗi sự việc tiêu cực. Người nói bày tỏ sự thất vọng, ngán ngẩm.",
    ],
    more: [
      "🧩 V辞書形 / た形 + 始末だ",
      "⚖️ ～結果（だ）(kết quả, trung tính), 始末だ chỉ dùng cho kết quả xấu, mang cảm xúc thất vọng",
      "💬 Người nói không phải là người trong cuộc hoặc đang nhìn nhận hành động của người khác",
      "📝 Ví dụ:",
      "・注意しても聞かず、ついに辞める始末だ。",
    ],
    questions: [
      {
        id: "16-3",
        content: "何度も警告したのに、とうとう警察に捕まる___。",
        answers: ["始末だ", "に至って", "っぱなしだ", "に至っては"],
        correctAnswer: 0,
        memo: [
          "始末だ: Rốt cuộc bị cảnh sát bắt — kết cục xấu sau nhiều lần cảnh báo. (Đúng)",
          "に至って: Đến mức — không phù hợp vị trí cuối câu với nghĩa này.",
          "っぱなしだ: Bỏ mặc — không phù hợp.",
          "に至っては: Nêu ví dụ cực đoan — không phù hợp cấu trúc.",
        ],
      },
      {
        id: "16-4",
        content: "「始末だ」が表す意味として正しいものはどれか。",
        answers: [
          "良い結果・成果を強調する",
          "悪い経緯の末の悪い結末、話者の失望・あきれを表す",
          "物事の始まりや原因を説明する",
          "二つの対照的な結果を比べる",
        ],
        correctAnswer: 1,
        memo: [
          "良い結果・成果を強調する: Sai — 始末だ chỉ dùng cho kết quả xấu.",
          "悪い経緯の末の悪い結末、話者の失望・あきれを表す: Đúng. (Đúng)",
          "物事の始まりや原因を説明する: Sai.",
          "二つの対照的な結果を比べる: Sai.",
        ],
      },
    ],
  },
  {
    front: "～っぱなしだ",
    back: [
      "✨ Cứ để vậy / Không chịu... (trạng thái bị bỏ mặc)",
      "・Ví dụ: Anh ấy để cửa mở suốt không đóng lại.",
      "📌 Hành động hoặc trạng thái bị bỏ mặc, không xử lý tiếp. Thường mang nghĩa tiêu cực.",
    ],
    more: [
      "🧩 V連用形（ます形の前）+ っぱなし（だ）",
      "⚖️ ～ている (đang, trung tính), っぱなし nhấn sự bỏ mặc, không xử lý — thường tiêu cực",
      "💬 Ví dụ: 開けっぱなし (để mở), つけっぱなし (để bật), 立ちっぱなし (đứng mãi)",
      "📝 Ví dụ:",
      "・ドアを開けっぱなしにしないでください。",
      "・電気をつけっぱなしで寝てしまった。",
    ],
    questions: [
      {
        id: "16-5",
        content: "冷蔵庫を開け___にしていたので、食べ物が傷んでしまった。",
        answers: ["っぱなし", "に至って", "始末", "っきり"],
        correctAnswer: 0,
        memo: [
          "っぱなし: 開けっぱなし — để mở tủ lạnh mà không đóng lại, đồ ăn hỏng. (Đúng)",
          "に至って: Đến mức — không phù hợp cấu trúc V連用形 + ～.",
          "始末: Kết cục xấu — cấu trúc khác, không đi với V連用形 trực tiếp.",
          "っきり: Mãi chỉ có thế — nghĩa khác, thường là 一人っきり (chỉ một mình).",
        ],
      },
    ],
  },
];
