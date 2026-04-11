import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "几帳面な",
    back: ["- きちょうめん", "- ngăn nắp; cẩn thận"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 彼女は几帳面な性格です。 (Cô ấy có tính cách ngăn nắp.)",
      "❗ Ghi chú: Mang nghĩa tích cực, chỉ người cẩn thận tỉ mỉ.",
    ],
  },
  {
    front: "生真面目な",
    back: ["- きまじめ", "- quá nghiêm túc; cực kì nghiêm túc (có hơi hướng không tốt)"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 生真面目な人は冗談が通じない。 (Người quá nghiêm túc không hiểu được đùa.)",
      "❗ Ghi chú: Khác với 真面目 (まじめ - nghiêm túc bình thường), 生真面目 có hàm ý hơi tiêu cực.",
    ],
  },
  {
    front: "不真面目な",
    back: ["- ふまじめ", "- không nghiêm túc; bất cẩn"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 不真面目な態度は職場で嫌われる。 (Thái độ không nghiêm túc bị ghét ở nơi làm việc.)",
      "❗ Ghi chú: Đối nghịch với 真面目な.",
    ],
  },
  {
    front: "上品な",
    back: ["- じょうひん", "- lịch thiệp; tao nhã; sang trọng; quý phái"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 上品な言葉遣いを心がける。 (Cố gắng dùng ngôn từ lịch thiệp.)",
      "❗ Ghi chú: Đối nghịch với 下品な (げひん). Đồng nghĩa: 品がいい、気品がある.",
    ],
  },
  {
    front: "下品な",
    back: ["- げひん", "- khiếm nhã; thô tục"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 下品な冗談は言わないほうがいい。 (Không nên nói những câu đùa thô tục.)",
      "❗ Ghi chú: Đối nghịch với 上品な. Đồng nghĩa: 品が悪い.",
    ],
  },
  {
    front: "融通が利く",
    back: ["- ゆうずうがきく", "- có sự linh hoạt ứng biến"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 融通が利く人は仕事がうまくいく。 (Người linh hoạt thường làm việc thuận lợi.)",
      "❗ Ghi chú: Đối lập: 融通が利かない (cứng nhắc, không linh hoạt).",
    ],
  },
  {
    front: "ドライな",
    back: ["- ドライな", "- rõ ràng; lạnh nhạt; không để tình cảm xen vào"],
    more: [
      "📚 Từ loại: Tính từ -na (từ mượn tiếng Anh: dry)",
      "📝 Ví dụ: 彼はドライな性格で感情を表さない。 (Anh ấy tính cách lạnh nhạt, không bộc lộ cảm xúc.)",
      "❗ Ghi chú: Mang nghĩa trung tính hoặc tiêu cực tùy ngữ cảnh.",
    ],
  },
  {
    front: "冷酷な",
    back: ["- れいこく", "- lạnh lùng; tàn nhẫn"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 冷酷な仕打ちに心が痛む。 (Đau lòng trước sự đối xử tàn nhẫn.)",
      "❗ Ghi chú: Mạnh hơn ドライな, mang nghĩa tiêu cực rõ ràng.",
    ],
  },
  {
    front: "愛想がいい",
    back: ["- あいそがいい", "- tính tình chan hòa; gần gũi; dễ mến"],
    more: [
      "📚 Từ loại: Cụm tính từ",
      "📝 Ví dụ: 愛想がいい店員さんに好感を持った。 (Có thiện cảm với nhân viên dễ mến.)",
      "❗ Ghi chú: Đối lập: 無愛想な (ぶあいそう - lạnh lùng, khó gần).",
    ],
  },
  {
    front: "無愛想な",
    back: ["- ぶあいそう", "- lạnh lùng; khó gần gũi; không thân thiện"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 無愛想な返事で相手を傷つけた。 (Câu trả lời lạnh lùng làm đối phương tổn thương.)",
      "❗ Ghi chú: Đối lập với 愛想がいい.",
    ],
  },
  {
    front: "非社交的な",
    back: ["- ひしゃこうてき", "- không có tính xã giao; ít giao tiếp"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 非社交的な性格で友達が少ない。 (Tính ít giao tiếp nên có ít bạn bè.)",
      "❗ Ghi chú: Đối lập: 社交的な (しゃこうてき - có tính xã giao).",
    ],
  },
  {
    front: "無遠慮な",
    back: ["- ぶえんりょ", "- thẳng thắn; không giữ kẽ; thiếu tế nhị"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 無遠慮な発言で場が静まった。 (Phát ngôn thiếu tế nhị khiến không khí im lặng.)",
      "❗ Ghi chú: Mang sắc thái tiêu cực, chỉ người nói thẳng không suy nghĩ đến cảm xúc người khác.",
    ],
  },
  {
    front: "真摯な",
    back: ["- しんし", "- chân thành; nghiêm túc"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 真摯な態度で問題に向き合う。 (Đối mặt với vấn đề bằng thái độ chân thành.)",
      "❗ Ghi chú: Thường dùng trong văn viết trang trọng.",
    ],
  },
  {
    front: "謙虚な",
    back: ["- けんきょ", "- khiêm nhường; khiêm tốn"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 謙虚な人は周りから好かれる。 (Người khiêm tốn được mọi người yêu mến.)",
      "❗ Ghi chú: Đối lập: 傲慢な (ごうまん - kiêu ngạo).",
    ],
  },
  {
    front: "気さくな",
    back: ["- きさく", "- cởi mở; dễ hòa đồng; thân thiện"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 気さくな人柄で誰とでも仲良くなれる。 (Tính cách cởi mở nên có thể thân thiện với ai cũng được.)",
      "❗ Ghi chú: Mang nghĩa tích cực.",
    ],
  },
  {
    front: "ユニークな",
    back: ["- ユニークな", "- độc đáo; đặc biệt; khác người"],
    more: [
      "📚 Từ loại: Tính từ -na (từ mượn: unique)",
      "📝 Ví dụ: 彼のユニークなアイデアが採用された。 (Ý tưởng độc đáo của anh ấy được chấp nhận.)",
      "❗ Ghi chú: Đồng nghĩa: 独特な (どくとく).",
    ],
  },
  {
    front: "独特な",
    back: ["- どくとく", "- riêng biệt; cá biệt; đặc trưng"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 独特なスタイルで人気を集める。 (Thu hút sự chú ý bằng phong cách riêng biệt.)",
      "❗ Ghi chú: Đồng nghĩa: ユニークな. Nhấn mạnh tính đặc trưng riêng.",
    ],
  },
  {
    front: "強烈な",
    back: ["- きょうれつ", "- quyết liệt; mạnh mẽ; ấn tượng mạnh"],
    more: [
      "📚 Từ loại: Tính từ -na",
      "📝 Ví dụ: 強烈な個性の持ち主だ。 (Là người sở hữu cá tính mạnh mẽ.)",
      "❗ Ghi chú: Dùng để nhấn mạnh mức độ rất cao, rất mạnh.",
    ],
  },
  {
    front: "個性が際立つ",
    back: ["- こせいがきわだつ", "- cá tính rất nổi bật"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼の個性が際立っている。 (Cá tính của anh ấy rất nổi bật.)",
      "❗ Ghi chú: 際立つ (きわだつ) = nổi bật rõ rệt.",
    ],
  },
  {
    front: "個性を生かす",
    back: ["- こせいをいかす", "- phát huy cá tính của bản thân"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 個性を生かした仕事をしたい。 (Muốn làm công việc phát huy được cá tính.)",
      "❗ Ghi chú: 生かす = tận dụng, phát huy.",
    ],
  },
  {
    front: "個性を重んじる",
    back: ["- こせいをおもんじる", "- coi trọng; tôn trọng cá tính"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 個性を重んじる教育が大切だ。 (Nền giáo dục tôn trọng cá tính rất quan trọng.)",
      "❗ Ghi chú: Đối lập: 個性を軽んじる (こせいをかろんじる - coi thường cá tính).",
    ],
  },
  {
    front: "個性を育む",
    back: ["- こせいをはぐくむ", "- nuôi dưỡng cá tính của bản thân"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 子供の個性を育む環境を整える。 (Tạo môi trường nuôi dưỡng cá tính của trẻ.)",
      "❗ Ghi chú: 育む (はぐくむ) = nuôi dưỡng, vun đắp.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
