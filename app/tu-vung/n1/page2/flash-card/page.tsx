import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "頃",
    back: ["- ごろ・けい・ころおい・ころ", "- vào khoảng"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 3時頃に会いましょう。 (Gặp nhau vào khoảng 3 giờ.)",
      "❗ Ghi chú: Thường dùng để chỉ thời gian ước lượng.",
    ],
  },
  {
    front: "体",
    back: [
      "- てい・しんてい・たい・からだ・しんたい・しんだい",
      "- cơ thể; sức khoẻ; thân thể; khối",
    ],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 体に気をつけてください。 (Hãy giữ gìn sức khỏe.)",
      "❗ Ghi chú: からだ dùng cho thân thể, たい dùng trong từ ghép (体力: thể lực).",
    ],
  },
  {
    front: "曲",
    back: ["- クマ・クセ・まが・くせ・くま・-わ・きょく", "- khúc; từ"],
    more: [
      "📚 Từ loại: Danh từ, động từ",
      "📝 Ví dụ: この曲が好きです。 (Tôi thích bản nhạc này.)",
      "❗ Ghi chú: きょく dùng cho bản nhạc, まがる là động từ 'cong, rẽ'.",
    ],
  },
  {
    front: "一別",
    back: ["- いちべつ", "- chia tay một lần"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 彼とは一別以来会っていない。 (Từ lần chia tay đó tôi chưa gặp lại anh ấy.)",
      "❗ Ghi chú: Thường dùng trong văn viết, trang trọng.",
    ],
  },
  {
    front: "開催",
    back: ["- かいさい", "- sự tổ chức; tổ chức"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 会議が開催される。 (Cuộc họp được tổ chức.)",
      "❗ Ghi chú: Thường dùng cho sự kiện, hội nghị.",
    ],
  },
  {
    front: "側",
    back: ["- そく・かたわら・そば・がわ・かわ・はた", "- phía"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 右側を見てください。 (Hãy nhìn về phía bên phải.)",
      "❗ Ghi chú: がわ dùng trong từ ghép (右側: phía bên phải).",
    ],
  },
  {
    front: "１０分",
    back: ["- じっぷん・じゅっぷん", "- 10 phút"],
    more: [
      "📚 Từ loại: Danh từ, số từ",
      "📝 Ví dụ: １０分待ってください。 (Hãy đợi 10 phút.)",
      "❗ Ghi chú: Đọc là じっぷん hoặc じゅっぷん đều đúng.",
    ],
  },
  {
    front: "枚",
    back: ["- まい・びら・ビラ・ひら", "- tấm; tờ"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố (lượng từ)",
      "📝 Ví dụ: 紙を三枚ください。 (Cho tôi 3 tờ giấy.)",
      "❗ Ghi chú: Dùng để đếm vật mỏng như giấy, áo, vé.",
    ],
  },
  {
    front: "教え",
    back: ["- おしえ", "- lời dạy dỗ; lời chỉ dẫn"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 先生の教えを守る。 (Làm theo lời dạy của thầy giáo.)",
      "❗ Ghi chú: Danh từ của động từ 教える (dạy, chỉ bảo).",
    ],
  },
  {
    front: "機",
    back: ["- はた・き", "- máy dệt"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 機を使って布を作る。 (Dùng máy dệt để làm vải.)",
      "❗ Ghi chú: き dùng trong từ ghép (機械: máy móc).",
    ],
  },
  {
    front: "公開",
    back: ["- こうかい", "- sự công khai; công bố"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 新しい映画が公開された。 (Bộ phim mới đã được công chiếu.)",
      "❗ Ghi chú: Thường dùng cho thông tin, sự kiện, phim ảnh.",
    ],
  },
  {
    front: "区",
    back: ["- く", "- khu; khu vực; quận; hạt"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 東京には２３区がある。 (Tokyo có 23 quận.)",
      "❗ Ghi chú: Dùng để chỉ đơn vị hành chính.",
    ],
  },
  {
    front: "初",
    back: [
      "- ウブ・ぞめ・うぶ・はつ・うい",
      "- cái đầu tiên; cái mới; đầu tiên; mới",
    ],
    more: [
      "📚 Từ loại: Danh từ, tính từ, hậu tố",
      "📝 Ví dụ: 初めて日本へ行きました。 (Lần đầu tiên tôi đến Nhật.)",
      "❗ Ghi chú: はつ dùng trong từ ghép (初恋: tình đầu).",
    ],
  },
  {
    front: "向け",
    back: ["- むけ", "- dành cho; thích hợp với"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 子供向けの本。 (Sách dành cho trẻ em.)",
      "❗ Ghi chú: Dùng sau danh từ để chỉ đối tượng hướng tới.",
    ],
  },
  {
    front: "対応",
    back: ["- たいおう", "- sự đối ứng; sự tương đương"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 迅速に対応する。 (Ứng phó nhanh chóng.)",
      "❗ Ghi chú: Thường dùng trong công việc, dịch vụ.",
    ],
  },
  {
    front: "番目",
    back: ["- ばんめ・つがいめ", "- số thứ tự"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 三番目の人。 (Người thứ ba.)",
      "❗ Ghi chú: Dùng sau số để chỉ thứ tự.",
    ],
  },
  {
    front: "システム",
    back: ["- システム", "- pháp; hệ thống"],
    more: [
      "📚 Từ loại: Danh từ (katakana)",
      "📝 Ví dụ: 新しいシステムを導入する。 (Áp dụng hệ thống mới.)",
      "❗ Ghi chú: Từ mượn tiếng Anh 'system'.",
    ],
  },
  {
    front: "登録",
    back: ["- とうろく", "- sự đăng ký; sổ sách đăng ký; sự đăng ký"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 会員に登録する。 (Đăng ký thành hội viên.)",
      "❗ Ghi chú: Thường dùng cho tài khoản, dịch vụ.",
    ],
  },
  {
    front: "号",
    back: ["- ごう", "- thứ; số"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: １２号室。 (Phòng số 12.)",
      "❗ Ghi chú: Dùng để đánh số thứ tự, số hiệu.",
    ],
  },
  {
    front: "設定",
    back: [
      "- せってい",
      "- sự cài đặt; sự thiết lập; sự thành lập; sự thiết lập",
    ],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: パスワードを設定する。 (Cài đặt mật khẩu.)",
      "❗ Ghi chú: Thường dùng trong công nghệ, máy tính.",
    ],
  },
  {
    front: "過ぎ",
    back: ["- すぎ", "- quá; hơn; sau"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: １０時過ぎに帰ります。 (Tôi sẽ về sau 10 giờ.)",
      "❗ Ghi chú: Dùng sau số để chỉ vượt quá, hơn.",
    ],
  },
  {
    front: "開発",
    back: [
      "- かいほつ・かいはつ",
      "- sự phát triển; lập trình; phát triển phần mềm",
    ],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 新しいアプリを開発する。 (Phát triển ứng dụng mới.)",
      "❗ Ghi chú: かいはつ dùng phổ biến hơn.",
    ],
  },
  {
    front: "際",
    back: ["- ぎわ・さい・きわ", "- dịp này; lần này"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 出発の際に連絡してください。 (Hãy liên lạc khi xuất phát.)",
      "❗ Ghi chú: さい dùng trong văn viết, trang trọng.",
    ],
  },
  {
    front: "来る",
    back: ["- くる・きたる", "- đến; tới; tới"],
    more: [
      "📚 Từ loại: Động từ",
      "📝 Ví dụ: 明日友達が来る。 (Ngày mai bạn sẽ đến.)",
      "❗ Ghi chú: きたる dùng trong thông báo, lịch sự.",
    ],
  },
  {
    front: "員",
    back: ["- いん", "- nhân viên; thành viên; người"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 銀行員として働く。 (Làm việc với tư cách là nhân viên ngân hàng.)",
      "❗ Ghi chú: Dùng trong từ ghép chỉ nghề nghiệp, tổ chức.",
    ],
  },
  {
    front: "限定",
    back: ["- げんてい", "- sự hạn định; sự hạn chế; sự quy định giới hạn"],
    more: [
      "📚 Từ loại: Danh từ, động từ (する)",
      "📝 Ví dụ: 限定商品。 (Sản phẩm giới hạn.)",
      "❗ Ghi chú: Thường dùng cho sản phẩm, dịch vụ đặc biệt.",
    ],
  },
  {
    front: "街",
    back: ["- まち・がい", "- phố phường; phố xá; phố; thị trấn"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 街を歩く。 (Đi bộ trên phố.)",
      "❗ Ghi chú: まち dùng phổ biến, がい dùng trong từ ghép (商店街: phố mua sắm).",
    ],
  },
  {
    front: "長",
    back: ["- たけ・ちょう・なが・つかさ・おさ・たき", "- dài"],
    more: [
      "📚 Từ loại: Danh từ, tính từ, hậu tố",
      "📝 Ví dụ: 長い髪。 (Tóc dài.)",
      "❗ Ghi chú: ちょう dùng trong từ ghép (社長: giám đốc).",
    ],
  },
  {
    front: "強いて",
    back: ["- しいて", "- khăng khăng; nhấn mạnh"],
    more: [
      "📚 Từ loại: Trạng từ",
      "📝 Ví dụ: 強いて言えば、彼が一番だ。 (Nếu phải nói thì anh ấy là nhất.)",
      "❗ Ghi chú: Thường dùng với nghĩa 'nếu bắt buộc phải...'.",
    ],
  },
  {
    front: "室",
    back: ["- むろ・しつ", "- gian phòng; sao thất"],
    more: [
      "📚 Từ loại: Danh từ, hậu tố",
      "📝 Ví dụ: 会議室に集まってください。 (Hãy tập trung ở phòng họp.)",
      "❗ Ghi chú: しつ dùng trong từ ghép (教室: phòng học).",
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
