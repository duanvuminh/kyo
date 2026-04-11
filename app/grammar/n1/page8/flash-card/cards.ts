import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～ところを",
    back: [
      "✨ Mặc dù...vậy mà / Xin lỗi vì đã làm phiền lúc...",
      "・Ví dụ: Phải báo cáo ngay lập tức vậy mà đã để trễ, thật thành thật xin lỗi.",
      "📌 Thể hiện sự xin lỗi, quan tâm vì hành động không phù hợp hoàn cảnh đối phương.",
    ],
    more: [
      "🧩 体通常形（Aな-な / N-の）+ ところを",
      "⚖️ ～のに (cũng nghịch tiếp, nhưng mang tính phàn nàn), ところを thiên về xin lỗi, lịch sự",
      "💬 Thường dùng trong văn nói trang trọng: 「お忙しいところを」「ご多忙のところを」",
      "📝 Ví dụ:",
      "・すぐにご報告しなければならないところを、遅れてしまい申し訳ありません。",
    ],
    questions: [
      {
        id: "8-1",
        content: "お忙しい___、わざわざお越しいただきありがとうございます。",
        answers: ["ところを", "ものを", "とはいえ", "といえども"],
        correctAnswer: 0,
        memo: [
          "ところを: Mặc dù bận rộn vậy mà vẫn đặc biệt đến đây, xin cảm ơn — lịch sự, xin lỗi vì đã làm phiền. (Đúng)",
          "ものを: Tiếc nuối/bất mãn vì không làm điều phù hợp, không hợp ngữ cảnh cảm ơn.",
          "とはいえ: Mặc dù vậy — không phù hợp cấu trúc cảm ơn lịch sự này.",
          "といえども: Cho dù — không phù hợp ngữ cảnh cảm ơn.",
        ],
      },
      {
        id: "8-2",
        content: "「ところを」と「のに」の違いとして正しいものはどれか。",
        answers: [
          "どちらも不満・苦情を表す",
          "ところを は謝罪・丁寧な場面、のに は不満・文句を表すことが多い",
          "のに は謝罪、ところを は不満を表す",
          "どちらも全く同じ意味",
        ],
        correctAnswer: 1,
        memo: [
          "どちらも不満・苦情を表す: Sai — ところを thiên về xin lỗi, lịch sự.",
          "ところを は謝罪・丁寧な場面、のに は不満・文句を表すことが多い: Đúng. (Đúng)",
          "のに は謝罪、ところを は不満を表す: Ngược lại.",
          "どちらも全く同じ意味: Sai.",
        ],
      },
    ],
  },
  {
    front: "～ものを",
    back: [
      "✨ Nếu xử lý phù hợp thì đã... (tiếc nuối / bất mãn)",
      "・Ví dụ: Nếu bình tĩnh thì không bị sai lầm rồi đằng này cứ làm miễn cưỡng lúc nào cũng sai.",
      "📌 Câu giả định trái với thực tế. Thể hiện tiếc nuối hoặc bất mãn.",
    ],
    more: [
      "🧩 V・Aい通常形（Aな-な）+ ものを",
      "⚖️ ～のに (cũng tiếc nuối/bất mãn), ものを văn vẻ hơn, thường kết thúc câu",
      "💬 Vế trước là điều lẽ ra nên làm, vế sau (hoặc ngữ cảnh) là thực tế tồi tệ hơn.",
      "📝 Ví dụ:",
      "・落ち着いていれば誤解されなかったものを、強引なやり方がいつも失敗を招く。",
    ],
    questions: [
      {
        id: "8-3",
        content: "早く言えばよかった___、今さら言っても遅い。",
        answers: ["ものを", "ところを", "とはいえ", "と思いきや"],
        correctAnswer: 0,
        memo: [
          "ものを: Nếu nói sớm thì tốt rồi đằng này... — tiếc nuối vì không làm điều lẽ ra nên làm. (Đúng)",
          "ところを: Xin lỗi vì hành động không phù hợp hoàn cảnh, không phù hợp ở đây.",
          "とはいえ: Mặc dù vậy — không nhấn tiếc nuối.",
          "と思いきや: Đã nghĩ thế mà... — không phù hợp.",
        ],
      },
      {
        id: "8-4",
        content: "「ものを」の後ろで最も多い表現はどれか。",
        answers: [
          "命令文（～しろ）",
          "感謝の表現（～ありがとう）",
          "文末省略または不満・批判の表現",
          "推量（～だろう）",
        ],
        correctAnswer: 2,
        memo: [
          "命令文（～しろ）: Sai — ものを không đi với mệnh lệnh.",
          "感謝の表現（～ありがとう）: Sai — ものを mang sắc thái tiêu cực.",
          "文末省略または不満・批判の表現: Đúng — ものを thường kết thúc câu (省略) hoặc theo sau là bất mãn. (Đúng)",
          "推量（～だろう）: Sai — không phải dạng kết thúc tiêu biểu.",
        ],
      },
    ],
  },
  {
    front: "～とはいえ",
    back: [
      "✨ Mặc dù (biết vậy nhưng vẫn...)",
      "・Ví dụ: Mặc dù đang ăn kiêng nhưng món ăn đã mang ra mà không động vào thì thất lễ.",
      "📌 Biết thực tế là vậy nhưng đưa ra xử lý tốt hơn hoặc lời khuyên.",
    ],
    more: [
      "🧩 N / V通常形 + とはいえ",
      "⚖️ ～とはいっても (cũng tương tự, khẩu ngữ hơn), ～といえども (trang trọng hơn)",
      "💬 Thừa nhận thực tế ở vế trước, vế sau đưa ra quan điểm/hành động trái ngược.",
      "📝 Ví dụ:",
      "・ダイエット中とはいえ、出された料理に手をつけないのは失礼だと思う。",
    ],
    questions: [
      {
        id: "8-5",
        content: "冬___、今日は暖かくて過ごしやすい。",
        answers: ["とはいえ", "ものを", "ところを", "と思いきや"],
        correctAnswer: 0,
        memo: [
          "とはいえ: Mặc dù là mùa đông nhưng hôm nay ấm và dễ chịu — thừa nhận thực tế, vế sau khác kỳ vọng. (Đúng)",
          "ものを: Tiếc nuối/bất mãn — không phù hợp ngữ cảnh trung tính này.",
          "ところを: Xin lỗi vì hành động không phù hợp — không phù hợp.",
          "と思いきや: Đã nghĩ thế mà — cũng có thể nhưng とはいえ tự nhiên hơn ở đây.",
        ],
      },
    ],
  },
  {
    front: "～といえども",
    back: [
      "✨ Cho dù / Dù là (vẫn phải theo quy tắc)",
      "・Ví dụ: Dù là trẻ vị thành niên nhưng cũng không được làm tùy tiện ở nơi công cộng.",
      "📌 Biết sự thật nhưng vẫn đưa ra chỉ trích hoặc lời khuyên. Trang trọng hơn とはいえ.",
    ],
    more: [
      "🧩 N / V通常形 + といえども",
      "⚖️ ～とはいえ (cũng mặc dù, ít trang trọng hơn), といえども thường văn viết, trang trọng",
      "📝 Ví dụ:",
      "・未成年者といえども、公共の場で好き勝手にしてはいけない。",
    ],
    questions: [
      {
        id: "8-6",
        content: "プロの選手___、練習を怠れば実力は落ちる。",
        answers: ["といえども", "とはいえ", "ものを", "ところを"],
        correctAnswer: 0,
        memo: [
          "といえども: Dù là vận động viên chuyên nghiệp cũng không được lười luyện tập — trang trọng, đưa ra quy tắc. (Đúng)",
          "とはいえ: Cũng có thể dùng nhưng といえども trang trọng hơn, phù hợp ngữ cảnh quy tắc chung.",
          "ものを: Tiếc nuối/bất mãn — không phù hợp.",
          "ところを: Xin lỗi vì hành động không phù hợp — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～と思いきや",
    back: [
      "✨ Đã nghĩ rằng thế mà (sự thật trái ngược hoàn toàn)",
      "・Ví dụ: Vì bài dễ nên nghĩ được điểm tối đa vậy mà quên ghi tên nên bị điểm 0.",
      "📌 Sự thật trái ngược với điều tác giả dự đoán. Thường gây ngạc nhiên.",
    ],
    more: [
      "🧩 V通常形 + と思いきや",
      "⚖️ ～かと思ったら (cũng vừa nghĩ thì đã, khẩu ngữ hơn), と思いきや nhấn sự trái ngược bất ngờ",
      "📝 Ví dụ:",
      "・満点を取れたと思いきや、名前を書き忘れて0点だった。",
    ],
    questions: [
      {
        id: "8-7",
        content: "雨が降る___、急に晴れてきた。",
        answers: ["と思いきや", "とはいえ", "ものを", "といえども"],
        correctAnswer: 0,
        memo: [
          "と思いきや: Tưởng trời sắp mưa thì bỗng nhiên trời đẹp — sự thật trái ngược hoàn toàn với dự đoán. (Đúng)",
          "とはいえ: Mặc dù — không nhấn sự bất ngờ, trái ngược.",
          "ものを: Tiếc nuối/bất mãn — không phù hợp ngữ cảnh này.",
          "といえども: Cho dù — không phù hợp.",
        ],
      },
      {
        id: "8-8",
        content: "「と思いきや」の特徴として正しいものはどれか。",
        answers: [
          "予想通りの結果を表す",
          "予想と全く逆の結果・事実を表す",
          "第三者への批判を表す",
          "過去の後悔を表す",
        ],
        correctAnswer: 1,
        memo: [
          "予想通りの結果を表す: Sai — と思いきや biểu thị kết quả trái ngược với dự đoán.",
          "予想と全く逆の結果・事実を表す: Đúng — sự thật trái ngược hoàn toàn với điều tác giả nghĩ. (Đúng)",
          "第三者への批判を表す: Sai — không phải mục đích của mẫu này.",
          "過去の後悔を表す: Đây là đặc điểm của ものを, không phải と思いきや.",
        ],
      },
    ],
  },
];
