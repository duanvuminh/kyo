import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "屋敷の外観",
    back: ["- やしきのがいかん", "- diện mạo bên ngoài của dinh thự, căn nhà"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 屋敷の外観が立派だ。 (Diện mạo bên ngoài của dinh thự thật uy nghi.)",
      "❗ Ghi chú: 屋敷 (やしき) = dinh thự, tư gia lớn. 外観 (がいかん) = diện mạo bên ngoài.",
    ],
  },
  {
    front: "部屋の照明に凝る",
    back: ["- へやのしょうめいにこる", "- chú trọng vào ánh sáng của căn phòng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 部屋の照明に凝ってインテリアを整えた。 (Chú trọng ánh sáng phòng để bài trí nội thất.)",
      "❗ Ghi chú: 凝る (こる) = đam mê, chú tâm vào; chỉ sự tỉ mỉ trong từng chi tiết.",
    ],
  },
  {
    front: "廊下がきしむ",
    back: ["- ろうかがきしむ", "- hành lang phát ra tiếng cót két"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 古い家の廊下がきしむ。 (Hành lang của ngôi nhà cũ phát ra tiếng cót két.)",
      "❗ Ghi chú: きしむ = kêu cót két (âm thanh của gỗ cũ khi có người đi).",
    ],
  },
  {
    front: "家を新築する",
    back: ["- いえをしんちくする", "- xây nhà mới"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 郊外に家を新築した。 (Xây nhà mới ở ngoại ô.)",
      "❗ Ghi chú: 新築 (しんちく) = xây dựng mới. Đối lập: リフォーム (cải tạo).",
    ],
  },
  {
    front: "壊れた家を再建する",
    back: ["- こわれたいえをさいけんする", "- xây lại nhà đã hư hỏng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 震災後に壊れた家を再建した。 (Sau động đất đã xây lại ngôi nhà bị hư hỏng.)",
      "❗ Ghi chú: 再建 (さいけん) = xây dựng lại từ đầu.",
    ],
  },
  {
    front: "壊れた家を補強する",
    back: ["- こわれたいえをほきょうする", "- gia cố nhà bị hỏng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 老朽化した建物を補強する。 (Gia cố tòa nhà đã xuống cấp.)",
      "❗ Ghi chú: 補強 (ほきょう) = tăng cường, gia cố thêm. Khác với 再建 (xây lại).",
    ],
  },
  {
    front: "古い橋を改修する",
    back: ["- ふるいはしをかいしゅうする", "- cải tu; sửa chữa cầu cũ"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 老朽化した橋を改修する工事が始まった。 (Công trình sửa chữa cầu cũ đã bắt đầu.)",
      "❗ Ghi chú: 改修 (かいしゅう) = sửa chữa, cải tạo công trình đã có.",
    ],
  },
  {
    front: "首都圏で暮らす",
    back: ["- しゅとけんでくらす", "- sống ở khu vực thủ đô"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 首都圏で暮らすのは家賃が高い。 (Sống ở khu vực thủ đô thì tiền thuê nhà cao.)",
      "❗ Ghi chú: 首都圏 (しゅとけん) = khu vực thủ đô (Tokyo và các tỉnh lân cận).",
    ],
  },
  {
    front: "山の手線沿線に住む",
    back: ["- やまのてせんえんせんにすむ", "- sống dọc theo tuyến Yamanote"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 山の手線沿線に住むと便利だ。 (Sống dọc tuyến Yamanote thì tiện lợi.)",
      "❗ Ghi chú: 沿線 (えんせん) = dọc theo tuyến đường / tuyến tàu.",
    ],
  },
  {
    front: "駅から徒歩五分",
    back: ["- えきからとほごふん", "- cách ga đi bộ 5 phút"],
    more: [
      "📚 Từ loại: Cụm danh từ / diễn đạt địa lý",
      "📝 Ví dụ: 駅から徒歩五分のところに住んでいる。 (Tôi sống cách ga đi bộ 5 phút.)",
      "❗ Ghi chú: 徒歩 (とほ) = đi bộ. Cụm cố định dùng nhiều trong quảng cáo bất động sản.",
    ],
  },
  {
    front: "居住者で組合を結成する",
    back: ["- きょじゅうしゃでくみあいをけっせいする", "- tạo liên kết bởi những người sống cùng chung cư"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: マンションの居住者で組合を結成した。 (Những người ở cùng chung cư đã thành lập hội đồng.)",
      "❗ Ghi chú: 組合 (くみあい) = hội, liên đoàn, tổ hợp.",
    ],
  },
  {
    front: "掃除機で部屋のゴミを吸い取る",
    back: ["- そうじきでへやのごみをすいとる", "- hút bụi trong phòng bằng máy hút bụi"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 毎日掃除機で部屋のゴミを吸い取る。 (Mỗi ngày hút bụi trong phòng.)",
      "❗ Ghi chú: 掃除機 (そうじき) = máy hút bụi. 吸い取る (すいとる) = hút lấy.",
    ],
  },
  {
    front: "生活圏",
    back: ["- せいかつけん", "- khu vực sống; phạm vi sinh hoạt"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 生活圏内にスーパーがある。 (Trong phạm vi sinh hoạt có siêu thị.)",
      "❗ Ghi chú: 圏 (けん) = phạm vi, khu vực.",
    ],
  },
  {
    front: "店を構える",
    back: ["- みせをかまえる", "- mở; sở hữu cửa hàng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 駅前に店を構えた。 (Mở cửa hàng trước ga.)",
      "❗ Ghi chú: 構える (かまえる) = thiết lập, dựng lên (mang nghĩa trang trọng hơn 開く).",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 4
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
