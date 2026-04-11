import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "規範・規約・規律・規格・規定",
    back: ["- きはん・きやく・きりつ・きかく・きてい", "- các loại quy tắc, tiêu chuẩn"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 大人が子供たちに規範を示していく必要がある。 (Người lớn cần làm gương, chỉ ra chuẩn mực cho trẻ em.)",
      "❗ Ghi chú: 規範 = hình mẫu. 規約 = quy ước nội bộ. 規律 = kỷ luật tập thể. 規格 = tiêu chuẩn sản phẩm. 規定 = quy định cụ thể.",
    ],
  },
  {
    front: "発足する",
    back: ["- はっそく", "- tổ chức được thành lập và đưa vào hoạt động"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: この学会が発足して、十年になります。 (Học hội này đã thành lập và hoạt động được 10 năm.)",
      "❗ Ghi chú: 発足 = khởi động, bắt đầu hoạt động. Khác: 設立 (せつりつ) = thành lập về mặt pháp lý.",
    ],
  },
  {
    front: "発作 / 発覚 / 発散",
    back: ["- ほっさ・はっかく・はっさん", "- phát tác; phát giác; phát tán"],
    more: [
      "📚 Từ loại: Danh từ/Động từ",
      "📝 Ví dụ: 汚職が発覚し、その議員は辞職した。 (Tham nhũng bị phát giác, nghị viên đó từ chức.)",
      "❗ Ghi chú: 発作 = bệnh bùng phát đột ngột. 発覚 = điều xấu bị lộ ra. 発散 = phát tán/giải tỏa (ストレス発散).",
    ],
  },
  {
    front: "補給・補充・補償・補足・補完",
    back: ["- ほきゅう・ほじゅう・ほしょう・ほそく・ほかん", "- các dạng bổ sung/bù đắp"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 自身の被害者には国が補償を行うべきだ。 (Nhà nước nên bồi thường cho nạn nhân.)",
      "❗ Ghi chú: 補給 = bổ sung bị thiếu hao. 補充 = thêm cho đủ quy định. 補償 = bù thiệt hại. 補足 = thêm thông tin. 補完 = hoàn thiện.",
    ],
  },
  {
    front: "賛同・同調・同感・共感・共鳴",
    back: ["- さんどう・どうちょう・どうかん・きょうかん・きょうめい", "- các mức độ đồng tình, đồng cảm"],
    more: [
      "📚 Từ loại: Động từ/Danh từ",
      "📝 Ví dụ: ドラマの主人公の生き方に共感を覚えた。 (Cảm thấy đồng cảm với cách sống của nhân vật chính trong phim.)",
      "❗ Ghi chú: 賛同 = tán thành ủng hộ. 同調 = cùng hành động. 同感 = cùng ý kiến. 共感 = cảm giác giống nhau. 共鳴 = cùng suy nghĩ.",
    ],
  },
  {
    front: "弁明・釈明・弁護・弁解",
    back: ["- べんめい・しゃくめい・べんご・べんかい", "- biện minh; giải thích; bảo vệ; lý do"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 遅刻したのは事故のせいだと学生は弁解した。 (Học sinh lý giải rằng đến muộn là do tai nạn.)",
      "❗ Ghi chú: 弁明 = biện minh cho bản thân. 釈明 = giải thích sau khi bị chỉ trích. 弁護 = bảo vệ người khác. 弁解 = lý do, bào chữa.",
    ],
  },
  {
    front: "持続・維持・継続・存続・続行",
    back: ["- じぞく・いじ・けいぞく・そんぞく・ぞっこう", "- các dạng tiếp tục/duy trì"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 雨になったが、小雨だったので、試合を続行する。 (Trời mưa nhưng mưa nhỏ nên vẫn tiếp tục trận đấu.)",
      "❗ Ghi chú: 持続 = kéo dài trạng thái. 維持 = duy trì không đổi. 継続 = tiếp tục hành vi. 存続 = tiếp tục tồn tại. 続行 = vẫn tiến hành.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 26
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
