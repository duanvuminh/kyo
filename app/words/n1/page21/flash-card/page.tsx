import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "著しい変化",
    back: ["- いちじるしい", "- biến hóa rõ rệt"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 技術の著しい進歩が見られる。 (Có thể thấy sự tiến bộ rõ rệt của công nghệ.)",
      "❗ Ghi chú: 著しい (いちじるしい) = đáng kể, rõ ràng. Dùng khi thay đổi/tiến bộ vượt bậc.",
    ],
  },
  {
    front: "患者の容体が急変する",
    back: ["- ようだい・きゅうへん", "- tình trạng bệnh nhân biến đổi đột ngột"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 夜中に患者の容体が急変した。 (Giữa đêm, tình trạng bệnh nhân thay đổi đột ngột.)",
      "❗ Ghi chú: 容体 (ようだい) = tình trạng sức khỏe. 急変 = thay đổi nhanh chóng, đột ngột.",
    ],
  },
  {
    front: "状況が劇的に変わる",
    back: ["- げきてき", "- tình trạng thay đổi kịch tính"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 一点差で状況が劇的に変わった。 (Chỉ một điểm mà tình thế thay đổi kịch tính.)",
      "❗ Ghi chú: 劇的 (げきてき) = kịch tính, mang tính sân khấu. Khác: 急激 (きゅうげき) = nhanh chóng.",
    ],
  },
  {
    front: "売上が推移する",
    back: ["- すいい", "- doanh số thay đổi, biến động"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 売上の推移をグラフで確認する。 (Xác nhận biến động doanh số qua biểu đồ.)",
      "❗ Ghi chú: 推移 (すいい) = thay đổi dần theo thời gian. Khác: 変動 (へんどう) = biến động mạnh.",
    ],
  },
  {
    front: "サラリーマンから政治家に転身する",
    back: ["- てんしん", "- chuyển từ công chức thành chính trị gia"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 40歳でサラリーマンから政治家に転身した。 (Ở tuổi 40 chuyển từ công chức sang chính trị gia.)",
      "❗ Ghi chú: 転身 (てんしん) = thay đổi hoàn toàn nghề nghiệp/vai trò. Khác: 転職 (てんしょく) = chuyển công ty.",
    ],
  },
  {
    front: "由緒",
    back: ["- ゆいしょ", "- lịch sử, phả hệ công trình, đền thờ"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 由緒ある神社を参拝した。 (Tham bái ngôi đền có lịch sử lâu đời.)",
      "❗ Ghi chú: 由緒 = nguồn gốc, lịch sử có giá trị. 由緒ある = có xuất xứ lâu đời, danh tiếng.",
    ],
  },
  {
    front: "相手と合意する",
    back: ["- ごうい", "- hợp ý, nhất trí với đối phương"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 交渉の末、相手と合意した。 (Sau đàm phán, đã đạt được thỏa thuận với đối phương.)",
      "❗ Ghi chú: 合意 (ごうい) = đồng thuận hai chiều. Khác: 同意 (どうい) = đồng ý một chiều.",
    ],
  },
  {
    front: "平等・不平等に扱う",
    back: ["- びょうどう・ふびょうどう", "- đối xử công bằng - bất công"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 全員を平等に扱うことが大切だ。 (Đối xử công bằng với tất cả mọi người là điều quan trọng.)",
      "❗ Ghi chú: 平等 = công bằng, bình đẳng. 扱う (あつかう) = đối xử, xử lý.",
    ],
  },
  {
    front: "対人関係",
    back: ["- たいじんかんけい", "- mối quan hệ giữa mọi người"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 対人関係が苦手な人が増えている。 (Ngày càng nhiều người gặp khó khăn trong quan hệ xã hội.)",
      "❗ Ghi chú: 対人 (たいじん) = đối với người khác. 人間関係 (にんげんかんけい) = quan hệ con người (rộng hơn).",
    ],
  },
  {
    front: "他国と親交を結ぶ",
    back: ["- しんこう", "- kết tình thân giao với nước khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 両国は長年にわたって親交を結んでいる。 (Hai nước đã có quan hệ thân giao trong nhiều năm.)",
      "❗ Ghi chú: 親交 (しんこう) = quan hệ thân thiết. 結ぶ (むすぶ) = kết, thiết lập.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 21
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
