import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～に足る",
    back: [
      "✨ Đáng để / Xứng đáng (đủ giá trị để làm điều đó)",
      "・Ví dụ: Đây là tác phẩm đáng để đọc.",
      "📌 Đủ giá trị, đủ điều kiện để thực hiện hành động. Thường dùng: 信頼に足る、尊敬に足る.",
    ],
    more: [
      "🧩 V辞書形 + に足る + N / V辞書形 + に足る",
      "⚖️ ～に値する (xứng đáng, thông thường), に足る trang trọng hơn, văn viết",
      "💬 Thường đi với: 信頼に足る、尊敬に足る、読むに足る、議論に足る",
      "📝 Ví dụ:",
      "・これは読むに足る作品だ。",
      "・彼は信頼するに足る人物だ。",
    ],
    questions: [
      {
        id: "19-1",
        content: "彼の実績は、尊敬する___ものだ。",
        answers: ["に足る", "に耐える", "かぎりだ", "極まる"],
        correctAnswer: 0,
        memo: [
          "に足る: Thành tích của anh ấy đáng để tôn trọng — đủ giá trị. (Đúng)",
          "に耐える: Có giá trị đủ để chịu đựng/xem — không phù hợp ngữ cảnh tôn trọng.",
          "かぎりだ: Cảm xúc tột độ — không phù hợp cấu trúc.",
          "極まる: Cực kỳ — không phù hợp cấu trúc.",
        ],
      },
    ],
  },
  {
    front: "～に耐える",
    back: [
      "✨ Đáng để xem/đọc / Có thể chịu đựng được (có giá trị)",
      "・Ví dụ: Bộ phim này đáng để xem.",
      "📌 Có giá trị đủ để chịu đựng/theo dõi hết. Thường đi với: 見る、読む、聞く. Trái: に耐えない.",
    ],
    more: [
      "🧩 V辞書形 / N + に耐える / に耐えない",
      "⚖️ ～に足る (đáng để, về giá trị), に耐える nhấn khả năng chịu đựng/tiếp nhận trọn vẹn",
      "💬 に耐えない: không chịu nổi, quá tệ để xem. に耐える: đủ tốt để theo dõi",
      "📝 Ví dụ:",
      "・この映画は見るに耐える内容だ。",
      "・あのドラマは見るに耐えない。（過激すぎて）",
    ],
    questions: [
      {
        id: "19-2",
        content: "彼の演奏は素晴らしく、聴く___ものだった。",
        answers: ["に耐える", "に足る", "といったらない", "極まる"],
        correctAnswer: 0,
        memo: [
          "に耐える: Buổi trình diễn đáng để lắng nghe trọn vẹn — có giá trị. (Đúng)",
          "に足る: Đáng để — cũng có thể dùng nhưng に耐える phù hợp hơn khi nhấn trải nghiệm nghe.",
          "といったらない: Không có gì sánh được — cấu trúc khác, không đi với V辞書形 trực tiếp.",
          "極まる: Cực kỳ — không phù hợp cấu trúc.",
        ],
      },
    ],
  },
  {
    front: "～といったらない",
    back: [
      "✨ Không có gì sánh được / Không từ nào diễn tả hết (cảm xúc cực đoan)",
      "・Ví dụ: Niềm vui khi gặp lại bạn bè cũ không có gì sánh được.",
      "📌 Cảm xúc cực đoan đến mức không có từ nào diễn tả hết. Có thể tích cực hoặc tiêu cực.",
    ],
    more: [
      "🧩 N / 体通常形 + といったらない / といったらありはしない",
      "⚖️ ～かぎりだ (cảm xúc tột độ, chỉ tính từ), といったらない đa dạng hơn, N và thể thông thường",
      "💬 Cả tích cực (素晴らしいといったらない) và tiêu cực (恥ずかしいといったらない)",
      "📝 Ví dụ:",
      "・久しぶりに友人に会えた嬉しさといったらない。",
      "・あの失敗の恥ずかしさといったらなかった。",
    ],
    questions: [
      {
        id: "19-3",
        content: "初めて子供を抱いた時の幸せ___。",
        answers: ["といったらない", "に足る", "かぎりだ", "とは"],
        correctAnswer: 0,
        memo: [
          "といったらない: Hạnh phúc khi lần đầu ôm con thật không có gì sánh được. (Đúng)",
          "に足る: Đáng để — không phù hợp cấu trúc danh từ cảm xúc + ～.",
          "かぎりだ: Cảm xúc tột độ — đi với tính từ cảm xúc, không phải danh từ trực tiếp.",
          "とは: Ngạc nhiên rằng — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～かぎりだ",
    back: [
      "✨ Cực kỳ / Hết sức (cảm xúc đến mức tột độ)",
      "・Ví dụ: Được nhận vào trường mơ ước thật vui mừng khôn xiết.",
      "📌 Nhấn mạnh cảm xúc đến mức tột độ. Đi với tính từ cảm xúc: 嬉しい、悲しい、羨ましい...",
    ],
    more: [
      "🧩 感情形容詞い・な形 + かぎりだ / かぎりない",
      "⚖️ ～といったらない (không từ nào diễn tả hết, đa dạng hơn), かぎりだ chỉ đi với tính từ cảm xúc",
      "💬 Thường dùng: 嬉しいかぎりだ、悲しいかぎりだ、恥ずかしいかぎりだ",
      "📝 Ví dụ:",
      "・志望校に合格できて、嬉しいかぎりです。",
      "・このような場でお話しできて、光栄なかぎりです。",
    ],
    questions: [
      {
        id: "19-4",
        content: "長年の友人が遠くへ引っ越すと聞いて、寂しい___。",
        answers: ["かぎりだ", "といったらない", "に足る", "極まる"],
        correctAnswer: 0,
        memo: [
          "かぎりだ: Nghe tin bạn chuyển đi xa, buồn đến mức tột độ — tính từ cảm xúc + かぎりだ. (Đúng)",
          "といったらない: Cũng có thể nhưng かぎりだ phổ biến hơn với tính từ trực tiếp.",
          "に足る: Đáng để — không phù hợp ngữ cảnh cảm xúc.",
          "極まる: Cực kỳ — thường đi với な形容詞/N, không phải い形容詞.",
        ],
      },
    ],
  },
  {
    front: "～極まる・～極まりない",
    back: [
      "✨ Cực kỳ / Vô cùng (mức độ cực đoan)",
      "・Ví dụ: Hành vi đó thật vô lễ đến cực độ.",
      "📌 Mức độ cực đoan. 極まる: đến tột độ. 極まりない: không có giới hạn. Thường tiêu cực.",
    ],
    more: [
      "🧩 な形容詞（語幹）/ N + 極まる / 極まりない",
      "⚖️ ～かぎりだ (cảm xúc tột độ, chủ quan), 極まる mô tả khách quan, thường tiêu cực",
      "💬 Thường dùng: 失礼極まる、危険極まりない、迷惑極まりない",
      "📝 Ví dụ:",
      "・失礼極まる態度だ。",
      "・その行為は危険極まりない。",
    ],
    questions: [
      {
        id: "19-5",
        content: "会議中に居眠りするとは、失礼___行為だ。",
        answers: ["極まる", "かぎりの", "といったらない", "に耐える"],
        correctAnswer: 0,
        memo: [
          "極まる: 失礼極まる行為 — hành vi vô lễ đến cực độ. (Đúng)",
          "かぎりの: かぎりだ đứng sau tính từ, không phải trước danh từ theo cách này.",
          "といったらない: Không có gì sánh được — cấu trúc khác.",
          "に耐える: Đáng để chịu đựng — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～とは",
    back: [
      "✨ Việc...thật là / Ngạc nhiên rằng (bày tỏ cảm xúc mạnh)",
      "・Ví dụ: Thật không ngờ anh ấy lại làm vậy.",
      "📌 Bày tỏ cảm xúc ngạc nhiên, thất vọng, cảm động trước sự việc. Câu cảm thán.",
    ],
    more: [
      "🧩 体通常形 + とは（＋感情表現）",
      "⚖️ ～なんて (ngạc nhiên, khẩu ngữ), とは trang trọng hơn, dùng được cả văn viết",
      "💬 Vế sau thường là tính từ cảm xúc: 驚いた、信じられない、残念だ...",
      "📝 Ví dụ:",
      "・彼がそんなことをするとは、信じられない。",
      "・こんなに大勢の人が集まってくれるとは、感激だ。",
    ],
    questions: [
      {
        id: "19-6",
        content: "まさか彼が試験に落ちる___、誰も思わなかった。",
        answers: ["とは", "といったらない", "かぎりだ", "極まる"],
        correctAnswer: 0,
        memo: [
          "とは: Không ai ngờ anh ấy lại trượt thi — ngạc nhiên trước sự việc. (Đúng)",
          "といったらない: Không có gì sánh được — không phù hợp cấu trúc.",
          "かぎりだ: Cảm xúc tột độ — không phù hợp cấu trúc với 誰も.",
          "極まる: Mức độ cực đoan — không phù hợp ngữ cảnh.",
        ],
      },
      {
        id: "19-7",
        content: "「～かぎりだ」が使える文はどれか。",
        answers: [
          "この景色は美しいかぎりだ。",
          "彼の努力はかぎりだ。",
          "危険かぎりだ場所。",
          "成功するかぎりだ。",
        ],
        correctAnswer: 0,
        memo: [
          "この景色は美しいかぎりだ。: Đúng — い形容詞 + かぎりだ: cảnh đẹp đến mức tột cùng. (Đúng)",
          "彼の努力はかぎりだ。: Sai — かぎりだ không đi với danh từ trực tiếp.",
          "危険かぎりだ場所。: Sai — phải là 危険なかぎりだ, hơn nữa không đứng trước N như vậy.",
          "成功するかぎりだ。: Sai — không đi với V辞書形.",
        ],
      },
    ],
  },
];
