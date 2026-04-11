import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "華々しい / 捗々しい / 甚だしい",
    back: ["- はなばなしい・はかばかしい・はなはだしい", "- rực rỡ; trôi chảy; quá mức"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 華々しい活躍を見せた。 (Thể hiện màn trình diễn rực rỡ.)",
      "❗ Ghi chú: 華々しい = hoành tráng, ấn tượng. 捗々しい = tiến triển tốt. 甚だしい = quá mức, thái quá.",
    ],
  },
  {
    front: "浅ましい / 勇ましい / 痛ましい / 忌まわしい",
    back: ["- あさましい・いさましい・いたましい・いまわしい", "- hèn hạ; dũng mãnh; đáng thương; điềm xấu"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 忌まわしい夢を見た。 (Nằm mơ thấy giấc mơ xấu, khó chịu.)",
      "❗ Ghi chú: 浅ましい = thấp hèn. 勇ましい = dũng cảm. 痛ましい = tội nghiệp. 忌まわしい = gở, xui xẻo.",
    ],
  },
  {
    front: "あざとい / 目ざとい / あくどい",
    back: ["- あざとい・めざとい・あくどい", "- ranh mãnh; nhanh mắt; gian manh"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 目ざとく見つけた。 (Phát hiện ra rất nhanh.)",
      "❗ Ghi chú: あざとい = tính toán ranh mãnh. 目ざとい = mắt tinh, phát hiện nhanh. あくどい = thủ đoạn nham hiểm.",
    ],
  },
  {
    front: "妬む / ねだる / 粘る",
    back: ["- ねたむ", "- ghen tị; vòi vĩnh; nhầy dính"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 人の成功を妬む。 (Ghen tị với thành công của người khác.)",
      "❗ Ghi chú: 妬む = ghen tị tiêu cực. ねだる = vòi vĩnh, đòi dai. 粘る (ねばる) = nhầy dính / kiên trì không bỏ cuộc.",
    ],
  },
  {
    front: "潤む / 包む / 怯む",
    back: ["- うるむ・くるむ・ひるむ", "- ẩm ướt; gói lại; nao núng"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 相手の迫力に怯んでしまった。 (Bị áp lực của đối phương khiến nao núng.)",
      "❗ Ghi chú: 潤む = ẩm ướt (mắt rưng rưng). 包む (くるむ) = bọc, cuộn. 怯む = chùng bước, nao núng trước áp lực.",
    ],
  },
  {
    front: "ほつれる / ほどける / ほぐれる / ほころびる",
    back: ["- ほつれる・ほどける・ほぐれる・ほころびる", "- tuột; cởi ra; thả lỏng; rách bục"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 靴のひもがほどけている。 (Dây giày bị tuột ra.)",
      "❗ Ghi chú: ほつれる = sợi tuột. ほどける = thứ cột bị tuột. ほぐれる = cơ bắp/đầu óc thả lỏng. ほころびる = rách, bục.",
    ],
  },
  {
    front: "とぎれる / ちぎれる / ちぢれる",
    back: ["- とぎれる・ちぎれる・ちぢれる", "- bị gián đoạn; bị xé; nhăn nhúm"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 話が途切れる。 (Câu chuyện bị gián đoạn.)",
      "❗ Ghi chú: とぎれる = đứt đoạn. ちぎれる = bị xé nhỏ (lạnh cóng tai). ちぢれる = tóc xoăn, nhăn nhúm.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 27
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
