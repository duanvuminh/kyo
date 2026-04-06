import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "人に懐く",
    back: ["- ひとになつく", "- thân thiện; gần gũi với người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 子供がすぐ人に懐く。 (Trẻ con nhanh chóng thân thiện với người lạ.)",
      "❗ Ghi chú: 懐く (なつく) thường dùng cho trẻ em hoặc động vật.",
    ],
  },
  {
    front: "人に共感する",
    back: ["- ひとにきょうかんする", "- đồng cảm với người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼女の悩みに共感した。 (Tôi đồng cảm với nỗi khổ của cô ấy.)",
      "❗ Ghi chú: Đồng nghĩa: 同情する (どうじょうする) - thông cảm.",
    ],
  },
  {
    front: "人に反発する",
    back: ["- ひとにはんぱつする", "- phản bác; chống lại người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 親の意見に反発する。 (Phản bác lại ý kiến của cha mẹ.)",
      "❗ Ghi chú: Mạnh hơn 反対する, mang sắc thái cảm xúc.",
    ],
  },
  {
    front: "人に反感を持つ",
    back: ["- ひとにはんかんをもつ", "- có ác cảm; phản cảm với người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 横柄な態度に反感を持つ。 (Có ác cảm với thái độ hống hách.)",
      "❗ Ghi chú: 反感 (はんかん) = ác cảm, phản cảm.",
    ],
  },
  {
    front: "人に猛反対する",
    back: ["- ひとにもうはんたいする", "- phản đối kịch liệt người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 計画に猛反対する。 (Phản đối kịch liệt kế hoạch đó.)",
      "❗ Ghi chú: 猛 (もう) = kịch liệt, dữ dội. Nhấn mạnh mức độ phản đối.",
    ],
  },
  {
    front: "人に気兼ねする",
    back: ["- ひとにきがねする", "- khách khí; ngại ngùng; e dè với người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 気兼ねせずに話してください。 (Hãy nói chuyện thoải mái, đừng ngại.)",
      "❗ Ghi chú: 気兼ね (きがね) = e dè, không muốn làm phiền người khác.",
    ],
  },
  {
    front: "人を慕う",
    back: ["- ひとをしたう", "- yêu mến; kính mến; nhớ nhung người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 先生を心から慕っている。 (Yêu mến thầy từ tận đáy lòng.)",
      "❗ Ghi chú: Mang sắc thái tôn trọng và yêu quý.",
    ],
  },
  {
    front: "人を妬む",
    back: ["- ひとをねたむ", "- ganh ghét; đố kị người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 成功した人を妬む。 (Ganh ghét người thành công.)",
      "❗ Ghi chú: Đồng nghĩa: 嫉妬する (しっとする).",
    ],
  },
  {
    front: "人をあざ笑う",
    back: ["- ひとをあざわらう", "- nhạo báng; giễu cợt người khác"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 失敗した人をあざ笑うのは良くない。 (Giễu cợt người thất bại là không tốt.)",
      "❗ Ghi chú: Mang sắc thái xấu, khinh thường.",
    ],
  },
  {
    front: "肉親",
    back: ["- にくしん", "- máu mủ; ruột rà; người cùng huyết thống"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 肉親の情は深い。 (Tình máu mủ rất sâu nặng.)",
      "❗ Ghi chú: Chỉ cha mẹ, anh chị em, con cái - quan hệ huyết thống trực tiếp.",
    ],
  },
  {
    front: "妻子を養う",
    back: ["- さいしをやしなう", "- nuôi dưỡng; chăm sóc vợ con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 妻子を養うために一生懸命働く。 (Làm việc chăm chỉ để nuôi vợ con.)",
      "❗ Ghi chú: 妻子 (さいし) = vợ và con.",
    ],
  },
  {
    front: "円満な家庭を築く",
    back: ["- えんまんなかていをきずく", "- xây dựng gia đình viên mãn"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 円満な家庭を築くことが夢だ。 (Ước mơ xây dựng gia đình viên mãn.)",
      "❗ Ghi chú: 円満 (えんまん) = hòa thuận, viên mãn.",
    ],
  },
  {
    front: "旧知の仲",
    back: ["- きゅうちのなか", "- bạn bè quen biết nhau từ lâu"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 彼とは旧知の仲だ。 (Anh ấy và tôi quen biết nhau từ lâu.)",
      "❗ Ghi chú: 旧知 (きゅうち) = người quen cũ từ lâu.",
    ],
  },
  {
    front: "幼なじみ",
    back: ["- おさななじみ", "- bạn thiếu thời; bạn thủa nhỏ"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 幼なじみと久しぶりに会った。 (Gặp lại bạn thủa nhỏ sau một thời gian dài.)",
      "❗ Ghi chú: 幼 (おさな) = thủa ấu thơ + なじみ = quen thuộc.",
    ],
  },
  {
    front: "家族ぐるみの付き合い",
    back: ["- かぞくぐるみのつきあい", "- giao thiệp toàn bộ gia đình"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 家族ぐるみの付き合いが続いている。 (Quan hệ giao thiệp cả gia đình vẫn tiếp tục.)",
      "❗ Ghi chú: ぐるみ = trọn vẹn, toàn bộ.",
    ],
  },
  {
    front: "来賓を接待する",
    back: ["- らいひんをせったいする", "- tiếp đãi khách"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 来賓を丁寧に接待する。 (Tiếp đãi khách một cách chu đáo.)",
      "❗ Ghi chú: 来賓 (らいひん) = khách mời (trang trọng).",
    ],
  },
  {
    front: "慣習に従う",
    back: ["- かんしゅうにしたがう", "- theo phong tục tập quán"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 地域の慣習に従う。 (Theo phong tục tập quán của địa phương.)",
      "❗ Ghi chú: 慣習 (かんしゅう) = tập quán, thói quen xã hội. Đồng nghĩa: しきたり、風習.",
    ],
  },
  {
    front: "人に片思いする",
    back: ["- ひとにかたおもいする", "- yêu đơn phương ai đó"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: ずっと彼女に片思いしていた。 (Tôi đã yêu đơn phương cô ấy mãi.)",
      "❗ Ghi chú: 片思い (かたおもい) = tình yêu một phía.",
    ],
  },
  {
    front: "人に執着する",
    back: ["- ひとにしゅうちゃくする", "- lưu luyến; bám víu; chấp vào ai đó"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 別れた恋人に執着する。 (Chấp vào người yêu cũ.)",
      "❗ Ghi chú: 執着 (しゅうちゃく) = bám víu, không buông bỏ được.",
    ],
  },
  {
    front: "異性にもてる",
    back: ["- いせいにもてる", "- được người khác giới yêu thích; thu hút người khác giới"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 彼はもてる男だ。 (Anh ấy là người được phụ nữ yêu thích.)",
      "❗ Ghi chú: もてる = được nhiều người chú ý, yêu thích.",
    ],
  },
  {
    front: "浮気する",
    back: ["- うわきする", "- lăng nhăng; ngoại tình"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 浮気がバレて別れた。 (Bị phát hiện ngoại tình rồi chia tay.)",
      "❗ Ghi chú: 浮気 (うわき) = không chung thủy trong tình yêu.",
    ],
  },
  {
    front: "心が弾む",
    back: ["- こころがはずむ", "- phấn chấn; vui sướng; hứng khởi"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 旅行の前日は心が弾む。 (Hôm trước khi đi du lịch lòng rất hứng khởi.)",
      "❗ Ghi chú: 弾む (はずむ) = nảy lên, bật lên → hàm ý phấn chấn.",
    ],
  },
  {
    front: "気持ちを切り替える",
    back: ["- きもちをきりかえる", "- làm tươi mới tâm trạng; chuyển đổi cảm xúc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 失敗しても気持ちを切り替えて頑張る。 (Dù thất bại cũng chuyển đổi tâm trạng mà cố gắng.)",
      "❗ Ghi chú: 切り替える (きりかえる) = chuyển đổi, thay đổi.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 2
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
