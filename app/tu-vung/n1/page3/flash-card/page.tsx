import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "米を水に浸す",
    back: ["- こめをみずにひたす", "- ngâm gạo vào nước"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 炊く前に米を水に浸す。 (Ngâm gạo vào nước trước khi nấu.)",
      "❗ Ghi chú: 浸す (ひたす) = ngâm, nhúng vào chất lỏng.",
    ],
  },
  {
    front: "水けをふき取る",
    back: ["- みずけをふきとる", "- làm khô nước; lau khô"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 野菜を洗ったら水けをふき取る。 (Sau khi rửa rau thì lau khô nước.)",
      "❗ Ghi chú: 水け (みずけ) = độ ẩm, nước.",
    ],
  },
  {
    front: "味が染み込む",
    back: ["- あじがしみこむ", "- ngấm gia vị"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: よく煮ると味が染み込む。 (Nấu kỹ thì gia vị ngấm sâu.)",
      "❗ Ghi chú: 染み込む (しみこむ) = thấm vào, ngấm vào.",
    ],
  },
  {
    front: "料理の腕前が上がる",
    back: ["- りょうりのうでまえがあがる", "- tay nghề nấu ăn giỏi lên"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 毎日練習して料理の腕前が上がった。 (Luyện tập mỗi ngày nên tay nghề nấu ăn tiến bộ.)",
      "❗ Ghi chú: 腕前 (うでまえ) = tay nghề, kỹ năng.",
    ],
  },
  {
    front: "素材を吟味する",
    back: ["- そざいをぎんみする", "- giám định; lựa chọn kỹ nguyên liệu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 素材を吟味して料理を作る。 (Lựa chọn kỹ nguyên liệu rồi nấu ăn.)",
      "❗ Ghi chú: 吟味 (ぎんみ) = xem xét kỹ lưỡng, giám định.",
    ],
  },
  {
    front: "本格的な味",
    back: ["- ほんかくてきなあじ", "- mùi vị đúng chuẩn; chính hiệu"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 本格的な味のラーメンが食べたい。 (Muốn ăn mì ramen đúng vị chính hiệu.)",
      "❗ Ghi chú: 本格的 (ほんかくてき) = chính thống, đúng chuẩn. Đồng nghĩa: 本場な味.",
    ],
  },
  {
    front: "あっさりした味",
    back: ["- あっさりしたあじ", "- vị thanh tao; nhẹ nhàng; không ngấy"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 暑い日はあっさりした料理がいい。 (Ngày nóng ăn món thanh tao là tốt.)",
      "❗ Ghi chú: Đối lập: こってりした味 (vị đậm đà, béo ngậy).",
    ],
  },
  {
    front: "こってりした味",
    back: ["- こってりしたあじ", "- vị đậm đà; béo ngậy; nặng vị"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: こってりしたラーメンが好きだ。 (Tôi thích mì ramen vị đậm đà.)",
      "❗ Ghi chú: Đối lập: あっさりした味.",
    ],
  },
  {
    front: "甘酸っぱい",
    back: ["- あまずっぱい", "- chua chua ngọt ngọt"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 甘酸っぱいいちごが好きだ。 (Tôi thích dâu tây vị chua ngọt.)",
      "❗ Ghi chú: Ghép từ 甘い (あまい - ngọt) + 酸っぱい (すっぱい - chua).",
    ],
  },
  {
    front: "生臭い",
    back: ["- なまぐさい", "- hôi tanh"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: 魚の生臭いにおいがする。 (Có mùi hôi tanh của cá.)",
      "❗ Ghi chú: 生 (なま) = tươi sống + 臭い (くさい) = hôi.",
    ],
  },
  {
    front: "焦げ臭い",
    back: ["- こげくさい", "- mùi khét"],
    more: [
      "📚 Từ loại: Tính từ -i",
      "📝 Ví dụ: キッチンから焦げ臭いにおいがする。 (Có mùi khét từ nhà bếp.)",
      "❗ Ghi chú: 焦げ (こげ) = bị cháy, bị khét.",
    ],
  },
  {
    front: "子供をしつける",
    back: ["- こどもをしつける", "- dạy con cách xử sự; rèn nếp con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 子供を厳しくしつける。 (Dạy con cách xử sự một cách nghiêm khắc.)",
      "❗ Ghi chú: しつける = dạy dỗ, rèn giũa cách cư xử.",
    ],
  },
  {
    front: "育ち盛りの子",
    back: ["- そだちざかりのこ", "- trẻ đang trong giai đoạn tăng trưởng"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 育ち盛りの子にはたくさん食べさせる。 (Cho trẻ đang lớn ăn thật nhiều.)",
      "❗ Ghi chú: 盛り (ざかり) = đỉnh điểm, giai đoạn cao nhất.",
    ],
  },
  {
    front: "育児に頭を悩ます",
    back: ["- いくじにあたまをなやます", "- đau đầu; vất vả khi nuôi dạy con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 育児に頭を悩ます毎日だ。 (Mỗi ngày đều đau đầu vì chuyện nuôi con.)",
      "❗ Ghi chú: 頭を悩ます (あたまをなやます) = làm đau đầu, làm phiền não.",
    ],
  },
  {
    front: "育児を放棄する",
    back: ["- いくじをほうきする", "- lơ là; bỏ mặc việc nuôi dạy con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 育児を放棄する親が増えている。 (Ngày càng nhiều bậc cha mẹ bỏ bê việc nuôi con.)",
      "❗ Ghi chú: 放棄 (ほうき) = bỏ mặc, từ bỏ trách nhiệm.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 3
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
