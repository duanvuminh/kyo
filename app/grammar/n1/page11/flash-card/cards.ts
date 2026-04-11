import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～べく",
    back: [
      "✨ Vì muốn...nên / Với mục đích... (hành động có định hướng)",
      "・Ví dụ: Anh ấy muốn trở thành cầu thủ bóng đá nên mỗi ngày luyện tập rất khắc nghiệt.",
      "📌 Hành động dựa trên mong muốn, dự định. Cả 2 vế cùng chủ ngữ. する → すべく.",
    ],
    more: [
      "🧩 V辞書形 + べく（する → すべく）",
      "⚖️ ～ために (vì mục đích, thông thường), べく trang trọng hơn, thường văn viết",
      "💬 Thường gặp trong văn phong trang trọng: báo chí, tiểu thuyết.",
      "📝 Ví dụ:",
      "・彼はサッカー選手になるべく、毎日厳しいトレーニングをしている。",
    ],
    questions: [
      {
        id: "11-1",
        content: "夢を実現す___、彼女は毎日努力を続けた。",
        answers: ["べく", "んがため", "をもって", "たところで"],
        correctAnswer: 0,
        memo: [
          "べく: Vì muốn thực hiện ước mơ nên tiếp tục nỗ lực — mong muốn dẫn đến hành động. (Đúng)",
          "んがため: Cũng là 'vì mục tiêu' nhưng んがため nhấn mục tiêu to lớn, trọng đại hơn.",
          "をもって: Bằng phương tiện — không phù hợp.",
          "たところで: Cho dù thử cũng vô ích — nghĩa ngược lại.",
        ],
      },
      {
        id: "11-2",
        content: "「べく」の「する」の変化として正しいものはどれか。",
        answers: ["しべく", "するべく・すべく", "せべく", "されべく"],
        correctAnswer: 1,
        memo: [
          "しべく: Sai — không phải dạng chia đúng.",
          "するべく・すべく: Đúng — する có thể là するべく hoặc すべく. (Đúng)",
          "せべく: Sai.",
          "されべく: Sai — đây là thể bị động.",
        ],
      },
    ],
  },
  {
    front: "～んがため（に）",
    back: [
      "✨ Vì mục tiêu lớn lao...nên (quyết tâm cao)",
      "・Ví dụ: Cô ấy vì muốn biến ước mơ trở thành ca sĩ thành hiện thực nên đã lên Tokyo.",
      "📌 Mục tiêu to lớn, trọng đại. Cả 2 vế cùng chủ ngữ. する → せんがため.",
    ],
    more: [
      "🧩 Vない + んがため（に）（する → せんがため）",
      "⚖️ ～べく (mong muốn, định hướng), んがため nhấn mục tiêu cao cả, quyết tâm mạnh hơn",
      "💬 Thường dùng trong văn phong trang trọng, văn học.",
      "📝 Ví dụ:",
      "・夢を実現させんがため、東京に出た。",
    ],
    questions: [
      {
        id: "11-3",
        content: "国を守ら___ため、兵士たちは命をかけた。",
        answers: ["んが", "べく", "をもって", "ないで"],
        correctAnswer: 0,
        memo: [
          "んがため: Vì mục tiêu bảo vệ đất nước — mục tiêu cao cả, quyết tâm. (Đúng)",
          "べく: Cũng là 'vì mục đích' nhưng べく ít nhấn quyết tâm cao cả như んがため.",
          "をもって: Bằng phương tiện — không phù hợp.",
          "ないで: Không làm A mà... — hoàn toàn nghĩa khác.",
        ],
      },
    ],
  },
  {
    front: "～をもって (phương tiện)",
    back: [
      "✨ Bằng / Dựa vào (phương tiện đặc biệt)",
      "・Ví dụ: Kết quả thi tuyển dụng hôm nay sẽ liên lạc bằng văn bản vào những ngày sau.",
      "📌 Phương tiện/cách thức đặc biệt. Không dùng cho phương tiện thông thường cụ thể.",
    ],
    more: [
      "🧩 N + をもって",
      "⚖️ をもって (kết thúc, page 2) vs をもって (phương tiện) — cùng hình thức, khác nghĩa theo ngữ cảnh",
      "💬 Phương tiện thường là: 書面、実力、誠意、力 — không nói cụ thể bằng 'xe' hay 'bút'.",
      "📝 Ví dụ:",
      "・採用の結果は書面をもってご連絡いたします。",
    ],
    questions: [
      {
        id: "11-4",
        content: "実力___、この難しい試験を突破した。",
        answers: ["をもって", "べく", "んがため", "たところで"],
        correctAnswer: 0,
        memo: [
          "をもって: Bằng thực lực đã vượt qua kỳ thi khó — phương tiện đặc biệt, trang trọng. (Đúng)",
          "べく: Vì mục đích — không phù hợp.",
          "んがため: Vì mục tiêu cao cả — không phù hợp.",
          "たところで: Cho dù thử cũng vô ích — nghĩa ngược lại.",
        ],
      },
      {
        id: "11-5",
        content: "「をもって」が表す２つの意味として正しいものはどれか。",
        answers: [
          "原因と結果",
          "手段・方法 と 終了・期限",
          "条件と結果",
          "比較と評価",
        ],
        correctAnswer: 1,
        memo: [
          "原因と結果: Sai — をもって không biểu thị nguyên nhân-kết quả.",
          "手段・方法 と 終了・期限: Đúng — をもって có 2 nghĩa: bằng phương tiện (page 11) và kết thúc tại thời điểm (page 2). (Đúng)",
          "条件と結果: Sai.",
          "比較と評価: Sai.",
        ],
      },
    ],
  },
];
