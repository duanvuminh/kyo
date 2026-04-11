import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "米を水に浸す",
    back: ["- ひたす", "- ngâm gạo vào nước"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 炊く前に米を水に浸すと美味しくなる。 (Ngâm gạo vào nước trước khi nấu sẽ ngon hơn.)",
      "❗ Ghi chú: 浸す (ひたす) = ngâm, nhúng vào nước/chất lỏng.",
    ],
  },
  {
    front: "味が染み込む",
    back: ["- しみこむ", "- ngấm gia vị"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 煮込むことで味がよく染み込む。 (Nấu lâu giúp gia vị ngấm sâu vào.)",
      "❗ Ghi chú: 染み込む = thấm vào, ngấm vào (chất lỏng, gia vị).",
    ],
  },
  {
    front: "素材を吟味する",
    back: ["- そざい", "- giám định nguyên liệu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 料理人は素材を吟味して最高の食材を選ぶ。 (Đầu bếp giám định nguyên liệu để chọn thực phẩm tốt nhất.)",
      "❗ Ghi chú: 吟味 (ぎんみ) = xem xét kỹ lưỡng, chọn lựa cẩn thận.",
    ],
  },
  {
    front: "あっさりした味",
    back: ["- あっさり", "- vị thanh tao"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: このスープはあっさりした味で飲みやすい。 (Súp này có vị thanh tao, dễ uống.)",
      "❗ Ghi chú: Đối lập: こってりした味 = vị đậm đà, béo ngậy.",
    ],
  },
  {
    front: "甘酸っぱい",
    back: ["- あまずっぱい", "- chua chua ngọt ngọt"],
    more: [
      "📚 Từ loại: Tính từ い",
      "📝 Ví dụ: 青梅は甘酸っぱい味がする。 (Mơ xanh có vị chua ngọt.)",
      "❗ Ghi chú: Cũng dùng theo nghĩa bóng: 甘酸っぱい思い出 = kỷ niệm ngọt ngào xen lẫn đau.",
    ],
  },
  {
    front: "生臭い",
    back: ["- なまぐさい", "- hôi tanh"],
    more: [
      "📚 Từ loại: Tính từ い",
      "📝 Ví dụ: 魚を触った後、手が生臭い。 (Sau khi chạm vào cá, tay bị hôi tanh.)",
      "❗ Ghi chú: 生 (なま) = sống, tươi. 臭い (くさい) = có mùi. Đối: 焦げ臭い = mùi khét.",
    ],
  },
  {
    front: "子供をしつける",
    back: ["- しつける", "- dạy con cách xử sự"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 子供に礼儀をしつけることが大切だ。 (Dạy con lễ phép là điều quan trọng.)",
      "❗ Ghi chú: しつけ = kỷ luật, dạy bảo cách ứng xử cho trẻ.",
    ],
  },
  {
    front: "育ち盛りの子",
    back: ["- そだちざかり", "- giai đoạn tăng trưởng của trẻ"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 育ち盛りの子供にはたくさん食べさせよう。 (Hãy cho trẻ trong giai đoạn tăng trưởng ăn nhiều vào.)",
      "❗ Ghi chú: 〜盛り (ざかり/さかり) = đỉnh điểm, thời kỳ mạnh nhất. Vd: 食べ盛り、働き盛り.",
    ],
  },
  {
    front: "育児を放棄する",
    back: ["- ほうき", "- lơ là, bỏ mặc việc nuôi dạy con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 育児を放棄することは法律で禁じられている。 (Bỏ mặc việc nuôi con bị pháp luật cấm.)",
      "❗ Ghi chú: 放棄 (ほうき) = từ bỏ, bỏ mặc. Nghiêm trọng hơn 怠る (なまける).",
    ],
  },
  {
    front: "廊下がきしむ",
    back: ["- きしむ", "- hành lang phát ra tiếng cót két"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 古い家の廊下がきしむ音がする。 (Hành lang nhà cũ phát ra tiếng cót két.)",
      "❗ Ghi chú: きしむ = cọ xát tạo tiếng ồn (sàn gỗ, cửa cũ).",
    ],
  },
  {
    front: "壊れた家を再建する",
    back: ["- さいけん", "- xây lại nhà đã hư hỏng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 地震で壊れた家を再建する。 (Xây lại nhà bị hỏng do động đất.)",
      "❗ Ghi chú: 再建 (さいけん) = xây dựng lại. Khác: 新築 (しんちく) = xây mới hoàn toàn.",
    ],
  },
  {
    front: "首都圏で暮らす",
    back: ["- しゅとけん", "- sống ở khu vực thủ đô"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 首都圏で暮らすと生活費が高い。 (Sống ở khu vực thủ đô thì chi phí sinh hoạt cao.)",
      "❗ Ghi chú: 首都圏 = Tokyo và các tỉnh lân cận (Kanagawa, Saitama, Chiba).",
    ],
  },
  {
    front: "生活圏",
    back: ["- せいかつけん", "- khu vực sống"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 職場と生活圏が近いと便利だ。 (Nơi làm việc và khu vực sinh sống gần nhau thì tiện lợi.)",
      "❗ Ghi chú: 〜圏 (けん) = phạm vi, khu vực. Vd: 通勤圏、商業圏.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 11
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
