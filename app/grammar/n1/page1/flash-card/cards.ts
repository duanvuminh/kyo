import { FlashCardItem } from "@/lib/components/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～が早いか",
    back: [
      "✨ Ngay khi... thì lập tức...",
      "・Hai hành động xảy ra gần như đồng thời, hành động sau xảy ra ngay lập tức.",
      "📌 Thường dùng để thuật lại một sự việc hoặc phản ứng xảy ra trước mắt.",
      "📌 Không dùng với ý chí, mệnh lệnh, yêu cầu hay thói quen.",
      "📌 Chủ ngữ thường là ngôi 3 hoặc sự việc khách quan.",
    ],
    more: [
      "🧩 V辞書形 + が早いか",
      "🎯 Sắc thái",
      "・Nhấn mạnh phản ứng xảy ra gần như ngay lập tức (≈ 0 giây).",
      "・Người nói chỉ thuật lại diễn biến khách quan.",
      "⚖️ So sánh",
      "・～や否や：Ý nghĩa gần như giống hệt nhưng trang trọng hơn, hay gặp trong văn viết, báo chí.",
      "・～なり：Thường cùng một chủ thể, hành động sau mang tính chủ động hơn.",
      "💡 Mẹo nhớ",
      "・が早いか → Vừa A thì B bùng xảy ra.",
      "・や否や → Ngay khi A thì B (trang trọng hơn).",
      "・Trong rất nhiều trường hợp, が早いか và や否や có thể thay thế cho nhau.",
      "📝 Ví dụ",
      "・ベルが鳴るが早いか、学生たちは教室を飛び出した。",
      "・ドアを開けるが早いか、犬が飛び出した。",
      "・彼女は部屋に入るが早いか、泣き出した。",
      "🔄 Có thể đổi thành や否や",
      "・ベルが鳴るや否や、学生たちは教室を飛び出した。",
      "→ Ý nghĩa gần như không đổi, chỉ trang trọng hơn.",
    ],
    questions: [
      {
        id: "1-1",
        content: "彼は家に帰る___、すぐにゲームを始めた。",
        answers: [
          "が早いか",
          "てからというもの",
          "そばから",
          "にあって",
        ],
        correctAnswer: 0,
        memo: [
          "が早いか: Đúng — vừa về đến nhà đã lập tức chơi game.",
          "てからというもの: Diễn tả sự thay đổi kéo dài từ một thời điểm.",
          "そばから: Diễn tả vừa làm xong lại bị lặp hoặc bị phá hỏng.",
          "にあって: Diễn tả hoàn cảnh đặc biệt, không diễn tả thời gian.",
        ],
      },
      {
        id: "1-2",
        content: "「～が早いか」が使えない文はどれか。",
        answers: [
          "彼女は部屋に入るが早いか、泣き出した。",
          "ドアを開けるが早いか、犬が飛び出した。",
          "私は毎朝起きるが早いか、日記を書く。",
          "子供はケーキを見るが早いか、手を伸ばした。",
        ],
        correctAnswer: 2,
        memo: [
          "彼女は部屋に入るが早いか、泣き出した。: Đúng — vừa vào phòng đã bật khóc.",
          "ドアを開けるが早いか、犬が飛び出した。: Đúng — vừa mở cửa chó đã lao ra.",
          "私は毎朝起きるが早いか、日記を書く。: Sai — が早いか không dùng cho thói quen hay hành động có chủ ý lặp lại.",
          "子供はケーキを見るが早いか、手を伸ばした。: Đúng — vừa thấy bánh đã đưa tay ra.",
        ],
      },
      {
        id: "1-3",
        content: "新聞や小説などの書き言葉で最も自然なのはどれか。",
        answers: [
          "や否や",
          "が早いか",
          "そばから",
          "てからというもの",
        ],
        correctAnswer: 0,
        memo: [
          "や否や: Đúng — rất hay dùng trong văn viết, báo chí, tiểu thuyết.",
          "が早いか: Cũng đúng trong nhiều trường hợp nhưng kém trang trọng hơn.",
          "そばから: Diễn tả vừa làm xong lại xảy ra điều tương tự.",
          "てからというもの: Diễn tả sự thay đổi kéo dài từ một thời điểm.",
        ],
      }
    ],
  },
  {
    front: "～や・～や否や",
    back: [
      "✨ Ngay sau khi (xảy ra gần như đồng thời)",
      "・Ví dụ: Vừa thoáng thấy mặt người đó đã nhận ra ngay.",
      "📌 Không phân biệt chủ thể hai vế. Không thể hiện ý chí.",
    ],
    more: [
      "🧩 V辞書形 + や / V辞書形 + や否や",
      "⚖️ ～が早いか (thường ngôi 3, không cùng chủ ngữ bắt buộc), ～なり (cả 2 vế cùng chủ ngữ ngôi 3)",
      "📝 Ví dụ:",
      "・その人の顔を一目見るや、30年前に別れた恋人だとわかった。",
    ],
    questions: [
      {
        id: "1-4",
        content: "子供たちはプールに入る___、大声で騒ぎ始めた。",
        answers: [
          "や否や",
          "てからというもの",
          "なり",
          "そばから",
        ],
        correctAnswer: 0,
        memo: [
          "や否や: Ngay khi vừa bước vào hồ đã ồn ào — đồng thời, không phân biệt chủ thể. (Đúng)",
          "てからというもの: Trạng thái biến đổi kéo dài, không phải hành động tức thì.",
          "なり: Cũng ngay sau khi, nhưng yêu cầu cả 2 vế cùng chủ ngữ ngôi 3.",
          "そばから: Việc lặp lại không mong muốn, không phù hợp.",
        ],
      },
      {
        id: "1-5",
        content: "「～や否や」と同じ意味で、両方の主語が同じでなければならないものはどれか。",
        answers: [
          "～が早いか",
          "～なり",
          "～てからというもの",
          "～にあって",
        ],
        correctAnswer: 1,
        memo: [
          "～が早いか: Thường ngôi 3 nhưng không bắt buộc cùng chủ ngữ.",
          "～なり: Cả 2 vế phải cùng chủ ngữ ngôi 3. (Đúng)",
          "～てからというもの: Biến đổi kéo dài, không liên quan.",
          "～にあって: Hoàn cảnh đặc biệt, không liên quan.",
        ],
      }
    ],
  },
  {
    front: "～なり",
    back: [
      "✨ Ngay sau khi... thì lập tức...",
      "・Hai hành động xảy ra gần như đồng thời, hành động sau xảy ra ngay lập tức.",
      "📌 Thường dùng với chủ ngữ ngôi 3.",
      "📌 Hai vế thường cùng chủ ngữ.",
      "📌 Vế sau thường là hành động bất ngờ hoặc ngoài dự đoán.",
      "📌 Không dùng với ý chí, mệnh lệnh, yêu cầu hay thói quen lặp lại.",
    ],
    more: [
      "🧩 V辞書形 + なり",
      "⚖️ So sánh:",
      "・～や否や: Khách quan hơn, không yêu cầu cùng chủ ngữ.",
      "・～が早いか: Chỉ nhấn mạnh hai hành động xảy ra cực nhanh, không bắt buộc cùng chủ ngữ.",
      "・～なり: Thường cùng chủ ngữ và vế sau thường là hành động bất ngờ hoặc ngoài dự đoán.",
      "💬 Thường dùng để thuật lại một sự việc đã xảy ra.",
      "📝 Ví dụ:",
      "・部屋に入ってくるなり、大きな声で怒鳴った。",
      "・彼は家へ帰るなり、ベッドに倒れ込んだ。",
    ],
    questions: [
      {
        id: "1-6",
        content: "彼女は電話を切る___、泣き崩れた。",
        answers: [
          "なり",
          "や否や",
          "が早いか",
          "てからというもの",
        ],
        correctAnswer: 0,
        memo: [
          "なり: Cắt máy xong lập tức òa khóc. Cùng chủ ngữ, hành động xảy ra ngay và mang tính bất ngờ. (Đúng)",
          "や否や: Cũng diễn tả 'ngay sau khi', nhưng không yêu cầu cùng chủ ngữ.",
          "が早いか: Nhấn mạnh hai hành động nối tiếp cực nhanh, không bắt buộc cùng chủ ngữ.",
          "てからというもの: Diễn tả sự thay đổi kéo dài sau một mốc thời gian, không phải hành động xảy ra tức thì.",
        ],
      },
      {
        id: "1-7",
        content: "「～なり」が使えない文はどれか。",
        answers: [
          "上司は席に着くなり、書類に目を通した。",
          "ドアを開けるなり、冷たい風が入ってきた。",
          "私は毎朝起きるなり、ジョギングをする。",
          "彼は家に帰るなり、眠ってしまった。",
        ],
        correctAnswer: 2,
        memo: [
          "上司は席に着くなり、書類に目を通した。: Đúng — Hai hành động xảy ra liên tiếp, cùng chủ ngữ.",
          "ドアを開けるなり、冷たい風が入ってきた。: Đúng — Gió ùa vào ngay khi mở cửa, diễn tả sự việc xảy ra tức thì.",
          "私は毎朝起きるなり、ジョギングをする。: Sai — ～なり không dùng cho thói quen hằng ngày, cũng hiếm dùng với ngôi 1. (Đúng)",
          "彼は家に帰るなり、眠ってしまった。: Đúng — Về đến nhà lập tức ngủ, cùng chủ ngữ và hành động xảy ra ngay.",
        ],
      }
    ],
  },
  {
    front: "～そばから",
    back: [
      "✨ Mới vừa xong...lại nữa (lặp đi lặp lại)",
      "・Ví dụ: Mỗi ngày vừa viết xong reply thì mail mới lại đến liên tiếp.",
      "📌 Sự việc tiêu cực, lặp lại. Người viết không mong muốn.",
    ],
    more: [
      "🧩 V辞書形/た形 + そばから",
      "⚖️ ～が早いか (một lần, tức thì), ～てからというもの (biến đổi kéo dài không lặp)",
      "💬 Vế sau luôn là việc tiêu cực hoặc không mong muốn xảy ra ngay sau.",
      "📝 Ví dụ:",
      "・返事を書くそばから、新しいメールが届く。",
    ],
    questions: [
      {
        id: "1-8",
        content: "掃除する___、子供たちがまた散らかしてしまう。",
        answers: [
          "そばから",
          "が早いか",
          "や否や",
          "てからというもの",
        ],
        correctAnswer: 0,
        memo: [
          "そばから: Vừa dọn xong lại bị bừa bãi — việc tiêu cực lặp đi lặp lại. (Đúng)",
          "が早いか: Một lần, phản ứng tức thì, không mang nghĩa lặp lại.",
          "や否や: Ngay sau khi, không nhấn yếu tố lặp lại và tiêu cực.",
          "てからというもの: Biến đổi kéo dài từ mốc, không phải lặp lại liên tục.",
        ],
      },
      {
        id: "1-9",
        content: "「そばから」に続く文として最も自然なものはどれか。",
        answers: [
          "覚える___、すぐ忘れてしまう",
          "家に帰る___、すぐに寝た",
          "春になる___、桜が咲く",
          "試験に合格する___、留学の準備を始めた",
        ],
        correctAnswer: 0,
        memo: [
          "覚える___、すぐ忘れてしまう: Học xong lại quên — việc tiêu cực lặp lại, đúng dùng そばから. (Đúng)",
          "家に帰る___、すぐに寝た: Hành động một lần, phù hợp hơn với が早いか / なり.",
          "春になる___、桜が咲く: Hiện tượng tự nhiên tốt đẹp, không phải lặp lại tiêu cực.",
          "試験に合格する___、留学の準備を始めた: Sự kiện một lần tích cực, không phù hợp そばから.",
        ],
      }
    ],
  },
  {
    front: "～てからというもの（は）",
    back: [
      "✨ Kể từ khi...thì (trạng thái biến đổi và tiếp diễn mãi)",
      "・Ví dụ: Kể từ khi con gái rời nhà vào đại học, trong nhà trở nên buồn tẻ.",
      "📌 Không dùng cho thói quen hằng ngày. Biến đổi cụ thể, rõ rệt.",
    ],
    more: [
      "🧩 Vて形 + からというもの（は）",
      "⚖️ ～てから (sau khi, không nhấn trạng thái kéo dài), ～てからというもの nhấn biến đổi mãi tới nay",
      "📝 Ví dụ:",
      "・娘が家を出て行ってからというもの、家の中がひっそりとしてしまった。",
    ],
    questions: [
      {
        id: "1-10",
        content: "転職し___、生活リズムがすっかり変わった。",
        answers: [
          "てからというもの",
          "が早いか",
          "そばから",
          "や否や",
        ],
        correctAnswer: 0,
        memo: [
          "てからというもの: Kể từ khi chuyển việc, nhịp sống thay đổi hẳn và tiếp diễn. (Đúng)",
          "が早いか: Phản ứng tức thì một lần, không diễn tả biến đổi kéo dài.",
          "そばから: Lặp lại tiêu cực, không phù hợp.",
          "や否や: Ngay sau khi, không nhấn trạng thái kéo dài.",
        ],
      },
      {
        id: "1-11",
        content: "「てからというもの」が使えない文はどれか。",
        answers: [
          "日本に来てからというもの、毎日忙しい。",
          "結婚してからというもの、お酒をやめた。",
          "毎朝起きてからというもの、コーヒーを飲む。",
          "引っ越してからというもの、通勤時間が長くなった。",
        ],
        correctAnswer: 2,
        memo: [
          "日本に来てからというもの、毎日忙しい。: Hợp lệ — từ khi sang Nhật, biến đổi kéo dài.",
          "結婚してからというもの、お酒をやめた。: Hợp lệ — từ khi kết hôn, thay đổi rõ ràng.",
          "毎朝起きてからというもの、コーヒーを飲む。: Sai — thói quen hằng ngày, không phải biến đổi cụ thể. (Đúng)",
          "引っ越してからというもの、通勤時間が長くなった。: Hợp lệ — từ khi chuyển nhà, đi làm xa hơn.",
        ],
      }
    ],
  },
  {
    front: "～にあって・～にあっても",
    back: [
      "✨ Chính vì (hoàn cảnh đặc biệt) / Bất chấp (hoàn cảnh đặc biệt)",
      "・Ví dụ: Lạc đà chính vì ở vùng khô hạn nên dự trữ dinh dưỡng mà tồn tại.",
      "📌 Nhấn mạnh sự đặc biệt của trạng thái, thời kì, địa điểm.",
    ],
    more: [
      "🧩 N + にあって / N + にあっても",
      "⚖️ にあって → kết quả tất nhiên từ hoàn cảnh đó; にあっても → bất chấp hoàn cảnh, kết quả trái ngược",
      "📝 Ví dụ:",
      "・らくだは乾燥地にあって、こぶに栄養を蓄えることで生き延びる。",
      "・困難な状況にあっても、彼は笑顔を失わなかった。",
    ],
    questions: [
      {
        id: "1-12",
        content: "非常事態___、リーダーは冷静な判断を下した。",
        answers: [
          "にあっても",
          "が早いか",
          "てからというもの",
          "そばから",
        ],
        correctAnswer: 0,
        memo: [
          "にあっても: Bất chấp tình trạng khẩn cấp, người lãnh đạo vẫn bình tĩnh — trái ngược. (Đúng)",
          "が早いか: Phản ứng tức thì, không diễn tả hoàn cảnh.",
          "てからというもの: Biến đổi kéo dài, không phù hợp.",
          "そばから: Lặp lại tiêu cực, không phù hợp.",
        ],
      },
      {
        id: "1-13",
        content: "「にあって」と「にあっても」の違いとして正しいものはどれか。",
        answers: [
          "にあって は逆接、にあっても は順接",
          "にあって は順接（当然の結果）、にあっても は逆接（反する結果）",
          "どちらも同じ意味で使える",
          "にあって は過去、にあっても は現在のみ",
        ],
        correctAnswer: 1,
        memo: [
          "にあって は逆接、にあっても は順接: Ngược lại — にあって mới là thuận tiếp.",
          "にあって は順接（当然の結果）、にあっても は逆接（反する結果）: にあって → kết quả tất nhiên; にあっても → bất chấp. (Đúng)",
          "どちらも同じ意味で使える: Sai — hai mẫu có sắc thái rõ ràng khác nhau.",
          "にあって は過去、にあっても は現在のみ: Sai — không phân biệt thì.",
        ],
      }
    ],
  }
];
