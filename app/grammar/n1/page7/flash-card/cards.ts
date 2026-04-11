import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "✨ Nhân tiện (làm A nhân tiện làm B luôn)",
      "・Ví dụ: Nhân tiện đi tản bộ thì mua bánh mì luôn.",
      "📌 Hành động phụ nằm trong hành động chính. Thường có yếu tố di chuyển.",
    ],
    more: [
      "🧩 N danh động từ / Vます + がてら",
      "⚖️ ～ついでに (nhân tiện, hành động chính ở vế 1), ～かたがた (nhân tiện, hành động chính ở vế sau)",
      "💬 がてら: hành động chính = vế 1; ついでに: hành động chính = vế 1 nhưng không nhấn di chuyển",
      "📝 Ví dụ:",
      "・散歩がてら、パンを買ってきた。",
      "・写真を撮りがてら、山を登った。",
    ],
    questions: [
      {
        id: "7-1",
        content: "ドライブ___、新しい喫茶店に行ってみた。",
        answers: ["がてら", "ながら", "につれて", "ついでに"],
        correctAnswer: 0,
        memo: [
          "がてら: Nhân tiện lái xe thì ghé thử quán cà phê mới — hành động chính (lái xe) kèm hành động phụ (ghé quán), có di chuyển. (Đúng)",
          "ながら: Vừa A vừa B đồng thời có chủ ý, không nhấn 'nhân tiện'.",
          "につれて: Diễn tả thay đổi tỷ lệ thuận (A thay đổi thì B thay đổi), không phù hợp.",
          "ついでに: Cũng là 'nhân tiện' nhưng がてら nhấn yếu tố di chuyển và hành động kèm hơn.",
        ],
      },
      {
        id: "7-2",
        content: "銀行に寄った___、郵便局で手紙を出した。",
        answers: ["ついでに", "がてら", "かたがた", "かたわら"],
        correctAnswer: 0,
        memo: [
          "ついでに: Nhân tiện ghé ngân hàng thì gửi thư ở bưu điện luôn — tự nhiên hơn khi hành động phụ không nhất thiết có di chuyển. (Đúng)",
          "がてら: Cũng là 'nhân tiện' nhưng がてら nhấn di chuyển và hành động kèm trong cùng hành trình, ít tự nhiên hơn ở đây.",
          "かたがた: Hành động chính phải ở vế sau — không phù hợp cấu trúc câu này.",
          "かたわら: Vừa làm việc chính vừa làm việc khác lâu dài — không phù hợp ngữ cảnh tức thì.",
        ],
      },
      {
        id: "7-3",
        content: "「がてら」と「かたがた」の違いとして正しいものはどれか。",
        answers: [
          "がてら は主要な行動が後の節にある、かたがた は前の節にある",
          "がてら は主要な行動が前の節にある、かたがた は後の節にある",
          "どちらも主要な行動は前の節にある",
          "どちらも全く同じ意味で使える",
        ],
        correctAnswer: 1,
        memo: [
          "がてら は主要な行動が後の節にある、かたがた は前の節にある: Ngược lại.",
          "がてら は主要な行動が前の節にある、かたがた は後の節にある: Đúng — がてら: hành động chính ở vế 1; かたがた: hành động chính ở vế sau. (Đúng)",
          "どちらも主要な行動は前の節にある: Sai — かたがた có hành động chính ở sau.",
          "どちらも全く同じ意味で使える: Sai — khác nhau về vị trí hành động chính.",
        ],
      },
    ],
  },
  {
    front: "～かたがた",
    back: [
      "✨ Nhân tiện (hành động chính ở vế sau)",
      "・Ví dụ: Tôi định đến nhà trưởng phòng để cảm ơn, nhân tiện chào hỏi luôn.",
      "📌 Hành động chính nằm ở vế sau. Vế sau thường là động từ di chuyển: 行く、訪ねる.",
    ],
    more: [
      "🧩 N danh động từ + かたがた",
      "⚖️ ～がてら (hành động chính ở vế 1), ～ついでに (hành động chính ở vế 1, không nhấn di chuyển)",
      "💬 Thường dùng trong tình huống trang trọng: thăm hỏi, cảm ơn, báo cáo...",
      "📝 Ví dụ:",
      "・お礼かたがた、課長のお宅にお伺いしました。",
    ],
    questions: [
      {
        id: "7-4",
        content: "ご挨拶___、先生のお宅を訪問した。",
        answers: ["かたがた", "がてら", "ついでに", "かたわら"],
        correctAnswer: 0,
        memo: [
          "かたがた: Nhân tiện chào hỏi thì thăm nhà thầy — hành động chính (thăm) ở vế sau, trang trọng. (Đúng)",
          "がてら: Hành động chính ở vế 1 (chào hỏi), nhưng かたがた tự nhiên hơn trong ngữ cảnh trang trọng này.",
          "ついでに: Ít trang trọng hơn, không phù hợp ngữ cảnh thăm hỏi lịch sự.",
          "かたわら: Vừa làm việc lâu dài, không phù hợp tình huống đơn lẻ.",
        ],
      },
      {
        id: "7-5",
        content: "「かたがた」の後ろに来やすい動詞はどれか。",
        answers: ["食べる", "訪問する・伺う", "書く", "考える"],
        correctAnswer: 1,
        memo: [
          "食べる: Sai — かたがた thường đi với động từ di chuyển/thăm viếng.",
          "訪問する・伺う: Đúng — vế sau của かたがた thường là động từ di chuyển, thăm viếng. (Đúng)",
          "書く: Sai — không phải động từ di chuyển.",
          "考える: Sai — không phải động từ di chuyển.",
        ],
      },
    ],
  },
  {
    front: "～かたわら",
    back: [
      "✨ Vừa...vừa (song song hai công việc lâu dài)",
      "・Ví dụ: Vừa làm giáo viên vừa dạy bóng đá cho bọn trẻ.",
      "📌 Công việc chính + hoạt động khác song song. Thường là nghề chính + hoạt động xã hội/sở thích.",
    ],
    more: [
      "🧩 N_の / V辞書形 + かたわら",
      "⚖️ ～ながら (đồng thời tức thì), かたわら nhấn hai hoạt động lâu dài song song",
      "💬 Hoạt động đi kèm かたわら thường là hoạt động xã hội, tình nguyện, sáng tác — khác với nghề chính.",
      "📝 Ví dụ:",
      "・会社で働くかたわら、子供たちにサッカーを教えている。",
    ],
    questions: [
      {
        id: "7-6",
        content: "彼女は小説家として活動する___、大学で文学を教えている。",
        answers: ["かたわら", "がてら", "かたがた", "ついでに"],
        correctAnswer: 0,
        memo: [
          "かたわら: Vừa hoạt động với tư cách nhà văn vừa dạy văn học ở đại học — hai công việc lâu dài song song. (Đúng)",
          "がてら: Nhân tiện tức thì, không phù hợp hai công việc lâu dài.",
          "かたがた: Nhân tiện (hành động chính ở vế sau), không phù hợp.",
          "ついでに: Nhân tiện đơn lẻ, không phù hợp hai hoạt động song song lâu dài.",
        ],
      },
      {
        id: "7-7",
        content: "「かたわら」が使えない文はどれか。",
        answers: [
          "医者として働くかたわら、ボランティア活動をしている。",
          "買い物をするかたわら、友人に会った。",
          "研究をするかたわら、執筆活動も続けている。",
          "会社員のかたわら、音楽活動をしている。",
        ],
        correctAnswer: 1,
        memo: [
          "医者として働くかたわら、ボランティア活動をしている。: Hợp lệ — nghề chính + hoạt động tình nguyện lâu dài.",
          "買い物をするかたわら、友人に会った。: Sai — mua sắm không phải công việc chính lâu dài; đây là tình huống tức thì, dùng ついでに hợp hơn. (Đúng)",
          "研究をするかたわら、執筆活動も続けている。: Hợp lệ — nghiên cứu + viết lách, song song lâu dài.",
          "会社員のかたわら、音楽活動をしている。: Hợp lệ — nhân viên + hoạt động âm nhạc.",
        ],
      },
    ],
  },
];
