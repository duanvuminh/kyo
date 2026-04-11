import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～（よ）うと（も）・～（よ）うが",
    back: [
      "✨ Cho dù...cũng (không ảnh hưởng)",
      "・Ví dụ: Cho dù có động đất thì tòa nhà này chắc chắn an toàn.",
      "📌 Không liên quan, không ảnh hưởng dù điều kiện ra sao. Thường đi với たとえ、いかに.",
    ],
    more: [
      "🧩 Vう・よう形 + と（も）/ が | イ形かろう + と | な形・N-だろう/であろう + と",
      "⚖️ ～ても (cho dù, thông thường), うと/うが trang trọng hơn, nhấn mạnh hơn",
      "📝 Ví dụ:",
      "・たとえ地震が起ころうと、この建物は安全だ。",
    ],
    questions: [
      {
        id: "10-1",
        content: "たとえ反対意見があろう___、この計画は進める。",
        answers: ["と", "ても", "なら", "たところで"],
        correctAnswer: 0,
        memo: [
          "と: たとえ～あろうと — cho dù có ý kiến phản đối thì vẫn tiến hành, trang trọng. (Đúng)",
          "ても: Cũng có nghĩa cho dù nhưng ても ít trang trọng hơn, không kết hợp với あろう.",
          "なら: Điều kiện thuận chiều, không phù hợp.",
          "たところで: Cho dù thử cũng vô ích — sắc thái khác.",
        ],
      },
      {
        id: "10-2",
        content: "どんなに辛かろう___、諦めずに続けなさい。",
        answers: ["と", "ば", "たら", "なら"],
        correctAnswer: 0,
        memo: [
          "と: いかに/どんなに～かろうと — cho dù khó khăn đến mấy, nhấn mạnh. (Đúng)",
          "ば: Điều kiện thuận chiều, không phù hợp.",
          "たら: Điều kiện, không phù hợp ngữ cảnh này.",
          "なら: Điều kiện, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～（よ）うと～まいと・（よ）うが～まいが",
    back: [
      "✨ Cho dù làm hay không làm (đều không ảnh hưởng)",
      "・Ví dụ: Không cần biết trời có mưa hay không, buổi luyện tập bóng đá không nghỉ.",
      "📌 Dùng cùng một động từ cho cả 2 vế. Dù làm hay không thì đều không liên quan.",
    ],
    more: [
      "🧩 Vう・よう形 + と/が + V辞書形 + まいと/まいが",
      "⚖️ ～ても～なくても (dù có hay không, khẩu ngữ), うと～まいと trang trọng hơn",
      "💬 まい: V辞書形 + まい (với する → するまい hoặc すまい)",
      "📝 Ví dụ:",
      "・雨が降ろうが降るまいが、サッカーの練習は休まない。",
    ],
    questions: [
      {
        id: "10-3",
        content: "彼が来よう___来るまい___、会議は予定通り行う。",
        answers: ["と…と", "が…が", "と…が", "ば…ば"],
        correctAnswer: 1,
        memo: [
          "と…と: Sai — うとまいと hoặc うがまいが, không dùng と…と.",
          "が…が: Đúng — うが…まいが là một biến thể đúng ngữ pháp. (Đúng)",
          "と…が: Có thể chấp nhận (うと…まいが) nhưng が…が tự nhiên hơn ở đây.",
          "ば…ば: Sai — không phải cấu trúc của mẫu này.",
        ],
      },
    ],
  },
  {
    front: "～であれ・であろうと",
    back: [
      "✨ Cho dù là (bất kể là ai/cái gì cũng vậy)",
      "・Ví dụ: Cho dù là người quyền lực đến đâu thì đến một lúc nào đó ngày tàn cũng đến.",
      "📌 Cho dù là N nào thì cũng không liên quan. Thường đi với たとえ、どんな.",
    ],
    more: [
      "🧩 N / 疑問詞 + であれ / であろうと",
      "⚖️ ～（よ）うと (dùng cho động từ/tính từ), であれ/であろうと dùng cho danh từ",
      "📝 Ví dụ:",
      "・どんな権力者であれ、いつかは終わりが来る。",
    ],
    questions: [
      {
        id: "10-4",
        content: "理由が何___、約束は守らなければならない。",
        answers: ["であれ", "うと", "たところで", "ば～で"],
        correctAnswer: 0,
        memo: [
          "であれ: Cho dù lý do là gì, danh từ + であれ. (Đúng)",
          "うと: Dùng cho động từ/tính từ chia thể ý chí, không dùng trực tiếp sau danh từ.",
          "たところで: Cho dù thử cũng vô ích — nghĩa khác.",
          "ば～で: Cấu trúc khác, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～たところで",
    back: [
      "✨ Cho dù có thử...cũng vô ích (vô nghĩa)",
      "・Ví dụ: Ngay lúc này dù có lao vào thì chắc là hội nghị cũng đã kết thúc rồi.",
      "📌 Cho dù làm/thử thì cũng vô ích. Thường đi với いくら、どんなに、今さら.",
    ],
    more: [
      "🧩 Vた + ところで",
      "⚖️ ～ても (cho dù, trung tính), たところで nhấn mạnh sự vô ích, vô nghĩa của hành động",
      "📝 Ví dụ:",
      "・今さら駆けつけたところで、会議はもう終わっているだろう。",
    ],
    questions: [
      {
        id: "10-5",
        content: "いくら謝っ___、もう許してもらえないだろう。",
        answers: ["たところで", "ても", "うと", "であれ"],
        correctAnswer: 0,
        memo: [
          "たところで: Dù có xin lỗi bao nhiêu cũng vô ích — nhấn sự vô nghĩa của hành động. (Đúng)",
          "ても: Cũng có nghĩa cho dù, nhưng たところで nhấn vô ích hơn khi đi với いくら.",
          "うと: Không kết hợp với いくら một cách tự nhiên ở đây.",
          "であれ: Dùng cho danh từ, không phù hợp.",
        ],
      },
      {
        id: "10-6",
        content: "「たところで」が表す意味として正しいものはどれか。",
        answers: [
          "行動した結果、良いことが起きる",
          "行動しても無駄・意味がない",
          "行動する前の条件を示す",
          "行動した後の後悔を示す",
        ],
        correctAnswer: 1,
        memo: [
          "行動した結果、良いことが起きる: Sai — たところで nhấn sự vô ích.",
          "行動しても無駄・意味がない: Đúng — dù làm thì cũng không có kết quả tốt. (Đúng)",
          "行動する前の条件を示す: Đây là đặc điểm của điều kiện thông thường.",
          "行動した後の後悔を示す: Đây thiên về ものを hơn.",
        ],
      },
    ],
  },
  {
    front: "～ば～で・～なら～で・～たら～たで",
    back: [
      "✨ Cho dù thế cũng có vấn đề (dù sao cũng không hoàn hảo)",
      "・Ví dụ: Nhà rộng thì tốt nhưng nếu mà rộng thì vệ sinh rất vất vả.",
      "📌 Dùng cùng một từ. Dù trạng thái có như thế thì cũng kéo theo vấn đề riêng.",
    ],
    more: [
      "🧩 V_ば + V_た + で / Aい_ければ + Aい_かった + で / Aな_なら + Aな + で",
      "⚖️ ～ても (cho dù, nhấn ngược lại kỳ vọng), ば～で nhấn dù có được điều đó cũng phát sinh vấn đề mới",
      "📝 Ví dụ:",
      "・広ければ広いで、掃除が大変だ。",
    ],
    questions: [
      {
        id: "10-7",
        content: "お金があれ___あったで、使いすぎてしまう心配がある。",
        answers: ["ば", "ても", "うと", "たところで"],
        correctAnswer: 0,
        memo: [
          "ば: あれば～あったで — có tiền thì cũng lo xài quá tay, cùng từ, dù thế cũng có vấn đề. (Đúng)",
          "ても: Không kết hợp với ～で theo cấu trúc này.",
          "うと: Không phù hợp cấu trúc ば～で.",
          "たところで: Vô ích — nghĩa khác.",
        ],
      },
    ],
  },
];
