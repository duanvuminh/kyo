import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "氏",
    back: ["- Thị", "- Họ, dòng họ", "- On: シ", "- Kun: うじ"],
    questions: [
      {
        id: "1-1",
        content: "「氏」の読み方として最もよいものを１つ選びなさい。",
        answers: ["うじ", "し", "み", "な"],
        correctAnswer: 0,
      },
      {
        id: "1-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「氏名」",
        answers: ["しめい", "うじめい", "しな", "みょうじ"],
        correctAnswer: 0,
      },
      {
        id: "1-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「うじ」",
        answers: ["氏", "子", "名", "民"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "統",
    back: [
      "- Thống",
      "- Thống nhất, điều hành",
      "- On: トウ",
      "- Kun: す・べる",
    ],
    questions: [
      {
        id: "2-1",
        content: "「統」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["とう", "しゅう", "そう", "てい"],
        correctAnswer: 0,
      },
      {
        id: "2-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「統一」",
        answers: ["とういつ", "とういち", "といつ", "しゅういつ"],
        correctAnswer: 0,
      },
      {
        id: "2-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「トウ」",
        answers: ["統", "等", "到", "投"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "保",
    back: ["- Bảo", "- Giữ, bảo vệ", "- On: ホ", "- Kun: たも・つ"],
    questions: [
      {
        id: "3-1",
        content: "「保」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["ほ", "ほう", "ぼ", "ほく"],
        correctAnswer: 0,
      },
      {
        id: "3-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「保険」",
        answers: ["ほけん", "ほけんい", "ぼけん", "ほうけん"],
        correctAnswer: 0,
      },
      {
        id: "3-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ホ」",
        answers: ["保", "歩", "補", "報"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "第",
    back: ["- Đệ", "- Thứ tự, cấp bậc", "- On: ダイ・テイ"],
    questions: [
      {
        id: "4-1",
        content: "「第」の読み方として最もよいものを１つ選びなさい。",
        answers: ["だい", "てい", "たい", "だ"],
        correctAnswer: 0,
      },
      {
        id: "4-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「第一」",
        answers: ["だいいち", "だいち", "たいち", "ていいち"],
        correctAnswer: 0,
      },
      {
        id: "4-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ダイ」",
        answers: ["第", "大", "台", "題"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "結",
    back: [
      "- Kết",
      "- Kết nối, buộc",
      "- On: ケツ",
      "- Kun: むす・ぶ、ゆ・う、ゆ・わえる",
    ],
    questions: [
      {
        id: "5-1",
        content:
          "「結婚（けっこん）」の「結」の読み方として正しいものを１つ選びなさい。",
        answers: ["けつ", "けち", "きつ", "げつ"],
        correctAnswer: 0,
      },
      {
        id: "5-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「結果」",
        answers: ["けっか", "けつか", "けっかん", "けきか"],
        correctAnswer: 0,
      },
      {
        id: "5-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケツ」",
        answers: ["結", "血", "欠", "穴"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "派",
    back: ["- Phái", "- Nhóm, phe, trường phái", "- On: ハ"],
    questions: [
      {
        id: "6-1",
        content: "「派」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["は", "ぱ", "はん", "ば"],
        correctAnswer: 0,
      },
      {
        id: "6-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「派手」",
        answers: ["はで", "はて", "はてき", "ぱで"],
        correctAnswer: 0,
      },
      {
        id: "6-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ハ」",
        answers: ["派", "波", "葉", "破"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "案",
    back: ["- Án", "- Đề án, kế hoạch", "- On: アン"],
    questions: [
      {
        id: "7-1",
        content:
          "「提案（ていあん）」の「案」の読み方として正しいものを１つ選びなさい。",
        answers: ["あん", "えん", "おん", "いん"],
        correctAnswer: 0,
      },
      {
        id: "7-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「案内」",
        answers: ["あんない", "あんにゅう", "えんない", "あんだい"],
        correctAnswer: 0,
      },
      {
        id: "7-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「アン」",
        answers: ["案", "安", "暗", "按"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "策",
    back: ["- Sách", "- Kế sách, biện pháp", "- On: サク"],
    questions: [
      {
        id: "8-1",
        content:
          "「対策（たいさく）」の「策」の読み方として正しいものを１つ選びなさい。",
        answers: ["さく", "さつ", "さち", "そう"],
        correctAnswer: 0,
      },
      {
        id: "8-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「政策」",
        answers: ["せいさく", "せいさつ", "せさく", "せいさっく"],
        correctAnswer: 0,
      },
      {
        id: "8-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サク」",
        answers: ["策", "作", "昨", "冊"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "基",
    back: ["- Cơ", "- Cơ bản, nền tảng", "- On: キ", "- Kun: もと・もとい"],
    questions: [
      {
        id: "9-1",
        content: "「基」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["き", "ぎ", "け", "こう"],
        correctAnswer: 0,
      },
      {
        id: "9-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「基本」",
        answers: ["きほん", "きもと", "ぎほん", "きぼん"],
        correctAnswer: 0,
      },
      {
        id: "9-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["基", "期", "気", "記"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "価",
    back: ["- Giá", "- Giá trị, giá cả", "- On: カ", "- Kun: あたい"],
    questions: [
      {
        id: "10-1",
        content:
          "「価値（かち）」の「価」の読み方として正しいものを１つ選びなさい。",
        answers: ["か", "が", "け", "きゃ"],
        correctAnswer: 0,
      },
      {
        id: "10-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「物価」",
        answers: ["ぶっか", "ぶつか", "ぶっが", "ぶつが"],
        correctAnswer: 0,
      },
      {
        id: "10-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カ」",
        answers: ["価", "加", "家", "科"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "提",
    back: ["- Đề", "- Đề xuất, trình ra", "- On: テイ", "- Kun: さ・げる"],
    questions: [
      {
        id: "11-1",
        content:
          "「提案（ていあん）」の「提」の読み方として正しいものを１つ選びなさい.",
        answers: ["てい", "だい", "ち", "て"],
        correctAnswer: 0,
      },
      {
        id: "11-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「提供」",
        answers: ["ていきょう", "ていこう", "だいきょう", "ていきょ"],
        correctAnswer: 0,
      },
      {
        id: "11-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テイ」",
        answers: ["提", "第", "定", "庭"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "挙",
    back: [
      "- Cử",
      "- Nâng lên, cử hành",
      "- On: キョ",
      "- Kun: あ・げる、あ・がる",
    ],
    questions: [
      {
        id: "12-1",
        content:
          "「選挙（せんきょ）」の「挙」の読み方として正しいものを１つ選びなさい。",
        answers: ["きょ", "こ", "きゅう", "きょう"],
        correctAnswer: 0,
      },
      {
        id: "12-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「挙手」",
        answers: ["きょしゅ", "きゅしゅ", "こしゅ", "きょうしゅ"],
        correctAnswer: 0,
      },
      {
        id: "12-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キョ」",
        answers: ["挙", "去", "巨", "居"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "応",
    back: ["- Ứng", "- Ứng phó, phản ứng", "- On: オウ", "- Kun: こた・える"],
    questions: [
      {
        id: "13-1",
        content:
          "「応用（おうよう）」の「応」の読み方として正しいものを１つ選びなさい。",
        answers: ["おう", "よう", "お", "おお"],
        correctAnswer: 0,
      },
      {
        id: "13-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「対応」",
        answers: ["たいおう", "たいよう", "たいいん", "たいお"],
        correctAnswer: 0,
      },
      {
        id: "13-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「オウ」",
        answers: ["応", "王", "往", "横"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "企",
    back: [
      "- Xí",
      "- Lập kế hoạch, doanh nghiệp",
      "- On: キ",
      "- Kun: くわだ・てる",
    ],
    questions: [
      {
        id: "14-1",
        content:
          "「企業（きぎょう）」の「企」の読み方として正しいものを１つ選びなさい。",
        answers: ["き", "け", "ぎ", "く"],
        correctAnswer: 0,
      },
      {
        id: "14-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「企業」",
        answers: ["きぎょう", "きごう", "ぎぎょう", "きぎょ"],
        correctAnswer: 0,
      },
      {
        id: "14-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["企", "期", "記", "起"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "検",
    back: ["- Kiểm", "- Kiểm tra, tra xét", "- On: ケン"],
    questions: [
      {
        id: "15-1",
        content:
          "「検査（けんさ）」の「検」の読み方として正しいものを１つ選びなさい。",
        answers: ["けん", "げん", "きん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "15-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「検討」",
        answers: ["けんとう", "けんと", "げんとう", "けんどう"],
        correctAnswer: 0,
      },
      {
        id: "15-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["検", "険", "研", "健"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "藤",
    back: [
      "- Đằng",
      "- Dây leo, họ tên (Fuji)",
      "- On: トウ・ドウ",
      "- Kun: ふじ",
    ],
    questions: [
      {
        id: "16-1",
        content: "「藤」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["ふじ", "とう", "どう", "ふち"],
        correctAnswer: 0,
      },
      {
        id: "16-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「佐藤」",
        answers: ["さとう", "さどう", "さふじ", "さと"],
        correctAnswer: 0,
      },
      {
        id: "16-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ふじ」",
        answers: ["藤", "富", "冬", "登"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "沢",
    back: ["- Trạch", "- Đầm lầy, phong phú", "- On: タク", "- Kun: さわ"],
    questions: [
      {
        id: "17-1",
        content: "「沢」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["さわ", "たく", "かわ", "さか"],
        correctAnswer: 0,
      },
      {
        id: "17-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「豊沢」",
        answers: ["ほうたく", "とよさわ", "ゆたかさわ", "とよたく"],
        correctAnswer: 1,
      },
      {
        id: "17-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「さわ」",
        answers: ["沢", "川", "波", "池"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "裁",
    back: [
      "- Tài",
      "- Phán xét, cắt may",
      "- On: サイ",
      "- Kun: た・つ、さば・く",
    ],
    questions: [
      {
        id: "18-1",
        content:
          "「裁判（さいばん）」の「裁」の読み方として正しいものを１つ選びなさい。",
        answers: ["さい", "ざい", "さつ", "さいん"],
        correctAnswer: 0,
      },
      {
        id: "18-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「裁縫」",
        answers: ["さいほう", "さいぼう", "ざいほう", "さいほ"],
        correctAnswer: 0,
      },
      {
        id: "18-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サイ」",
        answers: ["裁", "才", "再", "菜"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "証",
    back: ["- Chứng", "- Chứng minh, bằng chứng", "- On: ショウ"],
    questions: [
      {
        id: "19-1",
        content:
          "「証明（しょうめい）」の「証」の読み方として正しいものを１つ選びなさい。",
        answers: ["しょう", "しょ", "そう", "じょう"],
        correctAnswer: 0,
      },
      {
        id: "19-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「証人」",
        answers: ["しょうにん", "しょうじん", "しょうねん", "じょうにん"],
        correctAnswer: 0,
      },
      {
        id: "19-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショウ」",
        answers: ["証", "正", "省", "詳"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "援",
    back: ["- Viên", "- Hỗ trợ, viện trợ", "- On: エン"],
    questions: [
      {
        id: "20-1",
        content:
          "「援助（えんじょ）」の「援」の読み方として正しいものを１つ選びなさい。",
        answers: ["えん", "おん", "あん", "いん"],
        correctAnswer: 0,
      },
      {
        id: "20-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「支援」",
        answers: ["しえん", "じえん", "しおん", "しあん"],
        correctAnswer: 0,
      },
      {
        id: "20-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「エン」",
        answers: ["援", "園", "円", "演"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "施",
    back: ["- Thi", "- Thực hiện, ban bố", "- On: シ・セ", "- Kun: ほどこ・す"],
    questions: [
      {
        id: "21-1",
        content:
          "「施行（しこう）」の「施」の読み方として正しいものを１つ選びなさい。",
        answers: ["し", "せ", "しゅ", "さい"],
        correctAnswer: 0,
      },
      {
        id: "21-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「実施」",
        answers: ["じっし", "じつし", "しっじ", "じっせ"],
        correctAnswer: 0,
      },
      {
        id: "21-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シ」",
        answers: ["施", "志", "視", "資"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "井",
    back: ["- Tỉnh", "- Giếng nước", "- On: セイ・ショウ", "- Kun: い"],
    questions: [
      {
        id: "22-1",
        content:
          "「井戸（いど）」の「井」の読み方として正しいものを１つ選びなさい。",
        answers: ["い", "せい", "しょう", "じょう"],
        correctAnswer: 0,
      },
      {
        id: "22-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「天井」",
        answers: ["てんじょう", "てんしょう", "てんい", "てんせい"],
        correctAnswer: 0,
      },
      {
        id: "22-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「い」",
        answers: ["井", "以", "位", "衣"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "護",
    back: ["- Hộ", "- Bảo vệ, hộ vệ", "- On: ゴ", "- Kun: まも・る"],
    questions: [
      {
        id: "23-1",
        content:
          "「保護（ほご）」の「護」の読み方として正しいものを１つ選びなさい。",
        answers: ["ご", "ごう", "こ", "ごく"],
        correctAnswer: 0,
      },
      {
        id: "23-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「看護」",
        answers: ["かんご", "かんごう", "かんこ", "かご"],
        correctAnswer: 0,
      },
      {
        id: "23-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゴ」",
        answers: ["護", "後", "語", "五"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "展",
    back: ["- Triển", "- Phát triển, mở rộng", "- On: テン"],
    questions: [
      {
        id: "24-1",
        content:
          "「発展（はってん）」の「展」の読み方として正しいものを１つ選びなさい。",
        answers: ["てん", "でん", "たん", "てい"],
        correctAnswer: 0,
      },
      {
        id: "24-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「展示」",
        answers: ["てんじ", "てんし", "でんじ", "てんじょ"],
        correctAnswer: 0,
      },
      {
        id: "24-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テン」",
        answers: ["展", "店", "点", "転"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "態",
    back: ["- Thái", "- Trạng thái, hình dạng", "- On: タイ"],
    questions: [
      {
        id: "25-1",
        content:
          "「状態（じょうたい）」の「態」の読み方として正しいものを１つ選びなさい。",
        answers: ["たい", "だい", "てい", "たいん"],
        correctAnswer: 0,
      },
      {
        id: "25-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「態度」",
        answers: ["たいど", "たいと", "だいど", "ていど"],
        correctAnswer: 0,
      },
      {
        id: "25-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「タイ」",
        answers: ["態", "体", "耐", "対"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "鮮",
    back: [
      "- Tiên",
      "- Tươi, mới, trong sáng",
      "- On: セン",
      "- Kun: あざ・やか",
    ],
    questions: [
      {
        id: "26-1",
        content:
          "「新鮮（しんせん）」の「鮮」の読み方として正しいものを１つ選びなさい。",
        answers: ["せん", "さん", "ぜん", "しん"],
        correctAnswer: 0,
      },
      {
        id: "26-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「鮮明」",
        answers: ["せんめい", "せんまい", "せめい", "せいめい"],
        correctAnswer: 0,
      },
      {
        id: "26-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セン」",
        answers: ["鮮", "先", "線", "選"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "視",
    back: ["- Thị", "- Nhìn, quan sát", "- On: シ"],
    questions: [
      {
        id: "27-1",
        content:
          "「視力（しりょく）」の「視」の読み方として正しいものを１つ選びなさい.",
        answers: ["し", "じ", "せい", "しゅ"],
        correctAnswer: 0,
      },
      {
        id: "27-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「視点」",
        answers: ["してん", "じてん", "して", "してんい"],
        correctAnswer: 0,
      },
      {
        id: "27-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シ」",
        answers: ["視", "市", "師", "試"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "条",
    back: ["- Điều", "- Điều khoản, quy định", "- On: ジョウ"],
    questions: [
      {
        id: "28-1",
        content:
          "「条件（じょうけん）」の「条」の読み方として正しいものを１つ選びなさい。",
        answers: ["じょう", "ちょう", "しょう", "じゅう"],
        correctAnswer: 0,
      },
      {
        id: "28-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「条約」",
        answers: ["じょうやく", "じょうやき", "じょうやくう", "じゅうやく"],
        correctAnswer: 0,
      },
      {
        id: "28-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジョウ」",
        answers: ["条", "上", "城", "乗"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "幹",
    back: ["- Cán", "- Cốt lõi, thân cây", "- On: カン", "- Kun: みき"],
    questions: [
      {
        id: "29-1",
        content: "「幹」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["みき", "かん", "き", "みち"],
        correctAnswer: 0,
      },
      {
        id: "29-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「幹部」",
        answers: ["かんぶ", "かんべ", "みきぶ", "きゃんぶ"],
        correctAnswer: 0,
      },
      {
        id: "29-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カン」",
        answers: ["幹", "感", "館", "完"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "独",
    back: ["- Độc", "- Một mình, độc lập", "- On: ドク", "- Kun: ひと・り"],
    questions: [
      {
        id: "30-1",
        content:
          "「独立（どくりつ）」の「独」の読み方として正しいものを１つ選びなさい。",
        answers: ["どく", "どっ", "とく", "どう"],
        correctAnswer: 0,
      },
      {
        id: "30-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「独身」",
        answers: ["どくしん", "どっしん", "とくしん", "どうしん"],
        correctAnswer: 0,
      },
      {
        id: "30-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ドク」",
        answers: ["独", "読", "毒", "得"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "宮",
    back: [
      "- Cung",
      "- Cung điện, đền",
      "- On: キュウ・グウ・ク",
      "- Kun: みや",
    ],
    questions: [
      {
        id: "31-1",
        content: "「宮」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["みや", "きゅう", "ぐう", "くう"],
        correctAnswer: 0,
      },
      {
        id: "31-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「神宮」",
        answers: ["じんぐう", "しんぐう", "じんきゅう", "しんきゅう"],
        correctAnswer: 0,
      },
      {
        id: "31-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「みや」",
        answers: ["宮", "寺", "社", "門"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "率",
    back: ["- Suất", "- Tỷ lệ, suất", "- On: ソツ・リツ", "- Kun: ひき・いる"],
    questions: [
      {
        id: "32-1",
        content: "「率」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["りつ", "そつ", "しつ", "せつ"],
        correctAnswer: 0,
      },
      {
        id: "32-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「比率」",
        answers: ["ひりつ", "ひそつ", "ひしつ", "ひせつ"],
        correctAnswer: 0,
      },
      {
        id: "32-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「リツ」",
        answers: ["率", "立", "列", "律"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "衛",
    back: ["- Vệ", "- Bảo vệ, phòng vệ", "- On: エイ"],
    questions: [
      {
        id: "33-1",
        content:
          "「自衛（じえい）」の「衛」の読み方として正しいものを１つ選びなさい。",
        answers: ["えい", "い", "え", "おう"],
        correctAnswer: 0,
      },
      {
        id: "33-2",
        content: "下線部の読み方として正しいものを１つ選びなさい.　「衛星」",
        answers: ["えいせい", "えせい", "いせい", "えいしょう"],
        correctAnswer: 0,
      },
      {
        id: "33-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「エイ」",
        answers: ["衛", "英", "映", "永"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "張",
    back: ["- Trương", "- Kéo dài, căng ra", "- On: チョウ", "- Kun: は・る"],
    questions: [
      {
        id: "34-1",
        content:
          "「出張（しゅっちょう）」の「張」の読み方として正しいものを１つ選びなさい。",
        answers: ["ちょう", "しょう", "じょう", "とう"],
        correctAnswer: 0,
      },
      {
        id: "34-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「緊張」",
        answers: ["きんちょう", "きんしょう", "きんじょう", "きんとう"],
        correctAnswer: 0,
      },
      {
        id: "34-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「チョウ」",
        answers: ["張", "長", "超", "帳"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "監",
    back: ["- Giam", "- Giám sát", "- On: カン"],
    questions: [
      {
        id: "35-1",
        content:
          "「監督（かんとく）」の「監」の読み方として正しいものを１つ選びなさい。",
        answers: ["かん", "けん", "かく", "こん"],
        correctAnswer: 0,
      },
      {
        id: "35-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「監視」",
        answers: ["かんし", "かんじ", "けんし", "かんしょ"],
        correctAnswer: 0,
      },
      {
        id: "35-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カン」",
        answers: ["監", "感", "館", "完"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "環",
    back: ["- Hoàn", "- Vòng, tuần hoàn", "- On: カン", "- Kun: わ"],
    questions: [
      {
        id: "36-1",
        content:
          "「環境（かんきょう）」の「環」の読み方として正しいものを１つ選びなさい。",
        answers: ["かん", "けん", "かい", "かんき"],
        correctAnswer: 0,
      },
      {
        id: "36-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「環状」",
        answers: ["かんじょう", "かいじょう", "けんじょう", "かんしょう"],
        correctAnswer: 0,
      },
      {
        id: "36-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カン」",
        answers: ["環", "完", "官", "関"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "審",
    back: ["- Thẩm", "- Xem xét, thẩm tra", "- On: シン"],
    questions: [
      {
        id: "37-1",
        content:
          "「審査（しんさ）」の「審」の読み方として正しいものを１つ選びなさい。",
        answers: ["しん", "じん", "し", "せん"],
        correctAnswer: 0,
      },
      {
        id: "37-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「審判」",
        answers: ["しんぱん", "じんぱん", "しんばん", "しんはん"],
        correctAnswer: 0,
      },
      {
        id: "37-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シン」",
        answers: ["審", "深", "信", "新"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "義",
    back: ["- Nghĩa", "- Chính nghĩa, đạo lý", "- On: ギ"],
    questions: [
      {
        id: "38-1",
        content:
          "「正義（せいぎ）」の「義」の読み方として正しいものを１つ選びなさい。",
        answers: ["ぎ", "ぎい", "き", "ぎゃ"],
        correctAnswer: 0,
      },
      {
        id: "38-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「義務」",
        answers: ["ぎむ", "ぎぶ", "きむ", "ぎゅう"],
        correctAnswer: 0,
      },
      {
        id: "38-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ギ」",
        answers: ["義", "疑", "議", "宜"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "訴",
    back: ["- Tố", "- Tố cáo, kiện", "- On: ソ", "- Kun: うった・える"],
    questions: [
      {
        id: "39-1",
        content:
          "「訴える（うったえる）」の「訴」の訓読みとして正しいものを１つ選びなさい。",
        answers: ["うったえる", "さけぶ", "となえる", "よぶ"],
        correctAnswer: 0,
      },
      {
        id: "39-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「訴訟」",
        answers: ["そしょう", "そしょうう", "そしょうん", "そうしょう"],
        correctAnswer: 0,
      },
      {
        id: "39-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ソ」",
        answers: ["訴", "祖", "組", "素"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "株",
    back: ["- Chu", "- Gốc cây, cổ phần", "- On: シュ", "- Kun: かぶ"],
    questions: [
      {
        id: "40-1",
        content: "「株」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["かぶ", "き", "しゅ", "こう"],
        correctAnswer: 0,
      },
      {
        id: "40-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「株式」",
        answers: ["かぶしき", "かぶしきん", "かぶき", "しゅしき"],
        correctAnswer: 0,
      },
      {
        id: "40-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「かぶ」",
        answers: ["株", "根", "花", "木"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "姿",
    back: ["- Tư", "- Dáng vẻ, hình dạng", "- On: シ", "- Kun: すがた"],
    questions: [
      {
        id: "41-1",
        content: "「姿」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["すがた", "すぎた", "すこし", "しがた"],
        correctAnswer: 0,
      },
      {
        id: "41-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「姿勢」",
        answers: ["しせい", "しぜい", "すがせい", "しさい"],
        correctAnswer: 0,
      },
      {
        id: "41-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「すがた」",
        answers: ["姿", "形", "像", "影"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "閣",
    back: ["- Các", "- Nhà lớn, nội các", "- On: カク"],
    questions: [
      {
        id: "42-1",
        content:
          "「内閣（ないかく）」の「閣」の読み方として正しいものを１つ選びなさい。",
        answers: ["かく", "がく", "かん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "42-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「閣議」",
        answers: ["かくぎ", "かくき", "かぎ", "がくぎ"],
        correctAnswer: 0,
      },
      {
        id: "42-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カク」",
        answers: ["閣", "格", "各", "客"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "衆",
    back: ["- Chúng", "- Đám đông, quần chúng", "- On: シュウ・シュ"],
    questions: [
      {
        id: "43-1",
        content:
          "「民衆（みんしゅう）」の「衆」の読み方として正しいものを１つ選びなさい。",
        answers: ["しゅう", "しゅ", "しょう", "じゅう"],
        correctAnswer: 0,
      },
      {
        id: "43-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「衆議院」",
        answers: ["しゅうぎいん", "しゅぎいん", "しゅうぎん", "しゅうぎい"],
        correctAnswer: 0,
      },
      {
        id: "43-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シュウ」",
        answers: ["衆", "州", "集", "週"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "評",
    back: ["- Bình", "- Đánh giá, bình luận", "- On: ヒョウ"],
    questions: [
      {
        id: "44-1",
        content:
          "「評価（ひょうか）」の「評」の読み方として正しいものを１つ選びなさい。",
        answers: ["ひょう", "ひょ", "へい", "びょう"],
        correctAnswer: 0,
      },
      {
        id: "44-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「批評」",
        answers: ["ひひょう", "ひひょ", "ひょうひ", "ひへい"],
        correctAnswer: 0,
      },
      {
        id: "44-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヒョウ」",
        answers: ["評", "表", "票", "描"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "影",
    back: ["- Ảnh", "- Bóng, hình ảnh", "- On: エイ", "- Kun: かげ"],
    questions: [
      {
        id: "45-1",
        content: "「影」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["かげ", "かこ", "えい", "えん"],
        correctAnswer: 0,
      },
      {
        id: "45-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「影響」",
        answers: ["えいきょう", "えきょう", "かげきょう", "えいこう"],
        correctAnswer: 0,
      },
      {
        id: "45-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「エイ」",
        answers: ["影", "栄", "英", "映"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "松",
    back: ["- Tùng", "- Cây tùng", "- On: ショウ", "- Kun: まつ"],
    questions: [
      {
        id: "46-1",
        content: "「松」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["まつ", "しょう", "もつ", "まち"],
        correctAnswer: 0,
      },
      {
        id: "46-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「松竹梅」",
        answers: [
          "しょうちくばい",
          "まつたけばい",
          "しょうちくまい",
          "しょうたけばい",
        ],
        correctAnswer: 0,
      },
      {
        id: "46-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「まつ」",
        answers: ["松", "林", "森", "竹"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "撃",
    back: ["- Kích", "- Tấn công, đánh", "- On: ゲキ", "- Kun: う・つ"],
    questions: [
      {
        id: "47-1",
        content:
          "「攻撃（こうげき）」の「撃」の読み方として正しいものを１つ選びなさい。",
        answers: ["げき", "きゃく", "ぎき", "けき"],
        correctAnswer: 0,
      },
      {
        id: "47-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「撃退」",
        answers: ["げきたい", "げきだい", "けきたい", "げきてき"],
        correctAnswer: 0,
      },
      {
        id: "47-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゲキ」",
        answers: ["撃", "劇", "激", "逆"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "佐",
    back: ["- Tá", "- Trợ giúp, phụ tá", "- On: サ"],
    questions: [
      {
        id: "48-1",
        content: "「佐」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["さ", "ざ", "さい", "しゃ"],
        correctAnswer: 0,
      },
      {
        id: "48-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「佐藤」",
        answers: ["さとう", "さどう", "さふじ", "さと"],
        correctAnswer: 0,
      },
      {
        id: "48-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サ」",
        answers: ["佐", "差", "左", "砂"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "核",
    back: ["- Hạch", "- Hạt nhân, lõi", "- On: カク"],
    questions: [
      {
        id: "49-1",
        content: "「核」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["かく", "かき", "がく", "かつ"],
        correctAnswer: 0,
      },
      {
        id: "49-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「核心」",
        answers: ["かくしん", "かくしんい", "がくしん", "かくじん"],
        correctAnswer: 0,
      },
      {
        id: "49-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「カク」",
        answers: ["核", "各", "角", "格"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "整",
    back: [
      "- Chỉnh",
      "- Sắp xếp, điều chỉnh",
      "- On: セイ",
      "- Kun: ととの・える、ととの・う",
    ],
    questions: [
      {
        id: "50-1",
        content:
          "「整理（せいり）」の「整」の読み方として正しいものを１つ選びなさい。",
        answers: ["せい", "せ", "ぜい", "しょう"],
        correctAnswer: 0,
      },
      {
        id: "50-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「調整」",
        answers: ["ちょうせい", "ちょうせ", "ちょうぜい", "ちょうせん"],
        correctAnswer: 0,
      },
      {
        id: "50-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セイ」",
        answers: ["整", "正", "制", "静"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "融",
    back: ["- Dung", "- Hòa hợp, dung hợp", "- On: ユウ", "- Kun: と・ける"],
    questions: [
      {
        id: "51-1",
        content:
          "「金融（きんゆう）」の「融」の読み方として正しいものを１つ選びなさい。",
        answers: ["ゆう", "ゆ", "ゆうう", "よう"],
        correctAnswer: 0,
      },
      {
        id: "51-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「融資」",
        answers: ["ゆうし", "ゆし", "ゆうじ", "ようし"],
        correctAnswer: 0,
      },
      {
        id: "51-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ユウ」",
        answers: ["融", "友", "有", "優"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "製",
    back: ["- Chế", "- Chế tạo", "- On: セイ"],
    questions: [
      {
        id: "52-1",
        content:
          "「製品（せいひん）」の「製」の読み方として正しいものを１つ選びなさい。",
        answers: ["せい", "せ", "せん", "ぜい"],
        correctAnswer: 0,
      },
      {
        id: "52-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「製造」",
        answers: ["せいぞう", "せぞう", "せいそう", "ぜいぞう"],
        correctAnswer: 0,
      },
      {
        id: "52-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セイ」",
        answers: ["製", "成", "静", "整"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "票",
    back: ["- Phiếu", "- Lá phiếu, vé", "- On: ヒョウ"],
    questions: [
      {
        id: "53-1",
        content:
          "「投票（とうひょう）」の「票」の読み方として正しいものを１つ選びなさい。",
        answers: ["ひょう", "ひょ", "ひょく", "びょう"],
        correctAnswer: 0,
      },
      {
        id: "53-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「票決」",
        answers: ["ひょうけつ", "ひょけつ", "ひょうげつ", "びょうけつ"],
        correctAnswer: 0,
      },
      {
        id: "53-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ヒョウ」",
        answers: ["票", "標", "表", "評"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "渉",
    back: [
      "- Thiệp",
      "- Giao thiệp, can dự",
      "- On: ショウ",
      "- Kun: わた・る",
    ],
    questions: [
      {
        id: "54-1",
        content: "「渉」の音読みとして最もよいものを１つ選びなさい。",
        answers: ["しょう", "じょう", "しゅう", "せい"],
        correctAnswer: 0,
      },
      {
        id: "54-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「干渉」",
        answers: ["かんしょう", "かんしゅう", "かんしょ", "かんそう"],
        correctAnswer: 0,
      },
      {
        id: "54-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ショウ」",
        answers: ["渉", "消", "商", "章"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "響",
    back: [
      "- Hưởng",
      "- On vang, ảnh hưởng",
      "- On: キョウ",
      "- Kun: ひび・く",
    ],
    questions: [
      {
        id: "55-1",
        content:
          "「影響（えいきょう）」の「響」の読み方として正しいものを１つ選びなさい。",
        answers: ["きょう", "こう", "きょ", "ぎょう"],
        correctAnswer: 0,
      },
      {
        id: "55-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「反響」",
        answers: ["はんきょう", "はんこう", "はんけい", "はんきゅう"],
        correctAnswer: 0,
      },
      {
        id: "55-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キョウ」",
        answers: ["響", "強", "教", "橋"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "推",
    back: ["- Thôi", "- Đẩy, suy đoán", "- On: スイ", "- Kun: お・す"],
    questions: [
      {
        id: "56-1",
        content:
          "「推薦（すいせん）」の「推」の読み方として正しいものを１つ選びなさい。",
        answers: ["すい", "せい", "さい", "しゅう"],
        correctAnswer: 0,
      },
      {
        id: "56-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「推定」",
        answers: ["すいてい", "すてい", "ずいてい", "ついてい"],
        correctAnswer: 0,
      },
      {
        id: "56-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「スイ」",
        answers: ["推", "水", "吹", "粋"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "請",
    back: [
      "- Thỉnh",
      "- Yêu cầu, thỉnh cầu",
      "- On: セイ・シン",
      "- Kun: う・ける、こ・う",
    ],
    questions: [
      {
        id: "57-1",
        content:
          "「請求（せいきゅう）」の「請」の読み方として正しいものを１つ選びなさい。",
        answers: ["せい", "しん", "しょう", "せん"],
        correctAnswer: 0,
      },
      {
        id: "57-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「要請」",
        answers: ["ようせい", "ようしょう", "ようせん", "ようしん"],
        correctAnswer: 0,
      },
      {
        id: "57-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「セイ」",
        answers: ["請", "清", "整", "静"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "器",
    back: ["- Khí", "- Dụng cụ, tài năng", "- On: キ", "- Kun: うつわ"],
    questions: [
      {
        id: "58-1",
        content: "「器」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["うつわ", "き", "きき", "うつ"],
        correctAnswer: 0,
      },
      {
        id: "58-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「器用」",
        answers: ["きよう", "ぎよう", "きょよう", "ごよう"],
        correctAnswer: 0,
      },
      {
        id: "58-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キ」",
        answers: ["器", "機", "記", "気"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "士",
    back: ["- Sĩ", "- Người, học giả", "- On: シ"],
    questions: [
      {
        id: "59-1",
        content:
          "「弁護士（べんごし）」の「士」の読み方として正しいものを１つ選びなさい。",
        answers: ["し", "じ", "しょ", "しん"],
        correctAnswer: 0,
      },
      {
        id: "59-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「士気」",
        answers: ["しき", "しぎ", "しけ", "しょき"],
        correctAnswer: 0,
      },
      {
        id: "59-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「シ」",
        answers: ["士", "詩", "史", "使"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "討",
    back: ["- Thảo", "- Thảo luận, chinh phạt", "- On: トウ", "- Kun: う・つ"],
    questions: [
      {
        id: "60-1",
        content:
          "「討論（とうろん）」の「討」の読み方として正しいものを１つ選びなさい。",
        answers: ["とう", "と", "どう", "とん"],
        correctAnswer: 0,
      },
      {
        id: "60-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「討議」",
        answers: ["とうぎ", "とうき", "とぎ", "とぎょう"],
        correctAnswer: 0,
      },
      {
        id: "60-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「トウ」",
        answers: ["討", "投", "党", "登"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "崎",
    back: ["- Khi", "- Mũi đất, dốc núi", "- On: キ", "- Kun: さき"],
    questions: [
      {
        id: "62-1",
        content: "「崎」の訓読みとして最もよいものを１つ選びなさい。",
        answers: ["さき", "さか", "さぎ", "さきん"],
        correctAnswer: 0,
      },
      {
        id: "62-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「長崎」",
        answers: ["ながさき", "ながざき", "ながさか", "ちょうざき"],
        correctAnswer: 0,
      },
      {
        id: "62-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「さき」",
        answers: ["崎", "先", "岬", "咲"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "督",
    back: ["- Đốc", "- Giám sát, thúc đẩy", "- On: トク"],
    questions: [
      {
        id: "63-1",
        content:
          "「監督（かんとく）」の「督」の読み方として正しいものを１つ選びなさい。",
        answers: ["とく", "どく", "とき", "とっ"],
        correctAnswer: 0,
      },
      {
        id: "63-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「督促」",
        answers: ["とくそく", "とくしょく", "どくそく", "ときそく"],
        correctAnswer: 0,
      },
      {
        id: "63-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「トク」",
        answers: ["督", "特", "徳", "得"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "授",
    back: [
      "- Thụ",
      "- Nhận, truyền thụ",
      "- On: ジュ",
      "- Kun: さず・ける、さず・かる",
    ],
    questions: [
      {
        id: "64-1",
        content:
          "「授業（じゅぎょう）」の「授」の読み方として正しいものを１つ選びなさい。",
        answers: ["じゅ", "しゅ", "じゅう", "しょう"],
        correctAnswer: 0,
      },
      {
        id: "64-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「授与」",
        answers: ["じゅよ", "しゅよ", "じゅうよ", "じょうよ"],
        correctAnswer: 0,
      },
      {
        id: "64-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ジュ」",
        answers: ["授", "受", "樹", "需"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "催",
    back: ["- Thôi", "- Tổ chức, thúc giục", "- On: サイ", "- Kun: もよお・す"],
    questions: [
      {
        id: "65-1",
        content:
          "「開催（かいさい）」の「催」の読み方として正しいものを１つ選びなさい。",
        answers: ["さい", "ざい", "し", "せい"],
        correctAnswer: 0,
      },
      {
        id: "65-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「催眠」",
        answers: ["さいみん", "ざいみん", "さいべん", "さいめん"],
        correctAnswer: 0,
      },
      {
        id: "65-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「サイ」",
        answers: ["催", "再", "済", "祭"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "及",
    back: [
      "- Cập",
      "- Đến, lan tới",
      "- On: キュウ",
      "- Kun: およ・ぶ、およ・ぼす",
    ],
    questions: [
      {
        id: "66-1",
        content:
          "「及ぶ（およぶ）」の「及」の訓読みとして正しいものを１つ選びなさい。",
        answers: ["およぶ", "およぼす", "きゅう", "きぶ"],
        correctAnswer: 0,
      },
      {
        id: "66-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「普及」",
        answers: ["ふきゅう", "ふきゅ", "ふきゅうう", "ふきゅうん"],
        correctAnswer: 0,
      },
      {
        id: "66-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「キュウ」",
        answers: ["及", "求", "急", "給"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "憲",
    back: ["- Hiến", "- Hiến pháp, quy định", "- On: ケン"],
    questions: [
      {
        id: "67-1",
        content:
          "「憲法（けんぽう）」の「憲」の読み方として正しいものを１つ選びなさい。",
        answers: ["けん", "けい", "げん", "こん"],
        correctAnswer: 0,
      },
      {
        id: "67-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「憲章」",
        answers: ["けんしょう", "けんしょうう", "けんしょうん", "けいしょう"],
        correctAnswer: 0,
      },
      {
        id: "67-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ケン」",
        answers: ["憲", "研", "健", "験"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "離",
    back: [
      "- Li",
      "- Rời xa, tách rời",
      "- On: リ",
      "- Kun: はな・れる、はな・す",
    ],
    questions: [
      {
        id: "68-1",
        content:
          "「離れる（はなれる）」の「離」の訓読みとして正しいものを１つ選びなさい。",
        answers: ["はなれる", "はなす", "はなる", "りる"],
        correctAnswer: 0,
      },
      {
        id: "68-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「離婚」",
        answers: ["りこん", "りこ", "りきょん", "れいこん"],
        correctAnswer: 0,
      },
      {
        id: "68-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「リ」",
        answers: ["離", "利", "里", "理"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "激",
    back: [
      "- Kích",
      "- Mạnh mẽ, kích thích",
      "- On: ゲキ",
      "- Kun: はげ・しい",
    ],
    questions: [
      {
        id: "69-1",
        content:
          "「激しい（はげしい）」の「激」の訓読みとして正しいものを１つ選びなさい.",
        answers: ["はげしい", "つよい", "はやい", "はばしい"],
        correctAnswer: 0,
      },
      {
        id: "69-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「激動」",
        answers: ["げきどう", "げきど", "げっきどう", "げきとう"],
        correctAnswer: 0,
      },
      {
        id: "69-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「ゲキ」",
        answers: ["激", "劇", "撃", "逆"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "摘",
    back: ["- Trích", "- Chọn, trích ra", "- On: テキ", "- Kun: つ・む"],
    questions: [
      {
        id: "70-1",
        content:
          "「摘む（つむ）」の「摘」の訓読みとして正しいものを１つ選びなさい。",
        answers: ["つむ", "てき", "とる", "つまむ"],
        correctAnswer: 0,
      },
      {
        id: "70-2",
        content: "下線部の読み方として正しいものを１つ選びなさい。　「指摘」",
        answers: ["してき", "しせき", "しでき", "してい"],
        correctAnswer: 0,
      },
      {
        id: "70-3",
        content: "次の読み方に当てはまる漢字を１つ選びなさい。「テキ」",
        answers: ["摘", "滴", "適", "敵"],
        correctAnswer: 0,
      },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
