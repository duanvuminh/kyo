import { FlashCardItem } from "@/shared/component/flash-card/flash-card";
import { Question } from "@/shared/types/models/question";

export const cards: FlashCardItem[] = [
  {
    front: "～いかんだ",
    back: [
      "✨ Tùy thuộc vào (kết quả thay đổi theo N)",
      "・Ví dụ: Giải vô địch có được tổ chức ở quốc gia này hay không tùy thuộc vào sự hợp lực của nhân dân.",
      "📌 Vế sau thường là phán đoán: だろう、かもしれない. Đi với từ có biên độ thay đổi.",
    ],
    more: [
      "🧩 N + いかんだ / N + いかんで / N + いかんによっては",
      "⚖️ ～によって (tùy theo, thông thường), いかんだ trang trọng hơn, thường văn viết",
      "📝 Ví dụ:",
      "・国民の協力いかんだ。",
    ],
    questions: [
      new Question(
        "5-1",
        "今後の交渉結果___、プロジェクトが中止になるかもしれない。",
        ["いかんによっては", "をものともせず", "をよそに", "ならいざしらず"],
        0,
        [],
        undefined,
        [
          "いかんによっては: Tùy thuộc vào kết quả đàm phán — có thể dẫn đến dừng dự án. (Đúng)",
          "をものともせず: Bất chấp, vượt qua khó khăn — không phù hợp.",
          "をよそに: Phớt lờ trạng thái xung quanh — không phù hợp.",
          "ならいざしらず: Nếu là... thì không nói làm gì — không phù hợp.",
        ]
      ),
    ],
  },
  {
    front: "～いかんにかかわらず・によらず・を問わず",
    back: [
      "✨ Không phụ thuộc vào / Bất kể (điều gì đó vẫn thành lập)",
      "・Ví dụ: Bất kể nội dung gì, câu hỏi liên quan đến thông tin cá nhân thì không trả lời.",
      "📌 Dùng với từ có biên độ thay đổi: 理由、内容、結果...",
    ],
    more: [
      "🧩 N（の）+ いかんにかかわらず / いかんによらず / いかんを問わず",
      "⚖️ ～にかかわらず (bất kể, thông thường), いかんにかかわらず trang trọng, văn viết",
      "📝 Ví dụ:",
      "・内容のいかんにかかわらず、個人情報に関する質問にはお答えしません。",
    ],
    questions: [
      new Question(
        "5-2",
        "理由の___、無断欠席は認められません。",
        ["いかんにかかわらず", "いかんだ", "をよそに", "をものともせず"],
        0,
        [],
        undefined,
        [
          "いかんにかかわらず: Bất kể lý do là gì, vắng mặt không xin phép đều không được chấp nhận. (Đúng)",
          "いかんだ: Tùy thuộc vào — nghĩa ngược lại, kết quả thay đổi theo lý do.",
          "をよそに: Phớt lờ, không phù hợp cấu trúc.",
          "をものともせず: Vượt qua, không phù hợp.",
        ]
      ),
    ],
  },
  {
    front: "～をものともせず（に）",
    back: [
      "✨ Bất chấp / Vượt qua (hoàn cảnh tồi tệ nhưng can đảm tiến lên)",
      "・Ví dụ: Anh ấy đã bất chấp khuyết tật cơ thể, hành động hết sức mình.",
      "📌 Đi với hoàn cảnh khó khăn, nguy hiểm, bệnh tật. Không dùng để nói về bản thân.",
    ],
    more: [
      "🧩 N + をものともせず（に）",
      "⚖️ ～にもかかわらず (mặc dù, trung tính), をものともせず nhấn sự dũng cảm, ý chí vượt qua",
      "💬 Thường dùng để ca ngợi người thứ 3.",
      "📝 Ví dụ:",
      "・体の障害をものともせずに、全力で活動した。",
    ],
    questions: [
      new Question(
        "5-3",
        "彼女は病気___、毎日練習を続けた。",
        ["をものともせず", "をよそに", "いかんにかかわらず", "ならいざしらず"],
        0,
        [],
        undefined,
        [
          "をものともせず: Bất chấp bệnh tật, vẫn tiếp tục luyện tập mỗi ngày — dũng cảm vượt qua. (Đúng)",
          "をよそに: Phớt lờ xung quanh, không nhấn sự dũng cảm vượt qua.",
          "いかんにかかわらず: Bất kể — không phù hợp cấu trúc N + をものともせず.",
          "ならいざしらず: Nếu là... thì không nói làm gì — không phù hợp.",
        ]
      ),
      new Question(
        "5-4",
        "「をものともせず」が使えない文はどれか。",
        [
          "嵐をものともせず、漁師たちは海に出た。",
          "危険をものともせず、救助隊員は現場に向かった。",
          "私は疲れをものともせず、徹夜で仕事をした。",
          "批判をものともせず、彼は改革を進めた。",
        ],
        2,
        [],
        undefined,
        [
          "嵐をものともせず、漁師たちは海に出た。: Hợp lệ — bất chấp bão, ngôi 3.",
          "危険をものともせず、救助隊員は現場に向かった。: Hợp lệ — bất chấp nguy hiểm, ngôi 3.",
          "私は疲れをものともせず、徹夜で仕事をした。: Sai — không dùng để nói về bản thân (ngôi 1). (Đúng)",
          "批判をものともせず、彼は改革を進めた。: Hợp lệ — bất chấp phê bình, ngôi 3.",
        ]
      ),
    ],
  },
  {
    front: "～をよそに",
    back: [
      "✨ Không bận tâm đến / Phớt lờ (trạng thái xung quanh)",
      "・Ví dụ: Hoàn toàn không bận tâm đến lo lắng của gia đình, đứa trẻ từ ngày xuất viện đã ra ngoài chơi.",
      "📌 Hành động phớt lờ tình trạng xung quanh. Thể hiện ngạc nhiên hoặc thán phục.",
    ],
    more: [
      "🧩 N + をよそに",
      "⚖️ ～にもかかわらず (mặc dù, trung tính), をよそに nhấn sự phớt lờ có chủ ý, thường gây ngạc nhiên",
      "📝 Ví dụ:",
      "・家族の心配をよそに、子供は退院した日から外で遊んでいた。",
    ],
    questions: [
      new Question(
        "5-5",
        "周囲の反対___、彼は会社を辞めて起業した。",
        ["をよそに", "をものともせず", "いかんにかかわらず", "ならいざしらず"],
        0,
        [],
        undefined,
        [
          "をよそに: Phớt lờ sự phản đối xung quanh để nghỉ việc khởi nghiệp — gây ngạc nhiên. (Đúng)",
          "をものともせず: Dũng cảm vượt qua khó khăn — cũng có thể nhưng をよそに nhấn phớt lờ hơn.",
          "いかんにかかわらず: Bất kể — không phù hợp cấu trúc.",
          "ならいざしらず: Nếu là... thì không nói làm gì — không phù hợp.",
        ]
      ),
    ],
  },
  {
    front: "～ならいざしらず",
    back: [
      "✨ Nếu là... thì không nói làm gì, đằng này... (bất mãn)",
      "・Ví dụ: Nếu là thời ông bà thì không nói làm gì, thời nay chẳng ai dùng 'khăn mặt kiểu xưa' nữa.",
      "📌 Đưa ví dụ trái ngược hoàn toàn để bày tỏ bất mãn, phê phán.",
    ],
    more: [
      "🧩 N / Vthông thường+の（なの）+ ならいざしらず",
      "⚖️ ～はともかく (bỏ qua vấn đề đó, trung tính), ならいざしらず rõ bất mãn",
      "💬 Vế trước là điều kiện chấp nhận được, vế sau là thực tế không chấp nhận được.",
      "📝 Ví dụ:",
      "・祖父母の代ならいざしらず、今どきそんな言い方をする人はいない。",
    ],
    questions: [
      new Question(
        "5-6",
        "子供___、大人がこんな失礼なことをするとは信じられない。",
        ["ならいざしらず", "をよそに", "をものともせず", "いかんだ"],
        0,
        [],
        undefined,
        [
          "ならいざしらず: Nếu là trẻ con thì không nói làm gì, người lớn mà thất lễ vậy thật không thể tin được — bất mãn. (Đúng)",
          "をよそに: Phớt lờ, không phù hợp cấu trúc.",
          "をものともせず: Vượt qua khó khăn, không phù hợp.",
          "いかんだ: Tùy thuộc vào, không phù hợp.",
        ]
      ),
    ],
  },
];
