import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "先ごろ / 先だって / 前もって / かねて / とっくに / ひところ",
    back: ["- さきごろ・さきだって", "- gần đây; mấy hôm trước; chuẩn bị trước; trước đây; từ lâu; thời kì qua"],
    more: [
      "📚 Từ loại: Phó từ (thời gian quá khứ)",
      "📝 Ví dụ: とっくに閉まっていた。 (Đã đóng từ lâu rồi.)",
      "❗ Ghi chú: 先ごろ = gần đây. 先だって = mấy hôm trước. 前もって = chuẩn bị trước. かねて = từ trước. とっくに = từ lâu rồi. ひところ = một thời.",
    ],
  },
  {
    front: "追って / ぼつぼつ / じきに / 目下 / かねがね / しばし / 長らく",
    back: ["- おって・もっか・ながらく", "- sắp tới; sắp sửa; chẳng mấy chốc; hiện tại; từ trước; một chút; lâu dài"],
    more: [
      "📚 Từ loại: Phó từ (thời gian)",
      "📝 Ví dụ: 大変長らくお待たせいたしました。 (Rất xin lỗi vì đã để quý vị chờ đợi lâu.)",
      "❗ Ghi chú: 追って = ngay sau đây (thông báo sẽ đến). ぼつぼつ = sắp. じきに = chẳng mấy chốc. 目下 = hiện tại. かねがね = từ lâu. しばし = một lúc. 長らく = một thời gian dài.",
    ],
  },
  {
    front: "ことによると〜かもしれない",
    back: ["- ことによると", "- khả năng thấp nhưng có lẽ là..."],
    more: [
      "📚 Từ loại: Biểu thức suy đoán",
      "📝 Ví dụ: 彼は病気ではないと言っていたが、ことによると何か病気なのかもしれない。 (Anh ấy nói không bệnh, nhưng biết đâu có bệnh gì đó.)",
      "❗ Ghi chú: ことによると = biết đâu, có lẽ (khả năng không cao). Dùng khi suy đoán không chắc chắn.",
    ],
  },
  {
    front: "さぞ・さぞしも〜だろう",
    back: ["- さぞ", "- chắc chắn là rất (suy đoán đồng cảm)"],
    more: [
      "📚 Từ loại: Phó từ suy đoán",
      "📝 Ví dụ: あんなにかわいがっていた子供を失って、さぞ悲しいだろう。 (Mất đứa con yêu thương như thế, chắc hẳn buồn lắm.)",
      "❗ Ghi chú: さぞ = chắc hẳn là rất (đặt mình vào hoàn cảnh người khác để suy đoán). Luôn đi với だろう/でしょう.",
    ],
  },
  {
    front: "てっきり〜思った/思っていた",
    back: ["- てっきり", "- đinh ninh là như thế nhưng thực tế không phải vậy"],
    more: [
      "📚 Từ loại: Phó từ suy đoán",
      "📝 Ví dụ: 髪が長いので、てっきり女性だと思っていたら、そうではなかった。 (Tóc dài nên đinh ninh là phụ nữ nhưng hóa ra không phải.)",
      "❗ Ghi chú: てっきり = tưởng chắc chắn là vậy, nhưng nhầm. Luôn kèm kết quả trái với suy đoán.",
    ],
  },
  {
    front: "いかにも / 一見〜そうだ / さも〜ように / どうやら〜らしい",
    back: ["- いかにも・いっけん・どうやら", "- nhìn nào cũng thấy như thế; nhìn sơ qua; có cảm giác thật sự; có vẻ như"],
    more: [
      "📚 Từ loại: Phó từ/biểu thức suy đoán",
      "📝 Ví dụ: 電車が急に止まった。どうやら何かあったようだ。 (Tàu dừng đột ngột. Có vẻ có chuyện gì đó xảy ra.)",
      "❗ Ghi chú: いかにも = đúng là như thế (mọi góc độ). 一見 = nhìn thoáng qua. さも = như thật sự vậy. どうやら = dựa trên tình huống mà phán đoán.",
    ],
  },
  {
    front: "かろうじて / 危うく",
    back: ["- かろうじて・あやうく", "- vừa đủ, suýt sao; suýt nữa là xảy ra điều xấu"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 合格点ぎりぎりで、かろうじて大学に合格した。 (Vừa đúng điểm sàn, suýt sao đỗ đại học.)",
      "❗ Ghi chú: かろうじて = vừa đủ, gần như không được nhưng vẫn được. 危うく = suýt nữa thì xảy ra điều không hay (kèm ～ところだった).",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 29
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
