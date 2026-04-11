import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～ばこそ",
    back: [
      "✨ Chính vì...nên mới (nhấn mạnh lý do)",
      "・Ví dụ: Chính vì yêu nên mới chia tay. Hãy hiểu cho tâm trạng của anh.",
      "📌 Nhấn mạnh lý do duy nhất. Vế sau thường có のだ.",
    ],
    more: [
      "🧩 体条件形ば + こそ",
      "⚖️ ～から (vì, thông thường), ばこそ nhấn mạnh 'chính vì lý do đó mới dẫn đến kết quả này'",
      "📝 Ví dụ:",
      "・愛していればこそ、別れることにした。",
    ],
    questions: [
      {
        id: "12-1",
        content: "あなたのことを信頼していれ___こそ、厳しいことを言うのだ。",
        answers: ["ば", "て", "たら", "なら"],
        correctAnswer: 0,
        memo: [
          "ば: ～ていればこそ — chính vì tin tưởng nên mới nói thẳng. (Đúng)",
          "て: ～ていてこそ cũng có thể nhưng ～ていればこそ phổ biến và tự nhiên hơn.",
          "たら: Không kết hợp với こそ theo cách này.",
          "なら: Không kết hợp với こそ theo cách này.",
        ],
      },
    ],
  },
  {
    front: "～とあって",
    back: [
      "✨ Vì trạng thái đặc biệt...nên (kết quả đương nhiên)",
      "・Ví dụ: Chính vì ngày nghỉ dài thời tiết đẹp nên chỗ vui chơi nào cũng đông người.",
      "📌 Trạng thái đặc biệt dẫn đến kết quả đương nhiên. Không dùng cho bản thân.",
    ],
    more: [
      "🧩 N / 体通常形 + とあって",
      "⚖️ ～なので (vì, thông thường), とあって nhấn trạng thái đặc biệt dẫn đến kết quả tất nhiên",
      "💬 Không dùng khi nói về lý do của bản thân mình.",
      "📝 Ví dụ:",
      "・久しぶりの快晴の連休とあって、行楽地はどこも人でいっぱいだ。",
    ],
    questions: [
      {
        id: "12-2",
        content: "人気アイドルの初来日___、空港には大勢のファンが集まった。",
        answers: ["とあって", "ばこそ", "ゆえに", "手前"],
        correctAnswer: 0,
        memo: [
          "とあって: Vì là lần đầu idol nổi tiếng đến Nhật — trạng thái đặc biệt dẫn đến fan đổ xô. (Đúng)",
          "ばこそ: Nhấn mạnh lý do duy nhất — không phù hợp.",
          "ゆえに: Vì, trang trọng — có thể dùng nhưng とあって tự nhiên hơn ở đây.",
          "手前: Vì hoàn cảnh bản thân — không phù hợp.",
        ],
      },
      {
        id: "12-3",
        content: "「とあって」が使えない文はどれか。",
        answers: [
          "試験前とあって、図書館は満員だ。",
          "セール最終日とあって、店内は混んでいる。",
          "私は風邪とあって、学校を休んだ。",
          "有名シェフの料理とあって、みんな期待していた。",
        ],
        correctAnswer: 2,
        memo: [
          "試験前とあって、図書館は満員だ。: Hợp lệ — trạng thái đặc biệt (trước thi), kết quả tất nhiên.",
          "セール最終日とあって、店内は混んでいる。: Hợp lệ — ngày cuối sale, đương nhiên đông.",
          "私は風邪とあって、学校を休んだ。: Sai — không dùng để giải thích lý do của bản thân. (Đúng)",
          "有名シェフの料理とあって、みんな期待していた。: Hợp lệ — vì là đồ của đầu bếp nổi tiếng.",
        ],
      },
    ],
  },
  {
    front: "～ではあるまいし",
    back: [
      "✨ Bởi vì không phải...thì (đưa ra lời khuyên/phê bình)",
      "・Ví dụ: Bởi vì không phải lỗi của anh nên đừng có tự trách bản thân như thế.",
      "📌 Vì không phải là N đó nên không cần/không nên làm vế sau.",
    ],
    more: [
      "🧩 N + ではあるまいし",
      "⚖️ ～じゃあるまいし (khẩu ngữ hơn), ではあるまいし trang trọng hơn một chút",
      "💬 Thường thể hiện sự phê bình nhẹ hoặc lời khuyên hợp lý.",
      "📝 Ví dụ:",
      "・あなたが悪かったわけではあるまいし、そんなに自分を責めなくていい。",
    ],
    questions: [
      {
        id: "12-4",
        content: "子供___、そんなに怖がらなくてもいい。",
        answers: ["ではあるまいし", "ばこそ", "とあって", "ゆえに"],
        correctAnswer: 0,
        memo: [
          "ではあるまいし: Bởi vì không phải trẻ con nên không cần sợ như vậy — lý do không phải N. (Đúng)",
          "ばこそ: Nhấn mạnh lý do tích cực — không phù hợp.",
          "とあって: Trạng thái đặc biệt — không phù hợp.",
          "ゆえに: Vì — nghĩa ngược lại ở đây.",
        ],
      },
    ],
  },
  {
    front: "～手前",
    back: [
      "✨ Chính vì hoàn cảnh này...nên phải (tự trách nhiệm)",
      "・Ví dụ: Chính vì lúc nào cũng nhận được sự giúp đỡ nên lần này phải để tôi giúp.",
      "📌 Vì hoàn cảnh/lời nói/hành động trước đó nên phải hành động phù hợp, không bị đánh giá thấp.",
    ],
    more: [
      "🧩 N_の / V辞書形・た形・ている形 + 手前",
      "⚖️ ～ばこそ (vì lý do tích cực), 手前 nhấn áp lực xã hội/danh dự phải giữ",
      "💬 Chủ ngữ thường là bản thân — cảm giác không thể không làm vì đã nói/làm trước đó.",
      "📝 Ví dụ:",
      "・いつも手伝ってもらっている手前、今回は私が手伝わなければならない。",
    ],
    questions: [
      {
        id: "12-5",
        content: "大口をたたいた___、失敗するわけにはいかない。",
        answers: ["手前", "ばこそ", "とあって", "ゆえに"],
        correctAnswer: 0,
        memo: [
          "手前: Chính vì đã nói lớn lao như vậy nên không thể để thất bại — áp lực từ lời nói trước. (Đúng)",
          "ばこそ: Nhấn lý do tích cực — không phù hợp ngữ cảnh áp lực.",
          "とあって: Trạng thái đặc biệt — không phù hợp.",
          "ゆえに: Vì, trang trọng — không nhấn áp lực xã hội như 手前.",
        ],
      },
    ],
  },
  {
    front: "～ゆえ（に）",
    back: [
      "✨ Vì / Bởi vì (trang trọng, văn viết)",
      "・Ví dụ: Bởi vì chưa quen nên có nhiều cái còn vụng về xin thứ lỗi.",
      "📌 Trang trọng, chính thức. Thường dùng trong văn viết, thư từ.",
    ],
    more: [
      "🧩 N_（の）/ 体通常形（な形-な/N-である）+ ゆえ（に）",
      "⚖️ ～から・ので (vì, thông thường), ゆえに văn phong cổ/trang trọng, sách báo, văn học",
      "📝 Ví dụ:",
      "・慣れないことゆえ、至らぬ点が多いかと思いますがご容赦ください。",
    ],
    questions: [
      {
        id: "12-6",
        content: "若さゆえの___、許してやってください。",
        answers: ["過ち", "理由", "条件", "場所"],
        correctAnswer: 0,
        memo: [
          "過ち: Lỗi lầm của tuổi trẻ — ゆえの + N (vì sự trẻ trung mà phạm sai lầm), tự nhiên. (Đúng)",
          "理由: ゆえの理由 không tự nhiên — ゆえ bản thân đã là 'lý do'.",
          "条件: Không phù hợp ngữ nghĩa.",
          "場所: Không phù hợp.",
        ],
      },
      {
        id: "12-7",
        content: "「ゆえに」の文体として正しいものはどれか。",
        answers: [
          "日常会話でよく使われる",
          "文語的・改まった場面で使われる",
          "若者言葉として使われる",
          "否定文でしか使えない",
        ],
        correctAnswer: 1,
        memo: [
          "日常会話でよく使われる: Sai — ゆえに không dùng trong hội thoại thường ngày.",
          "文語的・改まった場面で使われる: Đúng — trang trọng, văn viết, thư từ chính thức. (Đúng)",
          "若者言葉として使われる: Sai — hoàn toàn ngược lại.",
          "否定文でしか使えない: Sai — dùng được cả khẳng định và phủ định.",
        ],
      },
    ],
  },
];
