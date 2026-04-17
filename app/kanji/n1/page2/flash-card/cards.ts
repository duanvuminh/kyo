import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "恐",
    back: [
      "🀄 KHỦNG (キョウ)",
      "✨ おそれる — sợ hãi, kinh sợ",
      "📌 恐れる（おそれる）: sợ hãi / 恐ろしい（おそろしい）: đáng sợ",
    ],
    more: [
      "📝 Từ vựng:",
      "・恐怖（きょうふ）: nỗi sợ hãi",
      "・恐縮（きょうしゅく）: xin lỗi, ngại ngùng",
      "・恐竜（きょうりゅう）: khủng long",
    ],
    questions: [
      {
        id: "2-1",
        content: "彼女は暗い場所を___れている。",
        answers: ["恐", "怖", "驚", "震"],
        correctAnswer: 0,
        memo: [
          "恐: 恐れる — sợ hãi nơi tối tăm. (Đúng)",
          "怖: 怖がる — sợ (cảm giác, thường dùng với がる).",
          "驚: 驚く — ngạc nhiên, giật mình.",
          "震: 震える — run rẩy.",
        ],
      },
      {
        id: "2-2",
        content: "「恐怖」の読み方として正しいものはどれか。",
        answers: ["きょうふ", "こうふ", "きょうぶ", "けいふ"],
        correctAnswer: 0,
        memo: [
          "きょうふ: Đúng — 恐怖（きょうふ）nỗi sợ hãi. (Đúng)",
          "こうふ: Sai âm đọc.",
          "きょうぶ: Sai — 怖 đọc là ふ không phải ぶ.",
          "けいふ: Không phải từ.",
        ],
      },
    ],
  },
  {
    front: "滅",
    back: [
      "🀄 DIỆT (メツ)",
      "✨ ほろびる — diệt vong, sụp đổ / ほろぼす — tiêu diệt",
      "📌 滅びる（ほろびる）: tự sụp đổ / 滅ぼす（ほろぼす）: làm diệt vong",
    ],
    more: [
      "📝 Từ vựng:",
      "・消滅（しょうめつ）: biến mất, tiêu biến",
      "・絶滅（ぜつめつ）: tuyệt chủng",
      "・滅多（めった）: hiếm khi",
    ],
    questions: [
      {
        id: "2-3",
        content: "恐竜は6600万年前に___んだ。",
        answers: ["滅", "死", "消", "亡"],
        correctAnswer: 0,
        memo: [
          "滅: 滅びる — diệt vong (cả loài). (Đúng)",
          "死: 死ぬ — chết (cá thể).",
          "消: 消える — biến mất (không nhấn diệt vong).",
          "亡: 亡くなる — mất (người).",
        ],
      },
    ],
  },
  {
    front: "衰",
    back: [
      "🀄 SUY (スイ)",
      "✨ おとろえる — suy yếu, tàn tạ",
      "📌 衰える（おとろえる）: dần suy yếu theo thời gian",
    ],
    more: [
      "📝 Từ vựng:",
      "・衰退（すいたい）: suy thoái",
      "・衰弱（すいじゃく）: suy nhược",
      "・老衰（ろうすい）: lão suy",
    ],
    questions: [
      {
        id: "2-4",
        content: "年をとると体力が___える。",
        answers: ["衰", "弱", "減", "落"],
        correctAnswer: 0,
        memo: [
          "衰: 衰える — thể lực suy yếu theo tuổi tác. (Đúng)",
          "弱: 弱まる — yếu đi (tức thời hơn).",
          "減: 減る — giảm (số lượng).",
          "落: 落ちる — rơi xuống, giảm sút.",
        ],
      },
    ],
  },
  {
    front: "濁",
    back: [
      "🀄 TRỌC (ダク)",
      "✨ にごる — đục ngầu, vẩn đục / にごす — làm cho đục",
      "📌 濁る（にごる）: trở nên đục / 濁す（にごす）: làm đục, nói mơ hồ",
    ],
    more: [
      "📝 Từ vựng:",
      "・濁音（だくおん）: âm đục (が、ざ、だ、ば...)",
      "・混濁（こんだく）: hỗn độn, lẫn lộn",
    ],
    questions: [
      {
        id: "2-5",
        content: "大雨の後、川の水が___った。",
        answers: ["濁", "汚", "染", "乱"],
        correctAnswer: 0,
        memo: [
          "濁: 濁る — nước sông bị đục sau mưa lớn. (Đúng)",
          "汚: 汚れる — bị dơ bẩn (rộng hơn).",
          "染: 染まる — bị nhuộm màu.",
          "乱: 乱れる — rối loạn.",
        ],
      },
    ],
  },
  {
    front: "揺",
    back: [
      "🀄 DAO (ヨウ)",
      "✨ ゆれる — rung lắc, dao động / ゆする — lắc, rung",
      "📌 揺れる（ゆれる）: tự rung lắc / 揺する（ゆする）: làm rung",
    ],
    more: [
      "📝 Từ vựng:",
      "・動揺（どうよう）: xao động, bất an",
      "・揺らぐ（ゆらぐ）: lung lay, dao động",
    ],
    questions: [
      {
        id: "2-6",
        content: "地震で建物が大きく___れた。",
        answers: ["揺", "振", "動", "傾"],
        correctAnswer: 0,
        memo: [
          "揺: 揺れる — tòa nhà rung lắc mạnh. (Đúng)",
          "振: 振れる — rung (nhỏ hơn, thường vật nhỏ).",
          "動: 動く — di chuyển (không nhấn rung lắc).",
          "傾: 傾く — nghiêng.",
        ],
      },
    ],
  },
  {
    front: "潤",
    back: [
      "🀄 NHUẬN (ジュン)",
      "✨ うるおう — ẩm ướt, thấm nhuần / うるおす — làm ẩm",
      "📌 潤う（うるおう）: được nuôi dưỡng, thấm / 潤す（うるおす）: làm ẩm, làm giàu",
    ],
    more: [
      "📝 Từ vựng:",
      "・利潤（りじゅん）: lợi nhuận",
      "・潤滑（じゅんかつ）: bôi trơn, suôn sẻ",
    ],
    questions: [
      {
        id: "2-7",
        content: "雨が降って大地が___った。",
        answers: ["潤", "濡", "湿", "浸"],
        correctAnswer: 0,
        memo: [
          "潤: 潤う — đất được thấm nhuần (ý tốt). (Đúng)",
          "濡: 濡れる — bị ướt (thường không tốt).",
          "湿: 湿る — ẩm ướt (trạng thái).",
          "浸: 浸る — ngâm trong nước.",
        ],
      },
    ],
  },
  {
    front: "漏",
    back: [
      "🀄 LẬU (ロウ)",
      "✨ もれる — rò rỉ, lộ ra / もらす — để lọt, tiết lộ",
      "📌 漏れる（もれる）: tự rò rỉ / 漏らす（もらす）: để lộ thông tin",
    ],
    more: [
      "📝 Từ vựng:",
      "・漏電（ろうでん）: rò rỉ điện",
      "・雨漏り（あまもり）: dột nước mưa",
      "・漏洩（ろうえい）: rò rỉ (thông tin)",
    ],
    questions: [
      {
        id: "2-8",
        content: "パイプから水が___れていた。",
        answers: ["漏", "流", "溢", "垂"],
        correctAnswer: 0,
        memo: [
          "漏: 漏れる — rò rỉ qua khe hở. (Đúng)",
          "流: 流れる — chảy (tự nhiên, có hướng).",
          "溢: 溢れる — tràn ra (đầy quá).",
          "垂: 垂れる — nhỏ giọt, rủ xuống.",
        ],
      },
    ],
  },
  {
    front: "崩",
    back: [
      "🀄 BĂNG (ホウ)",
      "✨ くずれる — sụp đổ, tan rã / くずす — phá vỡ, làm sụp",
      "📌 崩れる（くずれる）: tự sụp / 崩す（くずす）: làm sụp, phá vỡ hình dạng",
    ],
    more: [
      "📝 Từ vựng:",
      "・崩壊（ほうかい）: sụp đổ hoàn toàn",
      "・土砂崩れ（どしゃくずれ）: lở đất",
    ],
    questions: [
      {
        id: "2-9",
        content: "大雨で山の斜面が___れた。",
        answers: ["崩", "壊", "落", "砕"],
        correctAnswer: 0,
        memo: [
          "崩: 崩れる — sườn núi bị sạt lở. (Đúng)",
          "壊: 壊れる — vỡ hỏng (công trình, đồ vật).",
          "落: 落ちる — rơi xuống.",
          "砕: 砕ける — vỡ thành mảnh nhỏ.",
        ],
      },
    ],
  },
  {
    front: "覆",
    back: [
      "🀄 PHỦ (フク)",
      "✨ おおう — che phủ / くつがえす — lật ngược, đảo lộn",
      "📌 覆う（おおう）: bao phủ / 覆す（くつがえす）: lật đổ phán quyết, kế hoạch",
    ],
    more: [
      "📝 Từ vựng:",
      "・覆面（ふくめん）: che mặt, bịt mặt",
      "・転覆（てんぷく）: lật úp (thuyền, chính quyền)",
    ],
    questions: [
      {
        id: "2-10",
        content: "弁護士は証拠で裁判の判決を___した。",
        answers: ["覆", "変", "破", "取"],
        correctAnswer: 0,
        memo: [
          "覆: 覆す — lật ngược phán quyết bằng bằng chứng. (Đúng)",
          "変: 変える — thay đổi (chung chung).",
          "破: 破る — phá vỡ (kỷ lục, quy tắc).",
          "取: 取り消す — hủy bỏ.",
        ],
      },
    ],
  },
  {
    front: "促",
    back: [
      "🀄 XÚC (ソク)",
      "✨ うながす — thúc giục, thúc đẩy",
      "📌 促す（うながす）: thúc giục ai đó làm việc gì",
    ],
    more: [
      "📝 Từ vựng:",
      "・促進（そくしん）: thúc đẩy, xúc tiến",
      "・催促（さいそく）: giục giã, thúc ép",
      "・促す（うながす）: thúc giục",
    ],
    questions: [
      {
        id: "2-11",
        content: "上司は部下に早急な対応を___した。",
        answers: ["促", "命", "強", "迫"],
        correctAnswer: 0,
        memo: [
          "促: 促す — thúc giục cấp dưới xử lý nhanh. (Đúng)",
          "命: 命じる — ra lệnh (quyền lực mạnh hơn).",
          "強: 強いる — ép buộc.",
          "迫: 迫る — thúc ép, đặt áp lực.",
        ],
      },
    ],
  },
  {
    front: "伴",
    back: [
      "🀄 BẠN (ハン)",
      "✨ ともなう — đi kèm, kéo theo",
      "📌 伴う（ともなう）: đi cùng / kéo theo hệ quả",
    ],
    more: [
      "📝 Từ vựng:",
      "・伴奏（ばんそう）: đệm nhạc",
      "・同伴（どうはん）: cùng đi, đi kèm",
      "・伴侶（はんりょ）: bạn đời, bạn đồng hành",
    ],
    questions: [
      {
        id: "2-12",
        content: "高齢化には様々な社会問題が___う。",
        answers: ["伴", "続", "起", "生"],
        correctAnswer: 0,
        memo: [
          "伴: 伴う — lão hóa kéo theo các vấn đề xã hội. (Đúng)",
          "続: 続く — tiếp diễn.",
          "起: 起こる — xảy ra (không nhấn quan hệ nhân quả).",
          "生: 生じる — phát sinh.",
        ],
      },
    ],
  },
  {
    front: "誇",
    back: [
      "🀄 KHOA (コ)",
      "✨ ほこる — tự hào, kiêu ngạo",
      "📌 誇る（ほこる）: tự hào về điều gì / 誇り（ほこり）: niềm tự hào",
    ],
    more: [
      "📝 Từ vựng:",
      "・誇大（こだい）: phóng đại, thổi phồng",
      "・誇示（こじ）: phô trương, khoe khoang",
      "・自慢（じまん）: tự phụ (gần nghĩa)",
    ],
    questions: [
      {
        id: "2-13",
        content: "彼は世界一の技術を___っている。",
        answers: ["誇", "自慢", "威張", "誉"],
        correctAnswer: 0,
        memo: [
          "誇: 誇る — tự hào về kỹ thuật hàng đầu thế giới. (Đúng)",
          "自慢: 自慢する — khoe khoang (hàm ý tiêu cực hơn).",
          "威張: 威張る — hống hách.",
          "誉: 誉める — khen ngợi (người khác khen, không tự khen).",
        ],
      },
    ],
  },
  {
    front: "嘆",
    back: [
      "🀄 THÁN (タン)",
      "✨ なげく — than thở, than vãn / なげかわしい — đáng tiếc",
      "📌 嘆く（なげく）: than thở về tình cảnh / 感嘆（かんたん）: cảm thán",
    ],
    more: [
      "📝 Từ vựng:",
      "・感嘆（かんたん）: cảm thán, khen ngợi",
      "・嘆願（たんがん）: thỉnh cầu tha thiết",
      "・嘆息（たんそく）: thở dài, than thở",
    ],
    questions: [
      {
        id: "2-14",
        content: "若者の礼儀の悪さを___いた。",
        answers: ["嘆", "怒", "憂", "悲"],
        correctAnswer: 0,
        memo: [
          "嘆: 嘆く — than thở về cách cư xử kém của giới trẻ. (Đúng)",
          "怒: 怒る — tức giận.",
          "憂: 憂う — lo lắng, buồn phiền.",
          "悲: 悲しむ — đau buồn.",
        ],
      },
    ],
  },
];
