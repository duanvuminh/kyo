import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "かすむ",
    back: ["- かすむ", "- mờ đi; bị che khuất"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 彼の演技がうますぎて、主役がかすむ。 (Diễn xuất của anh ấy quá giỏi khiến nhân vật chính bị lu mờ.)",
      "❗ Ghi chú: ① vật thể mờ đi (霧で山がかすんで見える) ② mắt mờ (目がかすんで本が読めない) ③ bị đối tượng khác lu mờ.",
    ],
  },
  {
    front: "かなう",
    back: ["- 叶う・適う・敵う", "- thực hiện được; thỏa mãn; đối kháng; chịu đựng"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 夢がかなう。 (Ước mơ trở thành hiện thực.)",
      "❗ Ghi chú: ① 夢がかなう = ước thành sự thật ② 条件にかなう = thỏa mãn ③ 彼にかなう人はいない = không ai địch nổi ④ 今年の夏は暑くてかなわない = không chịu nổi.",
    ],
  },
  {
    front: "砕く",
    back: ["- くだく", "- phá vỡ; làm tan biến; giải thích dễ hiểu"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 難しい法律の問題を砕いて説明する。 (Giải thích vấn đề pháp luật khó khăn một cách dễ hiểu.)",
      "❗ Ghi chú: ① vỡ vật cứng (氷・骨・岩を砕く) ② phá vỡ ước mơ ③ đơn giản hóa vấn đề phức tạp.",
    ],
  },
  {
    front: "暮れる",
    back: ["- くれる", "- trời tối; rơi vào buồn đau; không biết làm gì"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: 悲しみに暮れる。 (Chìm đắm trong nỗi buồn.)",
      "❗ Ghi chú: ① 日が暮れる = trời tối ② 悲しみに暮れる = chìm trong nỗi đau ③ 途方に暮れる = không biết phải làm gì.",
    ],
  },
  {
    front: "こたえる",
    back: ["- こたえる", "- chịu đựng; không chịu nổi (nghĩa bóng)"],
    more: [
      "📚 Từ loại: Động từ (nhiều nghĩa)",
      "📝 Ví dụ: スポーツの後のビールはこたえられない。 (Bia sau khi chơi thể thao thì không gì bằng / không thể cưỡng lại được.)",
      "❗ Ghi chú: ① chịu đựng (暑さがこたえる = không chịu nổi nóng) ② こたえられない = tuyệt vời, không cưỡng lại được.",
    ],
  },
  {
    front: "しょせん",
    back: ["- しょせん", "- rốt cuộc, đánh giá bi quan cuối cùng"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: しょせん横綱には勝てないだろう。 (Rốt cuộc thì cũng không thắng được Yokozuna đâu.)",
      "❗ Ghi chú: しょせん = rốt cuộc, xét cho cùng. Thường kèm nhận định tiêu cực hoặc thực tế phũ phàng.",
    ],
  },
  {
    front: "まんまと",
    back: ["- まんまと", "- trót lọt, một cách dễ dàng (thường mang hàm ý bị lừa)"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: まんまと騙された。 (Bị lừa một cách trắng trợn/hoàn toàn.)",
      "❗ Ghi chú: Biến âm từ うまうまと = trơn tru, suôn sẻ. Thường dùng khi sự việc diễn ra quá dễ dàng (đặc biệt khi bị lừa).",
    ],
  },
  {
    front: "渋々",
    back: ["- しぶしぶ", "- miễn cưỡng"],
    more: [
      "📚 Từ loại: Phó từ",
      "📝 Ví dụ: 渋々承諾した。 (Miễn cưỡng chấp nhận.)",
      "❗ Ghi chú: 渋々 = làm dù không muốn, không có tâm. Gần nghĩa: しぶしぶ。Đối lập: 喜んで (よろこんで) = vui vẻ.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 23
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
