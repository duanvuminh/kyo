import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "几帳面な",
    back: ["- きちょうめん", "- ngăn nắp; cẩn thận"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 彼女は几帳面な性格で、いつも部屋を整理している。 (Cô ấy tính cẩn thận, phòng luôn ngăn nắp.)",
      "❗ Ghi chú: Hàm ý tích cực — người chú ý đến từng chi tiết nhỏ.",
    ],
  },
  {
    front: "生真面目な",
    back: ["- きまじめ", "- quá nghiêm túc, cứng nhắc (có hơi hướng không tốt)"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 生真面目な人は冗談が通じない。 (Người quá nghiêm túc không hiểu được đùa.)",
      "❗ Ghi chú: Khác với 真面目な (tích cực) — 生真面目 mang sắc thái tiêu cực nhẹ.",
    ],
  },
  {
    front: "上品な",
    back: ["- じょうひん", "- lịch thiệp, tao nhã, sang trọng"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 彼女の所作はとても上品だ。 (Cử chỉ của cô ấy rất thanh lịch.)",
      "❗ Ghi chú: Đối lập: 下品な (げひん) = thô lỗ, khiếm nhã.",
    ],
  },
  {
    front: "融通が利く↔利かない",
    back: ["- ゆうずう", "- có ↔ không có sự linh hoạt ứng biến"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: あの店長は融通が利く人だから、相談してみよう。 (Ông trưởng chi nhánh đó linh hoạt nên hãy thử bàn bạc.)",
      "❗ Ghi chú: 融通 (ゆうずう) = sự linh hoạt, ứng biến. 利かない = cứng nhắc.",
    ],
  },
  {
    front: "冷酷な",
    back: ["- れいこく", "- thái độ lạnh lùng tàn nhẫn"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 冷酷な判断を下す。 (Đưa ra phán quyết lạnh lùng tàn nhẫn.)",
      "❗ Ghi chú: Mạnh hơn ドライな — mang hàm ý độc ác, thiếu nhân tính.",
    ],
  },
  {
    front: "愛想がいい↔悪い",
    back: ["- あいそ", "- tính tình chan hòa, gần gũi ↔ khó gần"],
    more: [
      "📚 Từ loại: Cụm tính từ",
      "📝 Ví dụ: あの店員は愛想がよくて、お客さんに人気だ。 (Nhân viên đó thân thiện nên được khách hàng yêu thích.)",
      "❗ Ghi chú: 無愛想 (ぶあいそう) = không thân thiện, lạnh lùng với người khác.",
    ],
  },
  {
    front: "気さくな",
    back: ["- きさく", "- cởi mở, dễ hòa đồng"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 気さくな人で、すぐに友達になれた。 (Người cởi mở nên nhanh chóng kết bạn được.)",
      "❗ Ghi chú: Hàm ý tích cực — dễ tiếp cận, không kiêu ngạo.",
    ],
  },
  {
    front: "ユニークな / 独特な",
    back: ["- ユニークな / どくとく", "- riêng biệt, cá biệt"],
    more: [
      "📚 Từ loại: Tính từ な",
      "📝 Ví dụ: 彼は独特なセンスを持っている。 (Anh ấy có cảm quan độc đáo riêng.)",
      "❗ Ghi chú: ユニーク (unique) = mượn từ tiếng Anh. 独特 = thuần Nhật, nghĩa tương đương.",
    ],
  },
  {
    front: "個性が際立つ",
    back: ["- きわだつ", "- cá tính rất nổi bật"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼女の個性が際立っていて、周りと違う。 (Cá tính của cô ấy nổi bật, khác với những người xung quanh.)",
      "❗ Ghi chú: 際立つ = nổi bật, nổi trội so với xung quanh.",
    ],
  },
  {
    front: "個性を重んじる↔軽んじる",
    back: ["- おもんじる↔かろんじる", "- coi trọng ↔ khinh thường cá tính"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 個性を重んじる教育が大切だ。 (Giáo dục tôn trọng cá tính là quan trọng.)",
      "❗ Ghi chú: 重んじる = coi trọng. 軽んじる = coi thường. Cặp đối lập quan trọng trong N1.",
    ],
  },
  {
    front: "人に共感する・同情する",
    back: ["- きょうかん・どうじょう", "- đồng cảm trước khó khăn, đau khổ của người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 友人の悩みに共感する。 (Đồng cảm với nỗi khổ của bạn bè.)",
      "❗ Ghi chú: 共感 = đồng cảm (cùng cảm xúc). 同情 = thương cảm, thông cảm (từ trên xuống).",
    ],
  },
  {
    front: "人に反感を持つ",
    back: ["- はんかん", "- phản cảm, ác cảm với người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼の態度に反感を持った。 (Cảm thấy phản cảm với thái độ của anh ấy.)",
      "❗ Ghi chú: 反感 = cảm giác phản đối, không ưa. Mạnh hơn 不満 (bất mãn).",
    ],
  },
  {
    front: "人を妬む",
    back: ["- ねたむ", "- ganh ghét người khác"],
    more: [
      "📚 Từ loại: Động từ nhóm 1",
      "📝 Ví dụ: 人の成功を妬むのは良くない。 (Ganh ghét thành công của người khác là không tốt.)",
      "❗ Ghi chú: 嫉妬する (しっと) = ghen tuông (có thể dùng cả trong tình yêu lẫn cuộc sống).",
    ],
  },
  {
    front: "幼なじみ",
    back: ["- おさななじみ", "- bạn thiếu thời; bạn thuở nhỏ"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 彼は幼なじみで、小学校からの友達だ。 (Anh ấy là bạn thời thơ ấu, quen từ tiểu học.)",
      "❗ Ghi chú: 幼 (おさな) = thơ ấu. なじみ = quen thuộc, thân quen.",
    ],
  },
  {
    front: "人に片思いする",
    back: ["- かたおもい", "- yêu đơn phương ai đó"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼女に片思いしているが、告白できない。 (Yêu đơn phương cô ấy nhưng không dám thú nhận.)",
      "❗ Ghi chú: 片思い = tình cảm một chiều. Đối lập: 両思い (りょうおもい) = cả hai cùng có tình cảm.",
    ],
  },
  {
    front: "浮気する",
    back: ["- うわき", "- lăng nhăng"],
    more: [
      "📚 Từ loại: Động từ する",
      "📝 Ví dụ: 浮気が発覚して、別れることになった。 (Bị phát hiện lăng nhăng nên phải chia tay.)",
      "❗ Ghi chú: 浮気 (うわき) = không chung thủy. 浮 = nổi, không vững; 気 = tâm trí.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 10
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
