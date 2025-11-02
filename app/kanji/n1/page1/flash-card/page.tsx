import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  { front: "氏", back: ["- Thị", "- Họ, dòng họ", "- On: シ", "- Kun: うじ"] },
  {
    front: "統",
    back: [
      "- Thống",
      "- Thống nhất, điều hành",
      "- On: トウ",
      "- Kun: す・べる",
    ],
  },
  {
    front: "保",
    back: ["- Bảo", "- Giữ, bảo vệ", "- On: ホ", "- Kun: たも・つ"],
  },
  { front: "第", back: ["- Đệ", "- Thứ tự, cấp bậc", "- On: ダイ・テイ"] },
  {
    front: "結",
    back: [
      "- Kết",
      "- Kết nối, buộc",
      "- On: ケツ",
      "- Kun: むす・ぶ、ゆ・う、ゆ・わえる",
    ],
  },
  { front: "派", back: ["- Phái", "- Nhóm, phe, trường phái", "- On: ハ"] },
  { front: "案", back: ["- Án", "- Đề án, kế hoạch", "- On: アン"] },
  { front: "策", back: ["- Sách", "- Kế sách, biện pháp", "- On: サク"] },
  {
    front: "基",
    back: ["- Cơ", "- Cơ bản, nền tảng", "- On: キ", "- Kun: もと・もとい"],
  },
  {
    front: "価",
    back: ["- Giá", "- Giá trị, giá cả", "- On: カ", "- Kun: あたい"],
  },
  {
    front: "提",
    back: ["- Đề", "- Đề xuất, trình ra", "- On: テイ", "- Kun: さ・げる"],
  },
  {
    front: "挙",
    back: [
      "- Cử",
      "- Nâng lên, cử hành",
      "- On: キョ",
      "- Kun: あ・げる、あ・がる",
    ],
  },
  {
    front: "応",
    back: ["- Ứng", "- Ứng phó, phản ứng", "- On: オウ", "- Kun: こた・える"],
  },
  {
    front: "企",
    back: [
      "- Xí",
      "- Lập kế hoạch, doanh nghiệp",
      "- On: キ",
      "- Kun: くわだ・てる",
    ],
  },
  { front: "検", back: ["- Kiểm", "- Kiểm tra, tra xét", "- On: ケン"] },
  {
    front: "藤",
    back: [
      "- Đằng",
      "- Dây leo, họ tên (Fuji)",
      "- On: トウ・ドウ",
      "- Kun: ふじ",
    ],
  },
  {
    front: "沢",
    back: ["- Trạch", "- Đầm lầy, phong phú", "- On: タク", "- Kun: さわ"],
  },
  {
    front: "裁",
    back: [
      "- Tài",
      "- Phán xét, cắt may",
      "- On: サイ",
      "- Kun: た・つ、さば・く",
    ],
  },
  {
    front: "証",
    back: ["- Chứng", "- Chứng minh, bằng chứng", "- On: ショウ"],
  },
  { front: "援", back: ["- Viên", "- Hỗ trợ, viện trợ", "- On: エン"] },
  {
    front: "施",
    back: ["- Thi", "- Thực hiện, ban bố", "- On: シ・セ", "- Kun: ほどこ・す"],
  },
  {
    front: "井",
    back: ["- Tỉnh", "- Giếng nước", "- On: セイ・ショウ", "- Kun: い"],
  },
  {
    front: "護",
    back: ["- Hộ", "- Bảo vệ, hộ vệ", "- On: ゴ", "- Kun: まも・る"],
  },
  { front: "展", back: ["- Triển", "- Phát triển, mở rộng", "- On: テン"] },
  { front: "態", back: ["- Thái", "- Trạng thái, hình dạng", "- On: タイ"] },
  {
    front: "鮮",
    back: [
      "- Tiên",
      "- Tươi, mới, trong sáng",
      "- On: セン",
      "- Kun: あざ・やか",
    ],
  },
  { front: "視", back: ["- Thị", "- Nhìn, quan sát", "- On: シ"] },
  { front: "条", back: ["- Điều", "- Điều khoản, quy định", "- On: ジョウ"] },
  {
    front: "幹",
    back: ["- Cán", "- Cốt lõi, thân cây", "- On: カン", "- Kun: みき"],
  },
  {
    front: "独",
    back: ["- Độc", "- Một mình, độc lập", "- On: ドク", "- Kun: ひと・り"],
  },
  {
    front: "宮",
    back: [
      "- Cung",
      "- Cung điện, đền",
      "- On: キュウ・グウ・ク",
      "- Kun: みや",
    ],
  },
  {
    front: "率",
    back: ["- Suất", "- Tỷ lệ, suất", "- On: ソツ・リツ", "- Kun: ひき・いる"],
  },
  { front: "衛", back: ["- Vệ", "- Bảo vệ, phòng vệ", "- On: エイ"] },
  {
    front: "張",
    back: ["- Trương", "- Kéo dài, căng ra", "- On: チョウ", "- Kun: は・る"],
  },
  { front: "監", back: ["- Giam", "- Giám sát", "- On: カン"] },
  {
    front: "環",
    back: ["- Hoàn", "- Vòng, tuần hoàn", "- On: カン", "- Kun: わ"],
  },
  { front: "審", back: ["- Thẩm", "- Xem xét, thẩm tra", "- On: シン"] },
  { front: "義", back: ["- Nghĩa", "- Chính nghĩa, đạo lý", "- On: ギ"] },
  {
    front: "訴",
    back: ["- Tố", "- Tố cáo, kiện", "- On: ソ", "- Kun: うった・える"],
  },
  {
    front: "株",
    back: ["- Chu", "- Gốc cây, cổ phần", "- On: シュ", "- Kun: かぶ"],
  },
  {
    front: "姿",
    back: ["- Tư", "- Dáng vẻ, hình dạng", "- On: シ", "- Kun: すがた"],
  },
  { front: "閣", back: ["- Các", "- Nhà lớn, nội các", "- On: カク"] },
  {
    front: "衆",
    back: ["- Chúng", "- Đám đông, quần chúng", "- On: シュウ・シュ"],
  },
  { front: "評", back: ["- Bình", "- Đánh giá, bình luận", "- On: ヒョウ"] },
  {
    front: "影",
    back: ["- Ảnh", "- Bóng, hình ảnh", "- On: エイ", "- Kun: かげ"],
  },
  {
    front: "松",
    back: ["- Tùng", "- Cây tùng", "- On: ショウ", "- Kun: まつ"],
  },
  {
    front: "撃",
    back: ["- Kích", "- Tấn công, đánh", "- On: ゲキ", "- Kun: う・つ"],
  },
  { front: "佐", back: ["- Tá", "- Trợ giúp, phụ tá", "- On: サ"] },
  { front: "核", back: ["- Hạch", "- Hạt nhân, lõi", "- On: カク"] },
  {
    front: "整",
    back: [
      "- Chỉnh",
      "- Sắp xếp, điều chỉnh",
      "- On: セイ",
      "- Kun: ととの・える、ととの・う",
    ],
  },
  {
    front: "融",
    back: ["- Dung", "- Hòa hợp, dung hợp", "- On: ユウ", "- Kun: と・ける"],
  },
  { front: "製", back: ["- Chế", "- Chế tạo", "- On: セイ"] },
  { front: "票", back: ["- Phiếu", "- Lá phiếu, vé", "- On: ヒョウ"] },
  {
    front: "渉",
    back: [
      "- Thiệp",
      "- Giao thiệp, can dự",
      "- On: ショウ",
      "- Kun: わた・る",
    ],
  },
  {
    front: "響",
    back: [
      "- Hưởng",
      "- On vang, ảnh hưởng",
      "- On: キョウ",
      "- Kun: ひび・く",
    ],
  },
  {
    front: "推",
    back: ["- Thôi", "- Đẩy, suy đoán", "- On: スイ", "- Kun: お・す"],
  },
  {
    front: "請",
    back: [
      "- Thỉnh",
      "- Yêu cầu, thỉnh cầu",
      "- On: セイ・シン",
      "- Kun: う・ける、こ・う",
    ],
  },
  {
    front: "器",
    back: ["- Khí", "- Dụng cụ, tài năng", "- On: キ", "- Kun: うつわ"],
  },
  { front: "士", back: ["- Sĩ", "- Người, học giả", "- On: シ"] },
  {
    front: "討",
    back: ["- Thảo", "- Thảo luận, chinh phạt", "- On: トウ", "- Kun: う・つ"],
  },
  {
    front: "攻",
    back: ["- Công", "- Tấn công", "- On: コウ", "- Kun: せ・める"],
  },
  {
    front: "崎",
    back: ["- Khi", "- Mũi đất, dốc núi", "- On: キ", "- Kun: さき"],
  },
  { front: "督", back: ["- Đốc", "- Giám sát, thúc đẩy", "- On: トク"] },
  {
    front: "授",
    back: [
      "- Thụ",
      "- Nhận, truyền thụ",
      "- On: ジュ",
      "- Kun: さず・ける、さず・かる",
    ],
  },
  {
    front: "催",
    back: ["- Thôi", "- Tổ chức, thúc giục", "- On: サイ", "- Kun: もよお・す"],
  },
  {
    front: "及",
    back: [
      "- Cập",
      "- Đến, lan tới",
      "- On: キュウ",
      "- Kun: およ・ぶ、およ・ぼす",
    ],
  },
  { front: "憲", back: ["- Hiến", "- Hiến pháp, quy định", "- On: ケン"] },
  {
    front: "離",
    back: [
      "- Li",
      "- Rời xa, tách rời",
      "- On: リ",
      "- Kun: はな・れる、はな・す",
    ],
  },
  {
    front: "激",
    back: [
      "- Kích",
      "- Mạnh mẽ, kích thích",
      "- On: ゲキ",
      "- Kun: はげ・しい",
    ],
  },
  {
    front: "摘",
    back: ["- Trích", "- Chọn, trích ra", "- On: テキ", "- Kun: つ・む"],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
