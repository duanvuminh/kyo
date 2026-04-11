import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "さらう",
    back: ["- さらう", "- bắt cóc; độc chiếm; nạo vét"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 人気をさらう。 (Độc chiếm sự yêu thích/hâm mộ.)",
      "❗ Ghi chú: ① 子供をさらう = bắt cóc ② 人気・話題・優勝をさらう = độc chiếm ③ 池をさらう = nạo vét ao.",
    ],
  },
  {
    front: "しのぐ",
    back: ["- しのぐ", "- vượt qua khó khăn; vượt trội hơn"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 飢えをしのぐ。 (Vượt qua cơn đói.)",
      "❗ Ghi chú: ① 飢え・空腹・雨風・寒さをしのぐ = vượt qua khó khăn ② 統編は前作をしのぐ面白さ = vượt trội hơn.",
    ],
  },
  {
    front: "断つ",
    back: ["- たつ", "- không tiếp tục; bị gián đoạn; hy vọng tan biến"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: タバコを断つことにした。 (Quyết định không hút thuốc nữa.)",
      "❗ Ghi chú: ① cai (タバコ・酒を断つ) ② cung cấp bị cắt (電力・ガスが断たれる) ③ hy vọng tan biến (希望が断たれる).",
    ],
  },
  {
    front: "絶つ",
    back: ["- たつ", "- cắt đứt; tự tử; không dứt được"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 消息が絶っている。 (Mất liên lạc/tung tích.)",
      "❗ Ghi chú: ① 消息・連絡が絶つ = mất tin tức ② 自ら命を絶つ = tự tử ③ 徹底的に解決しないと後を絶たない = không dứt được.",
    ],
  },
  {
    front: "はじく",
    back: ["- 弾く", "- gảy; không thấm nước; từ chối/loại bỏ"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: グラスを指ではじくと、綺麗な音がする。 (Búng ngón tay vào ly, phát ra âm thanh đẹp.)",
      "❗ Ghi chú: ① gảy/búng ② 雨をはじく加工 = chống thấm nước ③ 迷惑メールは自動的にはじかれる = tự động lọc/loại.",
    ],
  },
  {
    front: "弾む",
    back: ["- はずむ", "- nảy; thở dốc; vui vẻ; cuộc trò chuyện sôi nổi; hào phóng"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 話が弾んだ。 (Cuộc trò chuyện diễn ra sôi nổi.)",
      "❗ Ghi chú: ① nảy ② 息が弾む = thở dốc ③ 期待に心が弾む = vui vẻ vì mong đợi ④ 話が弾む = trò chuyện rôm rả ⑥ チップを弾む = hào phóng tiền tip.",
    ],
  },
  {
    front: "ふるまう",
    back: ["- ふるまう", "- hành động; mời thức ăn, rượu"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 部長が手料理をふるまってくださった。 (Trưởng bộ phận đã thiết đãi món ăn tự nấu.)",
      "❗ Ghi chú: ① 人前では明るくふるまっている = cư xử quang minh ② 料理・お酒をふるまう = thiết đãi, mời ăn uống.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 24
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
