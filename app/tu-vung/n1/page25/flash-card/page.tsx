import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "やんわり / 遠回しに / それとなく",
    back: ["- やんわり", "- chú ý một cách nhẹ nhàng, bóng gió"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: やんわり注意する。 (Nhắc nhở một cách nhẹ nhàng.)",
      "❗ Ghi chú: Cả 3 đều mang nghĩa gián tiếp, nhẹ nhàng. Đối lập: ぶっきらぼうに = thẳng thắn, lạnh lùng.",
    ],
  },
  {
    front: "すんなり・あっさり",
    back: ["- すんなり", "- trôi chảy, không gặp vấn đề gì"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 交渉がすんなり進んだ。 (Đàm phán diễn ra trôi chảy.)",
      "❗ Ghi chú: すんなり = suôn sẻ, không trở ngại. あっさり = đơn giản, không phức tạp/không nặng nề.",
    ],
  },
  {
    front: "ことごとく",
    back: ["- ことごとく", "- hoàn toàn, tất cả không sót cái nào"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 受験したが大学は、ことごとく落ちてしまった。 (Thi nhưng tất cả các trường đại học đều trượt hết.)",
      "❗ Ghi chú: ことごとく = すべて = tất cả, không ngoại lệ. Thường mang sắc thái toàn bộ bị ảnh hưởng.",
    ],
  },
  {
    front: "あえて・強いて",
    back: ["- あえて", "- mạnh dạn làm dù biết khó; cưỡng ép"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: あえて・強いて言う必要はない。 (Không cần phải cố mạnh dạn nói ra.)",
      "❗ Ghi chú: あえて = cố tình làm điều không cần thiết hoặc khó khăn. 強いて (しいて) = ép buộc, cưỡng.",
    ],
  },
  {
    front: "ぞんざいな",
    back: ["- ぞんざい", "- quá đáng, vô lễ, cẩu thả"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: ぞんざいな態度で話す。 (Nói chuyện với thái độ vô lễ.)",
      "❗ Ghi chú: ぞんざい = thiếu cẩn thận, thiếu lịch sự. Gần nghĩa: 失礼な (しつれいな) = vô lễ.",
    ],
  },
  {
    front: "過剰な / 過多な / 過密な",
    back: ["- かじょう・かた", "- nhiều hơn mức cần thiết; quá nhiều; mật độ quá cao"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 栄養の過剰な摂取は肥満の原因だ。 (Hấp thụ dinh dưỡng quá mức là nguyên nhân béo phì.)",
      "❗ Ghi chú: 過剰 = dư thừa. 過多 = quá nhiều (lượng). 過密 = mật độ quá cao. Đối: 過疎 (かそ) = quá thưa thớt.",
    ],
  },
  {
    front: "簡易・簡便・簡略・簡潔",
    back: ["- かんい・かんべん・かんりゃく・かんけつ", "- đơn giản (các sắc thái khác nhau)"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 志望理由を簡潔に述べなさい。 (Hãy trình bày lý do ứng tuyển một cách súc tích.)",
      "❗ Ghi chú: 簡易 = dễ dàng. 簡便 = tiện lợi vì đơn giản. 簡略 = rút gọn chi tiết. 簡潔 = súc tích, đúng trọng tâm.",
    ],
  },
  {
    front: "明朗・明快・明白・明瞭",
    back: ["- めいろう・めいかい・めいはく・めいりょう", "- rõ ràng (các sắc thái khác nhau)"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 方針を明快に語る。 (Trình bày phương châm một cách rõ ràng, dứt khoát.)",
      "❗ Ghi chú: 明朗 = tính cách cởi mở. 明快 = rõ ràng dứt khoát. 明白 = minh bạch không còn nghi ngờ. 明瞭 = dễ nghe/đọc.",
    ],
  },
  {
    front: "壮大・盛大・膨大・過大・絶大",
    back: ["- そうだい・せいだい・ぼうだい・かだい・ぜつだい", "- các mức độ lớn lao khác nhau"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 絶大な信頼を得ていた。 (Được tin tưởng tuyệt đối.)",
      "❗ Ghi chú: 壮大 = hùng vĩ. 盛大 = hoành tráng (lễ hội). 膨大 = khổng lồ về lượng. 過大 = quá mức thực tế. 絶大 = tột cùng.",
    ],
  },
  {
    front: "目覚ましい",
    back: ["- めざましい", "- nổi bật, đáng chú ý"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 目覚ましい発展を遂げた。 (Đạt được sự phát triển nổi bật.)",
      "❗ Ghi chú: 目覚ましい = ấn tượng, vượt trội. Gần nghĩa: 著しい (いちじるしい) = đáng kể, rõ rệt.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 25
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
