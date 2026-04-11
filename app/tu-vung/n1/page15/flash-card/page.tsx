import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "仕事を委託する",
    back: ["- いたく", "- ủy thác, giao phó công việc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 外部の会社に仕事を委託する。 (Giao phó công việc cho công ty bên ngoài.)",
      "❗ Ghi chú: 委託 = ủy thác cho bên khác làm. Khác: 依頼 (いらい) = nhờ vả, yêu cầu.",
    ],
  },
  {
    front: "主任に昇進する",
    back: ["- しょうしん", "- thăng tiến lên thành chủ nhiệm"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 入社5年で主任に昇進した。 (Vào công ty 5 năm thì thăng lên chủ nhiệm.)",
      "❗ Ghi chú: 昇進 (しょうしん) = thăng chức. Thứ bậc: 一般→主任→課長→部長.",
    ],
  },
  {
    front: "常勤・非常勤の職員",
    back: ["- ひじょうきん", "- nhân viên thường trực - nhân viên bán thời gian"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 非常勤の職員は週3日だけ働く。 (Nhân viên bán thời gian chỉ làm 3 ngày/tuần.)",
      "❗ Ghi chú: 常勤 = làm toàn thời gian. 非常勤 = bán thời gian, không cố định.",
    ],
  },
  {
    front: "正規・非正規の職員",
    back: ["- ひせいき", "- nhân viên chính thức - nhân viên hợp đồng tạm thời"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 非正規雇用が増えている。 (Lao động phi chính thức đang gia tăng.)",
      "❗ Ghi chú: 正規 = chính thức, biên chế. 非正規 = hợp đồng ngắn hạn, bán thời gian.",
    ],
  },
  {
    front: "商店を営む",
    back: ["- いとなむ", "- kinh doanh cửa hiệu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 祖父は長年商店を営んでいた。 (Ông tôi đã kinh doanh cửa hàng nhiều năm.)",
      "❗ Ghi chú: 営む (いとなむ) = điều hành, kinh doanh. Mang nghĩa duy trì lâu dài.",
    ],
  },
  {
    front: "勤続四十年で退職する",
    back: ["- きんぞく", "- về hưu sau 40 năm làm việc liên tục"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 父は勤続四十年で退職した。 (Bố tôi nghỉ hưu sau 40 năm làm việc.)",
      "❗ Ghi chú: 勤続 (きんぞく) = làm việc liên tục không gián đoạn. 退職 = nghỉ việc, về hưu.",
    ],
  },
  {
    front: "建築士",
    back: ["- けんちくし", "- kiến trúc sư"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 建築士として独立した。 (Tôi đã tự lập làm kiến trúc sư.)",
      "❗ Ghi chú: 建築士 = kiến trúc sư có bằng cấp. Khác: 設計士 (せっけいし) = kỹ sư thiết kế.",
    ],
  },
  {
    front: "助産師",
    back: ["- じょさんし", "- người hộ sản"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 助産師が赤ちゃんの誕生を手伝った。 (Người hộ sản đã hỗ trợ sự ra đời của em bé.)",
      "❗ Ghi chú: 助産師 = chuyên hỗ trợ sinh nở. Khác: 産婦人科医 (さんふじんかい) = bác sĩ sản khoa.",
    ],
  },
  {
    front: "消防士",
    back: ["- しょうぼうし", "- lính cứu hỏa"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 消防士は火事の現場に駆けつけた。 (Lính cứu hỏa đã lao tới hiện trường vụ cháy.)",
      "❗ Ghi chú: 消防 (しょうぼう) = chữa cháy. 士 (し) = chỉ người có nghề.",
    ],
  },
  {
    front: "裁判官",
    back: ["- さいばんかん", "- quan tòa"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 裁判官が判決を言い渡した。 (Quan tòa tuyên bố phán quyết.)",
      "❗ Ghi chú: 裁判 (さいばん) = xét xử. 裁判官 = người xét xử. Khác: 弁護士 (べんごし) = luật sư.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 15
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
