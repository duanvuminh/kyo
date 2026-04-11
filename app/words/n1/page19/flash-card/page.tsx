import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "集中豪雨が降る",
    back: ["- しゅうちゅうごうう", "- mưa lớn cục bộ"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 集中豪雨で河川が氾濫した。 (Do mưa lớn cục bộ, sông ngòi bị tràn bờ.)",
      "❗ Ghi chú: 集中 = tập trung một chỗ. 豪雨 (ごうう) = mưa lớn. Khác: 大雨 (おおあめ) = mưa to nói chung.",
    ],
  },
  {
    front: "暴風雨になる",
    back: ["- ぼうふうう", "- mưa bão"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 台風の影響で暴風雨になった。 (Do ảnh hưởng của bão, thời tiết trở nên mưa bão.)",
      "❗ Ghi chú: 暴風 (ぼうふう) = gió bão. 暴雨 (ぼうう) = mưa lớn. 暴風雨 = kết hợp cả hai.",
    ],
  },
  {
    front: "霧が立ち込める",
    back: ["- きり", "- sương mù bao phủ cả một vùng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 朝、霧が立ち込めて見えにくかった。 (Buổi sáng, sương mù bao phủ khiến khó nhìn.)",
      "❗ Ghi chú: 立ち込める (たちこめる) = bao phủ, phủ kín. 霧 = sương mù.",
    ],
  },
  {
    front: "起伏が激しい山を登る",
    back: ["- きふく", "- leo núi cực kì hiểm trở, nhấp nhô"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 起伏が激しい山道を慎重に登る。 (Leo cẩn thận trên con đường núi nhấp nhô.)",
      "❗ Ghi chú: 起伏 (きふく) = lên xuống nhấp nhô. 激しい = dữ dội, mạnh.",
    ],
  },
  {
    front: "南半球に位置する",
    back: ["- みなみはんきゅう", "- nằm ở nam bán cầu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: オーストラリアは南半球に位置する。 (Úc nằm ở nam bán cầu.)",
      "❗ Ghi chú: 半球 (はんきゅう) = bán cầu. 位置する (いちする) = nằm tại, tọa lạc.",
    ],
  },
  {
    front: "惑星",
    back: ["- わくせい", "- hành tinh"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 太陽系には8つの惑星がある。 (Hệ mặt trời có 8 hành tinh.)",
      "❗ Ghi chú: 惑星 = hành tinh. 恒星 (こうせい) = ngôi sao. 衛星 (えいせい) = vệ tinh.",
    ],
  },
  {
    front: "天体観測する",
    back: ["- てんたいかんそく", "- quan trắc thiên thể"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 望遠鏡で天体観測する。 (Quan trắc thiên thể bằng kính thiên văn.)",
      "❗ Ghi chú: 天体 (てんたい) = thiên thể (sao, hành tinh...). 観測 = quan sát, đo đạc.",
    ],
  },
  {
    front: "飛行機が離陸する・着陸",
    back: ["- りりく", "- máy bay cất cánh - hạ cánh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 飛行機が無事に着陸した。 (Máy bay hạ cánh an toàn.)",
      "❗ Ghi chú: 離陸 (りりく) = cất cánh. 着陸 (ちゃくりく) = hạ cánh. 離 = rời, 着 = đến.",
    ],
  },
  {
    front: "人工知能",
    back: ["- じんこうちのう", "- trí thông minh nhân tạo"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 人工知能が私たちの生活を変えている。 (AI đang thay đổi cuộc sống của chúng ta.)",
      "❗ Ghi chú: AI = 人工知能 (じんこうちのう). 人工 = nhân tạo. 知能 (ちのう) = trí thông minh.",
    ],
  },
  {
    front: "満月が出る",
    back: ["- まんげつ", "- trăng tròn xuất hiện"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 今夜は満月が出ている。 (Tối nay trăng tròn mọc.)",
      "❗ Ghi chú: 満月 = trăng rằm/trăng tròn. 三日月 (みかづき) = trăng lưỡi liềm.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 19
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
