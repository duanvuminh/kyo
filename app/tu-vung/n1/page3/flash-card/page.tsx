import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "戦",
    back: ["- せん・いくさ", "- chiến tranh; trận chiến"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 戦争は避けるべきだ。 (Nên tránh chiến tranh.)",
      "❗ Ghi chú: せん dùng trong từ ghép (戦争: chiến tranh), いくさ là từ cổ.",
    ],
  },
  {
    front: "大事",
    back: ["- だいじ・おおごと", "- quan trọng; việc lớn; đại sự"],
    more: [
      "📚 Từ loại: Danh từ, tính từ đuôi な",
      "📝 Ví dụ: 健康は大事です。 (Sức khỏe rất quan trọng.)",
      "❗ Ghi chú: お大事に - chúc mau khỏi bệnh; おおごと - việc nghiêm trọng.",
    ],
  },
  {
    front: "着",
    back: ["- ちゃく・ぎ", "- đến nơi; về đích; (đếm quần áo: ～着)"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 東京駅に到着した。 (Đã đến ga Tokyo.)",
      "❗ Ghi chú: ちゃく dùng trong 到着, 一着 (về nhất); ぎ đếm quần áo (一着).",
    ],
  },
  {
    front: "派",
    back: ["- は", "- phe phái; nhóm; bè phái"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 彼は保守派だ。 (Anh ấy thuộc phe bảo thủ.)",
      "❗ Ghi chú: Dùng trong từ ghép như 派遣 (cử đi), 〜派 (phe ~).",
    ],
  },
  {
    front: "期",
    back: ["- き・ご", "- kỳ hạn; giai đoạn; thời kỳ"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 期限を守ってください。 (Hãy tuân thủ thời hạn.)",
      "❗ Ghi chú: き dùng phổ biến (期間, 期待); ご dùng trong 末期 (まつご).",
    ],
  },
  {
    front: "覚え",
    back: ["- おぼえ", "- ký ức; sự ghi nhớ; kinh nghiệm; sự tự tin"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 身に覚えがない。 (Tôi không có ký ức về điều đó.)",
      "❗ Ghi chú: Danh từ của động từ 覚える (nhớ, học).",
    ],
  },
  {
    front: "同",
    back: ["- どう", "- đồng; giống; cùng"],
    more: [
      "📚 Từ loại: Tiền tố",
      "📝 Ví dụ: 同時に始めましょう。 (Hãy bắt đầu cùng lúc.)",
      "❗ Ghi chú: Dùng trong từ ghép như 同じ (giống), 同時 (đồng thời).",
    ],
  },
  {
    front: "再",
    back: ["- さい", "- tái; lại lần nữa"],
    more: [
      "📚 Từ loại: Tiền tố",
      "📝 Ví dụ: 再開を期待しています。 (Tôi mong đợi sự tái khai.)",
      "❗ Ghi chú: Dùng trong từ ghép như 再び (một lần nữa), 再開 (tái khai).",
    ],
  },
  {
    front: "一部",
    back: ["- いちぶ", "- một phần; một bộ phận"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 一部の人だけが知っている。 (Chỉ một số người biết.)",
      "❗ Ghi chú: Trái nghĩa với 全部 (toàn bộ).",
    ],
  },
  {
    front: "デザイン",
    back: ["- デザイン", "- thiết kế; bản thiết kế"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: このデザインが気に入った。 (Tôi thích thiết kế này.)",
      "❗ Ghi chú: Từ mượn tiếng Anh 'design'.",
    ],
  },
  {
    front: "事業",
    back: ["- じぎょう", "- sự nghiệp; dự án; công việc kinh doanh"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 新しい事業を始める。 (Bắt đầu kinh doanh mới.)",
      "❗ Ghi chú: Thường dùng trong ngữ cảnh kinh doanh, công ty.",
    ],
  },
  {
    front: "社",
    back: ["- しゃ・やしろ", "- công ty; đền thờ"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 会社に入社した。 (Tôi đã vào công ty.)",
      "❗ Ghi chú: しゃ dùng trong 会社; やしろ dùng trong 神社 (đền thần đạo).",
    ],
  },
  {
    front: "ファン",
    back: ["- ファン", "- người hâm mộ; fan"],
    more: [
      "📚 Từ loại: Danh từ (katakana)",
      "📝 Ví dụ: 彼女のファンが多い。 (Cô ấy có nhiều fan.)",
      "❗ Ghi chú: Từ mượn tiếng Anh 'fan'.",
    ],
  },
  {
    front: "データ",
    back: ["- データ", "- dữ liệu; số liệu"],
    more: [
      "📚 Từ loại: Danh từ (katakana)",
      "📝 Ví dụ: データを分析する。 (Phân tích dữ liệu.)",
      "❗ Ghi chú: Từ mượn tiếng Anh 'data'.",
    ],
  },
  {
    front: "ヶ月",
    back: ["- かげつ", "- (khoảng) tháng"],
    more: [
      "📚 Từ loại: Hậu tố (lượng từ)",
      "📝 Ví dụ: 3ヶ月間勉強した。 (Đã học 3 tháng.)",
      "❗ Ghi chú: Dùng để đếm số tháng; ヶ đọc là か.",
    ],
  },
  {
    front: "映像",
    back: ["- えいぞう", "- hình ảnh; video"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 映像を撮影する。 (Quay video.)",
      "❗ Ghi chú: Dùng cho hình ảnh động, video, phim.",
    ],
  },
  {
    front: "出演",
    back: ["- しゅつえん", "- xuất hiện; tham gia biểu diễn"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: テレビに出演する。 (Xuất hiện trên TV.)",
      "❗ Ghi chú: Thường dùng trong ngữ cảnh giải trí, truyền hình.",
    ],
  },
  {
    front: "主なる",
    back: ["- おもなる", "- chính; chủ yếu; quan trọng"],
    more: [
      "📚 Từ loại: Tính từ (連体詞)",
      "📝 Ví dụ: 主なる原因は何ですか。 (Nguyên nhân chính là gì?)",
      "❗ Ghi chú: Tương tự 主な; dùng trong văn viết trang trọng.",
    ],
  },
  {
    front: "発生",
    back: ["- はっせい", "- phát sinh; xảy ra"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 事故が発生した。 (Tai nạn đã xảy ra.)",
      "❗ Ghi chú: Thường dùng cho sự cố, vấn đề, hiện tượng.",
    ],
  },
  {
    front: "敵",
    back: ["- てき・かたき", "- kẻ địch; kẻ thù"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 敵を倒す。 (Đánh bại kẻ thù.)",
      "❗ Ghi chú: てき dùng phổ biến; かたき dùng trong 親の敵 (kẻ thù của cha mẹ).",
    ],
  },
  {
    front: "面",
    back: ["- めん・おもて・つら", "- mặt; bề mặt; khía cạnh; phương diện"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: その面では同意します。 (Về khía cạnh đó tôi đồng ý.)",
      "❗ Ghi chú: めん dùng phổ biến; つら dùng trong 面白い (thú vị).",
    ],
  },
  {
    front: "入る",
    back: ["- はいる", "- đi vào; vào; tham gia"],
    more: [
      "📚 Từ loại: Động từ (五段)",
      "📝 Ví dụ: 部屋に入ってください。 (Xin mời vào phòng.)",
      "❗ Ghi chú: 気に入る (きにいる) - thích, ưng ý.",
    ],
  },
  {
    front: "ポイント",
    back: ["- ポイント", "- điểm; điểm mấu chốt"],
    more: [
      "📚 Từ loại: Danh từ (katakana)",
      "📝 Ví dụ: ポイントを貯める。 (Tích điểm.)",
      "❗ Ghi chú: Từ mượn tiếng Anh 'point'.",
    ],
  },
  {
    front: "選挙",
    back: ["- せんきょ", "- bầu cử; cuộc tuyển cử"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 選挙に投票する。 (Bỏ phiếu bầu cử.)",
      "❗ Ghi chú: 総選挙 (そうせんきょ) - tổng tuyển cử.",
    ],
  },
  {
    front: "企画",
    back: ["- きかく", "- kế hoạch; sự lập kế hoạch"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 新しい企画を提案する。 (Đề xuất kế hoạch mới.)",
      "❗ Ghi chú: Thường dùng trong công việc, dự án.",
    ],
  },
  {
    front: "使い",
    back: ["- つかい", "- cách dùng; việc sử dụng; sứ giả"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 使い方を教えてください。 (Xin hãy chỉ cách dùng.)",
      "❗ Ghi chú: Danh từ của động từ 使う (sử dụng).",
    ],
  },
  {
    front: "無意味",
    back: ["- むいみ", "- vô nghĩa; không có ý nghĩa"],
    more: [
      "📚 Từ loại: Danh từ, tính từ đuôi な",
      "📝 Ví dụ: 無意味な議論はやめよう。 (Hãy dừng tranh luận vô nghĩa.)",
      "❗ Ghi chú: Trái nghĩa với 有意義 (ゆういぎ) - có ý nghĩa.",
    ],
  },
  {
    front: "観",
    back: ["- かん", "- quan điểm; cách nhìn; quan niệm"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 人生観が変わった。 (Quan niệm về cuộc sống đã thay đổi.)",
      "❗ Ghi chú: Dùng trong từ ghép như 世界観, 価値観.",
    ],
  },
  {
    front: "施設",
    back: ["- しせつ", "- cơ sở; công trình; trang thiết bị"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 公共施設を利用する。 (Sử dụng cơ sở công cộng.)",
      "❗ Ghi chú: Thường dùng cho công trình, cơ sở hạ tầng.",
    ],
  },
  {
    front: "権",
    back: ["- けん・ごん", "- quyền; quyền hạn"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 人権を守る。 (Bảo vệ nhân quyền.)",
      "❗ Ghi chú: けん dùng phổ biến (権利: quyền lợi); ごん dùng trong 権力.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 2
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
