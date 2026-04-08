import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "仕事を手掛ける",
    back: ["- しごとをてがける", "- làm việc; đảm nhận công việc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 新しいプロジェクトを手掛ける。 (Đảm nhận dự án mới.)",
      "❗ Ghi chú: 手掛ける (てがける) = trực tiếp làm, đảm nhận. Mang sắc thái chủ động và có kinh nghiệm.",
    ],
  },
  {
    front: "仕事を委託する",
    back: ["- しごとをいたくする", "- ủy thác; giao phó công việc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 外部の業者に仕事を委託する。 (Ủy thác công việc cho đơn vị bên ngoài.)",
      "❗ Ghi chú: 委託 (いたく) = giao phó cho người/tổ chức khác thực hiện thay.",
    ],
  },
  {
    front: "仕事に取り掛かる",
    back: ["- しごとにとりかかる", "- bắt tay vào công việc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 朝一番に仕事に取り掛かる。 (Bắt tay vào việc ngay từ đầu buổi sáng.)",
      "❗ Ghi chú: 取り掛かる (とりかかる) = bắt đầu thực hiện.",
    ],
  },
  {
    front: "昇進する",
    back: ["- しょうしんする", "- thăng tiến; thăng chức"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 主任に昇進して責任が増えた。 (Thăng lên chủ nhiệm, trách nhiệm tăng lên.)",
      "❗ Ghi chú: 昇進 (しょうしん) = thăng cấp bậc. Đối lập: 降格 (こうかく) = xuống cấp.",
    ],
  },
  {
    front: "常勤の職員",
    back: ["- じょうきんのしょくいん", "- nhân viên thường trực; toàn thời gian"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 常勤の職員として採用された。 (Được tuyển dụng làm nhân viên toàn thời gian.)",
      "❗ Ghi chú: 常勤 (じょうきん) ⇔ 非常勤 (ひじょうきん). Tương tự: 正規 ⇔ 非正規.",
    ],
  },
  {
    front: "非正規の職員",
    back: ["- ひせいきのしょくいん", "- nhân viên không chính thức; hợp đồng tạm thời"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 非正規の職員が増えている。 (Nhân viên không chính thức ngày càng tăng.)",
      "❗ Ghi chú: Bao gồm: パート、アルバイト、派遣社員、契約社員.",
    ],
  },
  {
    front: "転任する",
    back: ["- てんにんする", "- chuyển sang bộ phận; cơ quan khác"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 来月から大阪支社に転任する。 (Từ tháng sau chuyển sang chi nhánh Osaka.)",
      "❗ Ghi chú: 転任 (てんにん) = chuyển công tác. Gần nghĩa: 異動 (いどう) = luân chuyển nội bộ.",
    ],
  },
  {
    front: "商店を営む",
    back: ["- しょうてんをいとなむ", "- kinh doanh; quản lý cửa hàng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 家族で商店を営んでいる。 (Gia đình cùng kinh doanh cửa hàng.)",
      "❗ Ghi chú: 営む (いとなむ) = điều hành, quản lý (công việc kinh doanh).",
    ],
  },
  {
    front: "勤続四十年で退職する",
    back: ["- きんぞくよんじゅうねんでたいしょくする", "- về hưu sau 40 năm làm việc liên tục"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 父は勤続40年で退職した。 (Bố tôi về hưu sau 40 năm gắn bó.)",
      "❗ Ghi chú: 勤続 (きんぞく) = làm việc liên tục tại một nơi.",
    ],
  },
  {
    front: "不景気・不況",
    back: ["- ふけいき・ふきょう", "- tình hình kinh doanh khó khăn; suy thoái kinh tế"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 不景気で多くの企業が倒産した。 (Do suy thoái kinh tế, nhiều doanh nghiệp phá sản.)",
      "❗ Ghi chú: Đối lập: 好景気 (こうけいき) = kinh tế hưng thịnh.",
    ],
  },
  {
    front: "建築士",
    back: ["- けんちくし", "- kiến trúc sư"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 建築士の資格を取るために勉強している。 (Đang học để lấy chứng chỉ kiến trúc sư.)",
      "❗ Ghi chú: Có các cấp: 一級建築士 (cấp 1 - quốc gia), 二級建築士 (cấp 2).",
    ],
  },
  {
    front: "消防士",
    back: ["- しょうぼうし", "- lính cứu hỏa"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 消防士になるのが子供の頃からの夢だ。 (Ước mơ từ nhỏ là trở thành lính cứu hỏa.)",
      "❗ Ghi chú: 消防 (しょうぼう) = chữa cháy.",
    ],
  },
  {
    front: "実業家",
    back: ["- じつぎょうか", "- nhà kinh doanh; doanh nhân"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 彼は若くして成功した実業家だ。 (Anh ấy là doanh nhân thành công khi còn trẻ.)",
      "❗ Ghi chú: 実業 (じつぎょう) = công việc thực tiễn, kinh doanh thực tế.",
    ],
  },
  {
    front: "裁判官",
    back: ["- さいばんかん", "- thẩm phán"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 裁判官が判決を下した。 (Thẩm phán đã tuyên án.)",
      "❗ Ghi chú: 裁判 (さいばん) = xét xử. 〜官 (かん) = hậu tố chỉ chức danh công vụ.",
    ],
  },
  {
    front: "社員を公募する",
    back: ["- しゃいんをこうぼする", "- công khai tuyển dụng nhân viên"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: ウェブサイトで社員を公募する。 (Công khai tuyển dụng nhân viên trên website.)",
      "❗ Ghi chú: 公募 (こうぼ) = tuyển dụng công khai, ai cũng có thể đăng ký.",
    ],
  },
  {
    front: "採用試験を突破する",
    back: ["- さいようしけんをとっぱする", "- vượt qua bài kiểm tra tuyển dụng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 難関の採用試験を突破して内定をもらった。 (Vượt qua kỳ thi tuyển khó và nhận được thư mời làm việc.)",
      "❗ Ghi chú: 突破 (とっぱ) = phá vỡ, vượt qua rào cản.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 8
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
