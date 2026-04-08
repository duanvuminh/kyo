import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "中高一貫の学校",
    back: ["- ちゅうこういっかんのがっこう", "- trường kết hợp THCS và THPT"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 中高一貫の学校に通うと受験が楽だ。 (Học trường THCS-THPT liên thông thì thi cử nhẹ nhàng hơn.)",
      "❗ Ghi chú: 一貫 (いっかん) = nhất quán, liên thông từ đầu đến cuối.",
    ],
  },
  {
    front: "予備校",
    back: ["- よびこう", "- lò luyện thi"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 大学受験のために予備校に通う。 (Đi học lò luyện thi để chuẩn bị thi đại học.)",
      "❗ Ghi chú: Khác với 塾 (じゅく) = trung tâm gia sư/luyện thi dành cho học sinh phổ thông.",
    ],
  },
  {
    front: "校風",
    back: ["- こうふう", "- truyền thống; phong cách của nhà trường"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: この学校は自由な校風で知られている。 (Trường này nổi tiếng với phong cách tự do.)",
      "❗ Ghi chú: 厳格な校風 (khắt khe) ⇔ リベラルな校風 (thoải mái).",
    ],
  },
  {
    front: "講義を受講する",
    back: ["- こうぎをじゅこうする", "- tham dự; tiếp thu bài giảng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 大学で経済学の講義を受講する。 (Tham dự bài giảng kinh tế học ở đại học.)",
      "❗ Ghi chú: 受講 (じゅこう) = tham dự khóa học. Đồng nghĩa: 聴講する (ちょうこう) nhưng 聴講 thường không chính thức hơn.",
    ],
  },
  {
    front: "必修科目を取る",
    back: ["- ひっしゅうかもくをとる", "- học những môn bắt buộc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 卒業するには必修科目を取る必要がある。 (Cần hoàn thành các môn bắt buộc để tốt nghiệp.)",
      "❗ Ghi chú: 必修 (ひっしゅう) = bắt buộc. Đối lập: 選択科目 (せんたくかもく) = môn tự chọn.",
    ],
  },
  {
    front: "質疑応答を行う",
    back: ["- しつぎおうとうをおこなう", "- tiến hành hỏi đáp"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 発表後に質疑応答を行う。 (Sau phần trình bày tiến hành hỏi đáp.)",
      "❗ Ghi chú: 質疑 (しつぎ) = đặt câu hỏi. 応答 (おうとう) = trả lời.",
    ],
  },
  {
    front: "学士課程",
    back: ["- がくしかてい", "- khóa học cử nhân"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 学士課程を修了して就職する。 (Hoàn thành khóa cử nhân rồi đi làm.)",
      "❗ Ghi chú: 学士 → 修士 → 博士 = Cử nhân → Thạc sĩ → Tiến sĩ.",
    ],
  },
  {
    front: "博士課程",
    back: ["- はくし・はかせかてい", "- khóa học tiến sĩ"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 博士課程に進学して研究を続ける。 (Tiếp tục nghiên cứu bằng cách học lên tiến sĩ.)",
      "❗ Ghi chú: 博士 có hai cách đọc: はくし (trang trọng) và はかせ (thông thường).",
    ],
  },
  {
    front: "筆記試験",
    back: ["- ひっきしけん", "- thi viết"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 採用試験は筆記試験と面接がある。 (Kỳ thi tuyển dụng gồm thi viết và phỏng vấn.)",
      "❗ Ghi chú: 筆記 (ひっき) = viết tay. Đi kèm: 口述試験 (vấn đáp), 実技試験 (thực hành).",
    ],
  },
  {
    front: "学問を志す",
    back: ["- がくもんをこころざす", "- chí hướng; mong muốn học hành"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 幼い頃から学問を志していた。 (Từ nhỏ đã có chí hướng học hành.)",
      "❗ Ghi chú: 志す (こころざす) = đặt mục tiêu, có chí hướng.",
    ],
  },
  {
    front: "奨学金を授与される",
    back: ["- しょうがくきんをじゅよされる", "- nhận được học bổng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 成績優秀で奨学金を授与された。 (Vì thành tích xuất sắc nên được trao học bổng.)",
      "❗ Ghi chú: 授与 (じゅよ) = trao tặng (trang trọng). Thường dùng: 奨学金をもらう (thông thường).",
    ],
  },
  {
    front: "学費を振り込む",
    back: ["- がくひをふりこむ", "- đóng; chuyển khoản học phí"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 期限までに学費を振り込む。 (Chuyển học phí trước hạn chót.)",
      "❗ Ghi chú: 振り込む (ふりこむ) = chuyển khoản ngân hàng.",
    ],
  },
  {
    front: "非行に走る",
    back: ["- ひこうにはしる", "- có hành vi sai trái; phạm pháp"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 家庭環境が悪いと非行に走る子が増える。 (Môi trường gia đình không tốt dễ khiến trẻ sa ngã.)",
      "❗ Ghi chú: 非行 (ひこう) = hành vi phi pháp, không đúng đắn (thường chỉ thanh thiếu niên).",
    ],
  },
  {
    front: "修学旅行に行く",
    back: ["- しゅうがくりょこうにいく", "- đi du lịch kết hợp học tập"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 高校生のとき修学旅行で京都に行った。 (Hồi cấp 3 đã đi Kyoto trong chuyến du lịch học tập.)",
      "❗ Ghi chú: 修学旅行 (しゅうがくりょこう) = chuyến tham quan học tập truyền thống của học sinh Nhật.",
    ],
  },
  {
    front: "同窓会に出席する",
    back: ["- どうそうかいにしゅっせきする", "- tham dự họp lớp; hội cựu học sinh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 卒業20周年の同窓会に出席した。 (Tham dự họp lớp nhân dịp kỷ niệm 20 năm tốt nghiệp.)",
      "❗ Ghi chú: 同窓会 (どうそうかい) = hội cựu học sinh / sinh viên cùng trường.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 7
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
