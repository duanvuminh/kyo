import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～ときたら",
    back: [
      "✨ Nói đến...thì / Khi đề cập đến... (than phiền, phê bình)",
      "・Ví dụ: Nói đến đứa con trai nhà tôi thì chỉ biết chơi game suốt ngày.",
      "📌 Nêu chủ đề để phê bình hoặc than phiền. Vế sau thường mang cảm xúc tiêu cực.",
    ],
    more: [
      "🧩 N + ときたら",
      "⚖️ ～といえば (nói đến, trung tính), ときたら mang sắc thái phê bình/bực bội rõ rệt",
      "💬 Thường dùng để than phiền về người thân, đồng nghiệp, tình huống quen thuộc",
      "📝 Ví dụ:",
      "・うちの息子ときたら、一日中ゲームばかりしている。",
    ],
    questions: [
      {
        id: "14-1",
        content: "最近の若者___、スマホから目を離さない。",
        answers: ["ときたら", "ともなると", "たるもの", "なりに"],
        correctAnswer: 0,
        memo: [
          "ときたら: Nói đến giới trẻ hiện nay thì... — phê bình, than phiền về thói quen. (Đúng)",
          "ともなると: Khi đã trở thành... — không phù hợp ngữ cảnh than phiền.",
          "たるもの: Người ở vị trí... thì phải — không phù hợp.",
          "なりに: Theo cách của — không phù hợp.",
        ],
      },
      {
        id: "14-2",
        content: "「ときたら」の後ろに来る内容として最も自然なものはどれか。",
        answers: [
          "褒める・感謝する内容",
          "批判・不満・あきれる内容",
          "条件・仮定の内容",
          "目的・理由の内容",
        ],
        correctAnswer: 1,
        memo: [
          "褒める・感謝する内容: Sai — ときたら thường đi với nội dung tiêu cực.",
          "批判・不満・あきれる内容: Đúng — vế sau thường là phê bình, bực bội, ngán ngẩm. (Đúng)",
          "条件・仮定の内容: Sai — đây không phải mẫu điều kiện.",
          "目的・理由の内容: Sai — đây không phải mẫu lý do.",
        ],
      },
    ],
  },
  {
    front: "～ともなると",
    back: [
      "✨ Khi đã trở thành...thì (đương nhiên sẽ có điều gì đó)",
      "・Ví dụ: Khi đã là giám đốc thì trách nhiệm cũng nặng nề hơn.",
      "📌 Khi đạt đến mức độ/vị trí cao nhất định thì đương nhiên có điều gì đó đi kèm.",
    ],
    more: [
      "🧩 N + ともなると / ともなれば",
      "⚖️ ～になると (khi trở thành, thông thường), ともなると nhấn mức độ đặc biệt/cao hơn bình thường",
      "💬 Thường dùng với các danh từ chỉ vị trí, mức độ, sự kiện đặc biệt",
      "📝 Ví dụ:",
      "・社長ともなると、責任も大きくなる。",
      "・入試シーズンともなると、図書館は混み合う。",
    ],
    questions: [
      {
        id: "14-3",
        content: "プロ選手___、練習量も桁違いだ。",
        answers: ["ともなると", "ときたら", "たるもの", "なりに"],
        correctAnswer: 0,
        memo: [
          "ともなると: Khi đã là vận động viên chuyên nghiệp thì lượng tập luyện cũng khác hẳn — mức độ đặc biệt. (Đúng)",
          "ときたら: Than phiền — không phù hợp ngữ cảnh mô tả khách quan.",
          "たるもの: Người ở vị trí... thì phải — mang nghĩa bổn phận, khác nghĩa.",
          "なりに: Theo cách của — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～ともあろう",
    back: [
      "✨ Người ở vị trí...mà lại (phê bình hành động không xứng tầm)",
      "・Ví dụ: Người là bác sĩ mà lại không biết điều cơ bản đó thì thật đáng ngạc nhiên.",
      "📌 Phê bình người có địa vị/danh tiếng cao làm điều không xứng với vị trí của họ.",
    ],
    more: [
      "🧩 N + ともあろう + もの/人 + が",
      "⚖️ ～たるもの (bổn phận phải làm), ともあろう nhấn sự ngạc nhiên/phê bình vì đã không làm đúng",
      "💬 Thường đi với N chỉ vị trí cao: 医師、教授、社長、プロ...",
      "📝 Ví dụ:",
      "・医師ともあろう者が、そんな基本的なことも知らないとは。",
    ],
    questions: [
      {
        id: "14-4",
        content: "弁護士___者が、法律を破るとは許せない。",
        answers: ["ともあろう", "ときたら", "ともなると", "たるもの"],
        correctAnswer: 0,
        memo: [
          "ともあろう: Luật sư mà lại vi phạm pháp luật — phê bình hành động không xứng vị trí. (Đúng)",
          "ときたら: Than phiền — không có cấu trúc + 者が.",
          "ともなると: Khi đã trở thành — không phù hợp cấu trúc.",
          "たるもの: Bổn phận — thường đi với câu chỉ phải làm gì, không phải phê bình.",
        ],
      },
    ],
  },
  {
    front: "～たるもの",
    back: [
      "✨ Người/vật ở vị trí...thì phải (tiêu chuẩn, bổn phận)",
      "・Ví dụ: Người là lãnh đạo thì phải luôn bình tĩnh và đưa ra quyết định sáng suốt.",
      "📌 Chỉ ra tiêu chuẩn hoặc bổn phận của người/vật có vị trí, danh hiệu nhất định.",
    ],
    more: [
      "🧩 N + たるもの（は）",
      "⚖️ ～ともあろう (phê bình đã không đạt tiêu chuẩn), たるもの nhấn tiêu chuẩn phải đạt được",
      "💬 Vế sau thường là câu mệnh lệnh, khuyên nhủ, hoặc nêu điều phải làm",
      "📝 Ví dụ:",
      "・リーダーたるもの、常に冷静でなければならない。",
    ],
    questions: [
      {
        id: "14-5",
        content: "教師___、学び続ける姿勢を忘れてはならない。",
        answers: ["たるもの", "ともあろう", "ときたら", "ともなると"],
        correctAnswer: 0,
        memo: [
          "たるもの: Người là giáo viên thì phải... — nêu tiêu chuẩn, bổn phận. (Đúng)",
          "ともあろう: Phê bình đã không làm đúng — không phù hợp câu nêu bổn phận.",
          "ときたら: Than phiền — không phù hợp.",
          "ともなると: Khi đã trở thành — khác nghĩa, không nhấn bổn phận.",
        ],
      },
      {
        id: "14-6",
        content: "「ともあろう」と「たるもの」の違いとして正しいものはどれか。",
        answers: [
          "どちらも批判的な文脈でのみ使われる",
          "ともあろう は批判・驚き、たるもの は義務・基準を示す",
          "たるもの は批判・驚き、ともあろう は義務・基準を示す",
          "どちらも全く同じ意味で使える",
        ],
        correctAnswer: 1,
        memo: [
          "どちらも批判的な文脈でのみ使われる: Sai — たるもの không phải luôn phê bình.",
          "ともあろう は批判・驚き、たるもの は義務・基準を示す: Đúng. (Đúng)",
          "たるもの は批判・驚き、ともあろう は義務・基準を示す: Ngược lại.",
          "どちらも全く同じ意味で使える: Sai.",
        ],
      },
    ],
  },
  {
    front: "～なりに",
    back: [
      "✨ Theo cách của / Phù hợp với (khả năng/mức độ của mình)",
      "・Ví dụ: Dù không giỏi nhưng tôi cũng đang cố gắng theo cách của mình.",
      "📌 Phù hợp với khả năng hoặc mức độ của chủ thể. Không so sánh với người khác.",
    ],
    more: [
      "🧩 N + なりに / N + なりの + N / V辞書形 + なりに",
      "⚖️ ～に合わせて (điều chỉnh theo), なりに nhấn sự phù hợp với mức độ/bản chất của chủ thể",
      "💬 Thường mang nghĩa tích cực: dù giới hạn nhưng vẫn cố gắng theo cách của mình",
      "📝 Ví dụ:",
      "・下手なりに、一生懸命やっています。",
      "・子供なりに、考えているんだよ。",
    ],
    questions: [
      {
        id: "14-7",
        content: "初心者___に楽しめるコースを用意しました。",
        answers: ["なり", "たる", "とも", "とき"],
        correctAnswer: 0,
        memo: [
          "なり: 初心者なりに — phù hợp với mức độ của người mới bắt đầu. (Đúng)",
          "たる: たるもの — bổn phận của vị trí cao, không phù hợp.",
          "とも: ともあろう / ともなると — không phù hợp cấu trúc.",
          "とき: ときたら — than phiền — không phù hợp.",
        ],
      },
    ],
  },
];
