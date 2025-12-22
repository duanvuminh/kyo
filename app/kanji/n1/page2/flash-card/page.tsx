import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "系",
    back: ["- Hệ", "- Hệ thống, dòng dõi", "- On: ケイ"],
    questions: [
      {
        id: "系-1",
        content: "Chọn âm ON đúng của 「系」.",
        answers: ["ケイ", "キ", "ゲイ", "カイ"],
        correctAnswer: 0,
      },
      {
        id: "系-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「家系」",
        answers: ["かけい", "いえけい", "かけ", "かいけい"],
        correctAnswer: 0,
      },
      {
        id: "系-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケイ」",
        answers: ["系", "料", "村", "米"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "批",
    back: ["- Phê", "- Phê bình, phê duyệt", "- On: ヒ"],
    questions: [
      {
        id: "批-1",
        content: "Chọn âm ON đúng của 「批」.",
        answers: ["ヒ", "ビ", "ハ", "ヘイ"],
        correctAnswer: 0,
      },
      {
        id: "批-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「批判」",
        answers: ["ひ", "ひはん", "ひゃ", "ひん"],
        correctAnswer: 0,
      },
      {
        id: "批-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヒ」",
        answers: ["批", "皮", "比", "非"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "郎",
    back: ["- Lang", "- Chàng trai, người đàn ông", "- On: ロウ"],
    questions: [
      {
        id: "郎-1",
        content: "Chọn âm ON đúng của 「郎」.",
        answers: ["ロウ", "リョウ", "ロ", "ラン"],
        correctAnswer: 0,
      },
      {
        id: "郎-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「新郎」",
        answers: ["しんろう", "しんりょう", "しんろ", "しんらん"],
        correctAnswer: 0,
      },
      {
        id: "郎-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ロウ」",
        answers: ["郎", "良", "路", "労"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "健",
    back: ["- Kiện", "- Khỏe mạnh", "- On: ケン", "- Kun: すこ・やか"],
    questions: [
      {
        id: "健-1",
        content: "Chọn âm ON đúng của 「健」.",
        answers: ["ケン", "コン", "カン", "ケイ"],
        correctAnswer: 0,
      },
      {
        id: "健-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「健康」",
        answers: ["けん", "こん", "げん", "けい"],
        correctAnswer: 0,
      },
      {
        id: "健-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["健", "建", "験", "券"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "盟",
    back: ["- Minh", "- Liên minh, kết minh", "- On: メイ"],
    questions: [
      {
        id: "盟-1",
        content: "Chọn âm ON đúng của 「盟」.",
        answers: ["メイ", "ミョウ", "モウ", "メン"],
        correctAnswer: 0,
      },
      {
        id: "盟-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「連盟」",
        answers: ["めい", "れんめい", "め", "みょう"],
        correctAnswer: 0,
      },
      {
        id: "盟-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「メイ」",
        answers: ["盟", "明", "名", "命"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "従",
    back: [
      "- Tùng",
      "- Theo, phục tùng",
      "- On: ジュウ",
      "- Kun: したが・う、したが・える",
    ],
    questions: [
      {
        id: "従-1",
        content: "Chọn âm ON đúng của 「従」.",
        answers: ["ジュウ", "ショウ", "ジョウ", "シュウ"],
        correctAnswer: 0,
      },
      {
        id: "従-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「従業員」",
        answers: [
          "じゅうぎょういん",
          "しょうぎょういん",
          "じょうぎょういん",
          "しゅうぎょういん",
        ],
        correctAnswer: 0,
      },
      {
        id: "従-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジュウ」",
        answers: ["従", "住", "重", "十"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "修",
    back: [
      "- Tu",
      "- Sửa, học, tu hành",
      "- On: シュウ・シュ",
      "- Kun: おさ・める、おさ・まる",
    ],
    questions: [
      {
        id: "修-1",
        content: "Chọn âm ON đúng của 「修」.",
        answers: ["シュウ", "シュ", "ショウ", "シュン"],
        correctAnswer: 0,
      },
      {
        id: "修-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「修理」",
        answers: ["しゅうり", "しゅり", "しゅりょう", "しゅうりょう"],
        correctAnswer: 0,
      },
      {
        id: "修-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シュウ」",
        answers: ["修", "週", "州", "集"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "隊",
    back: ["- Đội", "- Đội nhóm, quân đội", "- On: タイ"],
    questions: [
      {
        id: "隊-1",
        content: "Chọn âm ON đúng của 「隊」.",
        answers: ["タイ", "ダイ", "テイ", "タツ"],
        correctAnswer: 0,
      },
      {
        id: "隊-2",
        content: "下線部の読み方として正しいものを１つ選びなさい.　「部隊」",
        answers: ["ぶたい", "ぶだい", "へいたい", "ぶてい"],
        correctAnswer: 0,
      },
      {
        id: "隊-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「タイ」",
        answers: ["隊", "体", "台", "太"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "織",
    back: ["- Chức", "- Dệt, tổ chức", "- On: ショク・シキ", "- Kun: お・る"],
    questions: [
      {
        id: "織-1",
        content: "Chọn âm ON đúng của 「織」.",
        answers: ["ショク", "シキ", "ショウ", "ショ"],
        correctAnswer: 0,
      },
      {
        id: "織-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「織物」",
        answers: ["おりもの", "しきもの", "そしき", "しょくもの"],
        correctAnswer: 0,
      },
      {
        id: "織-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショク」",
        answers: ["織", "食", "職", "色"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "拡",
    back: ["- Khuếch", "- Mở rộng", "- On: カク"],
    questions: [
      {
        id: "拡-1",
        content: "Chọn âm ON đúng của 「拡」.",
        answers: ["カク", "ガク", "コウ", "カツ"],
        correctAnswer: 0,
      },
      {
        id: "拡-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「拡大」",
        answers: ["かくだい", "がくだい", "こうだい", "かくたい"],
        correctAnswer: 0,
      },
      {
        id: "拡-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カク」",
        answers: ["拡", "各", "覚", "角"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "故",
    back: ["- Cố", "- Cũ, nguyên nhân", "- On: コ", "- Kun: ゆえ"],
    questions: [
      {
        id: "故-1",
        content: "Chọn âm ON đúng của 「故」.",
        answers: ["コ", "ゴ", "キ", "カ"],
        correctAnswer: 0,
      },
      {
        id: "故-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「事故」",
        answers: ["じこ", "じこく", "しこ", "じご"],
        correctAnswer: 0,
      },
      {
        id: "故-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コ」",
        answers: ["故", "古", "個", "子"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "振",
    back: [
      "- Chấn",
      "- Rung, chấn hưng",
      "- On: シン",
      "- Kun: ふ・る、ふ・れる、ふ・り",
    ],
    questions: [
      {
        id: "振-1",
        content: "Chọn âm ON đúng của 「振」.",
        answers: ["シン", "ジン", "シ", "セン"],
        correctAnswer: 0,
      },
      {
        id: "振-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「振動」",
        answers: ["しんどう", "じんどう", "しんとう", "しんど"],
        correctAnswer: 0,
      },
      {
        id: "振-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シン」",
        answers: ["振", "震", "新", "深"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "弁",
    back: ["- Biện", "- Biện luận, hùng biện", "- On: ベン"],
    questions: [
      {
        id: "弁-1",
        content: "Chọn âm ON đúng của 「弁」.",
        answers: ["ベン", "ヘン", "ハン", "ホン"],
        correctAnswer: 0,
      },
      {
        id: "弁-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「弁護士」",
        answers: ["べんごし", "へんごし", "はんごし", "ほんごし"],
        correctAnswer: 0,
      },
      {
        id: "弁-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ベン」",
        answers: ["弁", "勉", "便", "辺"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "就",
    back: [
      "- Tựu",
      "- Bắt đầu làm, đạt được",
      "- On: シュウ・ジュ",
      "- Kun: つ・く、つ・ける",
    ],
    questions: [
      {
        id: "就-1",
        content: "Chọn âm ON đúng của 「就」.",
        answers: ["シュウ", "ジュ", "ショウ", "ジュウ"],
        correctAnswer: 0,
      },
      {
        id: "就-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「就職」",
        answers: ["しゅうしょく", "じゅしょく", "しゅしょく", "しゅうしょ"],
        correctAnswer: 0,
      },
      {
        id: "就-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シュウ」",
        answers: ["就", "週", "州", "集"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "異",
    back: ["- Dị", "- Khác biệt", "- On: イ", "- Kun: こと・なる、こと"],
    questions: [
      {
        id: "異-1",
        content: "Chọn âm ON đúng của 「異」.",
        answers: ["イ", "エイ", "ギ", "キ"],
        correctAnswer: 0,
      },
      {
        id: "異-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「異常」",
        answers: ["いじょう", "いじつ", "えじょう", "いじょ"],
        correctAnswer: 0,
      },
      {
        id: "異-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「イ」",
        answers: ["異", "医", "意", "以"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "献",
    back: [
      "- Hiến",
      "- Dâng hiến, cống hiến",
      "- On: ケン",
      "- Kun: ささ・げる",
    ],
    questions: [
      {
        id: "献-1",
        content: "Chọn âm ON đúng của 「献」.",
        answers: ["ケン", "コン", "カン", "ゲン"],
        correctAnswer: 0,
      },
      {
        id: "献-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「献血」",
        answers: ["けんけつ", "こんけつ", "けっけつ", "けんけち"],
        correctAnswer: 0,
      },
      {
        id: "献-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["献", "健", "建", "研"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "厳",
    back: [
      "- Nghiêm",
      "- Nghiêm khắc",
      "- On: ゲン・ゴン",
      "- Kun: きび・しい、おごそ・か",
    ],
    questions: [
      {
        id: "厳-1",
        content: "Chọn âm ON đúng của 「厳」.",
        answers: ["ゲン", "ゴン", "ケン", "コウ"],
        correctAnswer: 0,
      },
      {
        id: "厳-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「厳重」",
        answers: ["げんじゅう", "ごんじゅう", "げんじゅ", "けんじゅう"],
        correctAnswer: 0,
      },
      {
        id: "厳-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゲン」",
        answers: ["厳", "元", "原", "言"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "維",
    back: ["- Duy", "- Duy trì", "- On: イ"],
    questions: [
      {
        id: "維-1",
        content: "Chọn âm ON đúng của 「維」.",
        answers: ["イ", "キ", "ギ", "エイ"],
        correctAnswer: 0,
      },
      {
        id: "維-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「維持」",
        answers: ["いじ", "いじょ", "いし", "えじ"],
        correctAnswer: 0,
      },
      {
        id: "維-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「イ」",
        answers: ["維", "位", "依", "胃"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "浜",
    back: ["- Banh", "- Bờ biển", "- On: ヒン", "- Kun: はま"],
    questions: [
      {
        id: "浜-1",
        content: "Chọn âm ON đúng của 「浜」.",
        answers: ["ヒン", "ハン", "ビン", "ホン"],
        correctAnswer: 0,
      },
      {
        id: "浜-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「浜辺」",
        answers: ["はまべ", "はなべ", "はまへ", "はまね"],
        correctAnswer: 0,
      },
      {
        id: "浜-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「はま」",
        answers: ["浜", "波", "海", "橋"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "遺",
    back: ["- Di", "- Di sản, di vật", "- On: イ", "- Kun: のこ・す"],
    questions: [
      {
        id: "遺-1",
        content: "Chọn âm ON đúng của 「遺」.",
        answers: ["イ", "エイ", "ユイ", "ギ"],
        correctAnswer: 0,
      },
      {
        id: "遺-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「遺産」",
        answers: ["いさん", "ゆいさん", "いざん", "いさつ"],
        correctAnswer: 0,
      },
      {
        id: "遺-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「イ」",
        answers: ["遺", "異", "胃", "以"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "塁",
    back: ["- Lũy", "- Thành lũy", "- On: ルイ"],
    questions: [
      {
        id: "塁-1",
        content: "Chọn âm ON đúng của 「塁」.",
        answers: ["ルイ", "ライ", "ロイ", "リツ"],
        correctAnswer: 0,
      },
      {
        id: "塁-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「三塁」",
        answers: ["さんるい", "さんる", "さんらい", "さんり"],
        correctAnswer: 0,
      },
      {
        id: "塁-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ルイ」",
        answers: ["塁", "類", "雷", "累"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "邦",
    back: ["- Bang", "- Quốc gia, đất nước", "- On: ホウ", "- Kun: くに"],
    questions: [
      {
        id: "邦-1",
        content: "Chọn âm ON đúng của 「邦」.",
        answers: ["ホウ", "ホ", "ハン", "ボウ"],
        correctAnswer: 0,
      },
      {
        id: "邦-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「邦楽」",
        answers: ["ほうがく", "ほうらく", "ほんがく", "ぼうがく"],
        correctAnswer: 0,
      },
      {
        id: "邦-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ホウ」",
        answers: ["邦", "方", "法", "豊"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "素",
    back: ["- Tố", "- Nguyên liệu, đơn giản", "- On: ソ", "- Kun: もと"],
    questions: [
      {
        id: "素-1",
        content: "Chọn âm ON đúng của 「素」.",
        answers: ["ソ", "ショ", "サ", "ス"],
        correctAnswer: 0,
      },
      {
        id: "素-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「素直」",
        answers: ["すなお", "そなお", "すじき", "そじき"],
        correctAnswer: 0,
      },
      {
        id: "素-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソ」",
        answers: ["素", "祖", "組", "曽"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "遣",
    back: [
      "- Khiển",
      "- Sai khiến, phái đi",
      "- On: ケン",
      "- Kun: つか・う、つか・わす",
    ],
    questions: [
      {
        id: "遣-1",
        content: "Chọn âm ON đúng của 「遣」.",
        answers: ["ケン", "ゲン", "カン", "コン"],
        correctAnswer: 0,
      },
      {
        id: "遣-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「派遣」",
        answers: ["はけん", "はげん", "はこん", "はけい"],
        correctAnswer: 0,
      },
      {
        id: "遣-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["遣", "県", "検", "建"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "抗",
    back: ["- Kháng", "- Kháng cự", "- On: コウ"],
    questions: [
      {
        id: "抗-1",
        content: "Chọn âm ON đúng của 「抗」.",
        answers: ["コウ", "キョウ", "コ", "カク"],
        correctAnswer: 0,
      },
      {
        id: "抗-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「抵抗」",
        answers: ["ていこう", "てこう", "ていごう", "ていこ"],
        correctAnswer: 0,
      },
      {
        id: "抗-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["抗", "校", "考", "光"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "模",
    back: ["- Mô", "- Mô hình, mô phỏng", "- On: モ・ボ"],
    questions: [
      {
        id: "模-1",
        content: "Chọn âm ON đúng của 「模」.",
        answers: ["モ", "ボ", "マ", "ム"],
        correctAnswer: 0,
      },
      {
        id: "模-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「模様」",
        answers: ["もよう", "もよう", "ぼよう", "まよう"],
        correctAnswer: 0,
      },
      {
        id: "模-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「モ」",
        answers: ["模", "母", "毛", "木"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "雄",
    back: ["- Hùng", "- Mạnh mẽ, anh hùng", "- On: ユウ", "- Kun: お・す"],
    questions: [
      {
        id: "雄-1",
        content: "Chọn âm ON đúng của 「雄」.",
        answers: ["ユウ", "オウ", "ヨウ", "ユ"],
        correctAnswer: 0,
      },
      {
        id: "雄-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「英雄」",
        answers: ["えいゆう", "えいおう", "えいよう", "えいゆ"],
        correctAnswer: 0,
      },
      {
        id: "雄-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ユウ」",
        answers: ["雄", "有", "友", "夕"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "益",
    back: ["- Ích", "- Lợi ích", "- On: エキ・ヤク"],
    questions: [
      {
        id: "益-1",
        content: "Chọn âm ON đúng của 「益」.",
        answers: ["エキ", "ヤク", "エツ", "ヤ"],
        correctAnswer: 0,
      },
      {
        id: "益-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「利益」",
        answers: ["りえき", "りやく", "りいき", "りやき"],
        correctAnswer: 0,
      },
      {
        id: "益-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「エキ」",
        answers: ["益", "駅", "液", "役"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "緊",
    back: ["- Khẩn", "- Khẩn cấp", "- On: キン"],
    questions: [
      {
        id: "緊-1",
        content: "Chọn âm ON đúng của 「緊」.",
        answers: ["キン", "ケン", "コン", "キツ"],
        correctAnswer: 0,
      },
      {
        id: "緊-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「緊張」",
        answers: ["きんちょう", "きんしょう", "けんちょう", "きんじょう"],
        correctAnswer: 0,
      },
      {
        id: "緊-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キン」",
        answers: ["緊", "金", "近", "筋"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "標",
    back: ["- Tiêu", "- Tiêu chuẩn, mục tiêu", "- On: ヒョウ", "- Kun: しるべ"],
    questions: [
      {
        id: "標-1",
        content: "Chọn âm ON đúng của 「標」.",
        answers: ["ヒョウ", "ヒュウ", "ビョウ", "ヒョ"],
        correctAnswer: 0,
      },
      {
        id: "標-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「標識」",
        answers: ["ひょうしき", "ひゅうしき", "ひょうじき", "ひょうしょく"],
        correctAnswer: 0,
      },
      {
        id: "標-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヒョウ」",
        answers: ["標", "票", "表", "秒"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "宣",
    back: ["- Tuyên", "- Tuyên bố", "- On: セン", "- Kun: のたま・う"],
    questions: [
      {
        id: "宣-1",
        content: "Chọn âm ON đúng của 「宣」.",
        answers: ["セン", "ゼン", "シン", "センン"],
        correctAnswer: 0,
      },
      {
        id: "宣-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「宣言」",
        answers: ["せんげん", "せんけん", "ぜんげん", "しんげん"],
        correctAnswer: 0,
      },
      {
        id: "宣-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セン」",
        answers: ["宣", "線", "戦", "先"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "昭",
    back: ["- Chiêu", "- Sáng rõ", "- On: ショウ"],
    questions: [
      {
        id: "昭-1",
        content: "Chọn âm ON đúng của 「昭」.",
        answers: ["ショウ", "ショ", "ジョウ", "セイ"],
        correctAnswer: 0,
      },
      {
        id: "昭-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「昭和」",
        answers: ["しょうわ", "しょうか", "しょうま", "しょうは"],
        correctAnswer: 0,
      },
      {
        id: "昭-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショウ」",
        answers: ["昭", "照", "章", "招"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "廃",
    back: [
      "- Phế",
      "- Bỏ, phế bỏ",
      "- On: ハイ",
      "- Kun: すた・れる、すた・る",
    ],
    questions: [
      {
        id: "廃-1",
        content: "Chọn âm ON đúng của 「廃」.",
        answers: ["ハイ", "ヘイ", "バイ", "ハツ"],
        correctAnswer: 0,
      },
      {
        id: "廃-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「廃棄」",
        answers: ["はいき", "はいぎ", "へいき", "ばいき"],
        correctAnswer: 0,
      },
      {
        id: "廃-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ハイ」",
        answers: ["廃", "配", "拝", "牌"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "伊",
    back: ["- Y", "- Tên riêng", "- On: イ"],
    questions: [
      {
        id: "伊-1",
        content: "Chọn âm ON đúng của 「伊」.",
        answers: ["イ", "エイ", "チ", "イツ"],
        correctAnswer: 0,
      },
      {
        id: "伊-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「伊藤」",
        answers: ["いとう", "いどう", "いと", "いとうう"],
        correctAnswer: 0,
      },
      {
        id: "伊-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「イ」",
        answers: ["伊", "以", "位", "井"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "江",
    back: ["- Giang", "- Sông", "- On: コウ", "- Kun: え"],
    questions: [
      {
        id: "江-1",
        content: "Chọn âm ON đúng của 「江」.",
        answers: ["コウ", "エイ", "ゴウ", "コ"],
        correctAnswer: 0,
      },
      {
        id: "江-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「江戸」",
        answers: ["えど", "えと", "こうど", "こど"],
        correctAnswer: 0,
      },
      {
        id: "江-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["江", "校", "工", "公"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "僚",
    back: ["- Liêu", "- Đồng nghiệp", "- On: リョウ"],
    questions: [
      {
        id: "僚-1",
        content: "Chọn âm ON đúng của 「僚」.",
        answers: ["リョウ", "リュウ", "ロウ", "リョ"],
        correctAnswer: 0,
      },
      {
        id: "僚-2",
        content: "下線部の読み方として正しいものを１つ選びなさい.　「同僚」",
        answers: ["どうりょう", "どうりょ", "どうりゅう", "どうりょうう"],
        correctAnswer: 0,
      },
      {
        id: "僚-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「リョウ」",
        answers: ["僚", "料", "寮", "良"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "吉",
    back: ["- Cát", "- Tốt lành", "- On: キチ・キツ", "- Kun: よし"],
    questions: [
      {
        id: "吉-1",
        content: "Chọn âm ON đúng của 「吉」.",
        answers: ["キチ", "キツ", "キツウ", "ギチ"],
        correctAnswer: 0,
      },
      {
        id: "吉-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「吉日」",
        answers: ["きちじつ", "きつじつ", "きちにち", "きつにち"],
        correctAnswer: 0,
      },
      {
        id: "吉-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「よし」",
        answers: ["吉", "善", "良", "喜"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "盛",
    back: [
      "- Thịnh",
      "- Phồn thịnh",
      "- On: セイ・ジョウ",
      "- Kun: も・る、さか・る、さか・ん",
    ],
    questions: [
      {
        id: "盛-1",
        content: "Chọn âm ON đúng của 「盛」.",
        answers: ["セイ", "ジョウ", "ショウ", "ソウ"],
        correctAnswer: 0,
      },
      {
        id: "盛-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「盛大」",
        answers: ["せいだい", "じょうだい", "せいたい", "せだい"],
        correctAnswer: 0,
      },
      {
        id: "盛-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セイ」",
        answers: ["盛", "成", "静", "正"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "皇",
    back: ["- Hoàng", "- Hoàng đế", "- On: コウ・オウ"],
    questions: [
      {
        id: "皇-1",
        content: "Chọn âm ON đúng của 「皇」.",
        answers: ["コウ", "オウ", "コ", "ゴウ"],
        correctAnswer: 0,
      },
      {
        id: "皇-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「天皇」",
        answers: ["てんのう", "てんおう", "てんこう", "てんろう"],
        correctAnswer: 0,
      },
      {
        id: "皇-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["皇", "校", "黄", "后"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "臨",
    back: ["- Lâm", "- Đến gần, giáp mặt", "- On: リン", "- Kun: のぞ・む"],
    questions: [
      {
        id: "臨-1",
        content: "Chọn âm ON đúng của 「臨」.",
        answers: ["リン", "ラン", "レン", "ロウ"],
        correctAnswer: 0,
      },
      {
        id: "臨-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「臨時」",
        answers: ["りんじ", "りじ", "れんじ", "りんし"],
        correctAnswer: 0,
      },
      {
        id: "臨-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「リン」",
        answers: ["臨", "輪", "隣", "林"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "踏",
    back: [
      "- Đạp",
      "- Dẫm, bước lên",
      "- On: トウ",
      "- Kun: ふ・む、ふ・まえる",
    ],
    questions: [
      {
        id: "踏-1",
        content: "Chọn âm ON đúng của 「踏」.",
        answers: ["トウ", "テイ", "ト", "ドウ"],
        correctAnswer: 0,
      },
      {
        id: "踏-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「踏切」",
        answers: ["ふみきり", "ふみきる", "とうきり", "ふんきり"],
        correctAnswer: 0,
      },
      {
        id: "踏-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ふむ」",
        answers: ["踏", "走", "歩", "跳"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "壊",
    back: ["- Hoại", "- Phá hủy", "- On: カイ", "- Kun: こわ・す、こわ・れる"],
    questions: [
      {
        id: "壊-1",
        content: "Chọn âm ON đúng của 「壊」.",
        answers: ["カイ", "ガイ", "ケイ", "カツ"],
        correctAnswer: 0,
      },
      {
        id: "壊-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「破壊」",
        answers: ["はかい", "はがい", "はくかい", "はこわい"],
        correctAnswer: 0,
      },
      {
        id: "壊-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カイ」",
        answers: ["壊", "回", "界", "階"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "債",
    back: ["- Trái", "- Nợ, khoản vay", "- On: サイ"],
    questions: [
      {
        id: "債-1",
        content: "Chọn âm ON đúng của 「債」.",
        answers: ["サイ", "ザイ", "セイ", "サツ"],
        correctAnswer: 0,
      },
      {
        id: "債-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「国債」",
        answers: ["こくさい", "こくざい", "こくさいん", "こくせい"],
        correctAnswer: 0,
      },
      {
        id: "債-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サイ」",
        answers: ["債", "際", "裁", "再"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "興",
    back: [
      "- Hưng",
      "- Hưng thịnh",
      "- On: コウ・キョウ",
      "- Kun: おこ・る、おこ・す",
    ],
    questions: [
      {
        id: "興-1",
        content: "Chọn âm ON đúng của 「興」.",
        answers: ["コウ", "キョウ", "コ", "キョ"],
        correctAnswer: 0,
      },
      {
        id: "興-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「興味」",
        answers: ["きょうみ", "こうみ", "きょみ", "きんみ"],
        correctAnswer: 0,
      },
      {
        id: "興-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["興", "工", "公", "校"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "源",
    back: ["- Nguyên", "- Nguồn gốc", "- On: ゲン", "- Kun: みなもと"],
    questions: [
      {
        id: "源-1",
        content: "Chọn âm ON đúng của 「源」.",
        answers: ["ゲン", "ガン", "ゴン", "ゲイ"],
        correctAnswer: 0,
      },
      {
        id: "源-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「資源」",
        answers: ["しげん", "しけん", "しげ", "しげんりょう"],
        correctAnswer: 0,
      },
      {
        id: "源-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゲン」",
        answers: ["源", "原", "言", "限"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "儀",
    back: ["- Nghi", "- Lễ nghi", "- On: ギ"],
    questions: [
      {
        id: "儀-1",
        content: "Chọn âm ON đúng của 「儀」.",
        answers: ["ギ", "ギョ", "キ", "ギン"],
        correctAnswer: 0,
      },
      {
        id: "儀-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「儀式」",
        answers: ["ぎしき", "ぎじき", "ぎしょく", "きしき"],
        correctAnswer: 0,
      },
      {
        id: "儀-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ギ」",
        answers: ["儀", "義", "疑", "技"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "創",
    back: ["- Sáng", "- Sáng tạo", "- On: ソウ", "- Kun: つく・る、はじ・める"],
    questions: [
      {
        id: "創-1",
        content: "Chọn âm ON đúng của 「創」.",
        answers: ["ソウ", "ショウ", "ソ", "サン"],
        correctAnswer: 0,
      },
      {
        id: "創-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「創造」",
        answers: ["そうぞう", "そうそう", "そうぞ", "しょうぞう"],
        correctAnswer: 0,
      },
      {
        id: "創-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソウ」",
        answers: ["創", "送", "倉", "層"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "障",
    back: ["- Chướng", "- Trở ngại", "- On: ショウ", "- Kun: さわ・る"],
    questions: [
      {
        id: "障-1",
        content: "Chọn âm ON đúng của 「障」.",
        answers: ["ショウ", "ジョウ", "ショ", "ソウ"],
        correctAnswer: 0,
      },
      {
        id: "障-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「故障」",
        answers: ["こしょう", "こしょ", "ごしょう", "こそう"],
        correctAnswer: 0,
      },
      {
        id: "障-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショウ」",
        answers: ["障", "章", "賞", "商"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "継",
    back: ["- Kế", "- Kế tục", "- On: ケイ", "- Kun: つ・ぐ"],
    questions: [
      {
        id: "継-1",
        content: "Chọn âm ON đúng của 「継」.",
        answers: ["ケイ", "キ", "ギ", "ケツ"],
        correctAnswer: 0,
      },
      {
        id: "継-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「継続」",
        answers: ["けいぞく", "けいそく", "けいぞ", "けいしょく"],
        correctAnswer: 0,
      },
      {
        id: "継-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケイ」",
        answers: ["継", "計", "形", "係"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "筋",
    back: ["- Cân", "- Gân, cơ bắp", "- On: キン", "- Kun: すじ"],
    questions: [
      {
        id: "筋-1",
        content: "Chọn âm ON đúng của 「筋」.",
        answers: ["キン", "カン", "コン", "ギン"],
        correctAnswer: 0,
      },
      {
        id: "筋-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「筋肉」",
        answers: ["きんにく", "きんにち", "きにく", "きんにゅく"],
        correctAnswer: 0,
      },
      {
        id: "筋-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キン」",
        answers: ["筋", "金", "近", "銀"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "闘",
    back: ["- Đấu", "- Chiến đấu", "- On: トウ", "- Kun: たたか・う"],
    questions: [
      {
        id: "闘-1",
        content: "Chọn âm ON đúng của 「闘」.",
        answers: ["トウ", "ト", "ドウ", "タツ"],
        correctAnswer: 0,
      },
      {
        id: "闘-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「闘争」",
        answers: ["とうそう", "とうしょう", "とそう", "とうそ"],
        correctAnswer: 0,
      },
      {
        id: "闘-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「トウ」",
        answers: ["闘", "党", "登", "糖"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "葬",
    back: ["- Táng", "- Mai táng", "- On: ソウ", "- Kun: ほうむ・る"],
    questions: [
      {
        id: "葬-1",
        content: "Chọn âm ON đúng của 「葬」.",
        answers: ["ソウ", "ショウ", "ソ", "サン"],
        correctAnswer: 0,
      },
      {
        id: "葬-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「葬式」",
        answers: ["そうしき", "そうしょく", "そうじき", "そうきし"],
        correctAnswer: 0,
      },
      {
        id: "葬-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソウ」",
        answers: ["葬", "送", "倉", "層"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "避",
    back: ["- Tị", "- Tránh né", "- On: ヒ", "- Kun: さ・ける"],
    questions: [
      {
        id: "避-1",
        content: "Chọn âm ON đúng của 「避」.",
        answers: ["ヒ", "ビ", "ハイ", "ヘイ"],
        correctAnswer: 0,
      },
      {
        id: "避-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「避難」",
        answers: ["ひなん", "ひな", "ひなんい", "へなん"],
        correctAnswer: 0,
      },
      {
        id: "避-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヒ」",
        answers: ["避", "被", "費", "非"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "司",
    back: ["- Ti", "- Cai quản", "- On: シ", "- Kun: つかさど・る"],
    questions: [
      {
        id: "司-1",
        content: "Chọn âm ON đúng của 「司」.",
        answers: ["シ", "ス", "ジ", "サ"],
        correctAnswer: 0,
      },
      {
        id: "司-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「司会」",
        answers: ["しかい", "しあい", "しがい", "さいかい"],
        correctAnswer: 0,
      },
      {
        id: "司-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シ」",
        answers: ["司", "史", "士", "使"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "康",
    back: ["- Khang", "- Khỏe mạnh", "- On: コウ"],
    questions: [
      {
        id: "康-1",
        content: "Chọn âm ON đúng của 「康」.",
        answers: ["コウ", "キョウ", "コ", "カン"],
        correctAnswer: 0,
      },
      {
        id: "康-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「健康」",
        answers: ["けんこう", "けんかん", "けんこ", "けんこく"],
        correctAnswer: 0,
      },
      {
        id: "康-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「コウ」",
        answers: ["康", "工", "光", "公"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "善",
    back: ["- Thiện", "- Tốt, thiện lương", "- On: ゼン", "- Kun: よ・い"],
    questions: [
      {
        id: "善-1",
        content: "Chọn âm ON đúng của 「善」.",
        answers: ["ゼン", "セン", "シン", "ゼイ"],
        correctAnswer: 0,
      },
      {
        id: "善-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「善悪」",
        answers: ["ぜんあく", "ぜんやく", "ぜつあく", "ぜんえき"],
        correctAnswer: 0,
      },
      {
        id: "善-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゼン」",
        answers: ["善", "全", "然", "前"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "逮",
    back: ["- Đãi", "- Bắt giữ", "- On: タイ"],
    questions: [
      {
        id: "逮-1",
        content: "Chọn âm ON đúng của 「逮」.",
        answers: ["タイ", "ダイ", "テイ", "タツ"],
        correctAnswer: 0,
      },
      {
        id: "逮-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「逮捕」",
        answers: ["たいほ", "たいふ", "だいほ", "たいは"],
        correctAnswer: 0,
      },
      {
        id: "逮-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「タイ」",
        answers: ["逮", "対", "帯", "退"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "迫",
    back: ["- Bách", "- Ép buộc, thúc ép", "- On: ハク", "- Kun: せま・る"],
    questions: [
      {
        id: "迫-1",
        content: "Chọn âm ON đúng của 「迫」.",
        answers: ["ハク", "バク", "ヘキ", "ハツ"],
        correctAnswer: 0,
      },
      {
        id: "迫-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「迫害」",
        answers: ["はくがい", "はくかい", "はくがえ", "はっがい"],
        correctAnswer: 0,
      },
      {
        id: "迫-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ハク」",
        answers: ["迫", "泊", "博", "白"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "惑",
    back: ["- Hoặc", "- Mê hoặc, lúng túng", "- On: ワク", "- Kun: まど・う"],
    questions: [
      {
        id: "惑-1",
        content: "Chọn âm ON đúng của 「惑」.",
        answers: ["ワク", "ワ", "バク", "マク"],
        correctAnswer: 0,
      },
      {
        id: "惑-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「迷惑」",
        answers: ["めいわく", "めいばく", "めいわき", "めわく"],
        correctAnswer: 0,
      },
      {
        id: "惑-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ワク」",
        answers: ["惑", "枠", "涌", "湧"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "崩",
    back: ["- Băng", "- Sụp đổ", "- On: ホウ", "- Kun: くず・れる、くず・す"],
    questions: [
      {
        id: "崩-1",
        content: "Chọn âm ON đúng của 「崩」.",
        answers: ["ホウ", "ボウ", "ホ", "ホク"],
        correctAnswer: 0,
      },
      {
        id: "崩-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「崩壊」",
        answers: ["ほうかい", "ほうがい", "ほうか", "はかい"],
        correctAnswer: 0,
      },
      {
        id: "崩-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ホウ」",
        answers: ["崩", "報", "放", "法"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "紀",
    back: ["- Kỷ", "- Ghi chép", "- On: キ"],
    questions: [
      {
        id: "紀-1",
        content: "Chọn âm ON đúng của 「紀」.",
        answers: ["キ", "ギ", "ケイ", "キョ"],
        correctAnswer: 0,
      },
      {
        id: "紀-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「世紀」",
        answers: ["せいき", "せき", "せいいき", "せけい"],
        correctAnswer: 0,
      },
      {
        id: "紀-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["紀", "記", "気", "機"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "聴",
    back: ["- Thính", "- Nghe", "- On: チョウ", "- Kun: き・く"],
    questions: [
      {
        id: "聴-1",
        content: "Chọn âm ON đúng của 「聴」.",
        answers: ["チョウ", "ショウ", "チュウ", "ジョウ"],
        correctAnswer: 0,
      },
      {
        id: "聴-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「聴力」",
        answers: ["ちょうりょく", "ちょうりき", "しょうりょく", "ちょりょく"],
        correctAnswer: 0,
      },
      {
        id: "聴-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「チョウ」",
        answers: ["聴", "長", "張", "朝"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "脱",
    back: ["- Thoát", "- Thoát khỏi", "- On: ダツ", "- Kun: ぬ・ぐ、ぬ・げる"],
    questions: [
      {
        id: "脱-1",
        content: "Chọn âm ON đúng của 「脱」.",
        answers: ["ダツ", "タツ", "ダチ", "ダイ"],
        correctAnswer: 0,
      },
      {
        id: "脱-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「脱出」",
        answers: ["だっしゅつ", "だつしゅつ", "だっしゅち", "だっしつ"],
        correctAnswer: 0,
      },
      {
        id: "脱-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ダツ」",
        answers: ["脱", "達", "建", "発"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "級",
    back: ["- Cấp", "- Cấp bậc", "- On: キュウ"],
    questions: [
      {
        id: "級-1",
        content: "Chọn âm ON đúng của 「級」.",
        answers: ["キュウ", "キュ", "キョウ", "キュク"],
        correctAnswer: 0,
      },
      {
        id: "級-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「上級」",
        answers: ["じょうきゅう", "じょうきゅ", "しょうきゅう", "じょきゅう"],
        correctAnswer: 0,
      },
      {
        id: "級-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キュウ」",
        answers: ["級", "球", "救", "求"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "博",
    back: ["- Bác", "- Uyên bác", "- On: ハク"],
    questions: [
      {
        id: "博-1",
        content: "Chọn âm ON đúng của 「博」.",
        answers: ["ハク", "バク", "ハツ", "ハチ"],
        correctAnswer: 0,
      },
      {
        id: "博-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「博物館」",
        answers: [
          "はくぶつかん",
          "はくものかん",
          "はくぶっかん",
          "はんぶつかん",
        ],
        correctAnswer: 0,
      },
      {
        id: "博-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ハク」",
        answers: ["博", "白", "幅", "薄"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "締",
    back: [
      "- Đế",
      "- Ràng buộc, thắt chặt",
      "- On: テイ",
      "- Kun: し・まる、し・める",
    ],
    questions: [
      {
        id: "締-1",
        content: "Chọn âm ON đúng của 「締」.",
        answers: ["テイ", "タイ", "テツ", "チョウ"],
        correctAnswer: 0,
      },
      {
        id: "締-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「締結」",
        answers: ["ていけつ", "ていけっ", "てっけつ", "たいけつ"],
        correctAnswer: 0,
      },
      {
        id: "締-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テイ」",
        answers: ["締", "停", "定", "底"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "救",
    back: ["- Cứu", "- Cứu giúp", "- On: キュウ", "- Kun: すく・う"],
    questions: [
      {
        id: "救-1",
        content: "Chọn âm ON đúng của 「救」.",
        answers: ["キュウ", "キュ", "キョウ", "キュク"],
        correctAnswer: 0,
      },
      {
        id: "救-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「救助」",
        answers: ["きゅうじょ", "きゅじょ", "きゅうじょう", "きゅうしょ"],
        correctAnswer: 0,
      },
      {
        id: "救-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キュウ」",
        answers: ["救", "球", "級", "急"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "執",
    back: [
      "- Chấp",
      "- Nắm giữ, chấp hành",
      "- On: シツ・シュウ",
      "- Kun: と・る",
    ],
    questions: [
      {
        id: "執-1",
        content: "Chọn âm ON đúng của 「執」.",
        answers: ["シツ", "シュウ", "ショウ", "シュツ"],
        correctAnswer: 0,
      },
      {
        id: "執-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「執行」",
        answers: ["しっこう", "しつこう", "しきこう", "しゅっこう"],
        correctAnswer: 0,
      },
      {
        id: "執-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シツ」",
        answers: ["執", "質", "失", "室"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "房",
    back: ["- Phòng", "- Căn phòng", "- On: ボウ", "- Kun: ふさ"],
    questions: [
      {
        id: "房-1",
        content: "Chọn âm ON đúng của 「房」.",
        answers: ["ボウ", "ホウ", "ボ", "ブ"],
        correctAnswer: 0,
      },
      {
        id: "房-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「冷房」",
        answers: ["れいぼう", "れいほう", "れいぼ", "れんぼう"],
        correctAnswer: 0,
      },
      {
        id: "房-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ボウ」",
        answers: ["房", "防", "棒", "亡"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "撤",
    back: ["- Triệt", "- Rút lui, triệt tiêu", "- On: テツ"],
    questions: [
      {
        id: "撤-1",
        content: "Chọn âm ON đúng của 「撤」.",
        answers: ["テツ", "テイ", "タイ", "トツ"],
        correctAnswer: 0,
      },
      {
        id: "撤-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「撤退」",
        answers: ["てったい", "てつたい", "てったつ", "てつたつ"],
        correctAnswer: 0,
      },
      {
        id: "撤-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テツ」",
        answers: ["撤", "鉄", "哲", "徹"],
        correctAnswer: 0,
      },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Page 2
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
