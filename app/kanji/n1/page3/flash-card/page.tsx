import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "削",
    back: ["- Tước", "- Gọt, cắt, giảm bớt", "- On: サク", "- Kun: けず・る"],
    questions: [
      {
        id: "1-1",
        content: "「削」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["さく", "さつ", "せき", "しゃく"],
        correctAnswer: 0,
      },
      {
        id: "1-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「削減」",
        answers: ["さくげん", "さくへん", "さつげん", "せきげん"],
        correctAnswer: 0,
      },
      {
        id: "1-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サク」",
        answers: ["削", "昨", "策", "作"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "密",
    back: ["- Mật", "- Bí mật, kín đáo", "- On: ミツ"],
    questions: [
      {
        id: "2-1",
        content: "「密」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["みつ", "みち", "びつ", "みつう"],
        correctAnswer: 0,
      },
      {
        id: "2-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「秘密」",
        answers: ["ひみつ", "ひみち", "ひびつ", "ひみつう"],
        correctAnswer: 0,
      },
      {
        id: "2-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ミツ」",
        answers: ["密", "蜜", "必", "未"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "措",
    back: ["- Thố", "- Bố trí, đặt để", "- On: ソ"],
    questions: [
      {
        id: "3-1",
        content: "「措」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["そ", "さ", "しょ", "さく"],
        correctAnswer: 0,
      },
      {
        id: "3-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「措置」",
        answers: ["そち", "さち", "しょち", "そし"],
        correctAnswer: 0,
      },
      {
        id: "3-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソ」",
        answers: ["措", "祖", "粗", "組"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "志",
    back: ["- Chí", "- Ý chí, khát vọng", "- On: シ", "- Kun: こころざ・す"],
    questions: [
      {
        id: "4-1",
        content: "「志」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["し", "ち", "じ", "き"],
        correctAnswer: 0,
      },
      {
        id: "4-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「志望」",
        answers: ["しぼう", "しもう", "じぼう", "しほう"],
        correctAnswer: 0,
      },
      {
        id: "4-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「こころざす」",
        answers: ["志", "意", "思", "忠"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "載",
    back: ["- Tái", "- Chất lên, đăng tải", "- On: サイ", "- Kun: の・る"],
    questions: [
      {
        id: "5-1",
        content: "「載」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["さい", "ざい", "さいん", "ざつ"],
        correctAnswer: 0,
      },
      {
        id: "5-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「掲載」",
        answers: ["けいさい", "けいざい", "けいさいん", "けいざつ"],
        correctAnswer: 0,
      },
      {
        id: "5-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サイ」",
        answers: ["載", "再", "才", "材"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "陣",
    back: ["- Trận", "- Trận địa, đội hình", "- On: ジン"],
    questions: [
      {
        id: "6-1",
        content: "「陣」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["じん", "しん", "ちん", "にん"],
        correctAnswer: 0,
      },
      {
        id: "6-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「陣地」",
        answers: ["じんち", "しんち", "じんじ", "じんちい"],
        correctAnswer: 0,
      },
      {
        id: "6-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジン」",
        answers: ["陣", "陳", "陸", "隆"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "我",
    back: ["- Ngã", "- Bản thân, ta", "- On: ガ", "- Kun: われ、わ"],
    questions: [
      {
        id: "7-1",
        content: "「我」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["が", "か", "わ", "あ"],
        correctAnswer: 0,
      },
      {
        id: "7-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「我慢」",
        answers: ["がまん", "わまん", "かまん", "あまん"],
        correctAnswer: 0,
      },
      {
        id: "7-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「われ」",
        answers: ["我", "私", "彼", "自"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "為",
    back: ["- Vi", "- Làm, hành động", "- On: イ", "- Kun: ため"],
    questions: [
      {
        id: "8-1",
        content: "「為」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["い", "うぃ", "え", "あ"],
        correctAnswer: 0,
      },
      {
        id: "8-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「行為」",
        answers: ["こうい", "こうえ", "ぎょうい", "ぎょうため"],
        correctAnswer: 0,
      },
      {
        id: "8-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ため」",
        answers: ["為", "為", "作", "成"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "抑",
    back: ["- Ức", "- Kìm nén, kiềm chế", "- On: ヨク", "- Kun: おさ・える"],
    questions: [
      {
        id: "9-1",
        content: "「抑」の音読みとして最もよいものを１つ選びなさい.",
        answers: ["よく", "やく", "おく", "えき"],
        correctAnswer: 0,
      },
      {
        id: "9-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「抑制」",
        answers: ["よくせい", "やくせい", "よくせ", "えきせい"],
        correctAnswer: 0,
      },
      {
        id: "9-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヨク」",
        answers: ["抑", "欲", "浴", "翌"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "幕",
    back: ["- Mạc", "- Màn, rèm, hậu trường", "- On: マク"],
    questions: [
      {
        id: "10-1",
        content: "「幕」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["まく", "ぼう", "ばく", "もく"],
        correctAnswer: 0,
      },
      {
        id: "10-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「幕開け」",
        answers: ["まくあけ", "まくひらけ", "ばくあけ", "まっかけ"],
        correctAnswer: 0,
      },
      {
        id: "10-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「マク」",
        answers: ["幕", "漠", "膜", "慕"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "染",
    back: [
      "- Nhiễm",
      "- Nhiễm, nhuộm",
      "- On: セン",
      "- Kun: そ・める、し・みる",
    ],
    questions: [
      {
        id: "11-1",
        content: "「染」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["せん", "さい", "しん", "さん"],
        correctAnswer: 0,
      },
      {
        id: "11-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「汚染」",
        answers: ["おせん", "おぜん", "おせい", "おさん"],
        correctAnswer: 0,
      },
      {
        id: "11-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セン」",
        answers: ["染", "線", "戦", "宣"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "奈",
    back: ["- Nại", "- (tên riêng), nại hà", "- On: ナ"],
    questions: [
      {
        id: "12-1",
        content: "「奈」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["な", "ない", "だい", "ね"],
        correctAnswer: 0,
      },
      {
        id: "12-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「奈良」",
        answers: ["なら", "ないら", "だいら", "ねら"],
        correctAnswer: 0,
      },
      {
        id: "12-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ナ」",
        answers: ["奈", "那", "名", "内"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "傷",
    back: ["- Thương", "- Vết thương, tổn hại", "- On: ショウ", "- Kun: きず"],
    questions: [
      {
        id: "13-1",
        content: "「傷」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しょう", "そう", "じょう", "しょうう"],
        correctAnswer: 0,
      },
      {
        id: "13-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「負傷」",
        answers: ["ふしょう", "ふそう", "ぶしょう", "ふじょう"],
        correctAnswer: 0,
      },
      {
        id: "13-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「きず」",
        answers: ["傷", "病", "痕", "点"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "択",
    back: ["- Trạch", "- Lựa chọn", "- On: タク"],
    questions: [
      {
        id: "14-1",
        content: "「択」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["たく", "ちゃく", "てき", "たつ"],
        correctAnswer: 0,
      },
      {
        id: "14-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「選択」",
        answers: ["せんたく", "せんちゃく", "せんてき", "せんだく"],
        correctAnswer: 0,
      },
      {
        id: "14-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「タク」",
        answers: ["択", "宅", "度", "沢"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "秀",
    back: ["- Tú", "- Ưu tú, xuất sắc", "- On: シュウ", "- Kun: ひい・でる"],
    questions: [
      {
        id: "15-1",
        content: "「秀」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しゅう", "しょう", "しゅ", "じゅ"],
        correctAnswer: 0,
      },
      {
        id: "15-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「優秀」",
        answers: ["ゆうしゅう", "ゆうしょう", "ゆうしゅ", "ゆしゅう"],
        correctAnswer: 0,
      },
      {
        id: "15-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ひいでる」",
        answers: ["秀", "優", "美", "良"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "徴",
    back: [
      "- Trưng",
      "- Triệu tập, biểu hiện",
      "- On: チョウ",
      "- Kun: しるし",
    ],
    questions: [
      {
        id: "16-1",
        content: "「徴」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ちょう", "しょう", "ちゅう", "じょう"],
        correctAnswer: 0,
      },
      {
        id: "16-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「特徴」",
        answers: ["とくちょう", "とくしょう", "とくちゅう", "とくじょう"],
        correctAnswer: 0,
      },
      {
        id: "16-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「チョウ」",
        answers: ["徴", "張", "頂", "超"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "弾",
    back: ["- Đàn", "- Đạn, bắn, đánh đàn", "- On: ダン", "- Kun: たま"],
    questions: [
      {
        id: "17-1",
        content: "「弾」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["だん", "たん", "せん", "ぜん"],
        correctAnswer: 0,
      },
      {
        id: "17-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「弾丸」",
        answers: ["だんがん", "たんがん", "だんまる", "だんかん"],
        correctAnswer: 0,
      },
      {
        id: "17-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「たま」",
        answers: ["弾", "玉", "球", "王"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "償",
    back: ["- Thường", "- Đền bù", "- On: ショウ", "- Kun: つぐな・う"],
    questions: [
      {
        id: "18-1",
        content: "「償」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しょう", "じょう", "そう", "しょうう"],
        correctAnswer: 0,
      },
      {
        id: "18-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「補償」",
        answers: ["ほしょう", "ほじょう", "ほそう", "ほしょうう"],
        correctAnswer: 0,
      },
      {
        id: "18-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「つぐなう」",
        answers: ["償", "賞", "儀", "債"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "功",
    back: ["- Công", "- Thành công, công lao", "- On: コウ"],
    questions: [
      {
        id: "19-1",
        content: "「功」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["こう", "ごう", "こ", "か"],
        correctAnswer: 0,
      },
      {
        id: "19-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「成功」",
        answers: ["せいこう", "せいごう", "せいこ", "せいか"],
        correctAnswer: 0,
      },
      {
        id: "19-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["功", "工", "公", "紅"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "拠",
    back: ["- Cứ", "- Căn cứ, dựa vào", "- On: キョ"],
    questions: [
      {
        id: "20-1",
        content: "「拠」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["きょ", "こ", "きょく", "きゅ"],
        correctAnswer: 0,
      },
      {
        id: "20-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「根拠」",
        answers: ["こんきょ", "こんこ", "こんきょく", "こんきゅ"],
        correctAnswer: 0,
      },
      {
        id: "20-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キョ」",
        answers: ["拠", "居", "許", "巨"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "秘",
    back: ["- Bí", "- Bí mật", "- On: ヒ", "- Kun: ひ・める"],
    questions: [
      {
        id: "21-1",
        content: "「秘」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ひ", "び", "へい", "ひつ"],
        correctAnswer: 0,
      },
      {
        id: "21-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「秘密」",
        answers: ["ひみつ", "ひみち", "ひびつ", "ひみっ"],
        correctAnswer: 0,
      },
      {
        id: "21-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ひめる」",
        answers: ["秘", "閉", "隠", "包"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "拒",
    back: ["- Cự", "- Từ chối, kháng cự", "- On: キョ", "- Kun: こば・む"],
    questions: [
      {
        id: "22-1",
        content: "「拒」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["きょ", "こ", "きゅ", "きょく"],
        correctAnswer: 0,
      },
      {
        id: "22-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「拒否」",
        answers: ["きょひ", "こひ", "きょひい", "きゅひ"],
        correctAnswer: 0,
      },
      {
        id: "22-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「こばむ」",
        answers: ["拒", "去", "居", "拒"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "刑",
    back: ["- Hình", "- Hình phạt", "- On: ケイ"],
    questions: [
      {
        id: "23-1",
        content: "「刑」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["けい", "きょう", "けん", "けつ"],
        correctAnswer: 0,
      },
      {
        id: "23-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「刑罰」",
        answers: ["けいばつ", "きょうばつ", "けんばつ", "けつばつ"],
        correctAnswer: 0,
      },
      {
        id: "23-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケイ」",
        answers: ["刑", "形", "系", "計"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "塚",
    back: ["- Trủng", "- Gò đất, mộ", "- On: チョウ", "- Kun: つか"],
    questions: [
      {
        id: "24-1",
        content: "「塚」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["つか", "ちょう", "しゅう", "そう"],
        correctAnswer: 1,
      },
      {
        id: "24-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「古塚」",
        answers: ["ふるづか", "こづか", "こつか", "ふるつか"],
        correctAnswer: 0,
      },
      {
        id: "24-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「つか」",
        answers: ["塚", "堤", "塔", "墓"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "致",
    back: ["- Trí", "- Đưa đến, đạt tới", "- On: チ", "- Kun: いた・す"],
    questions: [
      {
        id: "25-1",
        content: "「致」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ち", "し", "じ", "たい"],
        correctAnswer: 0,
      },
      {
        id: "25-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「一致」",
        answers: ["いっち", "いっし", "いちじ", "いったい"],
        correctAnswer: 0,
      },
      {
        id: "25-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「いたす」",
        answers: ["致", "至", "待", "持"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "繰",
    back: ["- Sào", "- Quay, kéo sợi, lặp lại", "- On: ソウ", "- Kun: く・る"],
    questions: [
      {
        id: "26-1",
        content: "「繰」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["そう", "さく", "しゅう", "しょう"],
        correctAnswer: 0,
      },
      {
        id: "26-2",
        content:
          "下線部の読み方として正しいものを１つ選びなさい。　「繰り返す」",
        answers: ["くりかえす", "くるかえす", "くりかえる", "くるかえる"],
        correctAnswer: 0,
      },
      {
        id: "26-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソウ」",
        answers: ["繰", "操", "総", "草"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "尾",
    back: ["- Vĩ", "- Cái đuôi", "- On: ビ", "- Kun: お"],
    questions: [
      {
        id: "27-1",
        content: "「尾」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["び", "み", "ひ", "お"],
        correctAnswer: 0,
      },
      {
        id: "27-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「尾行」",
        answers: ["びこう", "みこう", "ひこう", "おこう"],
        correctAnswer: 0,
      },
      {
        id: "27-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「お」",
        answers: ["尾", "尾", "毛", "端"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "描",
    back: ["- Miêu", "- Miêu tả, vẽ", "- On: ビョウ", "- Kun: えが・く"],
    questions: [
      {
        id: "28-1",
        content: "「描」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["びょう", "みょう", "ひょう", "びょうう"],
        correctAnswer: 0,
      },
      {
        id: "28-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「描写」",
        answers: ["びょうしゃ", "みょうしゃ", "ひょうしゃ", "びょうじゃ"],
        correctAnswer: 0,
      },
      {
        id: "28-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「えがく」",
        answers: ["描", "画", "絵", "書"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "鈴",
    back: ["- Linh", "- Chuông", "- On: レイ／リン", "- Kun: すず"],
    questions: [
      {
        id: "29-1",
        content: "「鈴」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["れい", "りん", "ろん", "らい"],
        correctAnswer: 1,
      },
      {
        id: "29-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「風鈴」",
        answers: ["ふうりん", "ふうれい", "ふりん", "ふうろん"],
        correctAnswer: 0,
      },
      {
        id: "29-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「すず」",
        answers: ["鈴", "鐘", "金", "音"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "盤",
    back: ["- Bàn", "- Cái đĩa, bàn cờ", "- On: バン"],
    questions: [
      {
        id: "30-1",
        content: "「盤」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ばん", "はん", "まん", "ぼん"],
        correctAnswer: 0,
      },
      {
        id: "30-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「地盤」",
        answers: ["じばん", "ちばん", "じはん", "ちまん"],
        correctAnswer: 0,
      },
      {
        id: "30-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「バン」",
        answers: ["盤", "板", "番", "般"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "項",
    back: ["- Hạng", "- Mục, điều khoản", "- On: コウ"],
    questions: [
      {
        id: "31-1",
        content: "「項」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["こう", "ごう", "かん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "31-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「項目」",
        answers: ["こうもく", "ごうもく", "かんもく", "こんもく"],
        correctAnswer: 0,
      },
      {
        id: "31-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["項", "港", "校", "効"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "喪",
    back: ["- Tang", "- Tang lễ, mất mát", "- On: ソウ"],
    questions: [
      {
        id: "32-1",
        content: "「喪」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["そう", "しょう", "ぞう", "そうう"],
        correctAnswer: 0,
      },
      {
        id: "32-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「喪失」",
        answers: ["そうしつ", "そうしつう", "しょうしつ", "ぞうしつ"],
        correctAnswer: 0,
      },
      {
        id: "32-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソウ」",
        answers: ["喪", "葬", "掃", "霜"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "伴",
    back: ["- Bạn", "- Đồng hành, cùng", "- On: ハン", "- Kun: ともな・う"],
    questions: [
      {
        id: "33-1",
        content: "「伴」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["はん", "ばん", "ほん", "ひん"],
        correctAnswer: 0,
      },
      {
        id: "33-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「同伴」",
        answers: ["どうはん", "どうばん", "どうほん", "どうひん"],
        correctAnswer: 0,
      },
      {
        id: "33-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ともなう」",
        answers: ["伴", "供", "共", "連"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "養",
    back: ["- Dưỡng", "- Nuôi dưỡng", "- On: ヨウ", "- Kun: やしな・う"],
    questions: [
      {
        id: "34-1",
        content: "「養」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["よう", "ゆう", "よ", "ようう"],
        correctAnswer: 0,
      },
      {
        id: "34-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「栄養」",
        answers: ["えいよう", "えいゆう", "えいよ", "えいようう"],
        correctAnswer: 0,
      },
      {
        id: "34-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「やしなう」",
        answers: ["養", "育", "飼", "植"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "懸",
    back: ["- Huyền", "- Treo, lo lắng", "- On: ケン／ケ", "- Kun: か・ける"],
    questions: [
      {
        id: "35-1",
        content: "「懸」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["けん", "げん", "けい", "け"],
        correctAnswer: 0,
      },
      {
        id: "35-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「懸念」",
        answers: ["けねん", "けんねん", "げねん", "げんねん"],
        correctAnswer: 0,
      },
      {
        id: "35-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["懸", "険", "検", "券"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "街",
    back: ["- Nhai", "- Phố, đường phố", "- On: ガイ", "- Kun: まち"],
    questions: [
      {
        id: "36-1",
        content: "「街」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["がい", "かい", "がき", "かいん"],
        correctAnswer: 0,
      },
      {
        id: "36-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「街角」",
        answers: ["まちかど", "まちすみ", "がいかど", "がいすみ"],
        correctAnswer: 0,
      },
      {
        id: "36-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「まち」",
        answers: ["街", "町", "市", "村"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "契",
    back: ["- Khế", "- Hợp đồng, giao ước", "- On: ケイ", "- Kun: ちぎ・る"],
    questions: [
      {
        id: "37-1",
        content: "「契」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["けい", "けつ", "けん", "げい"],
        correctAnswer: 0,
      },
      {
        id: "37-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「契約」",
        answers: ["けいやく", "けつやく", "けんやく", "げいやく"],
        correctAnswer: 0,
      },
      {
        id: "37-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ちぎる」",
        answers: ["契", "結", "切", "約"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "掲",
    back: ["- Yết", "- Treo lên, đăng lên", "- On: ケイ", "- Kun: かか・げる"],
    questions: [
      {
        id: "38-1",
        content: "「掲」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["けい", "けつ", "けん", "げい"],
        correctAnswer: 0,
      },
      {
        id: "38-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「掲示」",
        answers: ["けいじ", "けつじ", "けんじ", "げいじ"],
        correctAnswer: 0,
      },
      {
        id: "38-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「かかげる」",
        answers: ["掲", "掲", "掲", "掲"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "躍",
    back: ["- Dược", "- Nhảy, nhảy vọt", "- On: ヤク", "- Kun: おど・る"],
    questions: [
      {
        id: "39-1",
        content: "「躍」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["やく", "えき", "やき", "やくう"],
        correctAnswer: 0,
      },
      {
        id: "39-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「活躍」",
        answers: ["かつやく", "かつえき", "かつやき", "かつやくう"],
        correctAnswer: 0,
      },
      {
        id: "39-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「おどる」",
        answers: ["躍", "踊", "跳", "走"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "棄",
    back: ["- Khí", "- Bỏ đi, vứt bỏ", "- On: キ"],
    questions: [
      {
        id: "40-1",
        content: "「棄」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["き", "ぎ", "け", "けい"],
        correctAnswer: 0,
      },
      {
        id: "40-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「放棄」",
        answers: ["ほうき", "ほうぎ", "ほうけ", "ほうけい"],
        correctAnswer: 0,
      },
      {
        id: "40-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["棄", "奇", "寄", "基"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "邸",
    back: ["- Để", "- Nhà riêng", "- On: テイ"],
    questions: [
      {
        id: "41-1",
        content: "「邸」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["てい", "だい", "ち", "てつ"],
        correctAnswer: 0,
      },
      {
        id: "41-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「邸宅」",
        answers: ["ていたく", "だいたく", "ちたく", "てつたく"],
        correctAnswer: 0,
      },
      {
        id: "41-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テイ」",
        answers: ["邸", "底", "帝", "庭"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "縮",
    back: ["- Súc", "- Co lại, rút ngắn", "- On: シュク", "- Kun: ちぢ・む"],
    questions: [
      {
        id: "42-1",
        content: "「縮」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しゅく", "しょく", "しゅつ", "しゅう"],
        correctAnswer: 0,
      },
      {
        id: "42-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「縮小」",
        answers: [
          "しゅくしょう",
          "しょくしょう",
          "しゅつしょう",
          "しゅうしょう",
        ],
        correctAnswer: 0,
      },
      {
        id: "42-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ちぢむ」",
        answers: ["縮", "短", "減", "細"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "還",
    back: ["- Hoàn", "- Trả lại, trở về", "- On: カン"],
    questions: [
      {
        id: "43-1",
        content: "「還」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["かん", "げん", "けん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "43-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「返還」",
        answers: ["へんかん", "へんげん", "へんけん", "へんこん"],
        correctAnswer: 0,
      },
      {
        id: "43-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カン」",
        answers: ["還", "環", "官", "完"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "属",
    back: ["- Thuộc", "- Thuộc về", "- On: ゾク"],
    questions: [
      {
        id: "44-1",
        content: "「属」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ぞく", "しょく", "そく", "ぞ"],
        correctAnswer: 0,
      },
      {
        id: "44-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「所属」",
        answers: ["しょぞく", "しょそく", "しょしょく", "ぞくしょ"],
        correctAnswer: 0,
      },
      {
        id: "44-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゾク」",
        answers: ["属", "続", "族", "賊"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "慮",
    back: ["- Lự", "- Suy nghĩ, cân nhắc", "- On: リョ"],
    questions: [
      {
        id: "45-1",
        content: "「慮」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["りょ", "りゅ", "りょう", "ろ"],
        correctAnswer: 0,
      },
      {
        id: "45-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「考慮」",
        answers: ["こうりょ", "こうりゅ", "こうりょう", "こりょ"],
        correctAnswer: 0,
      },
      {
        id: "45-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「リョ」",
        answers: ["慮", "旅", "料", "了"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "枠",
    back: ["- Khung", "- Khung, giới hạn", "- Kun: わく"],
    questions: [
      {
        id: "46-1",
        content: "「枠」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["わく", "わき", "まど", "かど"],
        correctAnswer: 0,
      },
      {
        id: "46-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「枠組み」",
        answers: ["わくぐみ", "まどぐみ", "わきぐみ", "かどぐみ"],
        correctAnswer: 0,
      },
      {
        id: "46-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「わく」",
        answers: ["枠", "額", "窓", "囲"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "恵",
    back: ["- Huệ", "- Ân huệ, phúc lành", "- On: ケイ", "- Kun: めぐ・む"],
    questions: [
      {
        id: "47-1",
        content: "「恵」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["けい", "えい", "き", "け"],
        correctAnswer: 0,
      },
      {
        id: "47-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「恩恵」",
        answers: ["おんけい", "おんえい", "おんき", "おんけ"],
        correctAnswer: 0,
      },
      {
        id: "47-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「めぐむ」",
        answers: ["恵", "愛", "配", "授"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "露",
    back: ["- Lộ", "- Sương, lộ ra", "- On: ロ", "- Kun: つゆ"],
    questions: [
      {
        id: "48-1",
        content: "「露」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ろ", "ら", "ろう", "りょ"],
        correctAnswer: 0,
      },
      {
        id: "48-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「露出」",
        answers: ["ろしゅつ", "ろしゅう", "ろうしゅつ", "りょしゅつ"],
        correctAnswer: 0,
      },
      {
        id: "48-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「つゆ」",
        answers: ["露", "雨", "霧", "雪"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "沖",
    back: ["- Trùng", "- Khơi, biển khơi", "- On: チュウ", "- Kun: おき"],
    questions: [
      {
        id: "49-1",
        content: "「沖」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["おき", "うみ", "なみ", "そと"],
        correctAnswer: 0,
      },
      {
        id: "49-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「沖縄」",
        answers: ["おきなわ", "ちゅうなわ", "おきかわ", "おきなは"],
        correctAnswer: 0,
      },
      {
        id: "49-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「チュウ」",
        answers: ["沖", "中", "忠", "注"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "緩",
    back: ["- Hoãn", "- Chậm, lỏng, nới ra", "- On: カン", "- Kun: ゆる・い"],
    questions: [
      {
        id: "50-1",
        content: "「緩」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["かん", "げん", "けん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "50-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「緩和」",
        answers: ["かんわ", "げんわ", "けんわ", "こんわ"],
        correctAnswer: 0,
      },
      {
        id: "50-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゆるい」",
        answers: ["緩", "温", "遅", "弱"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "節",
    back: ["- Tiết", "- Tiết kiệm, tiết đoạn", "- On: セツ", "- Kun: ふし"],
    questions: [
      {
        id: "51-1",
        content: "「節」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["せつ", "さい", "しつ", "せち"],
        correctAnswer: 0,
      },
      {
        id: "51-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「節約」",
        answers: ["せつやく", "せちやく", "さいやく", "しつやく"],
        correctAnswer: 0,
      },
      {
        id: "51-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ふし」",
        answers: ["節", "折", "曲", "枝"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "需",
    back: ["- Nhu", "- Nhu cầu", "- On: ジュ"],
    questions: [
      {
        id: "52-1",
        content: "「需」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["じゅ", "しゅ", "じゅう", "にゅ"],
        correctAnswer: 0,
      },
      {
        id: "52-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「需要」",
        answers: ["じゅよう", "しゅよう", "じゅうよう", "にゅよう"],
        correctAnswer: 0,
      },
      {
        id: "52-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジュ」",
        answers: ["需", "受", "儒", "樹"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "射",
    back: ["- Xạ", "- Bắn, chiếu", "- On: シャ", "- Kun: い・る"],
    questions: [
      {
        id: "53-1",
        content: "「射」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しゃ", "じゃ", "さ", "ざ"],
        correctAnswer: 0,
      },
      {
        id: "53-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「発射」",
        answers: ["はっしゃ", "はつしゃ", "はっじゃ", "はつじゃ"],
        correctAnswer: 0,
      },
      {
        id: "53-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「いる」",
        answers: ["射", "写", "謝", "社"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "購",
    back: ["- Cấu", "- Mua sắm", "- On: コウ"],
    questions: [
      {
        id: "54-1",
        content: "「購」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["こう", "ごう", "こ", "か"],
        correctAnswer: 0,
      },
      {
        id: "54-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「購入」",
        answers: ["こうにゅう", "ごうにゅう", "こにゅう", "かにゅう"],
        correctAnswer: 0,
      },
      {
        id: "54-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["購", "構", "工", "校"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "揮",
    back: ["- Huy", "- Vung, chỉ huy", "- On: キ"],
    questions: [
      {
        id: "55-1",
        content: "「揮」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["き", "ぎ", "け", "けい"],
        correctAnswer: 0,
      },
      {
        id: "55-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「指揮」",
        answers: ["しき", "しぎ", "しけ", "しけい"],
        correctAnswer: 0,
      },
      {
        id: "55-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["揮", "揆", "騎", "基"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "充",
    back: ["- Sung", "- Đầy đủ, sung túc", "- On: ジュウ"],
    questions: [
      {
        id: "56-1",
        content: "「充」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["じゅう", "しゅう", "じゅ", "にゅう"],
        correctAnswer: 0,
      },
      {
        id: "56-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「充実」",
        answers: ["じゅうじつ", "しゅうじつ", "じゅじつ", "にゅうじつ"],
        correctAnswer: 0,
      },
      {
        id: "56-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジュウ」",
        answers: ["充", "重", "住", "従"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "貢",
    back: ["- Cống", "- Cống hiến, nộp", "- On: コウ"],
    questions: [
      {
        id: "57-1",
        content: "「貢」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["こう", "ごう", "く", "か"],
        correctAnswer: 0,
      },
      {
        id: "57-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「貢献」",
        answers: ["こうけん", "ごうけん", "くけん", "かけん"],
        correctAnswer: 0,
      },
      {
        id: "57-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["貢", "功", "工", "紅"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "鹿",
    back: ["- Lộc", "- Con nai, hươu", "- On: ロク", "- Kun: しか"],
    questions: [
      {
        id: "58-1",
        content: "「鹿」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["しか", "しし", "うま", "うし"],
        correctAnswer: 0,
      },
      {
        id: "58-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「鹿児島」",
        answers: ["かごしま", "しかじま", "ろくじま", "かごじま"],
        correctAnswer: 0,
      },
      {
        id: "58-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ロク」",
        answers: ["鹿", "録", "麓", "緑"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "却",
    back: ["- Khước", "- Khước từ, từ chối", "- On: キャク"],
    questions: [
      {
        id: "59-1",
        content: "「却」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["きゃく", "きゃくう", "きゃ", "きゃつ"],
        correctAnswer: 0,
      },
      {
        id: "59-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「却下」",
        answers: ["きゃっか", "きゃくか", "きゃか", "きゃっかん"],
        correctAnswer: 0,
      },
      {
        id: "59-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キャク」",
        answers: ["却", "客", "脚", "逆"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "端",
    back: ["- Đoan", "- Đầu, mép, đứng đắn", "- On: タン", "- Kun: はし"],
    questions: [
      {
        id: "60-1",
        content: "「端」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["たん", "だん", "はん", "なん"],
        correctAnswer: 0,
      },
      {
        id: "60-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「端末」",
        answers: ["たんまつ", "だんまつ", "はしまつ", "なんまつ"],
        correctAnswer: 0,
      },
      {
        id: "60-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「はし」",
        answers: ["端", "橋", "箸", "柱"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "賃",
    back: ["- Nhẫm", "- Tiền thuê, tiền công", "- On: チン"],
    questions: [
      {
        id: "61-1",
        content: "「賃」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ちん", "しん", "じん", "にん"],
        correctAnswer: 0,
      },
      {
        id: "61-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「家賃」",
        answers: ["やちん", "いえちん", "かちん", "やじん"],
        correctAnswer: 0,
      },
      {
        id: "61-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「チン」",
        answers: ["賃", "珍", "陳", "鎮"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "獲",
    back: ["- Hoạch", "- Thu được, săn bắt", "- On: カク"],
    questions: [
      {
        id: "62-1",
        content: "「獲」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["かく", "がく", "か", "かつ"],
        correctAnswer: 0,
      },
      {
        id: "62-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「獲得」",
        answers: ["かくとく", "がくとく", "かとく", "かつとく"],
        correctAnswer: 0,
      },
      {
        id: "62-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カク」",
        answers: ["獲", "額", "格", "覚"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "郡",
    back: ["- Quận", "- Quận, huyện", "- On: グン"],
    questions: [
      {
        id: "63-1",
        content: "「郡」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ぐん", "くん", "ぐ", "ぐう"],
        correctAnswer: 0,
      },
      {
        id: "63-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「郡部」",
        answers: ["ぐんぶ", "ぐんへん", "くんぶ", "ぐぶ"],
        correctAnswer: 0,
      },
      {
        id: "63-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「グン」",
        answers: ["郡", "群", "軍", "君"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "併",
    back: ["- Tinh", "- Hợp lại, gộp", "- On: ヘイ"],
    questions: [
      {
        id: "64-1",
        content: "「併」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["へい", "へん", "べい", "べん"],
        correctAnswer: 0,
      },
      {
        id: "64-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「合併」",
        answers: ["がっぺい", "ごうへい", "がっぺん", "ごうべい"],
        correctAnswer: 0,
      },
      {
        id: "64-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヘイ」",
        answers: ["併", "並", "閉", "塀"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "徹",
    back: ["- Triệt", "- Triệt để", "- On: テツ"],
    questions: [
      {
        id: "65-1",
        content: "「徹」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["てつ", "てち", "てつう", "てい"],
        correctAnswer: 0,
      },
      {
        id: "65-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「徹底」",
        answers: ["てってい", "てつてい", "てってつ", "ていってい"],
        correctAnswer: 0,
      },
      {
        id: "65-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テツ」",
        answers: ["徹", "鉄", "哲", "撤"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "貴",
    back: ["- Quý", "- Cao quý", "- On: キ", "- Kun: たっと・い"],
    questions: [
      {
        id: "66-1",
        content: "「貴」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["き", "ぎ", "け", "けい"],
        correctAnswer: 0,
      },
      {
        id: "66-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「高貴」",
        answers: ["こうき", "こうぎ", "こうけ", "こうけい"],
        correctAnswer: 0,
      },
      {
        id: "66-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「たっとい」",
        answers: ["貴", "尊", "貞", "喜"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "衝",
    back: ["- Xung", "- Xung đột, va chạm", "- On: ショウ"],
    questions: [
      {
        id: "67-1",
        content: "「衝」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しょう", "じょう", "しゅう", "しょ"],
        correctAnswer: 0,
      },
      {
        id: "67-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「衝突」",
        answers: ["しょうとつ", "しゅうとつ", "じょうとつ", "しょとつ"],
        correctAnswer: 0,
      },
      {
        id: "67-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショウ」",
        answers: ["衝", "章", "障", "賞"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "焦",
    back: ["- Tiêu", "- Cháy, sốt ruột", "- On: ショウ", "- Kun: こ・げる"],
    questions: [
      {
        id: "68-1",
        content: "「焦」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しょう", "じょう", "しゅう", "しょ"],
        correctAnswer: 0,
      },
      {
        id: "68-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「焦点」",
        answers: ["しょうてん", "じょうてん", "しゅうてん", "しょてん"],
        correctAnswer: 0,
      },
      {
        id: "68-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「こげる」",
        answers: ["焦", "焼", "燃", "滅"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "奪",
    back: ["- Đoạt", "- Cướp, giành", "- On: ダツ", "- Kun: うば・う"],
    questions: [
      {
        id: "69-1",
        content: "「奪」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["だつ", "だち", "たつ", "たち"],
        correctAnswer: 0,
      },
      {
        id: "69-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「奪回」",
        answers: ["だっかい", "だつかい", "たっかい", "たつかい"],
        correctAnswer: 0,
      },
      {
        id: "69-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「うばう」",
        answers: ["奪", "盗", "抜", "取"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "災",
    back: ["- Tai", "- Tai họa", "- On: サイ"],
    questions: [
      {
        id: "70-1",
        content: "「災」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["さい", "ざい", "し", "しゅ"],
        correctAnswer: 0,
      },
      {
        id: "70-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「災害」",
        answers: ["さいがい", "ざいがい", "しがい", "しゅがい"],
        correctAnswer: 0,
      },
      {
        id: "70-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サイ」",
        answers: ["災", "菜", "材", "剤"],
        correctAnswer: 0,
      },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Page 3
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
