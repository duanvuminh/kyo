import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "俄然",
    back: ["- がぜん", "- đột nhiên thay đổi (thường theo chiều tích cực)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 褒められて、俄然やる気が出てきた。 (Được khen, đột nhiên xuất hiện động lực.)",
      "❗ Ghi chú: 俄然 = bỗng nhiên thay đổi mạnh mẽ. Thường dùng cho cảm xúc, động lực tăng đột ngột.",
    ],
  },
  {
    front: "断固",
    back: ["- だんこ", "- có ý chí mạnh mẽ, kiên quyết"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: ダム建設には断固反対だ。 (Tôi kiên quyết phản đối việc xây dựng đập.)",
      "❗ Ghi chú: 断固 = kiên quyết, không nhượng bộ. Gần nghĩa: 毅然 (きぜん) = thái độ không dao động.",
    ],
  },
  {
    front: "不意に",
    back: ["- ふいに", "- đột ngột, bất ngờ"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: お天気だったのに、不意に雨が降り出した。 (Trời đang đẹp, bỗng dưng bắt đầu mưa.)",
      "❗ Ghi chú: 不意 = bất ngờ, không báo trước. 不意に = một cách bất ngờ. Gần nghĩa: 突然 (とつぜん) = đột nhiên.",
    ],
  },
  {
    front: "人知れず",
    back: ["- ひとしれず", "- âm thầm, không để người khác biết"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼は人知れず努力を重ねていた。 (Anh ấy âm thầm nỗ lực không ngừng.)",
      "❗ Ghi chú: 人知れず = không ai hay biết, lặng lẽ. Mang sắc thái cô đơn hoặc khiêm tốn.",
    ],
  },
  {
    front: "とかく",
    back: ["- とかく", "- có xu hướng (không tốt)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 最近、とかく子供を甘やかす親が多い。 (Gần đây, có xu hướng ngày càng nhiều cha mẹ nuông chiều con.)",
      "❗ Ghi chú: とかく = có xu hướng... (thường kèm ý phê phán). Khác: どうしても = dù sao cũng.",
    ],
  },
  {
    front: "心底 / 根っから",
    back: ["- しんそこ・ねっから", "- tận đáy lòng; tính chất cơ bản"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼女は根っから辛いものが好きだ。 (Cô ấy thích đồ cay từ bản chất.)",
      "❗ Ghi chú: 心底 = từ tận sâu trong lòng. 根っから = vốn dĩ, từ bản chất. Cả hai nhấn mạnh sự chân thật, cốt lõi.",
    ],
  },
  {
    front: "大方 / 概ね / 総じて",
    back: ["- おおかた・おおむね・そうじて", "- phần lớn; đại khái; khuynh hướng chung"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼の成績はどの科目を総じて良かった。 (Nhìn chung thành tích các môn của anh ấy đều tốt.)",
      "❗ Ghi chú: 大方 = phần lớn (không cần số cụ thể). 概ね = đại khái, nhìn chung. 総じて = xem xét tổng thể thì có xu hướng.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 31
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
