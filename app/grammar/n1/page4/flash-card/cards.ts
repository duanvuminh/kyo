import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～なり…なり",
    back: [
      "✨ A hay B đều được (hãy chọn một đi)",
      "・Ví dụ: Con cá này tôi câu được, nướng hay hầm rồi ăn thử.",
      "📌 Câu phía sau không dùng thể quá khứ. Thể hiện ý hướng, kì vọng.",
    ],
    more: [
      "🧩 N（+trợ từ）/ V辞書形 + なり...なり",
      "⚖️ ～か～か (lựa chọn trung tính), なり…なり gợi ý người nghe chọn một trong những ví dụ",
      "💬 Nhóm ví dụ phải có ý nghĩa giống nhau hoặc cùng loại.",
      "📝 Ví dụ:",
      "・焼くなり煮るなりして食べてみてください。",
    ],
    questions: [
      {
        id: "4-1",
        content: "困ったことがあれば、電話する___メールする___してください。",
        answers: ["なり…なり", "といわず…といわず", "といい…といい", "であれ…であれ"],
        correctAnswer: 0,
        memo: [
          "なり…なり: Gợi ý chọn một trong hai (gọi điện hay nhắn tin) — đưa ví dụ để người nghe chọn. (Đúng)",
          "といわず…といわず: Không phân biệt, tất cả đều — không phù hợp khi đưa ra gợi ý lựa chọn.",
          "といい…といい: Đánh giá dựa trên nhiều khía cạnh, không phù hợp.",
          "であれ…であれ: Dù là A hay B đều phán xét chung, không phù hợp để gợi ý.",
        ],
      },
      {
        id: "4-2",
        content: "「なり…なりして」の後ろに来られない文はどれか。",
        answers: [
          "食べてみてください",
          "連絡してください",
          "食べた",
          "相談してみましょう",
        ],
        correctAnswer: 2,
        memo: [
          "食べてみてください: Hợp lệ — vế sau là mệnh lệnh/đề nghị.",
          "連絡してください: Hợp lệ — vế sau là đề nghị.",
          "食べた: Sai — vế sau không dùng thể quá khứ. (Đúng)",
          "相談してみましょう: Hợp lệ — vế sau là đề nghị cùng làm.",
        ],
      },
    ],
  },
  {
    front: "～であれ…であれ",
    back: [
      "✨ Dù là A hay B (đưa ra phán xét chung cho cả hai)",
      "・Ví dụ: Dù là bia hay rượu, chất có cồn là chất có cồn. Tuyệt đối không uống khi lái xe.",
      "📌 A và B thuộc cùng loại. Phán xét/đánh giá áp dụng chung cho cả hai.",
    ],
    more: [
      "🧩 N + であれ...であれ / N + であろうと...であろうと",
      "⚖️ ～なり…なり (gợi ý chọn một), であれ…であれ đưa ra quy tắc/phán xét chung",
      "📝 Ví dụ:",
      "・ビールであれワインであれ、アルコールはアルコールだ。",
    ],
    questions: [
      {
        id: "4-3",
        content: "男性___女性___、この規則はすべての人に適用される。",
        answers: ["であれ…であれ", "なり…なり", "といわず…といわず", "といい…といい"],
        correctAnswer: 0,
        memo: [
          "であれ…であれ: Dù là nam hay nữ, quy tắc áp dụng cho tất cả — phán xét chung. (Đúng)",
          "なり…なり: Gợi ý chọn một trong hai, không phải quy tắc chung.",
          "といわず…といわず: Cũng có thể dùng nhưng であれ…であれ trang trọng hơn và nhấn phán xét chung.",
          "といい…といい: Đánh giá dựa trên khía cạnh, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～といい…といい",
    back: [
      "✨ Nói về A hay nói về B (đánh giá dựa trên nhiều khía cạnh)",
      "・Ví dụ: Con côn trùng này nói về màu sắc hay hình dạng thì thực sự quá giống lá cây.",
      "📌 Thường đánh giá cao. Đưa ra nhiều khía cạnh để nhận xét.",
    ],
    more: [
      "🧩 N + といい...といい",
      "⚖️ ～にしても…にしても (cũng tương tự, trung tính hơn), といい…といい thường dùng để khen",
      "💬 Cũng có thể dùng để phê bình (ít hơn).",
      "📝 Ví dụ:",
      "・この虫は色といい形といい、本当に葉っぱそっくりだ。",
    ],
    questions: [
      {
        id: "4-4",
        content: "この店は料理___サービス___、申し分ない。",
        answers: ["といい…といい", "なり…なり", "であれ…であれ", "といわず…といわず"],
        correctAnswer: 0,
        memo: [
          "といい…といい: Nói về món ăn hay dịch vụ đều hoàn hảo — đánh giá tích cực nhiều khía cạnh. (Đúng)",
          "なり…なり: Gợi ý chọn một, không phù hợp.",
          "であれ…であれ: Phán xét chung cho cả hai, không nhấn đánh giá chất lượng.",
          "といわず…といわず: Không phân biệt tất cả — không phù hợp ngữ cảnh khen.",
        ],
      },
    ],
  },
  {
    front: "～といわず…といわず",
    back: [
      "✨ Bất kể A hay B (tất cả đều như nhau)",
      "・Ví dụ: Bọn trẻ chơi ngoài bãi biển thì bất kể tay hay chân toàn thân đều là cát.",
      "📌 Không phân biệt A hay B. Thường ý nghĩa không tốt. Không dùng với phủ định.",
    ],
    more: [
      "🧩 N + といわず...といわず",
      "⚖️ ～であれ…であれ (phán xét chung, trang trọng), といわず…といわず nhấn không có ngoại lệ",
      "💬 Nhóm A và B thường là sự liên kết không gian, thời gian, bộ phận cơ thể...",
      "📝 Ví dụ:",
      "・手といわず足といわず、全身砂だらけだ。",
    ],
    questions: [
      {
        id: "4-5",
        content: "彼女は昼___夜___、ずっと仕事をしている。",
        answers: ["といわず…といわず", "なり…なり", "といい…といい", "であれ…であれ"],
        correctAnswer: 0,
        memo: [
          "といわず…といわず: Bất kể ngày hay đêm đều làm việc — không có ngoại lệ, không phân biệt. (Đúng)",
          "なり…なり: Gợi ý chọn một, không phù hợp.",
          "といい…といい: Đánh giá chất lượng, không phù hợp.",
          "であれ…であれ: Phán xét chung, có thể dùng nhưng といわず…といわず nhấn không có ngoại lệ hơn.",
        ],
      },
      {
        id: "4-6",
        content: "「といわず…といわず」が使えない文はどれか。",
        answers: [
          "頭といわず顔といわず、汗だらけだ。",
          "朝といわず夜といわず、電話がかかってくる。",
          "日本といわず中国といわず、アジアで人気だ。",
          "いい料理といわず悪い料理といわず、全部食べた。",
        ],
        correctAnswer: 3,
        memo: [
          "頭といわず顔といわず、汗だらけだ。: Hợp lệ — bộ phận cơ thể, không phân biệt.",
          "朝といわず夜といわず、電話がかかってくる。: Hợp lệ — thời gian, không phân biệt.",
          "日本といわず中国といわず、アジアで人気だ。: Hợp lệ — không gian, không phân biệt.",
          "いい料理といわず悪い料理といわず、全部食べた。: Sai — không dùng với nhóm đối lập hoàn toàn, phải cùng loại. (Đúng)",
        ],
      },
    ],
  },
];
