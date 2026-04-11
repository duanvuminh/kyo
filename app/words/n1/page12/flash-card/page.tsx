import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "病気の兆候に気づく",
    back: ["- ちょうこう", "- chú ý đến triệu chứng của bệnh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 早期に病気の兆候に気づくことが大切だ。 (Nhận ra triệu chứng bệnh sớm là rất quan trọng.)",
      "❗ Ghi chú: 兆候 (ちょうこう) = dấu hiệu báo trước. Gần nghĩa: 症状 (しょうじょう) = triệu chứng.",
    ],
  },
  {
    front: "持病がある",
    back: ["- じびょう", "- có bệnh mãn tính"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 彼は持病があるため、薬を毎日飲んでいる。 (Anh ấy có bệnh mãn tính nên uống thuốc mỗi ngày.)",
      "❗ Ghi chú: 持病 = bệnh lâu năm, không khỏi được. Khác: 慢性 (まんせい) = mãn tính (tính chất).",
    ],
  },
  {
    front: "先天的な病気",
    back: ["- せんてんてき", "- bệnh bẩm sinh"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 先天的な病気を持って生まれた子供がいる。 (Có trẻ sinh ra đã mang bệnh bẩm sinh.)",
      "❗ Ghi chú: Đối lập: 後天的 (こうてんてき) = mắc phải sau khi sinh (do môi trường, tai nạn...).",
    ],
  },
  {
    front: "自覚症状",
    back: ["- じかく", "- triệu chứng do bản thân người bệnh cảm nhận"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 自覚症状がないまま進む病気もある。 (Có những bệnh tiến triển mà không có triệu chứng tự cảm nhận.)",
      "❗ Ghi chú: 自覚 = tự nhận thức. Đây là triệu chứng chủ quan — khác với kết quả xét nghiệm khách quan.",
    ],
  },
  {
    front: "発作が起こる",
    back: ["- ほっさ", "- bệnh phát ra (cơn đột ngột)"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 喘息の発作が起こった。 (Cơn hen suyễn bùng phát.)",
      "❗ Ghi chú: 発作 = cơn bệnh đột ngột (hen, động kinh, đau tim...). Không dùng cho bệnh từ từ.",
    ],
  },
  {
    front: "往診に来てもらう",
    back: ["- おうしん", "- nhận được việc bác sĩ đến khám tại nhà"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 高齢で動けないため、往診に来てもらった。 (Tuổi cao không đi được nên nhờ bác sĩ đến khám tại nhà.)",
      "❗ Ghi chú: 往診 (おうしん) = khám tại nhà. Đối lập: 受診 (じゅしん) = đến phòng khám.",
    ],
  },
  {
    front: "応急処置をする",
    back: ["- おうきゅうしょち", "- xử lý khẩn cấp người bệnh/nạn nhân"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 倒れた人に応急処置をする。 (Sơ cứu người ngã xuống.)",
      "❗ Ghi chú: 応急 (おうきゅう) = ứng phó khẩn cấp tạm thời. Không phải điều trị dứt điểm.",
    ],
  },
  {
    front: "痛みを和らげる",
    back: ["- やわらげる", "- làm dịu cơn đau"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 薬で痛みを和らげる。 (Dùng thuốc để làm dịu cơn đau.)",
      "❗ Ghi chú: 和らげる = giảm bớt, dịu đi. Không có nghĩa là chữa khỏi hoàn toàn.",
    ],
  },
  {
    front: "安静を保つ",
    back: ["- あんせい", "- giữ trạng thái nghỉ ngơi yên tĩnh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 退院後も安静を保つ必要がある。 (Sau khi ra viện vẫn cần giữ yên tĩnh nghỉ ngơi.)",
      "❗ Ghi chú: 安静 = không vận động, nghỉ ngơi hoàn toàn (theo chỉ định bác sĩ).",
    ],
  },
  {
    front: "健康を増進する",
    back: ["- ぞうしん", "- nâng cao sức khỏe"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 運動は健康を増進するのに効果的だ。 (Tập thể dục hiệu quả để nâng cao sức khỏe.)",
      "❗ Ghi chú: 増進 = tăng lên, thúc đẩy. Gần nghĩa: 維持 (いじ) = duy trì (không tăng không giảm).",
    ],
  },
  {
    front: "不摂生な生活は禁物だ",
    back: ["- ふせっせい", "- tránh sinh hoạt không điều độ"],
    more: [
      "📚 Từ loại: Cụm câu",
      "📝 Ví dụ: 病後の不摂生な生活は禁物だ。 (Sau khi bệnh, sống không điều độ là điều cần tránh.)",
      "❗ Ghi chú: 禁物 (きんもつ) = điều cấm kỵ, không được làm. 不摂生 = ăn uống/ngủ nghỉ thất thường.",
    ],
  },
  {
    front: "著書",
    back: ["- ちょしょ", "- tác phẩm (sách do tác giả viết)"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 彼の著書は世界中で読まれている。 (Tác phẩm của ông được đọc khắp thế giới.)",
      "❗ Ghi chú: 著書 = sách do cá nhân viết. Khác: 著作 (ちょさく) = tác phẩm nói chung (sách, nhạc, tranh...).",
    ],
  },
  {
    front: "詩を朗読する",
    back: ["- ろうどく", "- ngâm thơ, đọc to thơ"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 授業で詩を朗読する。 (Ngâm thơ trong giờ học.)",
      "❗ Ghi chú: 朗読 (ろうどく) = đọc to, rõ ràng và biểu cảm. Khác: 黙読 (もくどく) = đọc thầm.",
    ],
  },
  {
    front: "音楽一筋に打ち込む",
    back: ["- ひとすじ", "- tập trung toàn bộ sức lực cho âm nhạc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 音楽一筋に打ち込んで、プロになった。 (Dốc toàn lực cho âm nhạc và trở thành nhạc sĩ chuyên nghiệp.)",
      "❗ Ghi chú: 一筋 (ひとすじ) = chỉ một con đường, chuyên tâm vào một việc. 打ち込む = đắm mình vào.",
    ],
  },
  {
    front: "盛大な拍手が沸き起こる",
    back: ["- せいだい", "- tràng vỗ tay rộn ràng vang lên"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 演奏が終わると、盛大な拍手が沸き起こった。 (Khi màn trình diễn kết thúc, tiếng vỗ tay vang dội nổi lên.)",
      "❗ Ghi chú: 沸き起こる (わきおこる) = nổi lên mạnh mẽ (tiếng reo hò, cảm xúc). 盛大 = hoành tráng.",
    ],
  },
  {
    front: "茶道を嗜む",
    back: ["- たしなむ", "- hứng thú, yêu thích trà đạo"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 祖母は茶道を嗜んでいる。 (Bà tôi có hứng thú với trà đạo.)",
      "❗ Ghi chú: 嗜む (たしなむ) = có sở thích, hứng thú với (thường dùng cho nghệ thuật, văn hóa).",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 12
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
