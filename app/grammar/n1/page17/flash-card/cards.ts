import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～たりとも",
    back: [
      "✨ Dù chỉ...cũng không (không cho phép dù chỉ một chút)",
      "・Ví dụ: Dù chỉ một giây cũng không được lãng phí.",
      "📌 Nhấn mạnh không cho phép dù chỉ lượng nhỏ nhất. Đi với số lượng từ nhỏ + phủ định.",
    ],
    more: [
      "🧩 数量詞（一＋助数詞）+ たりとも + 否定形",
      "⚖️ ～でも (dù, thông thường), たりとも nhấn mạnh tuyệt đối không cho phép ngay cả lượng tối thiểu",
      "💬 Thường dùng: 一秒たりとも、一円たりとも、一歩たりとも",
      "📝 Ví dụ:",
      "・一秒たりとも無駄にできない。",
      "・一円たりとも渡さない。",
    ],
    questions: [
      {
        id: "17-1",
        content: "大切な試験の前だ。一分___無駄にしてはいけない。",
        answers: ["たりとも", "すら", "だに", "からある"],
        correctAnswer: 0,
        memo: [
          "たりとも: Dù chỉ một phút cũng không được lãng phí — nhấn mạnh tuyệt đối. (Đúng)",
          "すら: Ngay cả...cũng — không đi với số lượng từ theo cách này.",
          "だに: Chỉ cần nghĩ đến — không phù hợp.",
          "からある: Số lượng lớn — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～すら",
    back: [
      "✨ Ngay cả...cũng (không) — nêu ví dụ cực đoan tối thiểu",
      "・Ví dụ: Anh ấy bận đến mức ngay cả ăn cũng không có thời gian.",
      "📌 Nêu ví dụ cực đoan (điều tối thiểu nhất) cũng không đạt được/có. Nhấn mức độ trầm trọng.",
    ],
    more: [
      "🧩 N + すら（も）/ V連用形 + すら",
      "⚖️ ～さえ (ngay cả, thông thường), すら trang trọng hơn, nhấn mạnh hơn",
      "💬 Thường đi với phủ định. すら≒さえ nhưng すら cổ điển/văn viết hơn",
      "📝 Ví dụ:",
      "・彼は忙しくて、食事すら取る時間がない。",
      "・子供でも知っていることを、大人すら知らなかった。",
    ],
    questions: [
      {
        id: "17-2",
        content: "あの難問は専門家___解けなかった。",
        answers: ["すら", "たりとも", "だに", "にして"],
        correctAnswer: 0,
        memo: [
          "すら: Ngay cả chuyên gia cũng không giải được — nêu ví dụ cực đoan. (Đúng)",
          "たりとも: Số lượng từ + phủ định — không phù hợp cấu trúc.",
          "だに: Chỉ cần...là — không phù hợp nghĩa.",
          "にして: Chính là/ngay cả ở vị trí đó — nghĩa khác.",
        ],
      },
    ],
  },
  {
    front: "～だに",
    back: [
      "✨ Chỉ cần...là / Ngay cả khi nghĩ đến (gây cảm xúc mạnh)",
      "・Ví dụ: Chỉ cần nghĩ đến điều đó thôi là đã sợ rồi.",
      "📌 Chỉ cần làm/nghĩ điều gì nhỏ nhất đó cũng gây ra cảm xúc mạnh. Văn viết, trang trọng.",
    ],
    more: [
      "🧩 V辞書形 + だに / 想像・考える + だに",
      "⚖️ ～だけで (chỉ cần, thông thường), だに trang trọng hơn, cổ điển hơn",
      "💬 Thường đi với: 想像するだに、考えるだに、聞くだに、見るだに",
      "📝 Ví dụ:",
      "・想像するだに恐ろしい。",
      "・考えるだに恐ろしい未来だ。",
    ],
    questions: [
      {
        id: "17-3",
        content: "想像する___恐ろしい結果になりそうだ。",
        answers: ["だに", "すら", "たりとも", "あっての"],
        correctAnswer: 0,
        memo: [
          "だに: 想像するだに — chỉ cần tưởng tượng đến thôi đã thấy đáng sợ. (Đúng)",
          "すら: Ngay cả — không đi với V辞書形 trực tiếp theo cách này.",
          "たりとも: Số lượng từ + phủ định — không phù hợp.",
          "あっての: Nhờ có...mà — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～にして",
    back: [
      "✨ Chính là / Ngay cả...mà (nhấn mạnh đặc biệt)",
      "・Ví dụ: Ngay cả thiên tài như vậy mà còn phải học chăm chỉ.",
      "📌 Nhấn mạnh vị trí/thời điểm/người đặc biệt mà vẫn có điều gì đó. Hoặc 'chính ở lúc/vị trí đó'.",
    ],
    more: [
      "🧩 N + にして / 数量詞 + にして",
      "⚖️ ～でも (dù, thông thường), にして trang trọng, nhấn tính đặc biệt của chủ thể",
      "💬 Hai nghĩa: (1) ngay cả X mà vẫn... (2) chính tại/vào lúc X (時間・段階)",
      "📝 Ví dụ:",
      "・天才にして、努力を怠らない。",
      "・50歳にして、初めて海外に行った。",
    ],
    questions: [
      {
        id: "17-4",
        content: "彼は30歳___、世界的な指揮者になった。",
        answers: ["にして", "すら", "たりとも", "あっての"],
        correctAnswer: 0,
        memo: [
          "にして: Chính ở tuổi 30 mà đã trở thành nhạc trưởng tầm cỡ thế giới — nhấn thời điểm đặc biệt. (Đúng)",
          "すら: Ngay cả — không phù hợp nghĩa.",
          "たりとも: Số lượng nhỏ + phủ định — không phù hợp.",
          "あっての: Nhờ có — không phù hợp nghĩa.",
        ],
      },
    ],
  },
  {
    front: "～あっての",
    back: [
      "✨ Chính nhờ có...mà mới có (N2 tồn tại nhờ N1)",
      "・Ví dụ: Chính nhờ có sức khỏe mới có thể làm được mọi việc.",
      "📌 N2 chỉ tồn tại/thực hiện được nhờ N1. Nhấn sự phụ thuộc không thể thiếu.",
    ],
    more: [
      "🧩 N1 + あっての + N2",
      "⚖️ ～があってこそ (chính nhờ có mới), あっての ngắn gọn hơn, thường đứng trước danh từ",
      "💬 N1 là nền tảng không thể thiếu cho N2: 君あっての私、健康あっての仕事",
      "📝 Ví dụ:",
      "・健康あっての仕事だ。",
      "・お客様あっての商売です。",
    ],
    questions: [
      {
        id: "17-5",
        content: "お客様___商売ですから、お客様第一に考えます。",
        answers: ["あっての", "にして", "すら", "だに"],
        correctAnswer: 0,
        memo: [
          "あっての: お客様あっての商売 — có khách hàng thì mới có kinh doanh. (Đúng)",
          "にして: Nhấn vị trí/thời điểm đặc biệt — không phù hợp.",
          "すら: Ngay cả — không phù hợp cấu trúc N + あっての + N.",
          "だに: Chỉ cần...là — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～からある",
    back: [
      "✨ Đến.../ Tới.../ Lên đến... (nhấn số lượng lớn, ấn tượng)",
      "・Ví dụ: Một khối đá nặng đến 100 kg được đặt ở đó.",
      "📌 Nhấn mạnh số lượng lớn, con số ấn tượng. Dùng với số lượng từ lớn.",
    ],
    more: [
      "🧩 数量詞 + からある（物の重さ・大きさ）/ からする（値段）/ からの（人数）",
      "⚖️ ～も (đến, nhấn nhiều), からある/からする trang trọng hơn, nhấn tính ấn tượng",
      "💬 からある: trọng lượng/kích thước; からする: giá tiền; からの: số người",
      "📝 Ví dụ:",
      "・100キロからある岩が道をふさいでいた。",
      "・100万円からする高級時計。",
      "・1000人からの観客が集まった。",
    ],
    questions: [
      {
        id: "17-6",
        content: "その荷物は50キロ___あるらしく、一人では運べない。",
        answers: ["から", "すら", "たりとも", "だに"],
        correctAnswer: 0,
        memo: [
          "から: 50キロからある — nặng đến 50 kg, một mình không mang được. (Đúng)",
          "すら: Ngay cả — không phù hợp cấu trúc số lượng.",
          "たりとも: Số lượng nhỏ + phủ định — ngược nghĩa.",
          "だに: Chỉ cần...là — không phù hợp.",
        ],
      },
      {
        id: "17-7",
        content: "「からある」「からする」「からの」の使い分けとして正しいものはどれか。",
        answers: [
          "すべて同じ、どれでも使える",
          "からある は重さ・大きさ、からする は値段、からの は人数・量",
          "からある は人数、からする は重さ、からの は値段",
          "からある だけが正しい形で、他は誤り",
        ],
        correctAnswer: 1,
        memo: [
          "すべて同じ、どれでも使える: Sai — phân biệt theo loại số lượng.",
          "からある は重さ・大きさ、からする は値段、からの は人数・量: Đúng. (Đúng)",
          "からある は人数、からする は重さ、からの は値段: Sai — nhầm lẫn.",
          "からある だけが正しい形で、他は誤り: Sai.",
        ],
      },
    ],
  },
];
