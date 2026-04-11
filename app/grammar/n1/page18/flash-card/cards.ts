import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～までもない",
    back: [
      "✨ Không cần phải (hành động là thừa, đã rõ ràng rồi)",
      "・Ví dụ: Chuyện đơn giản như vậy không cần phải giải thích.",
      "📌 Không cần thực hiện hành động vì tình huống đã rõ ràng, hành động là không cần thiết.",
    ],
    more: [
      "🧩 V辞書形 + までもない",
      "⚖️ ～なくてもいい (không cần, thông thường), までもない mang nghĩa 'đương nhiên không cần thiết'",
      "💬 Thường dùng: 言うまでもない、確認するまでもない、説明するまでもない",
      "📝 Ví dụ:",
      "・言うまでもなく、健康が一番大切だ。",
      "・こんな簡単なことは、説明するまでもない。",
    ],
    questions: [
      {
        id: "18-1",
        content: "こんな簡単な問題は、考える___。",
        answers: ["までもない", "までだ", "までもある", "ばそれまでだ"],
        correctAnswer: 0,
        memo: [
          "までもない: Bài dễ như vậy không cần phải suy nghĩ — đương nhiên rõ ràng. (Đúng)",
          "までだ: Chỉ cần... — khẳng định hành động cần làm, nghĩa ngược lại.",
          "までもある: Không phải mẫu ngữ pháp.",
          "ばそれまでだ: Nếu...thì hết — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～までだ（A）/ ～までだ（B）",
    back: [
      "✨ (A) Chỉ cần / Chỉ việc (đơn giản hóa hành động cần làm)",
      "✨ (B) Chỉ vậy thôi / Không có ý gì khác (giải thích lý do)",
      "・Ví dụ A: Nếu không được thì chỉ cần thử lại lần nữa thôi.",
      "・Ví dụ B: Tôi chỉ nói sự thật mà thôi, không có ý gì khác.",
      "📌 (A) V辞書形: hành động đơn giản cần làm. (B) V-た形: giải thích, không có ý định khác.",
    ],
    more: [
      "🧩 (A) V辞書形 + までだ / までのことだ",
      "🧩 (B) V-た形 + までだ / までのことだ",
      "⚖️ ～だけだ (chỉ, thông thường), までだ nhấn tính đơn giản/dứt khoát của hành động",
      "📝 Ví dụ:",
      "・(A) だめなら、もう一度やり直すまでだ。",
      "・(B) 本当のことを言ったまでだ。",
    ],
    questions: [
      {
        id: "18-2",
        content: "失敗しても、また挑戦する___。落ち込む必要はない。",
        answers: ["までだ", "までもない", "ばそれまでだ", "には当たらない"],
        correctAnswer: 0,
        memo: [
          "までだ (A): Dù thất bại thì chỉ cần thử lại thôi — đơn giản hóa hành động. (Đúng)",
          "までもない: Không cần phải — nghĩa ngược lại.",
          "ばそれまでだ: Nếu...thì hết — không phù hợp.",
          "には当たらない: Không đáng — không phù hợp cấu trúc.",
        ],
      },
      {
        id: "18-3",
        content: "「～までだ（A）」と「～までだ（B）」の違いとして正しいものはどれか。",
        answers: [
          "どちらも全く同じ意味",
          "（A）辞書形＋までだ：これからする行動を示す、（B）た形＋までだ：した行動の理由を説明する",
          "（A）た形、（B）辞書形を使う",
          "どちらも否定文でしか使えない",
        ],
        correctAnswer: 1,
        memo: [
          "どちらも全く同じ意味: Sai — hình thức động từ và ý nghĩa khác nhau.",
          "（A）辞書形＋までだ：これからする行動を示す、（B）た形＋までだ：した行動の理由を説明する: Đúng. (Đúng)",
          "（A）た形、（B）辞書形を使う: Ngược lại.",
          "どちらも否定文でしか使えない: Sai.",
        ],
      },
    ],
  },
  {
    front: "～ばそれまでだ",
    back: [
      "✨ Nếu...thì hết / Thì coi như xong (tất cả vô nghĩa nếu điều đó xảy ra)",
      "・Ví dụ: Dù cố gắng đến đâu, nếu sức khỏe sụp đổ thì cũng hết.",
      "📌 Nếu điều tiêu cực đó xảy ra thì tất cả nỗ lực coi như vô nghĩa, kết thúc.",
    ],
    more: [
      "🧩 V条件形（ば）+ それまでだ",
      "⚖️ ～たら終わりだ (nếu...thì xong, thông thường), ばそれまでだ trang trọng hơn, nhấn tính vô nghĩa",
      "💬 Thường dùng để nhấn tầm quan trọng: 死んでしまえばそれまでだ、諦めてしまえばそれまでだ",
      "📝 Ví dụ:",
      "・どれほど努力しても、健康を崩してしまえばそれまでだ。",
    ],
    questions: [
      {
        id: "18-4",
        content: "どんなに準備しても、本番で失敗すれば___。",
        answers: ["それまでだ", "までもない", "までだ", "には当たらない"],
        correctAnswer: 0,
        memo: [
          "それまでだ: Dù chuẩn bị kỹ đến đâu, nếu thất bại trong thực tế thì tất cả cũng xong. (Đúng)",
          "までもない: Không cần phải — không phù hợp cấu trúc V条件形ば.",
          "までだ: Chỉ cần / Chỉ vậy — nghĩa khác.",
          "には当たらない: Không đáng — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～には当たらない",
    back: [
      "✨ Không cần phải / Không đáng (phản ứng thái quá)",
      "・Ví dụ: Chỉ mắc lỗi nhỏ như vậy thôi, không cần phải tự trách bản thân quá mức.",
      "📌 Điều đó không đáng để có phản ứng thái quá. Thường đi với hành động cảm xúc: 驚く、怒る、非難する.",
    ],
    more: [
      "🧩 V辞書形 / N + には当たらない",
      "⚖️ ～する必要はない (không cần phải), には当たらない nhấn phản ứng đó là không xứng/không cần thiết",
      "💬 Thường đi với: 驚くには当たらない、非難するには当たらない、心配するには当たらない",
      "📝 Ví dụ:",
      "・そんな小さなミスで、自分を責めるには当たらない。",
    ],
    questions: [
      {
        id: "18-5",
        content: "彼の行動は驚く___。以前からそういう人だと分かっていたはずだ。",
        answers: ["には当たらない", "までもない", "までだ", "ばそれまでだ"],
        correctAnswer: 0,
        memo: [
          "には当たらない: Hành động của anh ấy không đáng để ngạc nhiên — phản ứng không cần thiết. (Đúng)",
          "までもない: Không cần phải — khác ngữ cảnh, không đi với 驚く theo kiểu này.",
          "までだ: Chỉ cần — không phù hợp.",
          "ばそれまでだ: Nếu...thì hết — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "✨ Nếu không phải là...thì là gì / Đây chính là... (khẳng định mạnh)",
      "・Ví dụ: Hành động tự hy sinh vì người khác, nếu đó không phải là tình yêu thì là gì?",
      "📌 Nhấn mạnh khẳng định: đây chính là X, không cần phải bàn cãi. Văn viết, trang trọng.",
    ],
    more: [
      "🧩 N + でなくてなんだろう（か）/ でなくてなんであろう",
      "⚖️ ～にほかならない (chính là, trang trọng), でなくてなんだろう có tính tu từ/cảm xúc cao hơn",
      "💬 Mang tính tu từ (rhetorical question) — câu hỏi nhưng thực ra là khẳng định",
      "📝 Ví dụ:",
      "・自分を犠牲にして人を助けるこの行為が、愛でなくてなんだろう。",
    ],
    questions: [
      {
        id: "18-6",
        content: "30年間家族のために働き続けた父の姿が、愛___なんだろう。",
        answers: ["でなくて", "までもなく", "には当たらず", "ばそれまでで"],
        correctAnswer: 0,
        memo: [
          "でなくて: 愛でなくてなんだろう — nếu không phải tình yêu thì là gì? Khẳng định đây chính là tình yêu. (Đúng)",
          "までもなく: Không cần phải — không phù hợp cấu trúc.",
          "には当たらず: Không đáng — nghĩa ngược lại.",
          "ばそれまでで: Nếu...thì hết — không phù hợp.",
        ],
      },
    ],
  },
];
