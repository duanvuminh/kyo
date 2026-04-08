import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "早寝早起きを心掛ける",
    back: ["- はやねはやおきをこころがける", "- cố gắng ngủ sớm dậy sớm"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 健康のために早寝早起きを心掛けている。 (Tôi cố gắng ngủ sớm dậy sớm để giữ sức khỏe.)",
      "❗ Ghi chú: 心掛ける (こころがける) = chú tâm, cố ý thực hiện thói quen.",
    ],
  },
  {
    front: "水分の補給を心掛ける",
    back: ["- すいぶんのほきゅうをこころがける", "- cố gắng cung cấp đủ nước cho cơ thể"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 夏は水分の補給を心掛けること。 (Mùa hè hãy chú ý cung cấp đủ nước.)",
      "❗ Ghi chú: 補給 (ほきゅう) = bổ sung, cung cấp.",
    ],
  },
  {
    front: "バランスの取れた食生活",
    back: ["- バランスのとれたしょくせいかつ", "- sinh hoạt ăn uống cân bằng"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: バランスの取れた食生活が健康の基本だ。 (Ăn uống cân bằng là nền tảng của sức khỏe.)",
      "❗ Ghi chú: バランスが取れる = cân bằng, hài hòa.",
    ],
  },
  {
    front: "健康を維持する",
    back: ["- けんこうをいじする", "- duy trì sức khỏe"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 運動して健康を維持する。 (Tập thể dục để duy trì sức khỏe.)",
      "❗ Ghi chú: 維持 (いじ) = duy trì, giữ nguyên trạng thái.",
    ],
  },
  {
    front: "健康を害する",
    back: ["- けんこうをがいする", "- gây tổn hại đến sức khỏe"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 過労は健康を害する。 (Làm việc quá sức gây tổn hại đến sức khỏe.)",
      "❗ Ghi chú: 害する (がいする) = làm hại. Đồng nghĩa: 健康を損なう (そこなう).",
    ],
  },
  {
    front: "健康を増進する",
    back: ["- けんこうをぞうしんする", "- nâng cao sức khỏe"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 定期的な運動で健康を増進する。 (Tập thể dục đều đặn để nâng cao sức khỏe.)",
      "❗ Ghi chú: 増進 (ぞうしん) = tăng cường, nâng cao.",
    ],
  },
  {
    front: "健康を取り戻す",
    back: ["- けんこうをとりもどす", "- lấy lại; khôi phục sức khỏe"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 治療を続けてやっと健康を取り戻した。 (Tiếp tục điều trị và cuối cùng lấy lại sức khỏe.)",
      "❗ Ghi chú: 取り戻す (とりもどす) = lấy lại, khôi phục.",
    ],
  },
  {
    front: "不摂生な生活は禁物だ",
    back: ["- ふせっせいなせいかつはきんもつだ", "- sinh hoạt không điều độ là điều nên tránh"],
    more: [
      "📚 Từ loại: Cụm cố định",
      "📝 Ví dụ: 病み上がりに不摂生な生活は禁物だ。 (Khi vừa khỏi bệnh thì sinh hoạt không điều độ là điều không nên.)",
      "❗ Ghi chú: 不摂生 (ふせっせい) = không điều độ. 禁物 (きんもつ) = điều cấm kị, nên tránh.",
    ],
  },
  {
    front: "頑丈そうな体つき",
    back: ["- がんじょうそうなからだつき", "- vóc người trông rắn chắc, cường tráng"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 頑丈そうな体つきの選手が優勝した。 (Vận động viên có vóc dáng rắn chắc giành chiến thắng.)",
      "❗ Ghi chú: 体つき (からだつき) = vóc dáng, hình thể.",
    ],
  },
  {
    front: "重厚な曲",
    back: ["- じゅうこうなきょく", "- ca khúc trang nghiêm; hào hùng"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: ベートーベンの重厚な曲が好きだ。 (Tôi thích những bản nhạc trang nghiêm của Beethoven.)",
      "❗ Ghi chú: 重厚 (じゅうこう) = sâu sắc, trang nghiêm, trầm hùng.",
    ],
  },
  {
    front: "軽快な曲",
    back: ["- けいかいなきょく", "- ca khúc vui nhộn; tươi vui; nhẹ nhàng"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 軽快な曲に合わせて踊る。 (Nhảy theo giai điệu vui nhộn.)",
      "❗ Ghi chú: 軽快 (けいかい) = nhẹ nhàng, vui tươi. Đối lập: 重厚な曲.",
    ],
  },
  {
    front: "音楽一筋に打ち込む",
    back: ["- おんがくひとすじにうちこむ", "- tập trung toàn bộ sức lực cho âm nhạc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 幼い頃から音楽一筋に打ち込んできた。 (Từ nhỏ đã dồn toàn bộ tâm huyết vào âm nhạc.)",
      "❗ Ghi chú: 一筋 (ひとすじ) = chuyên tâm một con đường duy nhất.",
    ],
  },
  {
    front: "音が反響する",
    back: ["- おとがはんきょうする", "- âm thanh vọng lại; dội lại"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 洞窟の中で音が反響する。 (Âm thanh vọng lại trong hang động.)",
      "❗ Ghi chú: 反響 (はんきょう) = phản hưởng, âm vang.",
    ],
  },
  {
    front: "歌の一節を口ずさむ",
    back: ["- うたのいっせつをくちずさむ", "- hát thầm một đoạn nhạc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 好きな歌の一節を口ずさむ。 (Hát thầm một đoạn bài hát yêu thích.)",
      "❗ Ghi chú: 口ずさむ (くちずさむ) = ngân nga, hát thầm.",
    ],
  },
  {
    front: "繊細な作風",
    back: ["- せんさいなさくふう", "- tác phong sáng tác tinh tế"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 繊細な作風で多くのファンを持つ。 (Với phong cách sáng tác tinh tế, có nhiều người hâm mộ.)",
      "❗ Ghi chú: 繊細 (せんさい) = tinh tế, nhạy cảm. Đối lập: 大胆な作風.",
    ],
  },
  {
    front: "壮大な建築物",
    back: ["- そうだいなけんちくぶつ", "- công trình kiến trúc hùng vĩ"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 壮大な建築物を見て感動した。 (Xúc động khi nhìn thấy công trình kiến trúc hùng vĩ.)",
      "❗ Ghi chú: 壮大 (そうだい) = hùng vĩ, đồ sộ, nguy nga.",
    ],
  },
  {
    front: "茶道を嗜む",
    back: ["- さどうをたしなむ", "- hứng thú; yêu thích trà đạo"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 母は茶道を嗜んでいる。 (Mẹ tôi yêu thích trà đạo.)",
      "❗ Ghi chú: 嗜む (たしなむ) = có sở thích, có thú vui tao nhã với điều gì đó.",
    ],
  },
  {
    front: "オペラを鑑賞する",
    back: ["- オペラをかんしょうする", "- thưởng thức opera"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 劇場でオペラを鑑賞した。 (Thưởng thức opera tại nhà hát.)",
      "❗ Ghi chú: 鑑賞 (かんしょう) = thưởng thức nghệ thuật một cách tinh tế.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 6
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
