import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "ウェブサイトに掲載する",
    back: ["- けいさい", "- đăng lên website"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 新しい情報をウェブサイトに掲載する。 (Đăng thông tin mới lên website.)",
      "❗ Ghi chú: 掲載 (けいさい) = đăng trên báo/website. Khác: 投稿 (とうこう) = đăng bài do cá nhân viết.",
    ],
  },
  {
    front: "ニュース速報",
    back: ["- そくほう", "- bản tin sốt dẻo"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 地震のニュース速報が流れた。 (Bản tin nhanh về động đất được phát đi.)",
      "❗ Ghi chú: 速報 (そくほう) = tin nhanh, cập nhật ngay lập tức. Khác: 号外 (ごうがい) = tờ báo đặc biệt.",
    ],
  },
  {
    front: "映画を放映する",
    back: ["- ほうえい", "- chiếu phim"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: テレビで映画を放映する。 (Chiếu phim trên TV.)",
      "❗ Ghi chú: 放映 = phát sóng (trên TV). 上映 (じょうえい) = chiếu (tại rạp). 放送 (ほうそう) = phát thanh/truyền hình.",
    ],
  },
  {
    front: "景気が低迷する",
    back: ["- ていめい", "- tình hình kinh tế mờ mịt"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 長期的に景気が低迷している。 (Kinh tế đang trì trệ trong thời gian dài.)",
      "❗ Ghi chú: 低迷 = ở mức thấp, không cải thiện. 景気 = tình hình kinh tế.",
    ],
  },
  {
    front: "採算が合う",
    back: ["- さいさん", "- có lợi nhuận"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: このビジネスは採算が合わない。 (Kinh doanh này không có lời.)",
      "❗ Ghi chú: 採算 (さいさん) = tính toán lãi lỗ. 採算が合う = hòa vốn hoặc có lãi.",
    ],
  },
  {
    front: "多額の負債を抱える",
    back: ["- ふさい", "- mắc một khoản nợ lớn"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 会社が多額の負債を抱えて倒産した。 (Công ty phá sản vì gánh khoản nợ khổng lồ.)",
      "❗ Ghi chú: 負債 (ふさい) = khoản nợ. 抱える (かかえる) = ôm, gánh chịu.",
    ],
  },
  {
    front: "外国企業と提携する",
    back: ["- ていけい", "- hợp tác với doanh nghiệp nước ngoài"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 海外の企業と提携して新商品を開発した。 (Hợp tác với doanh nghiệp nước ngoài để phát triển sản phẩm mới.)",
      "❗ Ghi chú: 提携 (ていけい) = hợp tác liên kết. Khác: 合併 (がっぺい) = sáp nhập.",
    ],
  },
  {
    front: "財政破綻",
    back: ["- ざいせいはたん", "- mất hết tài sản, tài chính"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 財政破綻した国は支援を求めた。 (Quốc gia sụp đổ tài chính đã kêu gọi hỗ trợ.)",
      "❗ Ghi chú: 破綻 (はたん) = sụp đổ, vỡ nợ. Dùng cho cả tài chính lẫn quan hệ.",
    ],
  },
  {
    front: "鉱業",
    back: ["- こうぎょう", "- ngành khai khoáng"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: この地域は鉱業が盛んだ。 (Khu vực này ngành khai khoáng phát triển.)",
      "❗ Ghi chú: 鉱 (こう) = quặng, khoáng sản. 業 (ぎょう) = ngành.",
    ],
  },
  {
    front: "繊維工業",
    back: ["- せんい", "- công nghiệp tơ sợi"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 繊維工業は衣料品を生産する。 (Công nghiệp tơ sợi sản xuất hàng may mặc.)",
      "❗ Ghi chú: 繊維 (せんい) = sợi, vải. Ngành dệt may và sản xuất vải.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 16
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
