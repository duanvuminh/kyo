import { FlashCardItem } from "@/shared/component/flash-card/flash-card";
import { Question } from "@/shared/types/models/question";

export const cards: FlashCardItem[] = [
  {
    front: "～んばかりだ",
    back: [
      "✨ Giống như là / Như thể sắp... (cường điệu mức độ)",
      "・Ví dụ: Anh ấy xin lỗi giống như cắm đầu xuống chiếu vậy mà bố vẫn không tha.",
      "📌 Cường điệu, so sánh với hành động cực đoan. する → せんばかり.",
    ],
    more: [
      "🧩 Vない + んばかりだ（する → せんばかり）",
      "⚖️ ～ようだ (có vẻ như, nhận xét khách quan), んばかりだ cường điệu mức độ cực cao",
      "📝 Ví dụ:",
      "・頭を畳につけんばかりにしてわびたのに、父は許してくれなかった。",
    ],
    questions: [
      new Question(
        "6-1",
        "彼女は泣き出さん___の顔で私を見た。",
        ["ばかり", "ともなく", "きらいがある", "ながらに"],
        0,
        [],
        undefined,
        [
          "ばかり: Cô ấy nhìn tôi với khuôn mặt như thể sắp khóc — cường điệu trạng thái. (Đúng)",
          "ともなく: Vô tình, tình cờ — không phù hợp mô tả cường điệu.",
          "きらいがある: Có tật là — không phù hợp cấu trúc này.",
          "ながらに: Giữ nguyên trạng thái — không phù hợp.",
        ]
      ),
      new Question(
        "6-2",
        "「んばかりだ」の「する」の変化として正しいものはどれか。",
        ["しんばかり", "するんばかり", "せんばかり", "さんばかり"],
        2,
        [],
        undefined,
        [
          "しんばかり: Sai — する không chia thành し trong mẫu này.",
          "するんばかり: Sai — する không giữ nguyên.",
          "せんばかり: Đúng — する → せ + んばかり (ない形 đặc biệt của する là せ). (Đúng)",
          "さんばかり: Sai — không phải dạng chia của する.",
        ]
      ),
    ],
  },
  {
    front: "～とばかりに",
    back: [
      "✨ Giống như muốn nói rằng (hành động thay lời nói)",
      "・Ví dụ: Đứa trẻ ngồi bệt xuống giống như muốn nói 'Không thể đi bộ thêm nữa'.",
      "📌 Không nói ra nhưng hành động như thể hiện điều đó. Không dùng cho bản thân.",
    ],
    more: [
      "🧩 Câu giao tiếp + とばかりに",
      "⚖️ ～んばかりだ (cường điệu mức độ), とばかりに nhấn 'như muốn nói điều gì đó bằng hành động'",
      "💬 「この時とばかり」= Thật đúng lúc để thể hiện ý kiến.",
      "📝 Ví dụ:",
      "・「もう歩けない」とばかりに、子供はその場に座り込んだ。",
    ],
    questions: [
      new Question(
        "6-3",
        "彼は「待ってました」___、すぐに反論した。",
        ["とばかりに", "んばかりに", "ともなく", "ながらに"],
        0,
        [],
        undefined,
        [
          "とばかりに: Như thể muốn nói 'Đợi mãi rồi!' — hành động phản bác ngay như đã chờ cơ hội. (Đúng)",
          "んばかりに: Cường điệu mức độ, không nhấn 'như muốn nói điều gì đó'.",
          "ともなく: Vô tình, tình cờ — hoàn toàn trái nghĩa.",
          "ながらに: Giữ nguyên trạng thái, không phù hợp.",
        ]
      ),
      new Question(
        "6-4",
        "「とばかりに」の使い方として正しいものはどれか。",
        [
          "自分の行動を説明するときに使う",
          "第三者の行動がまるで何かを言いたそうなときに使う",
          "動作の程度が極端であることを表す",
          "偶然・意図せずに行動するときに使う",
        ],
        1,
        [],
        undefined,
        [
          "自分の行動を説明するときに使う: Sai — không dùng cho bản thân (ngôi 1).",
          "第三者の行動がまるで何かを言いたそうなときに使う: Đúng — người thứ 3 hành động như muốn nói điều gì đó. (Đúng)",
          "動作の程度が極端であることを表す: Đây là đặc điểm của んばかりだ.",
          "偶然・意図せずに行動するときに使う: Đây là đặc điểm của ともなく.",
        ]
      ),
    ],
  },
  {
    front: "～ともなく・ともなしに (A)",
    back: [
      "✨ Vô tình / Không cố ý (hành động tình cờ)",
      "・Ví dụ: Không định xem TV nhưng khi vô tình xem thì thấy bạn bè xuất hiện.",
      "📌 Hành động tình cờ. Động từ giới hạn: 見る、聞く、待つ. Vế sau thường dùng động từ giống vế 1.",
    ],
    more: [
      "🧩 V辞書形 + ともなく / V辞書形 + ともなしに",
      "⚖️ ～ながら (vừa A vừa B, có chủ ý), ともなく nhấn hành động không cố ý",
      "📝 Ví dụ:",
      "・テレビを見るともなく見ていたら、友人が映っていて驚いた。",
    ],
    questions: [
      new Question(
        "6-5",
        "音楽を聞く___聞いていたら、眠ってしまった。",
        ["ともなく", "んばかりに", "とばかりに", "ながらに"],
        0,
        [],
        undefined,
        [
          "ともなく: Không định nghe nhưng nghe vô tình thì ngủ lúc nào không hay — hành động tình cờ. (Đúng)",
          "んばかりに: Cường điệu mức độ, không phù hợp.",
          "とばかりに: Hành động như muốn nói điều gì, không phù hợp.",
          "ながらに: Giữ nguyên trạng thái, không phù hợp.",
        ]
      ),
    ],
  },
  {
    front: "～ともなく・ともなしに (B)",
    back: [
      "✨ Không biết là từ đâu / Từ ai / Từ lúc nào",
      "・Ví dụ: Không biết là từ chỗ nào nhưng nghe được mùi cà ri rất ngon.",
      "📌 Dùng với từ hỏi: どこ、だれ、いつ + ともなく. Không rõ nguồn gốc.",
    ],
    more: [
      "🧩 疑問詞（どこ・だれ・いつ...）+ ともなく / ともなしに",
      "⚖️ ともなく(A) (hành động vô tình), ともなく(B) (nguồn gốc không rõ) — cùng hình thức nhưng ngữ nghĩa khác",
      "📝 Ví dụ:",
      "・どこからともなく、おいしそうなカレーの匂いがした。",
    ],
    questions: [
      new Question(
        "6-6",
        "___ともなく、子供たちの笑い声が聞こえてきた。",
        ["どこから", "だれが", "なぜ", "どのように"],
        0,
        [],
        undefined,
        [
          "どこから: Không biết từ chỗ nào mà nghe tiếng cười trẻ em — nguồn gốc không rõ. (Đúng)",
          "だれが: Không phù hợp — だれ thường dùng với ともなく khi nói về chủ thể, nhưng ngữ cảnh này là địa điểm.",
          "なぜ: なぜ không dùng với ともなく.",
          "どのように: どのように không dùng với ともなく.",
        ]
      ),
    ],
  },
  {
    front: "～ながらに（して）",
    back: [
      "✨ Cứ như thế mà / Vẫn giữ nguyên trạng thái ban đầu",
      "・Ví dụ: Đứa bé này ngay từ khi sinh ra đã có sẵn khả năng cảm thụ âm nhạc xuất sắc.",
      "📌 Giữ nguyên trạng thái ban đầu mà vẫn có hành động/trạng thái ở vế sau.",
    ],
    more: [
      "🧩 Vます / N + ながらに（して）",
      "⚖️ ～ながら (vừa A vừa B đồng thời), ながらに không nhấn đồng thời mà nhấn trạng thái không thay đổi",
      "💬 Thường gặp: 生まれながらに、泣きながらに、昔ながらに",
      "📝 Ví dụ:",
      "・この子は生まれながらに、優れた音楽の才能を持っている。",
    ],
    questions: [
      new Question(
        "6-7",
        "彼女は涙___に、その出来事を語ってくれた。",
        ["ながら", "ともなく", "んばかり", "とばかり"],
        0,
        [],
        undefined,
        [
          "ながら: Vừa khóc vừa kể lại — trạng thái khóc giữ nguyên trong lúc kể. (Đúng)",
          "ともなく: Vô tình, không phù hợp.",
          "んばかり: Cường điệu, không phù hợp.",
          "とばかり: Như muốn nói điều gì, không phù hợp.",
        ]
      ),
    ],
  },
  {
    front: "～きらいがある",
    back: [
      "✨ Có tật là / Có xu hướng (tật xấu nhỏ)",
      "・Ví dụ: Anh ấy có tật là luôn suy nghĩ bi quan về mọi thứ.",
      "📌 Tật xấu nhỏ của ngôi 3. Thường đi với: どうも、少し、ともすれば.",
    ],
    more: [
      "🧩 V辞書形・Vない・N_の + きらいがある",
      "⚖️ ～傾向がある (xu hướng, trung tính), きらいがある mang sắc thái phê bình nhẹ",
      "💬 Không dùng để tự phê bình bản thân một cách trực tiếp.",
      "📝 Ví dụ:",
      "・彼はどうも物事を悲観的に考えるきらいがある。",
    ],
    questions: [
      new Question(
        "6-8",
        "彼女はともすれば人に頼り過ぎる___。",
        ["きらいがある", "ともなく", "ながらに", "んばかりだ"],
        0,
        [],
        undefined,
        [
          "きらいがある: Có tật hay dựa dẫm vào người khác quá mức — tật xấu nhỏ, phê bình nhẹ. (Đúng)",
          "ともなく: Vô tình, không phù hợp.",
          "ながらに: Giữ nguyên trạng thái, không phù hợp.",
          "んばかりだ: Cường điệu, không phù hợp.",
        ]
      ),
      new Question(
        "6-9",
        "「きらいがある」の使い方として正しいものはどれか。",
        [
          "自分の悪い癖を強く批判するときに使う",
          "第三者の小さな欠点・悪い傾向を軽く指摘するときに使う",
          "自然現象の傾向を表すときに使う",
          "ポジティブな傾向を述べるときに使う",
        ],
        1,
        [],
        undefined,
        [
          "自分の悪い癖を強く批判するときに使う: Sai — không phải phê bình mạnh, và thường ngôi 3.",
          "第三者の小さな欠点・悪い傾向を軽く指摘するときに使う: Đúng — phê bình nhẹ tật xấu nhỏ của người thứ 3. (Đúng)",
          "自然現象の傾向を表すときに使う: Sai — dùng cho người, không dùng cho hiện tượng tự nhiên.",
          "ポジティブな傾向を述べるときに使う: Sai — mang sắc thái tiêu cực (tật xấu).",
        ]
      ),
    ],
  },
];
