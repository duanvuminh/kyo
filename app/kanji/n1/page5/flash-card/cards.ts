import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "隠",
    back: [
      "🀄 ẨN (イン)",
      "✨ かくす — giấu đi / かくれる — ẩn náu",
      "📌 隠す（かくす）: che giấu / 隠れる（かくれる）: trốn, ẩn",
    ],
    more: [
      "📝 Từ vựng:",
      "・隠蔽（いんぺい）: che đậy, che giấu",
      "・隠居（いんきょ）: ở ẩn, về hưu",
      "・潜伏（せんぷく）: ẩn nấp",
    ],
    questions: [
      {
        id: "5-1",
        content: "彼は真実を___して嘘をついた。",
        answers: ["隠", "伏", "秘", "偽"],
        correctAnswer: 0,
        memo: [
          "隠: 隠す — che giấu sự thật. (Đúng)",
          "伏: 伏せる — úp xuống, giấu (thường về thông tin).",
          "秘: 秘める — ẩn chứa bên trong (không chủ động che).",
          "偽: 偽る — giả mạo (nói điều không thật).",
        ],
      },
    ],
  },
  {
    front: "潜",
    back: [
      "🀄 TIỀM (セン)",
      "✨ もぐる — lặn xuống / ひそむ — ẩn mình, tiềm ẩn",
      "📌 潜る（もぐる）: lặn / 潜む（ひそむ）: ẩn náu, tiềm ẩn",
    ],
    more: [
      "📝 Từ vựng:",
      "・潜水（せんすい）: lặn nước, tàu ngầm",
      "・潜在（せんざい）: tiềm ẩn",
      "・潜入（せんにゅう）: xâm nhập bí mật",
    ],
    questions: [
      {
        id: "5-2",
        content: "危険が水面下に___んでいた。",
        answers: ["潜", "隠", "沈", "伏"],
        correctAnswer: 0,
        memo: [
          "潜: 潜む — nguy hiểm tiềm ẩn dưới mặt nước. (Đúng)",
          "隠: 隠れる — ẩn náu (chủ thể tự ẩn).",
          "沈: 沈む — chìm xuống.",
          "伏: 伏せる — úp xuống, nằm phủ phục.",
        ],
      },
    ],
  },
  {
    front: "偽",
    back: [
      "🀄 NGỤY (ギ)",
      "✨ いつわる — giả mạo, gian lận",
      "📌 偽る（いつわる）: nói dối / 偽物（にせもの）: đồ giả",
    ],
    more: [
      "📝 Từ vựng:",
      "・偽造（ぎぞう）: làm giả, giả mạo",
      "・偽物（にせもの）: đồ giả, hàng nhái",
      "・真偽（しんぎ）: thật giả",
    ],
    questions: [
      {
        id: "5-3",
        content: "彼は身分を___って入国した。",
        answers: ["偽", "欺", "偽装", "詐称"],
        correctAnswer: 0,
        memo: [
          "偽: 偽る — giả mạo danh tính để nhập cảnh. (Đúng)",
          "欺: 欺く — lừa dối (người khác).",
          "偽装: 偽装する — ngụy trang (từ ghép).",
          "詐称: 詐称する — mạo xưng (từ ghép).",
        ],
      },
    ],
  },
  {
    front: "欺",
    back: [
      "🀄 KHI (ギ)",
      "✨ あざむく — lừa dối, đánh lừa",
      "📌 欺く（あざむく）: lừa gạt / 詐欺（さぎ）: lừa đảo",
    ],
    more: [
      "📝 Từ vựng:",
      "・詐欺（さぎ）: lừa đảo, gian lận",
      "・欺瞞（ぎまん）: lừa dối, gian manh",
    ],
    questions: [
      {
        id: "5-4",
        content: "消費者を___くような広告は許されない。",
        answers: ["欺", "惑", "騙", "偽"],
        correctAnswer: 0,
        memo: [
          "欺: 欺く — quảng cáo lừa dối người tiêu dùng. (Đúng)",
          "惑: 惑わす — gây nhầm lẫn, mê hoặc.",
          "騙: 騙す — lừa bịp (thông thường hơn).",
          "偽: 偽る — giả mạo (bản thân nói dối).",
        ],
      },
    ],
  },
  {
    front: "慰",
    back: [
      "🀄 ÚY (イ)",
      "✨ なぐさめる — an ủi, vỗ về",
      "📌 慰める（なぐさめる）: an ủi người đang đau buồn",
    ],
    more: [
      "📝 Từ vựng:",
      "・慰安（いあん）: an ủi, nghỉ ngơi",
      "・慰問（いもん）: thăm hỏi (người bệnh, người neo đơn)",
      "・慰労（いろう）: an ủi, khen thưởng",
    ],
    questions: [
      {
        id: "5-5",
        content: "失恋した友人を___めた。",
        answers: ["慰", "励", "助", "支"],
        correctAnswer: 0,
        memo: [
          "慰: 慰める — an ủi bạn thất tình. (Đúng)",
          "励: 励ます — động viên, khuyến khích.",
          "助: 助ける — cứu giúp (hành động).",
          "支: 支える — hỗ trợ, chống đỡ.",
        ],
      },
    ],
  },
  {
    front: "陥",
    back: [
      "🀄 HÃM (カン)",
      "✨ おちいる — sa vào, lâm vào / おとしいれる — đẩy vào bẫy",
      "📌 陥る（おちいる）: lâm vào tình thế / 陥れる（おとしいれる）: gài bẫy",
    ],
    more: [
      "📝 Từ vựng:",
      "・陥落（かんらく）: thất thủ, sụp đổ",
      "・欠陥（けっかん）: khuyết điểm, lỗi",
    ],
    questions: [
      {
        id: "5-6",
        content: "計画の失敗でパニックに___った。",
        answers: ["陥", "落", "入", "嵌"],
        correctAnswer: 0,
        memo: [
          "陥: 陥る — kế hoạch thất bại dẫn đến hoảng loạn. (Đúng)",
          "落: 落ちる — rơi xuống.",
          "入: 入る — đi vào (trung tính).",
          "嵌: 嵌まる — mắc kẹt, sa bẫy (gần nghĩa).",
        ],
      },
    ],
  },
  {
    front: "暴",
    back: [
      "🀄 BẠO (ボウ・バク)",
      "✨ あばく — vạch trần / あばれる — nổi loạn, hung hãn",
      "📌 暴く（あばく）: phanh phui / 暴れる（あばれる）: làm loạn",
    ],
    more: [
      "📝 Từ vựng:",
      "・暴力（ぼうりょく）: bạo lực",
      "・暴露（ばくろ）: phơi bày, vạch trần",
      "・暴動（ぼうどう）: bạo động",
    ],
    questions: [
      {
        id: "5-7",
        content: "記者がスキャンダルを___いた。",
        answers: ["暴", "明", "示", "告"],
        correctAnswer: 0,
        memo: [
          "暴: 暴く — phóng viên vạch trần bê bối. (Đúng)",
          "明: 明かす — tiết lộ, làm rõ.",
          "示: 示す — chỉ ra, biểu thị.",
          "告: 告げる — thông báo.",
        ],
      },
    ],
  },
  {
    front: "妨",
    back: [
      "🀄 PHƯƠNG (ボウ)",
      "✨ さまたげる — cản trở, ngăn chặn",
      "📌 妨げる（さまたげる）: cản trở tiến độ / 妨害（ぼうがい）: phá hoại",
    ],
    more: [
      "📝 Từ vựng:",
      "・妨害（ぼうがい）: phá hoại, cản trở",
      "・妨げ（さまたげ）: sự cản trở, trở ngại",
    ],
    questions: [
      {
        id: "5-8",
        content: "騒音が勉強の集中を___げた。",
        answers: ["妨", "邪魔", "阻", "防"],
        correctAnswer: 0,
        memo: [
          "妨: 妨げる — tiếng ồn cản trở việc tập trung học. (Đúng)",
          "邪魔: 邪魔する — làm phiền (từ ghép).",
          "阻: 阻む — ngăn cản (mạnh hơn, thường về hành động).",
          "防: 防ぐ — ngăn chặn (phòng thủ).",
        ],
      },
    ],
  },
  {
    front: "悔",
    back: [
      "🀄 HỐI (カイ)",
      "✨ くやむ — hối hận / くいる — ân hận",
      "📌 悔やむ（くやむ）: hối tiếc / 後悔（こうかい）: hối hận",
    ],
    more: [
      "📝 Từ vựng:",
      "・後悔（こうかい）: hối hận, tiếc nuối",
      "・悔恨（かいこん）: ân hận sâu sắc",
      "・悔やみ（くやみ）: lời chia buồn",
    ],
    questions: [
      {
        id: "5-9",
        content: "あの時の決断を今でも___んでいる。",
        answers: ["悔や", "後悔", "惜し", "残念"],
        correctAnswer: 0,
        memo: [
          "悔や: 悔やむ — vẫn hối tiếc về quyết định đó. (Đúng)",
          "後悔: 後悔する — hối hận (từ ghép).",
          "惜し: 惜しむ — tiếc nuối (vì mất đi điều gì quý).",
          "残念: 残念に思う — cảm thấy đáng tiếc.",
        ],
      },
    ],
  },
  {
    front: "憂",
    back: [
      "🀄 ƯU (ユウ)",
      "✨ うれえる — lo lắng, buồn phiền / うれい — nỗi lo",
      "📌 憂える（うれえる）: lo âu / 憂鬱（ゆううつ）: u uất",
    ],
    more: [
      "📝 Từ vựng:",
      "・憂鬱（ゆううつ）: u uất, sầu muộn",
      "・憂慮（ゆうりょ）: lo ngại",
      "・喜憂（きゆう）: vui buồn lẫn lộn",
    ],
    questions: [
      {
        id: "5-10",
        content: "将来のことを___えて夜も眠れない。",
        answers: ["憂", "心配", "悩", "懸念"],
        correctAnswer: 0,
        memo: [
          "憂: 憂える — lo lắng về tương lai đến mất ngủ. (Đúng)",
          "心配: 心配する — lo lắng (thường ngày, từ ghép).",
          "悩: 悩む — băn khoăn, phiền não.",
          "懸念: 懸念する — lo ngại (từ ghép, trang trọng).",
        ],
      },
    ],
  },
  {
    front: "恨",
    back: [
      "🀄 HẬN (コン)",
      "✨ うらむ — oán hận, căm ghét",
      "📌 恨む（うらむ）: oán giận ai / 怨恨（えんこん）: mối thù hằn",
    ],
    more: [
      "📝 Từ vựng:",
      "・怨恨（えんこん）: oán hận sâu sắc",
      "・恨み（うらみ）: mối hận",
      "・遺恨（いこん）: ân oán để lại",
    ],
    questions: [
      {
        id: "5-11",
        content: "裏切られた彼を深く___んだ。",
        answers: ["恨", "憎", "怒", "嫌"],
        correctAnswer: 0,
        memo: [
          "恨: 恨む — sâu sắc oán hận người đã phản bội. (Đúng)",
          "憎: 憎む — căm ghét (mạnh, nhưng không nhấn bị phản bội).",
          "怒: 怒る — tức giận (nhất thời).",
          "嫌: 嫌う — ghét (không ưa).",
        ],
      },
    ],
  },
  {
    front: "惜",
    back: [
      "🀄 TÍCH (セキ)",
      "✨ おしむ — tiếc nuối, quý trọng / おしい — đáng tiếc",
      "📌 惜しむ（おしむ）: tiếc khi mất / 惜しい（おしい）: đáng tiếc",
    ],
    more: [
      "📝 Từ vựng:",
      "・惜しい（おしい）: tiếc, suýt được",
      "・惜しまれる（おしまれる）: được tiếc thương",
      "・惜別（せきべつ）: chia ly tiếc nuối",
    ],
    questions: [
      {
        id: "5-12",
        content: "あと一点で合格を___んだ。",
        answers: ["惜し", "残念", "悔し", "逃し"],
        correctAnswer: 0,
        memo: [
          "惜し: 惜しむ — tiếc nuối vì thiếu đúng một điểm. (Đúng)",
          "残念: 残念に思う — cảm thấy đáng tiếc.",
          "悔し: 悔しい — tức tưởi (cảm xúc mạnh hơn).",
          "逃し: 逃す — để lỡ mất.",
        ],
      },
    ],
  },
];
