import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "一挙に / 一心に / 一躍",
    back: ["- いっきょ・いっしん・いちやく", "- một lần lớn; hết lòng; nhanh chóng nổi tiếng"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: その事件で彼は一躍有名人になった。 (Nhờ sự kiện đó anh ấy nhanh chóng nổi tiếng.)",
      "❗ Ghi chú: 一挙に = cùng lúc, một lần. 一心に = chuyên tâm, hết lòng. 一躍 = bước lên địa vị cao đột ngột.",
    ],
  },
  {
    front: "一通り / 逐一 / 現に / 真に / 直に / 切に",
    back: ["- いっとおり・ちくいち・しんに・じかに・せつに", "- lướt qua; từng cái; bằng chứng hiện tại; thật sự; trực tiếp; hết lòng"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 成功を切に祈っております。 (Tôi thành tâm cầu chúc thành công.)",
      "❗ Ghi chú: 一通り = tổng quan. 逐一 = cụ thể từng bước. 現に = có bằng chứng ngay đây. 真に = thật sự. 直に = trực tiếp. 切に = chân thành.",
    ],
  },
  {
    front: "転々と / 黙々と / 悠々と",
    back: ["- てんてん・もくもく・ゆうゆう", "- thay đổi liên tục; lặng lặng làm; thong dong / dư dả"],
    more: [
      "📚 Từ loại: Phó từ (trạng thái)",
      "📝 Ví dụ: 彼女は黙々と片付けをしている。 (Cô ấy lặng lẽ dọn dẹp.)",
      "❗ Ghi chú: 転々と = di chuyển liên tục. 黙々と = im lặng làm việc. 悠々と = ① thảnh thơi ② có thừa khả năng (悠々間に合う).",
    ],
  },
  {
    front: "努めて / 極力 / ひたすら / もっぱら",
    back: ["- つとめて・きょくりょく", "- cố gắng trong giới hạn; hết khả năng; chỉ tập trung; chỉ toàn là"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 最近はもっぱら発泡酒ばかり飲んでいる。 (Gần đây chỉ toàn uống bia lon.)",
      "❗ Ghi chú: 努めて = cố gắng dù không 100%. 極力 = hết mức có thể. ひたすら = chỉ tập trung một việc. もっぱら = chỉ toàn, không có gì khác.",
    ],
  },
  {
    front: "隈なく / ことごとく / 軒並み / 根こそぎ",
    back: ["- くまなく・のきなみ・ねこそぎ", "- mọi ngóc ngách; tất cả; đồng loạt; không để lại gì"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 津波で根こそぎ家を持っていかれた。 (Sóng thần cuốn đi tất cả nhà cửa không để lại gì.)",
      "❗ Ghi chú: 隈なく = không sót góc nào. ことごとく = tất cả không ngoại lệ. 軒並み = đồng loạt. 根こそぎ = nhổ tận gốc, không còn gì.",
    ],
  },
  {
    front: "自ずと / ひとりでに / 元来 / そもそも",
    back: ["- おのずと・がんらい・そもそも", "- tự nhiên; tự nhiên xảy ra; vốn dĩ từ trước; ngay từ đầu"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼に頼んだのが、そもそも間違っているんだ。 (Ngay từ đầu, việc nhờ anh ấy đã là sai lầm rồi.)",
      "❗ Ghi chú: 自ずと = một cách tự nhiên. ひとりでに = tự động xảy ra. 元来 = vốn dĩ có tính chất đó. そもそも = ngay từ bản chất cơ bản nhất.",
    ],
  },
  {
    front: "たかが / たかだか",
    back: ["- たかが・たかだか", "- chỉ là (không to tát); dù nhiều thì cũng chỉ"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: たかが中間テストぐらいで、そんなに心配するなよ。 (Chỉ là bài kiểm tra giữa kỳ thôi, đừng lo lắng như vậy.)",
      "❗ Ghi chú: たかが = chỉ là, không đáng lo. たかだか = nhiều thì cũng chỉ đến mức đó (たかだか一時間ぐらいだ).",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 30
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
