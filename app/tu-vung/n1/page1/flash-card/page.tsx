import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "人",
    back: [
      "- ひと・じん・にん",
      "- con người; nhân loại; người; người khác; người ta",
    ],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 彼はいい人です。 (Anh ấy là người tốt.)",
      "❗ Ghi chú: じん dùng cho quốc tịch (日本人), にん cho số lượng (三人), ひと dùng chung.",
    ],
  },
  {
    front: "的",
    back: ["- てき・まと", "- đích; mục tiêu; có tính ~ (dạng hậu tố: 的な)"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 目的的に行動する。 (Hành động một cách có mục tiêu.)",
      "❗ Ghi chú: Khi dùng làm hậu tố, đọc là てき (vd: 文化的 - có tính văn hóa).",
    ],
  },
  {
    front: "前",
    back: ["- まえ・ぜん", "- phía trước; trước đây; phần đầu"],
    more: [
      "📚 Từ loại: Danh từ, phó từ",
      "📝 Ví dụ: 家の前に車があります。 (Có xe trước nhà.)",
      "❗ Ghi chú: ぜん dùng trong từ ghép Hán (前半: ぜんはん - nửa đầu).",
    ],
  },
  {
    front: "俺",
    back: ["- おれ", "- tao; tôi (nam, thân mật)"],
    more: [
      "📚 Từ loại: Đại từ nhân xưng",
      "📝 Ví dụ: 俺は学生だ。 (Tao là học sinh.)",
      "❗ Ghi chú: Chỉ nam giới dùng, thân mật hoặc suồng sã.",
    ],
  },
  {
    front: "分",
    back: ["- ふん・ぶん・ぶ", "- phần; phút; mức độ; thân phận; vai trò"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 10分待ってください。 (Hãy đợi 10 phút.)",
      "❗ Ghi chú: ふん cho phút, ぶん cho phần, ぶ trong một số từ ghép.",
    ],
  },
  {
    front: "万",
    back: ["- まん・ばん", "- mười nghìn; vô số; tất cả"],
    more: [
      "📚 Từ loại: Danh từ, số từ",
      "📝 Ví dụ: 一万円を持っています。 (Tôi có 10.000 yên.)",
      "❗ Ghi chú: まん dùng phổ biến, ばん hiếm gặp.",
    ],
  },
  {
    front: "何なり",
    back: ["- なんなり", "- bất cứ cái gì; dù thế nào chăng nữa"],
    more: [
      "📚 Từ loại: Cụm từ, trạng từ",
      "📝 Ví dụ: 何なりとお申し付けください。 (Xin cứ yêu cầu bất cứ điều gì.)",
      "❗ Ghi chú: Thường dùng trong văn trang trọng, lịch sự.",
    ],
  },
  {
    front: "第",
    back: ["- だい", "- thứ; số thứ tự (thứ nhất, thứ hai...)"],
    more: [
      "📚 Từ loại: Tiền tố",
      "📝 Ví dụ: 第三章を読んでください。 (Hãy đọc chương 3.)",
      "❗ Ghi chú: Đứng trước số để chỉ thứ tự.",
    ],
  },
  {
    front: "万人",
    back: ["- ばんにん・まんにん", "- mọi người; quần chúng; rất nhiều người"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 万人の意見を聞く。 (Lắng nghe ý kiến của mọi người.)",
      "❗ Ghi chú: まんにん dùng phổ biến hơn.",
    ],
  },
  {
    front: "化する",
    back: ["- かする", "- biến đổi; hoá thành; chuyển thành"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 水が氷に化する。 (Nước biến thành băng.)",
      "❗ Ghi chú: Thường dùng trong từ ghép (文化する: văn hóa hóa).",
    ],
  },
  {
    front: "系",
    back: ["- けい", "- hệ thống; dòng; nhóm; loại"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 理系の学生。 (Sinh viên khối tự nhiên.)",
      "❗ Ghi chú: Dùng để chỉ nhóm, loại, hệ thống.",
    ],
  },
  {
    front: "くらい（位）",
    back: ["- くらい", "- khoảng; chừng; cấp bậc; địa vị"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 一時間くらい待ちました。 (Tôi đã đợi khoảng 1 tiếng.)",
      "❗ Ghi chú: Dùng để chỉ mức độ, số lượng ước chừng.",
    ],
  },
  {
    front: "会",
    back: ["- かい・え", "- cuộc họp; hội; nhóm"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 会に参加する。 (Tham gia cuộc họp.)",
      "❗ Ghi chú: かい dùng phổ biến, え dùng trong một số từ cổ.",
    ],
  },
  {
    front: "なんか",
    back: ["- なんか", "- kiểu như; ví dụ như; đại loại như"],
    more: [
      "📚 Từ loại: Trợ từ, từ nhấn mạnh",
      "📝 Ví dụ: ケーキなんか食べたくない。 (Tôi không muốn ăn mấy thứ như bánh ngọt.)",
      "❗ Ghi chú: Thường dùng để nhấn mạnh hoặc hạ thấp.",
    ],
  },
  {
    front: "様",
    back: ["- さま・よう", "- ngài; ông/bà; dáng vẻ; cách thức; dạng"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố kính ngữ",
      "📝 Ví dụ: 山田様にお電話です。 (Có điện thoại cho ngài Yamada.)",
      "❗ Ghi chú: さま là kính ngữ, よう dùng trong từ ghép (様子: trạng thái).",
    ],
  },
  {
    front: "次",
    back: ["- つぎ・じ", "- lần sau; kế tiếp"],
    more: [
      "📚 Từ loại: Danh từ, phó từ",
      "📝 Ví dụ: 次の駅で降ります。 (Tôi sẽ xuống ở ga tiếp theo.)",
      "❗ Ghi chú: じ dùng trong từ ghép (次回: じかい - lần sau).",
    ],
  },
  {
    front: "歳",
    back: ["- さい", "- tuổi"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 彼は二十歳です。 (Anh ấy 20 tuổi.)",
      "❗ Ghi chú: Dùng sau số để chỉ tuổi (三歳: 3 tuổi).",
    ],
  },
  {
    front: "生",
    back: [
      "- なま・せい・しょう・いく・き",
      "- sống; tươi; thô; chưa qua xử lý",
    ],
    more: [
      "📚 Từ loại: Danh từ, tính từ, hậu tố",
      "📝 Ví dụ: 生ビールをください。 (Cho tôi bia tươi.)",
      "❗ Ghi chú: せい dùng trong từ ghép (学生: sinh viên), なま là tươi/sống.",
    ],
  },
  {
    front: "店",
    back: ["- みせ・てん", "- cửa hàng; tiệm"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: この店は安いです。 (Cửa hàng này rẻ.)",
      "❗ Ghi chú: てん dùng trong từ ghép (書店: hiệu sách).",
    ],
  },
  {
    front: "新",
    back: ["- あたら・しん・にい", "- mới; tân"],
    more: [
      "📚 Từ loại: Tính từ, danh từ, tiền tố",
      "📝 Ví dụ: 新しい本を買いました。 (Tôi đã mua cuốn sách mới.)",
      "❗ Ghi chú: しん dùng trong từ ghép (新聞: báo chí).",
    ],
  },
  {
    front: "先に",
    back: ["- さきに", "- trước; sớm hơn; phía trước"],
    more: [
      "📚 Từ loại: Trạng từ",
      "📝 Ví dụ: 先に行ってください。 (Hãy đi trước đi.)",
      "❗ Ghi chú: Dùng để chỉ hành động xảy ra trước.",
    ],
  },
  {
    front: "高",
    back: ["- たか・こう", "- cao; đắt; mức độ cao"],
    more: [
      "📚 Từ loại: Tính từ, danh từ",
      "📝 Ví dụ: このビルは高いです。 (Tòa nhà này cao.)",
      "❗ Ghi chú: こう dùng trong từ ghép (高校: trường cấp 3).",
    ],
  },
  {
    front: "代",
    back: ["- だい・たい・よ・しろ", "- thời đại; thay thế; đại diện; thế hệ"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 彼は私の代です。 (Anh ấy là thế hệ của tôi.)",
      "❗ Ghi chú: だい dùng trong từ ghép (時代: thời đại).",
    ],
  },
  {
    front: "等",
    back: ["- など・とう", "- vân vân; v.v...; tương đương"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: リンゴやバナナ等が好きです。 (Tôi thích táo, chuối, v.v...)",
      "❗ Ghi chú: とう dùng trong từ ghép (平等: bình đẳng).",
    ],
  },
  {
    front: "超",
    back: ["- ちょう", "- siêu; vượt quá"],
    more: [
      "📚 Từ loại: Tiền tố",
      "📝 Ví dụ: 超忙しいです。 (Siêu bận.)",
      "❗ Ghi chú: Dùng để nhấn mạnh mức độ rất cao.",
    ],
  },
  {
    front: "版",
    back: ["- はん・ばん", "- bản in; phiên bản"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 新版が発売されました。 (Phiên bản mới đã được phát hành.)",
      "❗ Ghi chú: はん dùng trong từ ghép (出版: xuất bản).",
    ],
  },
  {
    front: "部",
    back: ["- ぶ", "- bộ phận; phòng; ban; khoa; tập (trong loạt)"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 営業部で働いています。 (Tôi làm việc ở phòng kinh doanh.)",
      "❗ Ghi chú: Dùng trong nhiều từ ghép chỉ phòng ban.",
    ],
  },
  {
    front: "年生",
    back: [
      "- ねんせい",
      "- học sinh năm ~ (ví dụ: 一年生 – học sinh năm nhất)",
    ],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 彼は三年生です。 (Cậu ấy là học sinh năm 3.)",
      "❗ Ghi chú: Dùng sau số để chỉ năm học.",
    ],
  },
  {
    front: "奴",
    back: ["- やつ", "- gã đó; thằng đó; đồ (thân mật hoặc khinh miệt)"],
    more: [
      "📚 Từ loại: Danh từ, đại từ",
      "📝 Ví dụ: あいつは変な奴だ。 (Thằng đó kỳ lạ thật.)",
      "❗ Ghi chú: Thường dùng trong văn nói, có thể mang sắc thái khinh miệt.",
    ],
  },
  {
    front: "氏",
    back: ["- し・うじ", "- họ; ngài; Mr./Mrs.; dòng họ"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố kính ngữ",
      "📝 Ví dụ: 山田氏が来ました。 (Ông Yamada đã đến.)",
      "❗ Ghi chú: し dùng sau tên người để thể hiện sự trang trọng.",
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
