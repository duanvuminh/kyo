import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～を皮切りに（して）・～を皮切りとして",
    back: [
      "✨ Kể từ khi (khởi đầu rồi lan rộng ra)",
      "・Ví dụ: Tác giả kể từ cuốn tiểu thuyết về bố thì liên tiếp ra tác phẩm bom tấn.",
      "📌 Không dùng cho hiện tượng tự nhiên hoặc việc xấu.",
    ],
    more: [
      "🧩 N + を皮切りに（して） / N + を皮切りとして",
      "⚖️ ～を契機に (cũng là bước ngoặt, nhưng không nhấn lan rộng theo số nhiều)",
      "💬 Sự việc bắt đầu từ N cụ thể rồi mở rộng, phát triển theo hướng tốt.",
      "📝 Ví dụ:",
      "・父親のことを書いた小説を皮切りに、次々とヒット作を発表した。",
    ],
    questions: [
      {
        id: "2-1",
        content: "この歌手は東京公演___、全国ツアーを成功させた。",
        answers: ["を皮切りに", "を限りに", "をもって", "に至るまで"],
        correctAnswer: 0,
        memo: [
          "を皮切りに: Từ buổi biểu diễn Tokyo làm bước khởi đầu rồi lan rộng toàn quốc. (Đúng)",
          "を限りに: Chấm dứt từ N, nghĩa trái ngược — kết thúc chứ không lan rộng.",
          "をもって: Thông báo kết thúc chính thức, không phải mở đầu.",
          "に至るまで: Phạm vi lan rộng cực đoan, không nhấn điểm khởi đầu.",
        ],
      },
      {
        id: "2-2",
        content: "「を皮切りに」が使えない文はどれか。",
        answers: [
          "この映画を皮切りに、シリーズが続々と公開された。",
          "春を皮切りに、花が次々と咲いた。",
          "初公演を皮切りに、海外にも活動の場を広げた。",
          "このイベントを皮切りに、全国で同様の活動が始まった。",
        ],
        correctAnswer: 1,
        memo: [
          "この映画を皮切りに、シリーズが続々と公開された。: Hợp lệ — từ bộ phim đầu tiên rồi ra tiếp.",
          "春を皮切りに、花が次々と咲いた。: Sai — hiện tượng tự nhiên, không dùng を皮切りに. (Đúng)",
          "初公演を皮切りに、海外にも活動の場を広げた。: Hợp lệ — từ buổi đầu rồi mở rộng.",
          "このイベントを皮切りに、全国で同様の活動が始まった。: Hợp lệ — từ sự kiện này lan ra toàn quốc.",
        ],
      },
    ],
  },
  {
    front: "～に至るまで",
    back: [
      "✨ Đến cả / Đến mức (phạm vi lan rộng quá mức)",
      "・Ví dụ: Trường nghiêm về trang phục, đến cả kiểu tóc và độ dài váy cũng bị nhắc.",
      "📌 Thường đưa 2 ví dụ: tổng quát trước, cực đoan/chi tiết sau.",
    ],
    more: [
      "🧩 N + に至るまで",
      "⚖️ ～まで (đến, bình thường), に至るまで nhấn phạm vi vượt mức dự kiến",
      "📝 Ví dụ:",
      "・スカートの長さに至るまで注意された。",
    ],
    questions: [
      {
        id: "2-3",
        content: "彼は音楽はもちろん、楽器の歴史___詳しい。",
        answers: ["に至るまで", "を皮切りに", "を限りに", "といったところ"],
        correctAnswer: 0,
        memo: [
          "に至るまで: Không chỉ âm nhạc mà đến cả lịch sử nhạc cụ — phạm vi cực đoan. (Đúng)",
          "を皮切りに: Mở đầu rồi lan rộng, không phù hợp mô tả kiến thức.",
          "を限りに: Chấm dứt tại đó, nghĩa trái ngược.",
          "といったところ: Mức tối đa thấp, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～を限りに",
    back: [
      "✨ Đến đây là hết / Kể từ hôm nay (chấm dứt việc kéo dài)",
      "・Ví dụ: Kể từ hôm nay tôi sẽ bỏ thuốc lá.",
      "📌 Dùng trong tuyên ngôn, lời hứa cá nhân. Đi với từ chỉ thời gian cụ thể.",
    ],
    more: [
      "🧩 N + を限りに",
      "⚖️ ～をもって (thông báo kết thúc chính thức, trang trọng hơn)",
      "💬 Thường đi với: 今日、今月、今回、これ",
      "📝 Ví dụ:",
      "・今日を限りに、タバコをやめる。",
    ],
    questions: [
      {
        id: "2-4",
        content: "この大会___、現役を引退することにしました。",
        answers: ["を限りに", "を皮切りに", "に至るまで", "といったところ"],
        correctAnswer: 0,
        memo: [
          "を限りに: Kể từ giải đấu này về hưu — chấm dứt sự nghiệp thi đấu. (Đúng)",
          "を皮切りに: Khởi đầu rồi mở rộng, nghĩa ngược lại.",
          "に至るまで: Phạm vi lan rộng, không phù hợp ngữ cảnh kết thúc.",
          "といったところ: Mức tối đa thấp, không phù hợp.",
        ],
      },
      {
        id: "2-5",
        content: "「を限りに」と「をもって」の違いとして正しいものはどれか。",
        answers: [
          "を限りに は文語的、をもって は口語的",
          "どちらも全く同じ状況で使える",
          "を限りに は宣言・誓いに多く、をもって は公式な終了通知に多い",
          "を限りに は未来のみ、をもって は過去のみ使える",
        ],
        correctAnswer: 2,
        memo: [
          "を限りに は文語的、をもって は口語的: Ngược lại — をもって mới trang trọng hơn.",
          "どちらも全く同じ状況で使える: Sai — ngữ cảnh dùng khác nhau.",
          "を限りに は宣言・誓いに多く、をもって は公式な終了通知に多い: Đúng. (Đúng)",
          "を限りに は未来のみ、をもって は過去のみ使える: Sai — không phân biệt thì như vậy.",
        ],
      },
    ],
  },
  {
    front: "～をもって",
    back: [
      "✨ Sẽ chấm dứt vào / Kết thúc tại (thông báo chính thức)",
      "・Ví dụ: Hạn tiếp nhận hồ sơ kết thúc vào ngày 20 tháng 2.",
      "📌 Thông báo chính thức của tổ chức. Đi với kì hạn thời gian cụ thể.",
    ],
    more: [
      "🧩 N + をもって",
      "⚖️ ～を限りに (tuyên ngôn cá nhân), をもって (thông báo chính thức tổ chức)",
      "💬 Thường thấy trong thông báo ngừng kinh doanh, hết hạn nộp đơn, bế mạc...",
      "📝 Ví dụ:",
      "・２月20日をもって、入学願書の受付を終了いたします。",
    ],
    questions: [
      {
        id: "2-6",
        content: "本日___、当店の営業を終了させていただきます。",
        answers: ["をもって", "を限りに", "を皮切りに", "に至るまで"],
        correctAnswer: 0,
        memo: [
          "をもって: Thông báo chính thức kết thúc hoạt động kinh doanh hôm nay. (Đúng)",
          "を限りに: Cũng có thể dùng nhưng をもって trang trọng hơn trong văn thông báo.",
          "を皮切りに: Khởi đầu rồi mở rộng, nghĩa trái ngược.",
          "に至るまで: Phạm vi cực đoan, không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～といったところ",
    back: [
      "✨ Nhiều nhất là / Chỉ có (mức tối đa không cao)",
      "・Ví dụ: Ngày nóng nhất vùng này cũng chỉ 26, 27 độ.",
      "📌 Dù mức cao nhất thì cũng không cao lắm. Dùng với số lượng, giá trị nhỏ.",
    ],
    more: [
      "🧩 N・V辞書形 + といったところ",
      "⚖️ ～くらい (khoảng, trung tính), といったところ nhấn mức tối đa vẫn còn thấp",
      "📝 Ví dụ:",
      "・この地域では夏でも暑くない。暑い日でも26、7度といったところです。",
    ],
    questions: [
      {
        id: "2-7",
        content: "今月の売上は、よくて50万円___だろう。",
        answers: ["といったところ", "を皮切りに", "を限りに", "に至るまで"],
        correctAnswer: 0,
        memo: [
          "といったところ: Dù tốt nhất cũng chỉ 50 man — mức tối đa nhưng không cao. (Đúng)",
          "を皮切りに: Khởi đầu lan rộng, không phù hợp.",
          "を限りに: Chấm dứt tại đó, không phù hợp.",
          "に至るまで: Phạm vi cực đoan, không phù hợp.",
        ],
      },
      {
        id: "2-8",
        content: "彼の日本語レベルは、日常会話ができる___だ。",
        answers: ["といったところ", "に至るまで", "を限りに", "を皮切りに"],
        correctAnswer: 0,
        memo: [
          "といったところ: Trình độ tối đa cũng chỉ đến mức hội thoại thường ngày. (Đúng)",
          "に至るまで: Phạm vi lan rộng, không phù hợp mô tả mức độ.",
          "を限りに: Chấm dứt, không phù hợp.",
          "を皮切りに: Khởi đầu, không phù hợp.",
        ],
      },
    ],
  },
];
