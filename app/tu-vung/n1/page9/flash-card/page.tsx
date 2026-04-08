import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "調査の手順を箇条書きにする",
    back: ["- ちょうさのてじゅんをかじょうがきにする", "- viết ra từng mục một trình tự điều tra"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 調査の手順を箇条書きにしてわかりやすくする。 (Viết từng bước điều tra thành danh sách cho dễ hiểu.)",
      "❗ Ghi chú: 箇条書き (かじょうがき) = viết dạng bullet points, liệt kê từng mục.",
    ],
  },
  {
    front: "簡潔にまとめる",
    back: ["- かんけつにまとめる", "- tóm tắt ngắn gọn; súc tích"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 報告書を簡潔にまとめる。 (Tóm tắt báo cáo một cách ngắn gọn.)",
      "❗ Ghi chú: 簡潔 (かんけつ) = ngắn gọn và rõ ràng. Đối lập: 冗長な (じょうちょう) = dài dòng.",
    ],
  },
  {
    front: "有益な指摘を受ける",
    back: ["- ゆうえきなしてきをうける", "- nhận được góp ý hữu ích"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 先生から有益な指摘を受けた。 (Nhận được góp ý hữu ích từ thầy giáo.)",
      "❗ Ghi chú: 有益 (ゆうえき) = có ích, hữu dụng. 指摘 (してき) = chỉ ra, góp ý.",
    ],
  },
  {
    front: "会員制",
    back: ["- かいいんせい", "- chế độ thành viên; hội viên"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: このクラブは会員制です。 (Câu lạc bộ này áp dụng chế độ thành viên.)",
      "❗ Ghi chú: 〜制 (せい) = chế độ, hệ thống. Đi kèm: 予約制、定員制.",
    ],
  },
  {
    front: "前書き",
    back: ["- まえがき", "- lời nói đầu; đoạn mở đầu"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 本の前書きを読んでから本文を読む。 (Đọc lời nói đầu trước khi đọc nội dung chính.)",
      "❗ Ghi chú: Đồng nghĩa: はじめに、序文 (じょぶん). Đối lập: あとがき (lời bạt).",
    ],
  },
  {
    front: "マスコミ",
    back: ["- マスコミ", "- phương tiện truyền thông đại chúng"],
    more: [
      "📚 Từ loại: Danh từ (từ mượn: mass communication)",
      "📝 Ví dụ: マスコミに取り上げられて有名になった。 (Được truyền thông đưa tin và trở nên nổi tiếng.)",
      "❗ Ghi chú: Bao gồm: テレビ、新聞、ラジオ、雑誌.",
    ],
  },
  {
    front: "新聞を創刊する",
    back: ["- しんぶんをそうかんする", "- phát hành số báo đầu tiên"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 新しい新聞を創刊した。 (Phát hành tờ báo mới lần đầu tiên.)",
      "❗ Ghi chú: 創刊 (そうかん) = lần đầu phát hành. 創刊号 = số đầu tiên.",
    ],
  },
  {
    front: "記事が好評を博す",
    back: ["- きじがこうひょうをはくす", "- bài báo được đánh giá tốt; được khen ngợi"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: その記事が好評を博して続編が書かれた。 (Bài báo đó được đón nhận tốt nên có bài tiếp theo.)",
      "❗ Ghi chú: 博す (はくす) = đạt được, giành được (thường đi với danh tiếng, khen ngợi). Đối lập: 不評を買う.",
    ],
  },
  {
    front: "記事が不評を買う",
    back: ["- きじがふひょうをかう", "- bài báo bị đánh giá xấu; bị chỉ trích"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: センセーショナルな記事が不評を買った。 (Bài báo giật gân bị phản ứng tiêu cực.)",
      "❗ Ghi chú: 不評を買う = gây ra phản ứng tiêu cực. Đối lập: 好評を博す.",
    ],
  },
  {
    front: "ニュース速報",
    back: ["- ニュースそくほう", "- tin tức nóng; tin khẩn"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 地震のニュース速報が流れた。 (Tin khẩn về động đất được phát đi.)",
      "❗ Ghi chú: 速報 (そくほう) = tin nhanh, thông báo khẩn.",
    ],
  },
  {
    front: "人気が下火になる",
    back: ["- にんきがしたびになる", "- sức hút giảm; không còn nổi tiếng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: ブームが終わって人気が下火になった。 (Cơn sốt qua đi, sức hút giảm dần.)",
      "❗ Ghi chú: 下火 (したび) = lửa tàn, hàm ý suy giảm. Đối lập: 人気が高まる.",
    ],
  },
  {
    front: "ドキュメンタリー映画を放映する",
    back: ["- ドキュメンタリーえいがをほうえいする", "- phát sóng phim tài liệu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: NHKでドキュメンタリー映画を放映する。 (NHK phát sóng phim tài liệu.)",
      "❗ Ghi chú: 放映 (ほうえい) = phát sóng trên truyền hình. Khác: 放送 (ほうそう) = phát thanh/phát sóng nói chung.",
    ],
  },
  {
    front: "オーバーな宣伝",
    back: ["- オーバーなせんでん", "- quảng cáo thổi phồng; quá mức thực tế"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: オーバーな宣伝で消費者を惑わす。 (Quảng cáo thổi phồng gây hiểu nhầm cho người tiêu dùng.)",
      "❗ Ghi chú: オーバー (over) = vượt mức, thổi phồng.",
    ],
  },
  {
    front: "販売部数",
    back: ["- はんばいぶすう", "- số lượng phát hành; số bản bán ra"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: この雑誌の販売部数は100万部を超えた。 (Số lượng phát hành của tạp chí này vượt 1 triệu bản.)",
      "❗ Ghi chú: 部数 (ぶすう) = số bản (sách/báo).",
    ],
  },
  {
    front: "ウェブサイトに掲載する",
    back: ["- ウェブサイトにけいさいする", "- đăng lên website"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 求人情報をウェブサイトに掲載する。 (Đăng thông tin tuyển dụng lên website.)",
      "❗ Ghi chú: 掲載 (けいさい) = đăng tải (trên báo, website).",
    ],
  },
  {
    front: "投稿する",
    back: ["- とうこうする", "- đăng bài; đăng bình luận"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: SNSに写真を投稿する。 (Đăng ảnh lên mạng xã hội.)",
      "❗ Ghi chú: 投稿 (とうこう) = gửi bài để đăng. Dùng cho cả báo in lẫn mạng xã hội.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 9
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
