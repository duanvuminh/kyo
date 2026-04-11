import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "試合を観戦する",
    back: ["- かんせん", "- quan sát trận đấu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: スタジアムで試合を観戦した。 (Tôi đã xem trận đấu tại sân vận động.)",
      "❗ Ghi chú: 観戦 = xem thi đấu (thể thao, cờ vua...). Khác: 観覧 (かんらん) = xem biểu diễn, triển lãm.",
    ],
  },
  {
    front: "巧みな戦術",
    back: ["- たくみなせんじゅつ", "- chiến thuật tinh vi"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 巧みな戦術でライバルチームを破った。 (Dùng chiến thuật tinh vi đánh bại đội đối thủ.)",
      "❗ Ghi chú: 巧み (たくみ) = khéo léo, tinh xảo. 戦術 (せんじゅつ) = chiến thuật.",
    ],
  },
  {
    front: "作戦を制する",
    back: ["- せいする", "- kiểm soát kế hoạch tác chiến"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 作戦を制した側が試合を制する。 (Bên kiểm soát được chiến thuật sẽ thắng trận.)",
      "❗ Ghi chú: 制する (せいする) = kiểm soát, thống trị. 作戦 = kế hoạch tác chiến.",
    ],
  },
  {
    front: "チームの結束・連帯",
    back: ["- けっそく・れんたい", "- mối liên kết giữa các thành viên trong đội"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: チームの結束が強いほど勝率が上がる。 (Sự đoàn kết của đội càng mạnh thì tỷ lệ thắng càng cao.)",
      "❗ Ghi chú: 結束 = đoàn kết, gắn bó. 連帯 = liên đới, cùng chịu trách nhiệm.",
    ],
  },
  {
    front: "成績が不振",
    back: ["- せいせきがふしん", "- thành tích không tốt"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: チームの成績が不振で監督が交代した。 (Thành tích đội không tốt nên huấn luyện viên bị thay.)",
      "❗ Ghi chú: 不振 (ふしん) = không tốt, trì trệ. Dùng cho cả kinh doanh lẫn thể thao.",
    ],
  },
  {
    front: "人材を育成する・養成する",
    back: ["- いくせい・ようせい", "- nuôi dưỡng nguồn nhân lực"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 若い選手を育成するプログラムを設けた。 (Xây dựng chương trình đào tạo vận động viên trẻ.)",
      "❗ Ghi chú: 育成 = nuôi dưỡng từ nhỏ. 養成 = đào tạo thành thục kỹ năng.",
    ],
  },
  {
    front: "強豪を相手に健闘する・奮闘する",
    back: ["- きょうごう・けんとう", "- lấy đội cực mạnh làm đối thủ để chiến đấu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 強豪チームを相手に健闘した。 (Chiến đấu dũng cảm trước đội mạnh.)",
      "❗ Ghi chú: 強豪 (きょうごう) = đội/đối thủ rất mạnh. 健闘 = cố gắng chiến đấu dù thắng hay thua.",
    ],
  },
  {
    front: "意気込む",
    back: ["- いきごむ", "- hăng hái, hào hứng"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 選手たちは試合に向けて意気込んでいる。 (Các vận động viên đang hăng hái hướng tới trận đấu.)",
      "❗ Ghi chú: 意気込む = đầy nhiệt huyết, hứng khởi. Gần nghĩa: やる気がある = có động lực.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 13
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
