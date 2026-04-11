import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "いわば / いわゆる / いわく",
    back: ["- いわば・いわゆる・いわく", "- có thể ví như; thường gọi là; theo lời nói của"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼はいわゆる「オレオレ詐欺」の犯人だった。 (Anh ta là tên tội phạm của cái gọi là lừa đảo giả danh người thân.)",
      "❗ Ghi chú: いわば = có thể ví như. いわゆる = cái mà người ta gọi là. いわく = theo lời (người nào đó) nói.",
    ],
  },
  {
    front: "心得 / 心構え / 心配り / 心残り",
    back: ["- こころえ・こころがまえ・こころくばり・こころのこり", "- nhận thức; chuẩn bị tinh thần; quan tâm; luyến tiếc"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: これで引退しても心残りはありません。 (Nghỉ hưu bây giờ cũng không có gì luyến tiếc.)",
      "❗ Ghi chú: 心得 = hiểu biết sâu. 心構え = chuẩn bị tâm lý. 心配り = ân cần để ý. 心残り = tiếc nuối.",
    ],
  },
  {
    front: "はなはだ / すこぶる / 至って / ごく",
    back: ["- はなはだ・すこぶる", "- rất (tiêu cực); rất (tích cực); quá mức; cực kì (nhỏ)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 至って簡単です。 (Cực kì đơn giản / Đơn giản đến mức bất thường.)",
      "❗ Ghi chú: はなはだ = rất (ý xấu). すこぶる = rất (ý tốt). 至って = vượt mức bình thường. ごく = rất nhỏ/ít.",
    ],
  },
  {
    front: "やけに / いやに / むやみに / やたら",
    back: ["- やけに・いやに・むやみに・やたら", "- khác thường; kì lạ; liều lĩnh; bừa bãi"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: むやみに人を信じる。 (Tin người một cách bừa bãi, không suy nghĩ.)",
      "❗ Ghi chú: やけに = khác thường ngày (やけに機嫌だね). いやに = kì lạ, đáng ngờ (いやに優しい). むやみ・やたら = liều lĩnh, không suy nghĩ.",
    ],
  },
  {
    front: "ことに / ことのほか / ひときわ / とりわけ",
    back: ["- ことに・ひときわ・とりわけ", "- đặc biệt; khác thường; nổi bật hơn; đặc biệt hơn cả"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 彼は理系で、とりわけ数学がよくできる。 (Anh ấy thuộc khối tự nhiên, đặc biệt giỏi toán hơn cả.)",
      "❗ Ghi chú: ことに = đặc biệt. ことのほか = hơn mong đợi. ひときわ = nổi bật nhất. とりわけ = trong đó đặc biệt hơn.",
    ],
  },
  {
    front: "とびきり / 格別に / 断然 / いささか",
    back: ["- とびきり・かくべつ・だんぜん・いささか", "- tuyệt vời nhất; rất khác biệt; chắc chắn hơn; một chút (tiêu cực)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 会議が長引いて、いささか疲れた。 (Cuộc họp kéo dài, cảm thấy hơi mệt một chút.)",
      "❗ Ghi chú: とびきり = xuất chúng. 格別 = khác biệt đặc biệt. 断然 = chắc chắn, không chút nghi ngờ. いささか = một chút (kèm ý tiêu cực).",
    ],
  },
  {
    front: "即座に / 即刻 / すかさず / とっさに / 急きょ",
    back: ["- そくざ・そっこく・すかさず・とっさに", "- ngay lập tức (các sắc thái khác nhau)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 石が落ちてきたので、とっさに頭を庇った。 (Đá rơi xuống, phản xạ ngay lập tức che đầu lại.)",
      "❗ Ghi chú: 即座 = lập tức (trả lời). 即刻 = ngay lập tức (hành động). すかさず = không bỏ lỡ cơ hội. とっさに = phản xạ tức thì. 急きょ = thay đổi đột ngột kế hoạch.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 28
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
