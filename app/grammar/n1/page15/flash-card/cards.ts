import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～にひきかえ",
    back: [
      "✨ Trái lại / Ngược với (đối lập rõ ràng)",
      "・Ví dụ: Trái với anh trai chăm chỉ học, em trai chỉ biết chơi suốt ngày.",
      "📌 Đối lập rõ ràng giữa hai đối tượng. Thường kèm theo cảm xúc ngạc nhiên hoặc đánh giá.",
    ],
    more: [
      "🧩 N / 体通常形 + にひきかえ",
      "⚖️ ～に対して (so với, trung tính), にひきかえ nhấn sự tương phản mạnh, kèm cảm xúc",
      "💬 Hai đối tượng phải cùng loại để đối chiếu: anh vs em, xưa vs nay...",
      "📝 Ví dụ:",
      "・兄が勉強家なのにひきかえ、弟は遊んでばかりいる。",
    ],
    questions: [
      {
        id: "15-1",
        content: "去年の好調___、今年は業績が落ちている。",
        answers: ["にひきかえ", "にもまして", "ないまでも", "ともなると"],
        correctAnswer: 0,
        memo: [
          "にひきかえ: Trái với năm ngoái thuận lợi, năm nay doanh thu giảm — đối lập rõ ràng. (Đúng)",
          "にもまして: Hơn cả — không phải đối lập.",
          "ないまでも: Dù không đến mức — không phù hợp cấu trúc.",
          "ともなると: Khi đã trở thành — không phù hợp.",
        ],
      },
      {
        id: "15-2",
        content: "「にひきかえ」と「に対して」の違いとして正しいものはどれか。",
        answers: [
          "どちらも感情を含まない中立的な対比",
          "にひきかえ は感情・評価を含む対比、に対して は中立的な対比",
          "に対して は感情を含む、にひきかえ は中立的",
          "どちらも全く同じ意味",
        ],
        correctAnswer: 1,
        memo: [
          "どちらも感情を含まない中立的な対比: Sai — にひきかえ mang cảm xúc.",
          "にひきかえ は感情・評価を含む対比、に対して は中立的な対比: Đúng. (Đúng)",
          "に対して は感情を含む、にひきかえ は中立的: Ngược lại.",
          "どちらも全く同じ意味: Sai.",
        ],
      },
    ],
  },
  {
    front: "～にもまして",
    back: [
      "✨ Hơn cả / Hơn bao giờ hết (so với mức chuẩn trước)",
      "・Ví dụ: Năm nay cô ấy đẹp hơn năm ngoái nhiều.",
      "📌 So sánh với chuẩn mực đã biết (thời điểm trước, người khác), nhấn mức độ vượt trội hơn.",
    ],
    more: [
      "🧩 N + にもまして / 疑問詞 + にもまして",
      "⚖️ ～より (hơn, thông thường), にもまして nhấn mức độ vượt trội rõ ràng so với chuẩn đã biết",
      "💬 Thường đi với: 以前にもまして、何よりにもまして、昨年にもまして",
      "📝 Ví dụ:",
      "・今年は去年にもまして暑い夏だった。",
      "・何にもまして、健康が大切だ。",
    ],
    questions: [
      {
        id: "15-3",
        content: "以前___、彼女は活躍している。",
        answers: ["にもまして", "にひきかえ", "ないまでも", "ときたら"],
        correctAnswer: 0,
        memo: [
          "にもまして: Hơn cả trước đây, cô ấy đang hoạt động tích cực hơn. (Đúng)",
          "にひきかえ: Trái lại — nghĩa đối lập, không phù hợp.",
          "ないまでも: Dù không đến mức — không phù hợp.",
          "ときたら: Than phiền — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～ないまでも",
    back: [
      "✨ Dù không đến mức...nhưng ít nhất (mức thấp hơn cũng được)",
      "・Ví dụ: Dù không thể đạt điểm tuyệt đối nhưng ít nhất cũng phải đạt điểm đỗ.",
      "📌 Không đạt được mức lý tưởng cao nhất nhưng ít nhất cũng đạt được điều gì đó ở mức thấp hơn.",
    ],
    more: [
      "🧩 V否定形 + までも",
      "⚖️ ～なくても (dù không, thông thường), ないまでも nhấn 'dù không đến mức cao đó'",
      "💬 Vế sau thường nêu mức tối thiểu mong muốn đạt được",
      "📝 Ví dụ:",
      "・満点は取れないまでも、合格点は取りたい。",
      "・毎日でないまでも、週に一度は運動しよう。",
    ],
    questions: [
      {
        id: "15-4",
        content: "完璧でない___も、ある程度の品質は保ちたい。",
        answers: ["まで", "にも", "くらい", "ほど"],
        correctAnswer: 0,
        memo: [
          "まで: 完璧でないまでも — dù không hoàn hảo nhưng ít nhất phải giữ được chất lượng nhất định. (Đúng)",
          "にも: Không tạo thành mẫu ないまでも.",
          "くらい: Không phù hợp cấu trúc này.",
          "ほど: Không phù hợp cấu trúc này.",
        ],
      },
      {
        id: "15-5",
        content: "「ないまでも」が表す意味として正しいものはどれか。",
        answers: [
          "高いレベルを完全に達成することを強調する",
          "最高レベルには届かないが、より低いレベルは達成したい・できる",
          "何もしないことを正当化する",
          "二つのことを対比して批判する",
        ],
        correctAnswer: 1,
        memo: [
          "高いレベルを完全に達成することを強調する: Sai — ないまでも thừa nhận không đạt mức cao nhất.",
          "最高レベルには届かないが、より低いレベルは達成したい・できる: Đúng. (Đúng)",
          "何もしないことを正当化する: Sai — vẫn muốn đạt được điều gì đó.",
          "二つのことを対比して批判する: Sai — đây là nhiệm vụ của にひきかえ.",
        ],
      },
    ],
  },
];
