import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "中高一貫の学校",
    back: ["- ちゅうこういっかん", "- trường kết hợp trung học cơ sở và trung học phổ thông"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 中高一貫校は受験のストレスが少ない。 (Trường liên cấp THCS-THPT ít áp lực thi cử hơn.)",
      "❗ Ghi chú: 一貫 (いっかん) = xuyên suốt, liên tục. Học sinh không cần thi chuyển cấp.",
    ],
  },
  {
    front: "短大（短期大学）",
    back: ["- たんだい", "- cao đẳng"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 短大で保育士の資格を取った。 (Tôi lấy bằng bảo mẫu tại trường cao đẳng.)",
      "❗ Ghi chú: 短大 = học 2 năm. Khác: 四年制大学 = đại học 4 năm.",
    ],
  },
  {
    front: "予備校",
    back: ["- よびこう", "- lò luyện thi"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 大学受験のために予備校に通う。 (Thông học lò luyện thi để chuẩn bị thi đại học.)",
      "❗ Ghi chú: 予備校 = trung tâm luyện thi chuyên biệt. Khác: 塾 (じゅく) = gia sư, học thêm.",
    ],
  },
  {
    front: "校風",
    back: ["- こうふう", "- truyền thống, phong cách của nhà trường"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: この学校は自由な校風で知られている。 (Trường này nổi tiếng với phong cách tự do.)",
      "❗ Ghi chú: 校風 = không khí, văn hóa đặc trưng của từng trường.",
    ],
  },
  {
    front: "必修科目を取る",
    back: ["- ひっしゅう", "- học những môn bắt buộc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 必修科目を全部取らないと卒業できない。 (Phải học hết môn bắt buộc mới tốt nghiệp được.)",
      "❗ Ghi chú: 必修 = bắt buộc. Đối lập: 選択科目 (せんたくかもく) = môn tự chọn.",
    ],
  },
  {
    front: "質疑応答を行う",
    back: ["- しつぎおうとう", "- tiến hành ứng đáp các câu hỏi"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 発表の後で質疑応答を行う。 (Sau phần trình bày sẽ tiến hành hỏi đáp.)",
      "❗ Ghi chú: 質疑 (しつぎ) = hỏi có thắc mắc. 応答 (おうとう) = trả lời.",
    ],
  },
  {
    front: "博士課程",
    back: ["- はくし・はかせ", "- khóa học tiến sĩ"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 博士課程に進むために研究計画書を書いた。 (Viết kế hoạch nghiên cứu để vào chương trình tiến sĩ.)",
      "❗ Ghi chú: 学士→修士→博士 = cử nhân→thạc sĩ→tiến sĩ.",
    ],
  },
  {
    front: "奨学金を授与される",
    back: ["- しょうがくきん", "- nhận được học bổng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 成績優秀で奨学金を授与された。 (Nhận học bổng vì thành tích xuất sắc.)",
      "❗ Ghi chú: 授与 (じゅよ) = trao tặng. 奨学金 = học bổng (cũng có nghĩa là vay tiền học).",
    ],
  },
  {
    front: "非行に走る",
    back: ["- ひこう", "- có hành vi không tốt, sai trái"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 環境が悪いと子供が非行に走りやすい。 (Môi trường xấu khiến trẻ dễ sa vào con đường sai trái.)",
      "❗ Ghi chú: 非行 = hành vi phạm pháp của thanh thiếu niên. 走る (はしる) ở đây = lao vào, sa vào.",
    ],
  },
  {
    front: "類推する",
    back: ["- るいすい", "- suy đoán chủ quan từ kinh nghiệm bản thân"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 文の意味を類推する。 (Suy đoán nghĩa của câu.)",
      "❗ Ghi chú: 類推 = suy ra ý nghĩa dựa vào kinh nghiệm, kiến thức sẵn có. Khác: 推測 = phỏng đoán.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 14
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
