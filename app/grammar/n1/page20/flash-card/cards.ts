import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～てやまない",
    back: [
      "✨ Mãi mãi / Không ngừng (cảm xúc mạnh liên tục)",
      "・Ví dụ: Tôi mãi mãi yêu thương quê hương của mình.",
      "📌 Cảm xúc mạnh mẽ, liên tục không dứt. Chỉ đi với một số động từ cảm xúc nhất định.",
    ],
    more: [
      "🧩 V_て + やまない",
      "⚖️ ～続ける (tiếp tục, thông thường), てやまない trang trọng hơn, chỉ với cảm xúc tích cực mạnh",
      "💬 Thường dùng: 愛してやまない、願ってやまない、尊敬してやまない",
      "📝 Ví dụ:",
      "・故郷を愛してやまない。",
      "・皆様のご健康を願ってやまない。",
    ],
    questions: [
      {
        id: "20-1",
        content: "彼女の才能を尊敬して___。",
        answers: ["やまない", "おかない", "すまない", "得ない"],
        correctAnswer: 0,
        memo: [
          "やまない: 尊敬してやまない — luôn mãi tôn trọng, cảm xúc không dứt. (Đúng)",
          "おかない: ないではおかない — chắc chắn gây ra, không phù hợp.",
          "すまない: ないではすまない — bắt buộc phải, không phù hợp cấu trúc V_て.",
          "得ない: 禁じ得ない — không kìm được, cấu trúc khác.",
        ],
      },
    ],
  },
  {
    front: "～に耐えない",
    back: [
      "✨ Không chịu được / Quá đau buồn không thể chịu (cảm xúc cực đoan)",
      "・Ví dụ: Nhìn cảnh trẻ em bị bỏ rơi thật không thể chịu được.",
      "📌 Cảm xúc quá mức không thể chịu đựng. Trái với に耐える (đáng để xem/nghe).",
    ],
    more: [
      "🧩 V辞書形 + に耐えない / N + に耐えない",
      "⚖️ ～に耐える (đáng để/có thể chịu được), に耐えない cảm xúc quá đau không thể chịu",
      "💬 Thường dùng: 見るに耐えない、痛恨に耐えない、聞くに耐えない",
      "📝 Ví dụ:",
      "・子供たちが苦しむ姿は、見るに耐えない。",
      "・あの事故を思うと、痛恨に耐えない。",
    ],
    questions: [
      {
        id: "20-2",
        content: "戦争で苦しむ人々の映像は、見る___。",
        answers: ["に耐えない", "てやまない", "を余儀なくされる", "禁じ得ない"],
        correctAnswer: 0,
        memo: [
          "に耐えない: 見るに耐えない — hình ảnh người khổ sở vì chiến tranh không thể nhìn được. (Đúng)",
          "てやまない: Không ngừng — cảm xúc liên tục, không phù hợp ngữ cảnh.",
          "を余儀なくされる: Bị buộc phải — không phù hợp.",
          "禁じ得ない: Không kìm được — cấu trúc N + を禁じ得ない, không phải V辞書形.",
        ],
      },
    ],
  },
  {
    front: "～ないではすまない",
    back: [
      "✨ Không thể không / Bắt buộc phải (về mặt xã hội/đạo đức)",
      "・Ví dụ: Làm hỏng đồ của người khác thì không thể không xin lỗi.",
      "📌 Về mặt xã hội hoặc đạo đức bắt buộc phải làm, không thể bỏ qua. Nếu không làm sẽ bị đánh giá xấu.",
    ],
    more: [
      "🧩 V否定形 + ではすまない / ずにはすまない",
      "⚖️ ～なければならない (phải, quy tắc), ないではすまない nhấn áp lực xã hội/đạo đức từ bên ngoài",
      "💬 Thường dùng: 謝らないではすまない、責任を取らないではすまない",
      "📝 Ví dụ:",
      "・人の物を壊したら、謝らないではすまない。",
      "・こんな大きな失敗をしたら、責任を取らないではすまない。",
    ],
    questions: [
      {
        id: "20-3",
        content: "大切な会議を無断欠席したら、説明し___。",
        answers: ["ないではすまない", "てやまない", "に耐えない", "を余儀なくされる"],
        correctAnswer: 0,
        memo: [
          "ないではすまない: Vắng mặt không lý do thì không thể không giải thích — áp lực xã hội. (Đúng)",
          "てやまない: Không ngừng — không phù hợp.",
          "に耐えない: Không chịu được — không phù hợp.",
          "を余儀なくされる: Bị buộc phải — bị động hơn, thường với danh từ hành động.",
        ],
      },
    ],
  },
  {
    front: "～ないではおかない",
    back: [
      "✨ Nhất định sẽ / Chắc chắn gây ra (không thể tránh)",
      "・Ví dụ: Tội ác như vậy nhất định sẽ bị trừng phạt.",
      "📌 Chắc chắn dẫn đến kết quả đó, không thể tránh. Người nói quyết tâm hoặc hậu quả tất yếu.",
    ],
    more: [
      "🧩 V否定形 + ではおかない / ずにはおかない",
      "⚖️ ～ないではすまない (bắt buộc về đạo đức), ないではおかない nhấn tính tất yếu/quyết tâm",
      "💬 Hai nghĩa: (1) tôi nhất định sẽ làm (quyết tâm) (2) chắc chắn gây ra cảm xúc/kết quả",
      "📝 Ví dụ:",
      "・あんな悪いことをしたら、罰せずにはおかない。",
      "・この映画は見る人を感動させずにはおかない。",
    ],
    questions: [
      {
        id: "20-4",
        content: "この歌は聴く人を感動させ___。",
        answers: ["ずにはおかない", "てやまない", "ないではすまない", "を余儀なくされる"],
        correctAnswer: 0,
        memo: [
          "ずにはおかない: Bài hát này chắc chắn sẽ làm người nghe cảm động — hậu quả tất yếu. (Đúng)",
          "てやまない: Không ngừng — chủ thể phải là người nói, không phải bài hát.",
          "ないではすまない: Bắt buộc về đạo đức — không phù hợp ngữ cảnh.",
          "を余儀なくされる: Bị buộc phải — thường dùng với hoàn cảnh ngoại cảnh, không phải cảm xúc.",
        ],
      },
      {
        id: "20-5",
        content: "「ないではすまない」と「ないではおかない」の違いとして正しいものはどれか。",
        answers: [
          "どちらも全く同じ意味で使える",
          "すまない は社会的・道徳的義務、おかない は必然的結果・強い決意",
          "おかない は社会的義務、すまない は必然的結果",
          "どちらも良い結果にのみ使われる",
        ],
        correctAnswer: 1,
        memo: [
          "どちらも全く同じ意味で使える: Sai — ngữ cảnh dùng khác nhau.",
          "すまない は社会的・道徳的義務、おかない は必然的結果・強い決意: Đúng. (Đúng)",
          "おかない は社会的義務、すまない は必然的結果: Ngược lại.",
          "どちらも良い結果にのみ使われる: Sai — cả hai có thể dùng cho kết quả tốt lẫn xấu.",
        ],
      },
    ],
  },
  {
    front: "～禁じ得ない",
    back: [
      "✨ Không kìm được / Không nén được (cảm xúc bùng lên)",
      "・Ví dụ: Khi nghe tin đó, tôi không kìm được nước mắt.",
      "📌 Cảm xúc bùng lên không thể kìm nén. Văn viết, trang trọng. Thường dùng trong báo chí.",
    ],
    more: [
      "🧩 N + を禁じ得ない",
      "⚖️ ～を抑えられない (không kìm được, thông thường), 禁じ得ない trang trọng hơn, văn viết",
      "💬 Thường dùng: 涙を禁じ得ない、怒りを禁じ得ない、同情を禁じ得ない",
      "📝 Ví dụ:",
      "・その知らせを聞いて、涙を禁じ得なかった。",
      "・被害者の話を聞いて、怒りを禁じ得ない。",
    ],
    questions: [
      {
        id: "20-6",
        content: "子供たちの一生懸命な姿に、感動___。",
        answers: ["を禁じ得ない", "てやまない", "ないではおかない", "を余儀なくされる"],
        correctAnswer: 0,
        memo: [
          "を禁じ得ない: 感動を禁じ得ない — không kìm được cảm xúc xúc động. (Đúng)",
          "てやまない: Không ngừng — đi với V_て, không phải N trực tiếp.",
          "ないではおかない: Chắc chắn gây ra — cấu trúc khác.",
          "を余儀なくされる: Bị buộc phải — không phù hợp ngữ cảnh cảm xúc tự nhiên.",
        ],
      },
    ],
  },
  {
    front: "～を余儀なくされる",
    back: [
      "✨ Bị buộc phải / Không còn cách nào khác (ngoại cảnh bắt buộc)",
      "・Ví dụ: Vì tai nạn, tuyến đường phải bị đóng cửa.",
      "📌 Ngoại cảnh bắt buộc phải làm điều không muốn. Chủ thể bị động về ý chí.",
    ],
    more: [
      "🧩 N + を余儀なくされる / を余儀なくさせる",
      "⚖️ ～しなければならない (phải làm, chủ động), 余儀なくされる bị động, ngoại cảnh bắt buộc",
      "💬 Thường dùng: 撤退を余儀なくされる、中止を余儀なくされる、変更を余儀なくされる",
      "📝 Ví dụ:",
      "・事故のため、その道路は閉鎖を余儀なくされた。",
      "・台風で、イベントの中止を余儀なくされた。",
    ],
    questions: [
      {
        id: "20-7",
        content: "大雪の影響で、多くの便が欠航___。",
        answers: ["を余儀なくされた", "てやまない", "を禁じ得ない", "ないではすまない"],
        correctAnswer: 0,
        memo: [
          "を余儀なくされた: Do tuyết lớn, nhiều chuyến bay bị buộc phải hủy — ngoại cảnh bắt buộc. (Đúng)",
          "てやまない: Không ngừng — không phù hợp ngữ cảnh bị động.",
          "を禁じ得ない: Không kìm được cảm xúc — không phù hợp.",
          "ないではすまない: Bắt buộc về đạo đức — không phù hợp.",
        ],
      },
      {
        id: "20-8",
        content: "「を余儀なくされる」の特徴として正しいものはどれか。",
        answers: [
          "主体が自発的に行う行動を表す",
          "外部の状況・圧力により、望まない行動を強いられることを表す",
          "感情の爆発を表す表現",
          "道徳的・社会的義務を表す",
        ],
        correctAnswer: 1,
        memo: [
          "主体が自発的に行う行動を表す: Sai — 余儀なくされる là bị động, không tự nguyện.",
          "外部の状況・圧力により、望まない行動を強いられることを表す: Đúng — ngoại cảnh bắt buộc làm điều không muốn. (Đúng)",
          "感情の爆発を表す表現: Sai — đây là nhiệm vụ của 禁じ得ない.",
          "道徳的・社会的義務を表す: Sai — đây là nhiệm vụ của ないではすまない.",
        ],
      },
    ],
  },
];
