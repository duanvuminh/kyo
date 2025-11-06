import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "- Ý nghĩa: Nhân tiện (làm A nhân tiện làm B)",
      "- Key point: Hành động chính kèm theo phụ (thường có di chuyển)",
      "- Cấu trúc: N / Vます + がてら",
      "- Ví dụ 1: 散歩がてらコンビニに寄った。(Đi dạo nhân tiện ghé cửa hàng)",
      "- Ví dụ 2: 写真を撮りがてら山を登った。(Leo núi nhân tiện chụp ảnh)",
      "- So sánh: ～ついでに (mang tính tiện thể chung, không nhấn di chuyển)",
    ],
  },
  {
    front: "～なり",
    back: [
      "- Ý nghĩa: Vừa mới... thì đã (ngay tức khắc)",
      "- Key point: Nhấn sự lập tức nối tiếp sau hành động đầu",
      "- Cấu trúc: V辞書形 + なり",
      "- Ví dụ 1: 彼は席に着くなり寝てしまった。(Anh ấy vừa ngồi xuống đã ngủ)",
      "- Ví dụ 2: ドアを開けるなり子どもが飛び出した。(Vừa mở cửa thì đứa trẻ lao ra)",
      "- So sánh: ～たとたん(に) tương tự nhưng なり trang trọng hơn",
    ],
  },
  {
    front: "～手前",
    back: [
      "- Ý nghĩa: Chính vì (đã/đang) nên phải (giữ thể diện/trách nhiệm)",
      "- Key point: Áp lực tự ràng buộc do lời nói/hành động trước",
      "- Cấu trúc: Vた / Vている / Nの + 手前",
      "- Ví dụ 1: 約束した手前、行かないわけにはいかない。(Đã hứa nên không thể không đi)",
      "- Ví dụ 2: 人前で言った手前、後には引けない。(Đã nói trước mọi người nên không rút lại được)",
      "- So sánh: ～以上(は) cũng mang nghĩa trách nhiệm nhưng trung tính hơn",
    ],
  },
  {
    front: "～を限りに／～限りで",
    back: [
      "- Ý nghĩa: Kể từ hết / đến hết (thời điểm kết thúc)",
      "- Key point: Tuyên bố chấm dứt thói quen/hành động",
      "- Cấu trúc: 時間語 + を限りに / 限りで",
      "- Ví dụ 1: 今日を限りに甘い物をやめる。(Từ hôm nay dừng ăn đồ ngọt)",
      "- Ví dụ 2: 今月限りでこのサービスは終了します。(Dịch vụ kết thúc hết tháng này)",
      "- So sánh: ～までに là hạn chót; đây nhấn tuyên bố dứt điểm",
    ],
  },
  {
    front: "～限りだ",
    back: [
      "- Ý nghĩa: Cảm thấy rất... / ... biết bao",
      "- Key point: Cảm xúc chủ quan cực độ",
      "- Cấu trúc: 感情形容詞 + 限りだ",
      "- Ví dụ 1: うれしい限りだ。(Vui biết bao)",
      "- Ví dụ 2: 残念な限りだ。(Tiếc vô cùng)",
      "- So sánh: ～てしかたがない tương tự nhưng dùng với nhiều cảm xúc hơn",
    ],
  },
  {
    front: "～あっての",
    back: [
      "- Ý nghĩa: N2 có được là nhờ N1 (nền tảng)",
      "- Key point: N1 là điều kiện không thể thiếu",
      "- Cấu trúc: N1あってのN2",
      "- Ví dụ 1: 家族あっての幸せだ。(Hạnh phúc có được là nhờ gia đình)",
      "- Ví dụ 2: 信頼あっての仕事関係だ。(Quan hệ công việc có được nhờ sự tin cậy)",
      "- So sánh: ～なしでは nhấn 'nếu thiếu thì không'; あっての nhấn 'nhờ có'",
    ],
  },
  {
    front: "～だの～だの",
    back: [
      "- Ý nghĩa: Nào là... nào là... (liệt kê phàn nàn)",
      "- Key point: Liệt kê tạp, thường mang sắc thái chê",
      "- Cấu trúc: N/V/A + だの + N/V/A + だの",
      "- Ví dụ 1: 暑いだの寒いだのとうるさい。(Nào nóng nào lạnh ồn ào)",
      "- Ví dụ 2: 給料が安いだの忙しいだのと文句ばかりだ。(Toàn than nào lương thấp nào bận)",
      "- So sánh: ～やら～やら trung tính hơn, ít phàn nàn",
    ],
  },
  {
    front: "～であれ～であれ",
    back: [
      "- Ý nghĩa: Cho dù... hay... đều",
      "- Key point: Không phân biệt hai khả năng",
      "- Cấu trúc: N1であれN2であれ",
      "- Ví dụ 1: 男であれ女であれ参加できる。(Nam hay nữ đều tham gia)",
      "- Ví dụ 2: 賛成であれ反対であれ意見を述べてください。(Tán thành hay phản đối hãy nêu ý kiến)",
      "- So sánh: ～ても / ～にせよ mềm hơn; này trang trọng",
    ],
  },
  {
    front: "～どうにも…ない",
    back: [
      "- Ý nghĩa: Không cách nào ... được",
      "- Key point: Bất lực hoàn toàn",
      "- Cấu trúc: どうにも + Vない / Adjくない",
      "- Ví dụ 1: この機械はどうにも直せない。(Máy này chẳng sửa nổi)",
      "- Ví dụ 2: その問題はどうにもならない。(Vấn đề đó chẳng giải quyết nổi)",
      "- So sánh: なかなか～ない chỉ khó; đây là tuyệt đối không được",
    ],
  },
  {
    front: "～はする",
    back: [
      "- Ý nghĩa: Tuy có... nhưng / Chỉ có mỗi... (kết quả không tương xứng)",
      "- Key point: Nhấn sự không đủ hoặc hạn chế",
      "- Cấu trúc: Nはする（が／けど）",
      "- Ví dụ 1: 勉強はするが成績が上がらない。(Có học mà điểm không tăng)",
      "- Ví dụ 2: 手伝いはしたが役に立たなかった。(Có giúp nhưng chẳng hữu ích)",
      "- So sánh: ～には～が dùng cho danh từ + nhận xét trung tính hơn",
    ],
  },
  {
    front: "～ているばあいではない",
    back: [
      "- Ý nghĩa: Không phải lúc để...",
      "- Key point: Thúc giục ưu tiên việc khác",
      "- Cấu trúc: Vている場合ではない",
      "- Ví dụ 1: 寝ている場合ではない。(Không phải lúc ngủ)",
      "- Ví dụ 2: 遊んでいる場合ではない。(Không phải lúc chơi)",
      "- So sánh: ～ている暇はない nhấn không có thời gian",
    ],
  },
  {
    front: "～なら…なり",
    back: [
      "- Ý nghĩa: Nếu ... thì theo cách tương xứng",
      "- Key point: Yêu cầu nhất quán, chọn cách rồi làm đúng kiểu",
      "- Cấu trúc: VるならVるなり / NならNなり",
      "- Ví dụ 1: 休むなら休むなり体を治せ。(Nếu nghỉ thì nghỉ hẳn để hồi phục)",
      "- Ví dụ 2: 安く済ませるなら済ませるなりの工夫がいる。(Nếu làm rẻ thì cần sáng kiến phù hợp)",
      "- So sánh: ～なら～で giống nghĩa nhưng hình thức khác (NならNで)",
    ],
  },
  {
    front: "～わ…わ（で）",
    back: [
      "- Ý nghĩa: Nào là... nào là... (quá nhiều, ngập)",
      "- Key point: Liệt kê tình trạng chồng chất (khẩu ngữ)",
      "- Cấu trúc: VるわNだわで / AdjいわAdjいわで",
      "- Ví dụ 1: 忙しいわ眠いわで大変だ。(Nào bận nào buồn ngủ mệt quá)",
      "- Ví dụ 2: 雨だわ寒いわで外に出たくない。(Nào mưa nào lạnh chẳng muốn ra ngoài)",
      "- So sánh: ～し～し cũng liệt kê nhưng trung tính hơn",
    ],
  },
  {
    front: "～をいいことに",
    back: [
      "- Ý nghĩa: Lợi dụng (điều thuận lợi/sơ hở)",
      "- Key point: Hành vi tiêu cực",
      "- Cấu trúc: N / Sのを + いいことに",
      "- Ví dụ 1: 先生がいないのをいいことに騒ぐ。(Lợi dụng thầy vắng gây ồn)",
      "- Ví dụ 2: 彼の親切をいいことにお金を借り続けた。(Lợi dụng lòng tốt anh ấy để vay tiền mãi)",
      "- So sánh: ～につけこむ cũng là lợi dụng nhưng thiên về cơ hội yếu điểm",
    ],
  },
  {
    front: "～いざ～となると",
    back: [
      "- Ý nghĩa: Đến khi thật sự... thì (khác với dự đoán)",
      "- Key point: Thay đổi phản ứng lúc vào tình huống thật",
      "- Cấu trúc: いざVるとなると / いざNとなれば",
      "- Ví dụ 1: いざ本番となると緊張する。(Đến lúc thi thật thì căng thẳng)",
      "- Ví dụ 2: いざ出発となれば不安になる。(Đến lúc xuất phát thì lo)",
      "- So sánh: いよいよ nhấn thời điểm tới gần; いざ nhấn chuyển trạng thái",
    ],
  },
  {
    front: "～との",
    back: [
      "- Ý nghĩa: Rằng... (truyền đạt nội dung)",
      "- Key point: Văn viết/ tường thuật thông tin nhận được",
      "- Cấu trúc: S + との + N / S + とのことだ",
      "- Ví dụ 1: 彼が来ないとの連絡があった。(Có liên lạc rằng anh ấy không đến)",
      "- Ví dụ 2: 明日休業との通知を受けた。(Nhận thông báo rằng mai nghỉ)",
      "- So sánh: ～という dùng rộng rãi; ～との trang trọng hơn",
    ],
  },
  {
    front: "～てもしかたがない",
    back: [
      "- Ý nghĩa: ... cũng đành / không còn cách",
      "- Key point: Chấp nhận kết quả không đổi",
      "- Cấu trúc: Vても / Adjくても + しかたがない",
      "- Ví dụ 1: 失敗してもしかたがない。(Thất bại cũng đành)",
      "- Ví dụ 2: 怒ってもしかたがない。(Giận cũng chẳng giải quyết)",
      "- So sánh: ～てもしょうがない gần nghĩa, khẩu ngữ hơn",
    ],
  },
  {
    front: "～ずにはおかない",
    back: [
      "- Ý nghĩa: Thế nào cũng / chắc chắn sẽ (gây tác động)",
      "- Key point: Tác động tự nhiên không tránh khỏi",
      "- Cấu trúc: Vない語幹 + ずにはおかない",
      "- Ví dụ 1: 彼の演技は人を感動させずにはおかない。(Diễn xuất chắc chắn làm cảm động)",
      "- Ví dụ 2: その問題は議論を呼ばずにはおかない。(Vấn đề đó chắc chắn gây tranh luận)",
      "- So sánh: ～に違いない là phỏng đoán; đây thiên về tác động tất yếu",
    ],
  },
  {
    front: "～たらどんなに…か",
    back: [
      "- Ý nghĩa: Nếu ... thì ... biết mấy (ước vọng)",
      "- Key point: Giả định không thật / tiếc nuối",
      "- Cấu trúc: もしVたらどんなにAdj/Advか",
      "- Ví dụ 1: 休めたらどんなに楽か。(Nếu nghỉ được thì nhẹ biết bao)",
      "- Ví dụ 2: 会えたらどんなにうれしいか。(Nếu gặp được thì vui biết mấy)",
      "- So sánh: ～ばよかった thể hiện hối tiếc trực tiếp hơn",
    ],
  },
  {
    front: "～ぬ間に",
    back: [
      "- Ý nghĩa: Trong lúc chưa...",
      "- Key point: Văn trang trọng/cổ, = ないうちに",
      "- Cấu trúc: Vない（ぬ）間に",
      "- Ví dụ 1: 日が暮れぬ間に帰ろう。(Tranh thủ về trước khi trời tối)",
      "- Ví dụ 2: 雨が降りぬ間に終わらせる。(Hoàn thành trước khi mưa)",
      "- So sánh: ～ないうちに phổ biến hơn, khẩu ngữ",
    ],
  },
  {
    front: "～からとおもって",
    back: [
      "- Ý nghĩa: Vì nghĩ rằng... nên...",
      "- Key point: Quyết định dựa suy đoán (có thể sai)",
      "- Cấu trúc: S + からと思って",
      "- Ví dụ 1: 安いからと思って大量に買った。(Nghĩ rẻ nên mua nhiều)",
      "- Ví dụ 2: 大丈夫だと思って連絡しなかった。(Nghĩ không sao nên không liên lạc)",
      "- So sánh: ～と思い込み dùng khi niềm tin sai rõ rệt",
    ],
  },
  {
    front: "～かとおもえば...も",
    back: [
      "- Ý nghĩa: Nếu có ... thì cũng có ... (tương phản)",
      "- Key point: Nêu hai loại đối lập xen kẽ",
      "- Cấu trúc: ～かと思えば...も",
      "- Ví dụ 1: 難しい問題かと思えば簡単なのもある。(Có câu khó thì cũng có câu dễ)",
      "- Ví dụ 2: 晴れかと思えば雨も降る。(Tưởng nắng mà cũng có lúc mưa)",
      "- So sánh: ～かと思うと giống chuyển nhanh; đây nhấn đối lập loại",
    ],
  },
  {
    front: "～といっても間違いない",
    back: [
      "- Ý nghĩa: Nói ... cũng không sai / gần như chắc chắn",
      "- Key point: Khẳng định mạnh độ đúng",
      "- Cấu trúc: Sと言っても間違いない",
      "- Ví dụ 1: 彼は天才と言っても間違いない。(Nói anh ấy thiên tài không sai)",
      "- Ví dụ 2: これは成功と言っても間違いない。(Nói đây là thành công không sai)",
      "- So sánh: ～と言っても dùng nhượng bộ; mẫu này khẳng định",
    ],
  },
  {
    front: "～にいわせれば",
    back: [
      "- Ý nghĩa: Theo ý kiến của...",
      "- Key point: Đưa quan điểm gắn người/nhóm",
      "- Cấu trúc: Nに言わせれば",
      "- Ví dụ 1: 彼に言わせれば簡単だ。(Theo anh ấy thì dễ)",
      "- Ví dụ 2: 専門家に言わせれば危険だ。(Theo chuyên gia thì nguy hiểm)",
      "- So sánh: ～からすると phỏng đoán từ căn cứ; đây là trực tiếp ý kiến",
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "- Ý nghĩa: Chính là... / nếu không phải ... thì là gì",
      "- Key point: Câu hỏi tu từ khẳng định tuyệt đối",
      "- Cấu trúc: Nでなくてなんだろう",
      "- Ví dụ 1: これが愛でなくてなんだろう。(Nếu không phải tình yêu thì gì)",
      "- Ví dụ 2: 彼の行動は勇気でなくてなんだろう。(Hành động đó chính là dũng khí)",
      "- So sánh: まさに～だ nhấn xác thực nhưng không dạng hỏi tu từ",
    ],
  },
  {
    front: "～にあっては",
    back: [
      "- Ý nghĩa: Riêng trong / trong hoàn cảnh...",
      "- Key point: Vai trò đặc thù trong bối cảnh",
      "- Cấu trúc: Nにあって（は）",
      "- Ví dụ 1: 非常時にあっては冷静さが重要だ。(Trong tình huống khẩn cấp sự bình tĩnh quan trọng)",
      "- Ví dụ 2: 変化期にあっては柔軟性が求められる。(Trong thời kỳ chuyển đổi cần linh hoạt)",
      "- So sánh: ～において là 'tại'; ～にあっては nhấn điều kiện đặc biệt",
    ],
  },
  {
    front: "～というわけだ",
    back: [
      "- Ý nghĩa: Có nghĩa là... (kết luận)",
      "- Key point: Tóm tắt suy ra từ lý do trước",
      "- Cấu trúc: Sというわけだ",
      "- Ví dụ 1: 彼は来られないというわけだ。(Có nghĩa là anh ấy không tới)",
      "- Ví dụ 2: 時間がないというわけだ。(Tức là không có thời gian)",
      "- So sánh: ～わけではない phủ định; mẫu này khẳng định kết luận",
    ],
  },
  {
    front: "～ようで（は）",
    back: [
      "- Ý nghĩa: Nếu cứ (có vẻ/kiểu)... thì (kết quả xấu)",
      "- Key point: Phán đoán tiêu cực dựa hiện trạng",
      "- Cấu trúc: Vる / Adj / Nの + ようでは",
      "- Ví dụ 1: そんな態度を取るようでは成功しない。(Cứ thái độ đó thì không thành công)",
      "- Ví dụ 2: 練習しないようでは上達しない。(Không luyện tập thì chẳng tiến bộ)",
      "- So sánh: ～ようではなくて dùng phủ định hình thái đó",
    ],
  },
  {
    front: "～あえて",
    back: [
      "- Ý nghĩa: Dám / mạnh dạn (cố ý chọn khó)",
      "- Key point: Hành động trái mong đợi, chấp nhận rủi ro",
      "- Cấu trúc: あえて + Vる / Vない",
      "- Ví dụ 1: あえて危険な道を選んだ。(Dám chọn đường nguy hiểm)",
      "- Ví dụ 2: あえて反対意見を述べる。(Dám nêu ý kiến phản đối)",
      "- So sánh: わざわざ nhấn công sức; あえて nhấn quyết tâm đối nghịch",
    ],
  },
  {
    front: "～が早いか",
    back: [
      "- Ý nghĩa: Vừa mới... thì lập tức...",
      "- Key point: Hai hành động nối ngay tức thì",
      "- Cấu trúc: Vるが早いか",
      "- Ví dụ 1: ベルが鳴るが早いか生徒が出た。(Chuông vừa reo học sinh ra ngay)",
      "- Ví dụ 2: 先生を見るが早いか静かになった。(Vừa thấy thầy thì im lặng)",
      "- So sánh: ～かと思うと cũng nhanh nhưng có bất ngờ hơn",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Grammar N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
