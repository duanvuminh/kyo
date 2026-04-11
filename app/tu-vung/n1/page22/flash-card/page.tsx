import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "あて",
    back: ["- あて", "- mục tiêu; kì vọng; điều kiện cần"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: あてもなく歩いた。 (Đi lang thang không mục đích.)",
      "❗ Ghi chú: ① mục đích (あてもなく歩く) ② thứ cần để xảy ra (再就職のあてがない) ③ dựa dẫm (親をあてにする).",
    ],
  },
  {
    front: "拍子",
    back: ["- ひょうし", "- nhịp; phách; cơ hội bất ngờ"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 電車が止まった拍子に倒れそうになった。 (Khi tàu dừng đột ngột, tôi suýt ngã.)",
      "❗ Ghi chú: ① nhịp nhạc ② bắt nhịp (手を打って拍子を取る) ③ tác động bất ngờ gây ra thay đổi (～拍子に).",
    ],
  },
  {
    front: "節",
    back: ["- ふし", "- đốt; khớp xương; giai điệu; điểm cần chú ý"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 歌詞は忘れたが節は覚えている。 (Quên lời nhưng nhớ giai điệu.)",
      "❗ Ghi chú: ① đốt tre/trúc ② khớp xương (足の節) ③ giai điệu ④ điểm đáng chú ý (思い当たる節がある).",
    ],
  },
  {
    front: "筋",
    back: ["- すじ", "- cơ bắp; sợi rau; logic; tố chất"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 彼の主張は筋が通っている。 (Lập luận của anh ấy rất logic.)",
      "❗ Ghi chú: ① cơ bắp ② sợi của rau (いんげんの筋) ③ logic (筋が通る) ④ trình tự ⑤ tố chất ⑥ bên liên quan (政府筋).",
    ],
  },
  {
    front: "模様",
    back: ["- もよう", "- hoa văn; tình hình; có vẻ như"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 大統領の乗った飛行機は到着が遅れる模様です。 (Có vẻ như máy bay chở tổng thống sẽ đến muộn.)",
      "❗ Ghi chú: ① hoa văn trang trí ② diễn biến tình hình ③ 〜模様 = có vẻ, dường như (dùng trong dự báo).",
    ],
  },
  {
    front: "様",
    back: ["- さま", "- hình dáng; dáng vẻ; vẻ đẹp"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: バレーを一年習いやっと踊る姿が様になってきた。 (Học ballet một năm, dáng múa đã trở nên đẹp.)",
      "❗ Ghi chú: ① hình dáng, cảnh tượng ② 様になる = trở nên có dáng vẻ đẹp, ra dáng.",
    ],
  },
  {
    front: "柄",
    back: ["- がら", "- hoa văn; tính cách; bầu không khí"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 私は人の上に立つ柄ではない。 (Tôi không phải người có tính cách phù hợp để lãnh đạo.)",
      "❗ Ghi chú: ① hoa văn quần áo (着物に綺麗な柄) ② tính cách, phẩm vị ③ bầu không khí từ bề ngoài (柄の悪い男).",
    ],
  },
  {
    front: "軸",
    back: ["- じく", "- trục xoay; thân vật; trung tâm hoạt động"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 日米関係を外交政策の軸にする。 (Lấy quan hệ Mỹ-Nhật làm trục chính sách ngoại giao.)",
      "❗ Ghi chú: ① trục xoay ② thân (ペンの軸) ③ trung tâm, cốt lõi của sự việc.",
    ],
  },
  {
    front: "芯",
    back: ["- しん", "- lõi cứng; sâu thẳm; ý chí mạnh mẽ"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 彼女は芯が強い人だ。 (Cô ấy là người có ý chí mạnh mẽ.)",
      "❗ Ghi chú: ① lõi cứng giữa (りんごの芯) ② tận sâu cơ thể (お風呂で体の芯まで温まる) ③ ý chí không khuất phục.",
    ],
  },
  {
    front: "隙",
    back: ["- すき", "- khoảng trống; lơ đễnh, sơ hở"],
    more: [
      "📚 Từ loại: Danh từ (nhiều nghĩa)",
      "📝 Ví dụ: 隙を狙ってカバンから財布を抜き取る。 (Lợi dụng lúc sơ hở để móc ví từ túi xách.)",
      "❗ Ghi chú: ① khoảng trống thời gian/không gian ② sơ hở, lơ đễnh (隙をつく = lợi dụng sơ hở).",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 22
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
