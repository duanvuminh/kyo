import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "遭",
    back: [
      "✨ あう — gặp phải (tai họa, sự cố)",
      "・Ví dụ: 遭難（そうなん）: gặp tai nạn",
      "📌 遭う（あう）: gặp phải điều không hay",
    ],
    more: [
      "🧩 On-yomi: ソウ",
      "📝 Từ vựng:",
      "・遭難（そうなん）: gặp tai nạn, bị nạn",
      "・遭遇（そうぐう）: chạm trán, gặp gỡ bất ngờ",
    ],
    questions: [
      {
        id: "1-1",
        content: "山で嵐に___って、遭難しそうになった。",
        answers: ["遭", "会", "逢", "合"],
        correctAnswer: 0,
        memo: [
          "遭: 遭う — gặp phải tai họa, thảm họa. (Đúng)",
          "会: 会う — gặp người, gặp gỡ thân thiện.",
          "逢: 逢う — gặp gỡ (thơ văn, lãng mạn).",
          "合: 合う — khớp, phù hợp.",
        ],
      },
      {
        id: "1-2",
        content: "「遭難」の読み方として正しいものはどれか。",
        answers: ["そうなん", "あいなん", "そうむずかし", "さわぐ"],
        correctAnswer: 0,
        memo: [
          "そうなん: Đúng — 遭難（そうなん）là gặp tai nạn. (Đúng)",
          "あいなん: Sai cách đọc.",
          "そうむずかし: Không phải từ.",
          "さわぐ: Đọc của 騒ぐ, không liên quan.",
        ],
      },
    ],
  },
  {
    front: "飼",
    back: [
      "✨ かう — nuôi (động vật)",
      "・Ví dụ: 犬を飼う（いぬをかう）: nuôi chó",
      "📌 飼う（かう）: nuôi thú cưng, vật nuôi",
    ],
    more: [
      "🧩 On-yomi: シ",
      "📝 Từ vựng:",
      "・飼育（しいく）: chăn nuôi, nuôi dưỡng",
      "・飼い主（かいぬし）: chủ nuôi",
      "・飼料（しりょう）: thức ăn cho vật nuôi",
    ],
    questions: [
      {
        id: "1-3",
        content: "彼女は家でウサギを___っている。",
        answers: ["飼", "買", "拾", "育"],
        correctAnswer: 0,
        memo: [
          "飼: 飼う — nuôi thú cưng. (Đúng)",
          "買: 買う — mua (hành động mua, không phải nuôi).",
          "拾: 拾う — nhặt lên.",
          "育: 育てる — nuôi dưỡng, nhưng thường dùng cho con người.",
        ],
      },
    ],
  },
  {
    front: "狂",
    back: [
      "✨ くるう — điên loạn, lệch khỏi bình thường",
      "・Ví dụ: 計画が狂う（けいかくがくるう）: kế hoạch bị lệch",
      "📌 狂う（くるう）: mất kiểm soát, trở nên điên loạn",
    ],
    more: [
      "🧩 On-yomi: キョウ",
      "📝 Từ vựng:",
      "・狂気（きょうき）: sự điên loạn",
      "・熱狂（ねっきょう）: cuồng nhiệt",
      "・狂言（きょうげん）: kịch hề Nhật Bản / lời nói dối",
    ],
    questions: [
      {
        id: "1-4",
        content: "事故の影響でダイヤが___ってしまった。",
        answers: ["狂", "壊", "乱", "崩"],
        correctAnswer: 0,
        memo: [
          "狂: 狂う — lịch tàu bị rối loạn, lệch. (Đúng)",
          "壊: 壊れる — bị vỡ, hỏng (vật lý).",
          "乱: 乱れる — rối loạn (cũng dùng được nhưng 狂う đặc trưng hơn với lịch trình).",
          "崩: 崩れる — sụp đổ.",
        ],
      },
    ],
  },
  {
    front: "誓",
    back: [
      "✨ ちかう — thề, hứa hẹn",
      "・Ví dụ: 神に誓う（かみにちかう）: thề trước thần",
      "📌 誓う（ちかう）: lập lời thề, cam kết trang trọng",
    ],
    more: [
      "🧩 On-yomi: セイ",
      "📝 Từ vựng:",
      "・誓約（せいやく）: lời thề, cam kết",
      "・宣誓（せんせい）: tuyên thệ",
      "・誓い（ちかい）: lời hứa, lời thề",
    ],
    questions: [
      {
        id: "1-5",
        content: "彼はもう嘘をつかないと___った。",
        answers: ["誓", "約", "告", "宣"],
        correctAnswer: 0,
        memo: [
          "誓: 誓う — thề không nói dối nữa. (Đúng)",
          "約: 約束する — hứa (nhẹ hơn, không trang trọng bằng 誓う).",
          "告: 告げる — báo, thông báo.",
          "宣: 宣言する — tuyên bố (từ ghép, không dùng một mình như vậy).",
        ],
      },
    ],
  },
  {
    front: "侵",
    back: [
      "✨ おかす — xâm phạm, vi phạm",
      "・Ví dụ: 領土を侵す（りょうどをおかす）: xâm phạm lãnh thổ",
      "📌 侵す（おかす）: xâm lấn, vi phạm ranh giới",
    ],
    more: [
      "🧩 On-yomi: シン",
      "📝 Từ vựng:",
      "・侵略（しんりゃく）: xâm lược",
      "・侵害（しんがい）: xâm hại, vi phạm",
      "・侵入（しんにゅう）: xâm nhập",
    ],
    questions: [
      {
        id: "1-6",
        content: "他国の領土を___すことは許されない。",
        answers: ["侵", "犯", "攻", "破"],
        correctAnswer: 0,
        memo: [
          "侵: 侵す — xâm phạm lãnh thổ. (Đúng)",
          "犯: 犯す — phạm tội, vi phạm (thường dùng với tội lỗi).",
          "攻: 攻める — tấn công (hành động tấn công trực tiếp).",
          "破: 破る — phá vỡ.",
        ],
      },
    ],
  },
  {
    front: "聴",
    back: [
      "✨ きく — lắng nghe (chú ý, tập trung)",
      "・Ví dụ: 音楽を聴く（おんがくをきく）: nghe nhạc",
      "📌 聴く（きく）: nghe chú ý; 聞く（きく）: nghe thông thường / hỏi",
    ],
    more: [
      "🧩 On-yomi: チョウ",
      "📝 Từ vựng:",
      "・聴衆（ちょうしゅう）: khán giả, thính giả",
      "・拝聴（はいちょう）: lắng nghe (kính ngữ)",
      "・聴取（ちょうしゅ）: thẩm vấn, nghe lấy thông tin",
    ],
    questions: [
      {
        id: "1-7",
        content: "コンサートで観客がオーケストラの演奏を___いた。",
        answers: ["聴", "聞", "聆", "音"],
        correctAnswer: 0,
        memo: [
          "聴: 聴く — lắng nghe chú ý (dùng trong bối cảnh nghệ thuật). (Đúng)",
          "聞: 聞く — nghe thông thường / hỏi (ít trang trọng hơn với âm nhạc).",
          "聆: Không phổ biến trong tiếng Nhật hiện đại.",
          "音: 音（おと）là danh từ, không dùng như động từ.",
        ],
      },
      {
        id: "1-8",
        content: "「聴く」と「聞く」の違いとして正しいものはどれか。",
        answers: [
          "聴く は質問する意味、聞く は音楽を聴く意味",
          "聴く は注意して聞く・芸術的な場面、聞く は一般的に聞く・質問する",
          "どちらも全く同じ意味",
          "聞く は書き言葉のみ、聴く は話し言葉のみ",
        ],
        correctAnswer: 1,
        memo: [
          "聴く は質問する意味、聞く は音楽を聴く意味: Hoàn toàn ngược lại.",
          "聴く は注意して聞く・芸術的な場面、聞く は一般的に聞く・質問する: Đúng. (Đúng)",
          "どちらも全く同じ意味: Sai — có sự khác biệt về sắc thái.",
          "聞く は書き言葉のみ、聴く は話し言葉のみ: Sai.",
        ],
      },
    ],
  },
  {
    front: "拭",
    back: [
      "✨ ふく — lau, chùi sạch",
      "・Ví dụ: テーブルを拭く（テーブルをふく）: lau bàn",
      "📌 拭く（ふく）: lau bằng khăn; 拭き取る（ふきとる）: lau sạch",
    ],
    more: [
      "🧩 On-yomi: ショク",
      "📝 Từ vựng:",
      "・拭き取る（ふきとる）: lau đi, thấm sạch",
      "・払拭（ふっしょく）: xóa bỏ hoàn toàn",
    ],
    questions: [
      {
        id: "1-9",
        content: "汗を___くためにタオルを持ってきた。",
        answers: ["拭", "払", "洗", "拭き取"],
        correctAnswer: 0,
        memo: [
          "拭: 拭く — lau mồ hôi bằng khăn. (Đúng)",
          "払: 払う — phủi đi (bụi, tiền).",
          "洗: 洗う — rửa bằng nước.",
          "拭き取: 拭き取る cũng đúng nhưng cần thêm る, không phù hợp chỗ trống.",
        ],
      },
    ],
  },
  {
    front: "炊",
    back: [
      "✨ たく — nấu (cơm)",
      "・Ví dụ: ご飯を炊く（ごはんをたく）: nấu cơm",
      "📌 炊く（たく）: chỉ dùng cho việc nấu cơm, không dùng cho nấu chung",
    ],
    more: [
      "🧩 On-yomi: スイ",
      "📝 Từ vựng:",
      "・炊飯器（すいはんき）: nồi cơm điện",
      "・自炊（じすい）: tự nấu ăn",
      "・炊事（すいじ）: nấu nướng, bếp núc",
    ],
    questions: [
      {
        id: "1-10",
        content: "毎朝、自分でご飯を___いている。",
        answers: ["炊", "煮", "焼", "沸"],
        correctAnswer: 0,
        memo: [
          "炊: 炊く — nấu cơm (dùng riêng cho cơm). (Đúng)",
          "煮: 煮る — nấu (rau, thịt trong nước).",
          "焼: 焼く — nướng, chiên.",
          "沸: 沸かす — đun sôi (nước).",
        ],
      },
    ],
  },
  {
    front: "弾",
    back: [
      "✨ ひく — chơi (đàn, nhạc cụ dây/phím); はじく — bật, búng",
      "・Ví dụ: ピアノを弾く（ピアノをひく）: chơi piano",
      "📌 弾く（ひく）: chơi nhạc cụ; 弾く（はじく）: bật, búng ra",
    ],
    more: [
      "🧩 On-yomi: ダン",
      "📝 Từ vựng:",
      "・弾力（だんりょく）: độ đàn hồi",
      "・弾丸（だんがん）: đạn",
      "・爆弾（ばくだん）: bom",
    ],
    questions: [
      {
        id: "1-11",
        content: "彼女は子供の頃からバイオリンを___いている。",
        answers: ["弾", "吹", "叩", "奏"],
        correctAnswer: 0,
        memo: [
          "弾: 弾く — chơi violin (nhạc cụ dây). (Đúng)",
          "吹: 吹く — thổi (nhạc cụ hơi như sáo, kèn).",
          "叩: 叩く — đánh (trống).",
          "奏: 奏でる — cũng có nghĩa chơi nhạc nhưng trang trọng hơn.",
        ],
      },
    ],
  },
  {
    front: "描",
    back: [
      "✨ えがく・かく — vẽ, mô tả, miêu tả",
      "・Ví dụ: 絵を描く（えをえがく）: vẽ tranh",
      "📌 描く（えがく）: vẽ / mô tả trong văn học; 描く（かく）: vẽ (thông thường)",
    ],
    more: [
      "🧩 On-yomi: ビョウ・ミョウ",
      "📝 Từ vựng:",
      "・描写（びょうしゃ）: mô tả, miêu tả",
      "・素描（そびょう）: phác thảo",
      "・描画（びょうが）: vẽ hình",
    ],
    questions: [
      {
        id: "1-12",
        content: "作家は主人公の心理を細かく___いた。",
        answers: ["描", "書", "記", "語"],
        correctAnswer: 0,
        memo: [
          "描: 描く — miêu tả tâm lý nhân vật (bằng ngôn từ). (Đúng)",
          "書: 書く — viết (hành động viết chữ).",
          "記: 記す — ghi chép.",
          "語: 語る — kể, thuật lại.",
        ],
      },
    ],
  },
  {
    front: "砕",
    back: [
      "✨ くだく・くだける — nghiền nát, đập vỡ",
      "・Ví dụ: 石を砕く（いしをくだく）: đập vỡ đá",
      "📌 砕く（くだく）: làm vỡ thành nhiều mảnh; 砕ける（くだける）: tự vỡ ra",
    ],
    more: [
      "🧩 On-yomi: サイ",
      "📝 Từ vựng:",
      "・粉砕（ふんさい）: nghiền nát hoàn toàn",
      "・砕石（さいせき）: đá vụn",
      "・砕氷船（さいひょうせん）: tàu phá băng",
    ],
    questions: [
      {
        id: "1-13",
        content: "岩を機械で細かく___いた。",
        answers: ["砕", "割", "壊", "破"],
        correctAnswer: 0,
        memo: [
          "砕: 砕く — nghiền thành vụn nhỏ. (Đúng)",
          "割: 割る — bẻ, chia đôi (ít vụn hơn).",
          "壊: 壊す — phá hủy (thiết bị, công trình).",
          "破: 破る — xé, phá (giấy, kỷ lục).",
        ],
      },
    ],
  },
  {
    front: "脱",
    back: [
      "✨ ぬぐ — cởi (quần áo); だっする — thoát khỏi",
      "・Ví dụ: 靴を脱ぐ（くつをぬぐ）: cởi giày",
      "📌 脱ぐ（ぬぐ）: cởi quần áo, giày; 脱する（だっする）: thoát ra",
    ],
    more: [
      "🧩 On-yomi: ダツ",
      "📝 Từ vựng:",
      "・脱出（だっしゅつ）: thoát ra",
      "・脱退（だったい）: rút lui, rời khỏi tổ chức",
      "・脱線（だっせん）: trật bánh, lạc đề",
    ],
    questions: [
      {
        id: "1-14",
        content: "家に入る前に靴を___いでください。",
        answers: ["脱", "取", "外", "除"],
        correctAnswer: 0,
        memo: [
          "脱: 脱ぐ — cởi giày (quần áo, giày dép). (Đúng)",
          "取: 取る — lấy ra, lấy đi.",
          "外: 外す — tháo ra (nút, kính mắt).",
          "除: 除く — loại bỏ, trừ ra.",
        ],
      },
    ],
  },
  {
    front: "稼",
    back: [
      "✨ かせぐ — kiếm tiền, kiếm sống",
      "・Ví dụ: お金を稼ぐ（おかねをかせぐ）: kiếm tiền",
      "📌 稼ぐ（かせぐ）: làm việc để kiếm thu nhập",
    ],
    more: [
      "🧩 On-yomi: カ",
      "📝 Từ vựng:",
      "・稼働（かどう）: vận hành, hoạt động (máy móc)",
      "・稼業（かぎょう）: nghề nghiệp, nghề kiếm sống",
      "・出稼ぎ（でかせぎ）: đi làm xa để kiếm tiền",
    ],
    questions: [
      {
        id: "1-15",
        content: "彼はアルバイトで生活費を___いでいる。",
        answers: ["稼", "儲", "得", "働"],
        correctAnswer: 0,
        memo: [
          "稼: 稼ぐ — kiếm tiền sinh hoạt phí bằng làm thêm. (Đúng)",
          "儲: 儲ける — kiếm lời, có lãi (thường dùng trong kinh doanh).",
          "得: 得る — có được, thu được (rộng hơn, không nhấn lao động).",
          "働: 働く — làm việc (không nhấn thu nhập).",
        ],
      },
    ],
  },
  {
    front: "脅",
    back: [
      "✨ おどす・おびやかす — đe dọa, uy hiếp",
      "・Ví dụ: 人を脅す（ひとをおどす）: đe dọa người",
      "📌 脅す（おどす）: đe dọa; 脅かす（おびやかす）: uy hiếp, gây nguy hiểm",
    ],
    more: [
      "🧩 On-yomi: キョウ",
      "📝 Từ vựng:",
      "・脅迫（きょうはく）: đe dọa, uy hiếp",
      "・脅威（きょうい）: mối đe dọa, uy hiếp",
      "・脅し（おどし）: lời đe dọa",
    ],
    questions: [
      {
        id: "1-16",
        content: "犯人はナイフで店員を___した。",
        answers: ["脅迫", "警告", "脅脅", "注意"],
        correctAnswer: 0,
        memo: [
          "脅迫: 脅迫（きょうはく）— đe dọa bằng vũ lực. (Đúng)",
          "警告: 警告（けいこく）— cảnh báo (không nhất thiết ác ý).",
          "脅脅: Không phải từ.",
          "注意: 注意（ちゅうい）— nhắc nhở, chú ý.",
        ],
      },
    ],
  },
  {
    front: "励",
    back: [
      "✨ はげます・はげむ — khuyến khích, động viên / nỗ lực",
      "・Ví dụ: 友達を励ます（ともだちをはげます）: động viên bạn",
      "📌 励ます（はげます）: khuyến khích người khác; 励む（はげむ）: tự nỗ lực",
    ],
    more: [
      "🧩 On-yomi: レイ",
      "📝 Từ vựng:",
      "・励ます（はげます）: động viên",
      "・励む（はげむ）: nỗ lực, cố gắng",
      "・激励（げきれい）: cổ vũ nhiệt tình",
    ],
    questions: [
      {
        id: "1-17",
        content: "落ち込んでいる友人を___ました。",
        answers: ["励", "押", "助", "誘"],
        correctAnswer: 0,
        memo: [
          "励: 励ます — động viên bạn đang buồn. (Đúng)",
          "押: 押す — đẩy (vật lý hoặc thúc ép).",
          "助: 助ける — giúp đỡ (hành động cứu giúp).",
          "誘: 誘う — mời, rủ rê.",
        ],
      },
    ],
  },
  {
    front: "拝",
    back: [
      "✨ おがむ — lễ bái, chắp tay cầu nguyện",
      "・Ví dụ: 神社で拝む（じんじゃでおがむ）: cầu nguyện ở đền",
      "📌 拝む（おがむ）: chắp tay lễ bái; dùng trong kính ngữ 拝〜",
    ],
    more: [
      "🧩 On-yomi: ハイ",
      "📝 Từ vựng:",
      "・拝見（はいけん）: xem (khiêm tốn)",
      "・拝啓（はいけい）: kính thưa (đầu thư)",
      "・崇拝（すうはい）: sùng bái, tôn thờ",
    ],
    questions: [
      {
        id: "1-18",
        content: "お正月に神社へ行って___んだ。",
        answers: ["拝", "祈", "参", "願"],
        correctAnswer: 0,
        memo: [
          "拝: 拝む — chắp tay lễ bái ở đền. (Đúng)",
          "祈: 祈る — cầu nguyện (không nhất thiết ở đền, hướng đến điều mong muốn).",
          "参: 参る — đến thăm (đền/lăng), đi (khiêm tốn).",
          "願: 願う — cầu mong, mong muốn.",
        ],
      },
    ],
  },
  {
    front: "抱",
    back: [
      "✨ だく・いだく — ôm, ôm ấp; ấp ủ (cảm xúc)",
      "・Ví dụ: 赤ちゃんを抱く（あかちゃんをだく）: ôm em bé",
      "📌 抱く（だく）: ôm; 抱く（いだく）: ấp ủ (hy vọng, nỗi sợ)",
    ],
    more: [
      "🧩 On-yomi: ホウ",
      "📝 Từ vựng:",
      "・抱負（ほうふ）: hy vọng, kỳ vọng",
      "・抱擁（ほうよう）: ôm ấp",
      "・抱える（かかえる）: ôm ôm, đương đầu với vấn đề",
    ],
    questions: [
      {
        id: "1-19",
        content: "母親は泣いている子供を優しく___いた。",
        answers: ["抱", "持", "握", "包"],
        correctAnswer: 0,
        memo: [
          "抱: 抱く — ôm đứa trẻ đang khóc. (Đúng)",
          "持: 持つ — cầm, giữ (bằng tay).",
          "握: 握る — nắm chặt.",
          "包: 包む — bao bọc, gói.",
        ],
      },
    ],
  },
  {
    front: "怠",
    back: [
      "✨ おこたる・なまける — lười biếng, bỏ bê",
      "・Ví dụ: 勉強を怠る（べんきょうをおこたる）: bỏ bê việc học",
      "📌 怠る（おこたる）: sao nhãng, không làm đầy đủ; 怠ける（なまける）: lười biếng",
    ],
    more: [
      "🧩 On-yomi: タイ",
      "📝 Từ vựng:",
      "・怠慢（たいまん）: lơi lỏng, cẩu thả",
      "・怠惰（たいだ）: lười biếng",
      "・油断（ゆだん）: lơ là, mất cảnh giác",
    ],
    questions: [
      {
        id: "1-20",
        content: "毎日の練習を___ったため、試合で負けた。",
        answers: ["怠", "忘", "止", "休"],
        correctAnswer: 0,
        memo: [
          "怠: 怠る — bỏ bê luyện tập hằng ngày. (Đúng)",
          "忘: 忘れる — quên (vô ý, không có chủ ý).",
          "止: 止める — dừng lại (chủ ý).",
          "休: 休む — nghỉ ngơi (không hàm ý tiêu cực).",
        ],
      },
    ],
  },
  {
    front: "膨",
    back: [
      "✨ ふくらむ・ふくれる — phồng lên, nở ra",
      "・Ví dụ: 風船が膨らむ（ふうせんがふくらむ）: bong bóng phồng lên",
      "📌 膨らむ（ふくらむ）: phồng dần; 膨れる（ふくれる）: phồng lên (cũng dùng khi tức giận)",
    ],
    more: [
      "🧩 On-yomi: ボウ",
      "📝 Từ vựng:",
      "・膨張（ぼうちょう）: sự giãn nở, phình to",
      "・膨大（ぼうだい）: khổng lồ, đồ sộ",
    ],
    questions: [
      {
        id: "1-21",
        content: "パン生地が発酵して___んだ。",
        answers: ["膨ら", "広が", "伸び", "増え"],
        correctAnswer: 0,
        memo: [
          "膨ら: 膨らむ — bột mì nở phồng khi lên men. (Đúng)",
          "広が: 広がる — lan rộng ra (mặt phẳng).",
          "伸び: 伸びる — kéo dài, vươn dài.",
          "増え: 増える — tăng lên (số lượng).",
        ],
      },
    ],
  },
];
