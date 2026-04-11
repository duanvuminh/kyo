import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "唖然と / 呆然と / 漠然と / 毅然と",
    back: ["- あぜん・ぼうぜん・ばくぜん・きぜん", "- sững sờ; ngẩn người; mơ hồ; kiên quyết"],
    more: [
      "📚 Từ loại: Phó từ (trạng thái)",
      "📝 Ví dụ: 彼女は毅然とした態度で彼の誘いを断る。 (Cô ấy từ chối lời mời của anh ấy với thái độ kiên quyết.)",
      "❗ Ghi chú: 唖然 = không nói được vì sốc. 呆然 = ngẩn người vì choáng. 漠然 = mờ nhạt không rõ. 毅然 = không dao động.",
    ],
  },
  {
    front: "気兼ねする・気を遣う",
    back: ["- きがねする・きをつかう", "- cảm thấy ngại, khách khí quá mức"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 気兼ねせずに頼んでください。 (Đừng ngại ngùng, cứ nhờ tôi đi.)",
      "❗ Ghi chú: 気兼ね = ngại làm phiền người khác. 気を遣う = cẩn thận quan tâm đến cảm xúc người khác.",
    ],
  },
  {
    front: "傾ける・注ぐ / 張り合う・競い合う",
    back: ["- かたむける・そそぐ", "- dốc hết sức; cạnh tranh, ganh đua"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 全力を傾ける・注ぐ。 (Dốc toàn lực.)",
      "❗ Ghi chú: 傾ける/注ぐ = nghiêng hết, đổ hết vào. 張り合う = ganh đua, cạnh tranh với nhau.",
    ],
  },
  {
    front: "見逃す・大目に見る",
    back: ["- みのがす・おおめにみる", "- bỏ qua lỗi lầm, thiếu sót"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 今回だけ大目に見てあげる。 (Lần này thôi tôi bỏ qua cho.)",
      "❗ Ghi chú: 見逃す = không thấy hoặc cố tình bỏ qua. 大目に見る = tha thứ, không chú trọng lỗi nhỏ.",
    ],
  },
  {
    front: "込み上げる / 異動する・赴任する / 見合わせる",
    back: ["- こみあげる・ふにん・みあわせる", "- dâng trào; chuyển công tác; trì hoãn"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 出発を見合わせる。 (Trì hoãn xuất phát.)",
      "❗ Ghi chú: 込み上げる = cảm xúc trào dâng (涙が込み上げる). 赴任 = đến nơi công tác mới. 見合わせる = hoãn lại, chờ.",
    ],
  },
  {
    front: "倣う / 経歴・キャリア / いきさつ・事情",
    back: ["- ならう", "- bắt chước theo; quá trình kinh nghiệm; đầu đuôi sự việc"],
    more: [
      "📚 Từ loại: Động từ/Danh từ",
      "📝 Ví dụ: 前例に倣ってやってみる。 (Thử làm theo tiền lệ.)",
      "❗ Ghi chú: 倣う = làm theo mô hình có sẵn. キャリア = quá trình nghề nghiệp. いきさつ = đầu đuôi, diễn biến sự việc.",
    ],
  },
  {
    front: "朗報 / 最善・ベスト / あべこべ",
    back: ["- ろうほう・さいぜん", "- tin tốt lành; tốt nhất; ngược, đảo lộn"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: あべこべの方向へ行く。 (Đi theo hướng ngược lại.)",
      "❗ Ghi chú: 朗報 = tin vui, tin lành. 最善 = điều tốt nhất có thể. あべこべ = ngược ngạo, lộn xộn.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 32
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
