import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  { front: "系", back: ["- Hệ", "- Hệ thống, dòng dõi", "- On: ケイ"] },
  { front: "批", back: ["- Phê", "- Phê bình, phê duyệt", "- On: ヒ"] },
  {
    front: "郎",
    back: ["- Lang", "- Chàng trai, người đàn ông", "- On: ロウ"],
  },
  {
    front: "健",
    back: ["- Kiện", "- Khỏe mạnh", "- On: ケン", "- Kun: すこ・やか"],
  },
  { front: "盟", back: ["- Minh", "- Liên minh, kết minh", "- On: メイ"] },
  {
    front: "従",
    back: [
      "- Tùng",
      "- Theo, phục tùng",
      "- On: ジュウ",
      "- Kun: したが・う、したが・える",
    ],
  },
  {
    front: "修",
    back: [
      "- Tu",
      "- Sửa, học, tu hành",
      "- On: シュウ・シュ",
      "- Kun: おさ・める、おさ・まる",
    ],
  },
  { front: "隊", back: ["- Đội", "- Đội nhóm, quân đội", "- On: タイ"] },
  {
    front: "織",
    back: ["- Chức", "- Dệt, tổ chức", "- On: ショク・シキ", "- Kun: お・る"],
  },
  { front: "拡", back: ["- Khuếch", "- Mở rộng", "- On: カク"] },
  {
    front: "故",
    back: ["- Cố", "- Cũ, nguyên nhân", "- On: コ", "- Kun: ゆえ"],
  },
  {
    front: "振",
    back: [
      "- Chấn",
      "- Rung, chấn hưng",
      "- On: シン",
      "- Kun: ふ・る、ふ・れる、ふ・り",
    ],
  },
  { front: "弁", back: ["- Biện", "- Biện luận, hùng biện", "- On: ベン"] },
  {
    front: "就",
    back: [
      "- Tựu",
      "- Bắt đầu làm, đạt được",
      "- On: シュウ・ジュ",
      "- Kun: つ・く、つ・ける",
    ],
  },
  {
    front: "異",
    back: ["- Dị", "- Khác biệt", "- On: イ", "- Kun: こと・なる、こと"],
  },
  {
    front: "献",
    back: [
      "- Hiến",
      "- Dâng hiến, cống hiến",
      "- On: ケン",
      "- Kun: ささ・げる",
    ],
  },
  {
    front: "厳",
    back: [
      "- Nghiêm",
      "- Nghiêm khắc",
      "- On: ゲン・ゴン",
      "- Kun: きび・しい、おごそ・か",
    ],
  },
  { front: "維", back: ["- Duy", "- Duy trì", "- On: イ"] },
  { front: "浜", back: ["- Banh", "- Bờ biển", "- On: ヒン", "- Kun: はま"] },
  {
    front: "遺",
    back: ["- Di", "- Di sản, di vật", "- On: イ", "- Kun: のこ・す"],
  },
  { front: "塁", back: ["- Lũy", "- Thành lũy", "- On: ルイ"] },
  {
    front: "邦",
    back: ["- Bang", "- Quốc gia, đất nước", "- On: ホウ", "- Kun: くに"],
  },
  {
    front: "素",
    back: ["- Tố", "- Nguyên liệu, đơn giản", "- On: ソ", "- Kun: もと"],
  },
  {
    front: "遣",
    back: [
      "- Khiển",
      "- Sai khiến, phái đi",
      "- On: ケン",
      "- Kun: つか・う、つか・わす",
    ],
  },
  { front: "抗", back: ["- Kháng", "- Kháng cự", "- On: コウ"] },
  { front: "模", back: ["- Mô", "- Mô hình, mô phỏng", "- On: モ・ボ"] },
  {
    front: "雄",
    back: ["- Hùng", "- Mạnh mẽ, anh hùng", "- On: ユウ", "- Kun: お・す"],
  },
  { front: "益", back: ["- Ích", "- Lợi ích", "- On: エキ・ヤク"] },
  { front: "緊", back: ["- Khẩn", "- Khẩn cấp", "- On: キン"] },
  {
    front: "標",
    back: ["- Tiêu", "- Tiêu chuẩn, mục tiêu", "- On: ヒョウ", "- Kun: しるべ"],
  },
  {
    front: "宣",
    back: ["- Tuyên", "- Tuyên bố", "- On: セン", "- Kun: のたま・う"],
  },
  { front: "昭", back: ["- Chiêu", "- Sáng rõ", "- On: ショウ"] },
  {
    front: "廃",
    back: [
      "- Phế",
      "- Bỏ, phế bỏ",
      "- On: ハイ",
      "- Kun: すた・れる、すた・る",
    ],
  },
  { front: "伊", back: ["- Y", "- Tên riêng", "- On: イ"] },
  { front: "江", back: ["- Giang", "- Sông", "- On: コウ", "- Kun: え"] },
  { front: "僚", back: ["- Liêu", "- Đồng nghiệp", "- On: リョウ"] },
  {
    front: "吉",
    back: ["- Cát", "- Tốt lành", "- On: キチ・キツ", "- Kun: よし"],
  },
  {
    front: "盛",
    back: [
      "- Thịnh",
      "- Phồn thịnh",
      "- On: セイ・ジョウ",
      "- Kun: も・る、さか・る、さか・ん",
    ],
  },
  { front: "皇", back: ["- Hoàng", "- Hoàng đế", "- On: コウ・オウ"] },
  {
    front: "臨",
    back: ["- Lâm", "- Đến gần, giáp mặt", "- On: リン", "- Kun: のぞ・む"],
  },
  {
    front: "踏",
    back: [
      "- Đạp",
      "- Dẫm, bước lên",
      "- On: トウ",
      "- Kun: ふ・む、ふ・まえる",
    ],
  },
  {
    front: "壊",
    back: ["- Hoại", "- Phá hủy", "- On: カイ", "- Kun: こわ・す、こわ・れる"],
  },
  { front: "債", back: ["- Trái", "- Nợ, khoản vay", "- On: サイ"] },
  {
    front: "興",
    back: [
      "- Hưng",
      "- Hưng thịnh",
      "- On: コウ・キョウ",
      "- Kun: おこ・る、おこ・す",
    ],
  },
  {
    front: "源",
    back: ["- Nguyên", "- Nguồn gốc", "- On: ゲン", "- Kun: みなもと"],
  },
  { front: "儀", back: ["- Nghi", "- Lễ nghi", "- On: ギ"] },
  {
    front: "創",
    back: ["- Sáng", "- Sáng tạo", "- On: ソウ", "- Kun: つく・る、はじ・める"],
  },
  {
    front: "障",
    back: ["- Chướng", "- Trở ngại", "- On: ショウ", "- Kun: さわ・る"],
  },
  { front: "継", back: ["- Kế", "- Kế tục", "- On: ケイ", "- Kun: つ・ぐ"] },
  {
    front: "筋",
    back: ["- Cân", "- Gân, cơ bắp", "- On: キン", "- Kun: すじ"],
  },
  {
    front: "闘",
    back: ["- Đấu", "- Chiến đấu", "- On: トウ", "- Kun: たたか・う"],
  },
  {
    front: "葬",
    back: ["- Táng", "- Mai táng", "- On: ソウ", "- Kun: ほうむ・る"],
  },
  { front: "避", back: ["- Tị", "- Tránh né", "- On: ヒ", "- Kun: さ・ける"] },
  {
    front: "司",
    back: ["- Ti", "- Cai quản", "- On: シ", "- Kun: つかさど・る"],
  },
  { front: "康", back: ["- Khang", "- Khỏe mạnh", "- On: コウ"] },
  {
    front: "善",
    back: ["- Thiện", "- Tốt, thiện lương", "- On: ゼン", "- Kun: よ・い"],
  },
  { front: "逮", back: ["- Đãi", "- Bắt giữ", "- On: タイ"] },
  {
    front: "迫",
    back: ["- Bách", "- Ép buộc, thúc ép", "- On: ハク", "- Kun: せま・る"],
  },
  {
    front: "惑",
    back: ["- Hoặc", "- Mê hoặc, lúng túng", "- On: ワク", "- Kun: まど・う"],
  },
  {
    front: "崩",
    back: ["- Băng", "- Sụp đổ", "- On: ホウ", "- Kun: くず・れる、くず・す"],
  },
  { front: "紀", back: ["- Kỷ", "- Ghi chép", "- On: キ"] },
  { front: "聴", back: ["- Thính", "- Nghe", "- On: チョウ", "- Kun: き・く"] },
  {
    front: "脱",
    back: ["- Thoát", "- Thoát khỏi", "- On: ダツ", "- Kun: ぬ・ぐ、ぬ・げる"],
  },
  { front: "級", back: ["- Cấp", "- Cấp bậc", "- On: キュウ"] },
  { front: "博", back: ["- Bác", "- Uyên bác", "- On: ハク"] },
  {
    front: "締",
    back: [
      "- Đế",
      "- Ràng buộc, thắt chặt",
      "- On: テイ",
      "- Kun: し・まる、し・める",
    ],
  },
  {
    front: "救",
    back: ["- Cứu", "- Cứu giúp", "- On: キュウ", "- Kun: すく・う"],
  },
  {
    front: "執",
    back: [
      "- Chấp",
      "- Nắm giữ, chấp hành",
      "- On: シツ・シュウ",
      "- Kun: と・る",
    ],
  },
  {
    front: "房",
    back: ["- Phòng", "- Căn phòng", "- On: ボウ", "- Kun: ふさ"],
  },
  { front: "撤", back: ["- Triệt", "- Rút lui, triệt tiêu", "- On: テツ"] },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Page 2
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
