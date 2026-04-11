import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～をおいて",
    back: [
      "✨ Ngoài ~ ra thì không có ai/cái nào khác",
      "・Ví dụ: Người có thể dùng thuốc nhuộm phối màu như thế ngoài anh ấy ra không có ai.",
      "📌 Vế sau bắt buộc là phủ định. Dùng để đánh giá cao duy nhất.",
    ],
    more: [
      "🧩 N + をおいて + phủ định",
      "⚖️ ～ならでは (cũng chỉ có, nhưng nhấn điều tuyệt vời đặc trưng), をおいて nhấn không có ai/cái nào khác",
      "📝 Ví dụ:",
      "・このような色合いを出せる職人は、彼をおいてほかにはいない。",
    ],
    questions: [
      {
        id: "3-1",
        content: "この役を演じられるのは、彼女___ほかにいない。",
        answers: ["をおいて", "ならでは", "はおろか", "もさることながら"],
        correctAnswer: 0,
        memo: [
          "をおいて: Ngoài cô ấy ra không có ai khác đóng được vai này — phủ định, duy nhất. (Đúng)",
          "ならでは: Cũng mang nghĩa chỉ có, nhưng nhấn đặc trưng của N, không đi với phủ định trực tiếp như vậy.",
          "はおろか: Mức cao đương nhiên, mức thấp cũng không — không phù hợp.",
          "もさることながら: Không những N mà còn — không phù hợp.",
        ],
      },
      {
        id: "3-2",
        content: "「をおいて」の後ろに来る表現として正しいものはどれか。",
        answers: [
          "肯定文（～できる、～がある）",
          "否定文（～ない、～いない）",
          "疑問文（～か？）",
          "どんな文でも使える",
        ],
        correctAnswer: 1,
        memo: [
          "肯定文（～できる、～がある）: Sai — をおいて bắt buộc vế sau là phủ định.",
          "否定文（～ない、～いない）: Đúng — vế sau luôn là phủ định. (Đúng)",
          "疑問文（～か？）: Sai — không dùng dạng câu hỏi.",
          "どんな文でも使える: Sai — chỉ dùng với phủ định.",
        ],
      },
    ],
  },
  {
    front: "～ならでは",
    back: [
      "✨ Chỉ có ~ mới có thể (điều tuyệt vời đặc trưng)",
      "・Ví dụ: Trải nghiệm đi thuyền buồm này chỉ có ở Hawaii thôi.",
      "📌 Chỉ N mới có đặc trưng tuyệt vời đó, nơi/người khác không có.",
    ],
    more: [
      "🧩 N + ならでは（の + N）/ N + ならではだ",
      "⚖️ ～をおいて (không có ai/cái nào khác, vế sau phủ định), ならでは nhấn đặc trưng độc đáo",
      "📝 Ví dụ:",
      "・ハワイならではの体験ですよ。",
      "・京都ならではの風景が広がっている。",
    ],
    questions: [
      {
        id: "3-3",
        content: "この手作り感は、職人___の技だ。",
        answers: ["ならでは", "はおろか", "をおいて", "にとどまらず"],
        correctAnswer: 0,
        memo: [
          "ならでは: Cảm giác thủ công đặc trưng chỉ có ở nghệ nhân mới tạo ra được. (Đúng)",
          "はおろか: Đương nhiên rồi, mức thấp cũng không — không phù hợp ngữ cảnh ca ngợi.",
          "をおいて: Ngoài ra không có, vế sau phải phủ định — không phù hợp cấu trúc này.",
          "にとどまらず: Không chỉ dừng lại ở, không phù hợp.",
        ],
      },
      {
        id: "3-4",
        content: "「ならでは」と「をおいて」の違いとして正しいものはどれか。",
        answers: [
          "ならでは は後ろに否定が必要、をおいて は肯定でもよい",
          "をおいて は後ろに否定が必要、ならでは は肯定文でも使える",
          "どちらも後ろに否定が必要",
          "どちらも後ろは肯定のみ",
        ],
        correctAnswer: 1,
        memo: [
          "ならでは は後ろに否定が必要、をおいて は肯定でもよい: Ngược lại.",
          "をおいて は後ろに否定が必要、ならでは は肯定文でも使える: Đúng — をおいて bắt buộc phủ định, ならでは dùng được cả hai. (Đúng)",
          "どちらも後ろに否定が必要: Sai — ならでは không bắt buộc.",
          "どちらも後ろは肯定のみ: Sai.",
        ],
      },
    ],
  },
  {
    front: "～にとどまらず",
    back: [
      "✨ Không chỉ dừng lại ở (lan rộng ra hơn nhiều)",
      "・Ví dụ: Thông tin hiện nay không chỉ dừng lại trong một quốc gia mà lan ra toàn thế giới.",
      "📌 Không chỉ trong phạm vi N — còn vượt ra ngoài nhiều hơn.",
    ],
    more: [
      "🧩 N + にとどまらず / V辞書形 + にとどまらず",
      "⚖️ ～だけでなく (không chỉ, thông thường), にとどまらず trang trọng hơn, nhấn phạm vi vượt xa",
      "📝 Ví dụ:",
      "・情報は今や一国にとどまらず、世界中に広まっている。",
    ],
    questions: [
      {
        id: "3-5",
        content: "この問題は国内___、国際的な議論にもなっている。",
        answers: ["にとどまらず", "をおいて", "はおろか", "ならでは"],
        correctAnswer: 0,
        memo: [
          "にとどまらず: Không chỉ dừng trong nước mà trở thành vấn đề quốc tế. (Đúng)",
          "をおいて: Ngoài ra không có (phủ định), không phù hợp ngữ cảnh mở rộng.",
          "はおろか: Đương nhiên rồi, mức thấp cũng không — sắc thái tiêu cực, không phù hợp.",
          "ならでは: Đặc trưng độc đáo, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～はおろか",
    back: [
      "✨ ~ thì đương nhiên rồi (mức thấp hơn cũng không đạt)",
      "・Ví dụ: Tôi dị ứng phấn hoa nặng, ra ngoài thì đương nhiên rồi, ngay trong nhà cũng không tháo khẩu trang được.",
      "📌 Mức cao đương nhiên không đạt, mức thấp bình thường cũng không. Thường có ấn tượng không tốt.",
    ],
    more: [
      "🧩 N（+trợ từ）+ はおろか",
      "⚖️ ～はもちろん (tất nhiên, trung tính/tích cực), はおろか mang ấn tượng tiêu cực",
      "💬 Thứ tự: mức cao (đương nhiên) はおろか → mức thấp (thậm chí) + cũng không đạt",
      "📝 Ví dụ:",
      "・外ではおろか、家の中でもマスクが外せない。",
    ],
    questions: [
      {
        id: "3-6",
        content: "彼は漢字___、ひらがなも読めない。",
        answers: ["はおろか", "ならでは", "をおいて", "にとどまらず"],
        correctAnswer: 0,
        memo: [
          "はおろか: Kanji thì đương nhiên, ngay cả hiragana cũng không đọc được — mức thấp hơn cũng thất bại. (Đúng)",
          "ならでは: Đặc trưng tuyệt vời, không phù hợp ngữ cảnh tiêu cực.",
          "をおいて: Ngoài ra không có, vế sau phủ định — không phù hợp cấu trúc này.",
          "にとどまらず: Không chỉ dừng lại ở, không phù hợp.",
        ],
      },
      {
        id: "3-7",
        content: "「はおろか」と「はもちろん」の違いとして正しいものはどれか。",
        answers: [
          "はおろか は肯定・否定両方、はもちろん は否定のみ",
          "はおろか はネガティブな印象が多い、はもちろん は中立・ポジティブに使える",
          "どちらも全く同じ意味",
          "はもちろん はネガティブ、はおろか はポジティブ",
        ],
        correctAnswer: 1,
        memo: [
          "はおろか は肯定・否定両方、はもちろん は否定のみ: Sai — はもちろん dùng được cả hai.",
          "はおろか はネガティブな印象が多い、はもちろん は中立・ポジティブに使える: Đúng — はおろか thường ấn tượng tiêu cực. (Đúng)",
          "どちらも全く同じ意味: Sai — khác nhau về sắc thái.",
          "はもちろん はネガティブ、はおろか はポジティブ: Hoàn toàn ngược lại.",
        ],
      },
    ],
  },
  {
    front: "～もさることながら",
    back: [
      "✨ Không những N mà (điều tiếp theo còn đáng nói hơn)",
      "・Ví dụ: Sách của tác giả này không những cảm xúc sắc bén mà cách dùng từ ngữ cũng rất tuyệt vời.",
      "📌 N đã tốt rồi, nhưng vế sau còn đáng chú ý/nổi bật hơn.",
    ],
    more: [
      "🧩 N + もさることながら",
      "⚖️ ～はもちろん (tất nhiên), もさることながら nhấn vế sau quan trọng hơn N",
      "💬 Thường dùng để ca ngợi, đánh giá cao con người hoặc sự vật.",
      "📝 Ví dụ:",
      "・鋭い感性もさることながら、言葉の使い方も素晴らしい。",
    ],
    questions: [
      {
        id: "3-8",
        content: "この料理は味___、見た目も美しい。",
        answers: ["もさることながら", "はおろか", "をおいて", "にとどまらず"],
        correctAnswer: 0,
        memo: [
          "もさることながら: Không những vị ngon mà hình thức cũng đẹp — vế sau còn đáng nói hơn. (Đúng)",
          "はおろか: Đương nhiên + mức thấp cũng không — sắc thái tiêu cực, không phù hợp.",
          "をおいて: Ngoài ra không có, vế sau phủ định — không phù hợp.",
          "にとどまらず: Không chỉ dừng lại ở — cũng có thể dùng nhưng もさることながら nhấn vế sau hơn.",
        ],
      },
      {
        id: "3-9",
        content: "「もさることながら」の使い方として正しいものはどれか。",
        answers: [
          "後ろの節より前のNの方が重要・印象的",
          "前のNも後ろの節も同じくらい重要",
          "前のNはもちろんだが、後ろの節の方がより印象的・重要",
          "後ろは必ず否定文になる",
        ],
        correctAnswer: 2,
        memo: [
          "後ろの節より前のNの方が重要・印象的: Sai — vế sau mới đáng chú ý hơn.",
          "前のNも後ろの節も同じくらい重要: Sai — vế sau được nhấn mạnh hơn.",
          "前のNはもちろんだが、後ろの節の方がより印象的・重要: Đúng — N đã tốt rồi, vế sau còn đáng nói hơn. (Đúng)",
          "後ろは必ず否定文になる: Sai — vế sau thường là khẳng định, đánh giá tích cực.",
        ],
      },
    ],
  },
];
