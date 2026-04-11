import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "異論を唱える",
    back: ["- となえる", "- trình bày sự phản đối"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 新しい政策に異論を唱える人が多い。 (Có nhiều người phản đối chính sách mới.)",
      "❗ Ghi chú: 異論 (いろん) = ý kiến khác biệt, phản đối. 唱える = hô hào, lên tiếng.",
    ],
  },
  {
    front: "採決を取る",
    back: ["- さいけつ", "- biểu quyết dựa vào số đông"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 議会で採決を取った結果、法案が可決された。 (Sau khi biểu quyết tại quốc hội, dự luật được thông qua.)",
      "❗ Ghi chú: 採決 = biểu quyết theo đa số. 可決 (かけつ) = thông qua. 否決 (ひけつ) = bác bỏ.",
    ],
  },
  {
    front: "法律を制定する",
    back: ["- せいてい", "- ban hành pháp luật"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 新しい環境法を制定した。 (Ban hành luật môi trường mới.)",
      "❗ Ghi chú: 制定 = tạo ra luật mới. 改定 = sửa đổi. 施行 (しこう) = đưa vào thực thi.",
    ],
  },
  {
    front: "条約に調印する",
    back: ["- ちょういん", "- ký kết hiệp ước"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 両国が平和条約に調印した。 (Hai nước đã ký kết hiệp ước hòa bình.)",
      "❗ Ghi chú: 調印 (ちょういん) = ký tên chính thức. 条約 (じょうやく) = điều ước quốc tế.",
    ],
  },
  {
    front: "政治が腐敗する",
    back: ["- ふはい", "- chính phủ mục nát"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 長期政権によって政治が腐敗した。 (Chính trị trở nên mục nát do chính quyền kéo dài.)",
      "❗ Ghi chú: 腐敗 (ふはい) = thối nát, tham nhũng. Dùng cho chính trị, thực phẩm.",
    ],
  },
  {
    front: "訴訟を起こす",
    back: ["- そしょう", "- khởi kiện"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 損害賠償を求めて訴訟を起こした。 (Khởi kiện yêu cầu bồi thường thiệt hại.)",
      "❗ Ghi chú: 訴訟 (そしょう) = vụ kiện tụng tại tòa. 起こす = phát sinh, khởi xướng.",
    ],
  },
  {
    front: "死刑/懲役の判決が下る",
    back: ["- しけい・ちょうえき", "- phán quyết tử hình/phạt tù cải tạo được đưa ra"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 懲役10年の判決が下った。 (Phán quyết phạt 10 năm tù cải tạo đã được đưa ra.)",
      "❗ Ghi chú: 死刑 = tử hình. 懲役 = tù có lao động cải tạo. 判決が下る = phán quyết được công bố.",
    ],
  },
  {
    front: "古代文明が衰退する",
    back: ["- すいたい", "- văn minh cổ đại bị suy thoái"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 気候変動により古代文明が衰退した。 (Do biến đổi khí hậu, văn minh cổ đại suy thoái.)",
      "❗ Ghi chú: 衰退 (すいたい) = suy yếu, tàn lụi. Khác: 崩壊 (ほうかい) = sụp đổ hoàn toàn.",
    ],
  },
  {
    front: "紛争が起こる",
    back: ["- ふんそう", "- sự phân tranh, tranh chấp xảy ra"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 領土問題で紛争が起こった。 (Tranh chấp xảy ra vì vấn đề lãnh thổ.)",
      "❗ Ghi chú: 紛争 = xung đột, tranh chấp (chưa đến mức chiến tranh). 戦争 (せんそう) = chiến tranh.",
    ],
  },
  {
    front: "住居跡を発掘する",
    back: ["- じゅうきょあと・はっくつ", "- khai quật dấu vết lưu trú của người xưa"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 古代の住居跡を発掘した。 (Khai quật được dấu vết lưu trú thời cổ đại.)",
      "❗ Ghi chú: 発掘 (はっくつ) = đào bới để tìm. 跡 (あと) = dấu vết, di tích.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 17
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
