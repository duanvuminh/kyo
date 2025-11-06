import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "- Ý nghĩa: Nhân tiện (làm A nhân tiện làm B)",
      "- Key point: Hành động chính kèm phụ, thường có di chuyển",
      "- Cấu trúc: N / Vます + がてら",
      "- So sánh: ～ついでに (không nhấn yếu tố di chuyển)",
    ],
    more: [
      "- Ví dụ 1: 散歩がてらコンビニに寄った。(Đi dạo nhân tiện ghé cửa hàng)",
      "- Ví dụ 2: 写真を撮りがてら山を登った。(Leo núi nhân tiện chụp ảnh)",
      "- Nguồn: trợ từ cổ mang nghĩa kiêm nhiệm hành động",
    ],
  },
  {
    front: "～なり",
    back: [
      "- Ý nghĩa: Vừa mới... thì lập tức...",
      "- Key point: Hai hành động nối tiếp ngay tức khắc",
      "- Cấu trúc: V辞書形 + なり",
      "- So sánh: ～たとたん(に) (gần nghĩa, phổ biến hơn)",
    ],
    more: [
      "- Ví dụ 1: 席に着くなり寝てしまった。(Vừa ngồi xuống đã ngủ)",
      "- Ví dụ 2: ドアを開けるなり子どもが飛び出した。(Vừa mở cửa thì trẻ lao ra)",
      "- Nguồn: ‘なり’ dạng kết nối cổ chỉ trạng thái vừa xảy ra",
    ],
  },
  {
    front: "～手前",
    back: [
      "- Ý nghĩa: Chính vì đã/đang (làm/nói) nên phải (giữ thể diện)",
      "- Key point: Tự ràng buộc trách nhiệm / sĩ diện",
      "- Cấu trúc: Vた / Vている / Nの + 手前",
      "- So sánh: ～以上(は) (trách nhiệm, trung tính hơn)",
    ],
    more: [
      "- Ví dụ 1: 約束した手前、行かないわけにいかない。(Đã hứa nên phải đi)",
      "- Ví dụ 2: 人前で言った手前、後に引けない。(Đã nói trước mọi người nên không rút)",
      "- Nguồn: 手前 = ‘trước mặt (người khác)’ → ý thức thể diện",
    ],
  },
  {
    front: "～を限りに／～限りで",
    back: [
      "- Ý nghĩa: Đến hết / kể từ (mốc thời gian) là dừng",
      "- Key point: Tuyên bố chấm dứt thói quen/hành động",
      "- Cấu trúc: 時間語 + を限りに / 限りで",
      "- So sánh: ～までに (hạn chót, không hàm ý dứt bỏ)",
    ],
    more: [
      "- Ví dụ 1: 今日を限りに甘い物をやめる。(Từ hôm nay bỏ đồ ngọt)",
      "- Ví dụ 2: 今月限りでサービス終了。(Dịch vụ kết thúc hết tháng này)",
      "- Nguồn: 限り = giới hạn cuối",
    ],
  },
  {
    front: "～限りだ",
    back: [
      "- Ý nghĩa: Rất... / ... biết bao (cực độ cảm xúc)",
      "- Key point: Chủ quan người nói, nhấn cường độ",
      "- Cấu trúc: 感情形容詞 + 限りだ",
      "- So sánh: ～てしかたがない (mạnh nhưng phổ biến hơn)",
    ],
    more: [
      "- Ví dụ 1: うれしい限りだ。(Vui biết bao)",
      "- Ví dụ 2: 残念な限りだ。(Tiếc vô cùng)",
      "- Nguồn: 限り = mức giới hạn cao nhất",
    ],
  },
  {
    front: "～あっての",
    back: [
      "- Ý nghĩa: N2 tồn tại nhờ N1 (nền tảng thiết yếu)",
      "- Key point: N1 không có thì N2 không hình thành",
      "- Cấu trúc: N1あってのN2",
      "- So sánh: ～なしでは (nếu thiếu thì không được, sắc thái phủ định)",
    ],
    more: [
      "- Ví dụ 1: 家族あっての私だ。(Tôi có được nhờ gia đình)",
      "- Ví dụ 2: 信頼あっての仕事関係。(Quan hệ công việc nhờ tin cậy)",
      "- Nguồn: あって (tồn tại) + の (liên kết)",
    ],
  },
  {
    front: "～だの～だの",
    back: [
      "- Ý nghĩa: Nào là... nào là... (liệt kê phàn nàn)",
      "- Key point: Liệt kê tạp, sắc thái chê trách",
      "- Cấu trúc: N/V/A + だの + N/V/A + だの",
      "- So sánh: ～やら～やら (trung tính hơn)",
    ],
    more: [
      "- Ví dụ 1: 暑いだの寒いだのとうるさい。(Lúc kêu nóng lúc kêu lạnh)",
      "- Ví dụ 2: 忙しいだの給料が安いだの文句ばかり。(Toàn than vãn)",
      "- Nguồn: だの = dạng liệt kê phi chính thức",
    ],
  },
  {
    front: "～であれ～であれ",
    back: [
      "- Ý nghĩa: Cho dù... hay... đều (không phân biệt)",
      "- Key point: Hai khả năng tương đương về kết luận",
      "- Cấu trúc: N1であれN2であれ",
      "- So sánh: ～ても / ～にせよ (mềm hơn, ít trang trọng)",
    ],
    more: [
      "- Ví dụ 1: 男であれ女であれ参加できる。(Nam hay nữ đều tham gia)",
      "- Ví dụ 2: 賛成であれ反対であれ意見を述べて。(Dù tán thành hay phản đối cứ nêu)",
      "- Nguồn: であれ = dạng giả định cổ của である",
    ],
  },
  {
    front: "～どうにも…ない",
    back: [
      "- Ý nghĩa: Không cách nào... được",
      "- Key point: Bất lực hoàn toàn, không giải pháp",
      "- Cấu trúc: どうにも + Vない / Adjくない",
      "- So sánh: なかなか～ない (khó nhưng chưa tuyệt đối)",
    ],
    more: [
      "- Ví dụ 1: それはどうにもならない。(Việc đó không xử lý nổi)",
      "- Ví dụ 2: 機械が壊れてどうにも直せない。(Máy hỏng không sửa nổi)",
      "- Nguồn: どうにも = bằng mọi cách cũng không",
    ],
  },
  {
    front: "～はする",
    back: [
      "- Ý nghĩa: Tuy có... nhưng / chỉ có mỗi...",
      "- Key point: Hành động xảy ra nhưng kết quả không tương xứng",
      "- Cấu trúc: Nはする（が／けど）",
      "- So sánh: ～には～が (thừa nhận rồi đánh giá trung tính)",
    ],
    more: [
      "- Ví dụ 1: 勉強はするが成績が上がらない。(Có học mà điểm không lên)",
      "- Ví dụ 2: 手伝いはしたが役に立たなかった。(Có giúp mà không hữu ích)",
      "- Nguồn: Mẫu nhấn phần ‘có làm’ tách biệt",
    ],
  },
  {
    front: "～ているばあいではない",
    back: [
      "- Ý nghĩa: Không phải lúc để...",
      "- Key point: Cần ưu tiên việc khác gấp hơn",
      "- Cấu trúc: Vている場合ではない",
      "- So sánh: ～ている暇はない (nhấn không có thời gian)",
    ],
    more: [
      "- Ví dụ 1: 寝ている場合ではない。(Không phải lúc ngủ)",
      "- Ví dụ 2: 遊んでいる場合ではない。(Không phải lúc chơi)",
      "- Nguồn: 場合 = tình huống thích hợp",
    ],
  },
  {
    front: "～なら…なり",
    back: [
      "- Ý nghĩa: Nếu chọn... thì làm theo cách tương xứng",
      "- Key point: Yêu cầu nhất quán, không nửa vời",
      "- Cấu trúc: VるならVるなり / NならNなり",
      "- So sánh: ～なら～で (mẫu biến thể, sắc thái nhẹ hơn)",
    ],
    more: [
      "- Ví dụ 1: 休むなら休むなりの計画がいる。(Nghỉ thì phải có kế hoạch nghỉ)",
      "- Ví dụ 2: 安く済ませるなら済ませるなりの工夫。(Làm rẻ thì cần mẹo phù hợp)",
      "- Nguồn: ‘なり’ chỉ hình thức phù hợp tương ứng",
    ],
  },
  {
    front: "～わ…わ（で）",
    back: [
      "- Ý nghĩa: Nào là... nào là... (ngập trong nhiều thứ)",
      "- Key point: Liệt kê tình trạng chồng chất (khẩu ngữ)",
      "- Cấu trúc: VるわNだわで / AdjいわAdjいわで",
      "- So sánh: ～し～し (liệt kê trung tính hơn)",
    ],
    more: [
      "- Ví dụ 1: 忙しいわ眠いわで大変だ。(Nào bận nào buồn ngủ mệt thật)",
      "- Ví dụ 2: 雨だわ寒いわで出たくない。(Nào mưa nào lạnh không muốn ra)",
      "- Nguồn: わ = trợ từ cảm thán nữ tính cổ",
    ],
  },
  {
    front: "～をいいことに",
    back: [
      "- Ý nghĩa: Lợi dụng (điều thuận lợi/sơ hở)",
      "- Key point: Hành vi tiêu cực dựa lợi thế tình huống",
      "- Cấu trúc: N / Sのを + いいことに",
      "- So sánh: ～につけこんで (chèn vào điểm yếu trực tiếp)",
    ],
    more: [
      "- Ví dụ 1: 先生がいないのをいいことに騒いだ。(Lợi dụng thầy vắng gây ồn)",
      "- Ví dụ 2: 彼の優しさをいいことに頼み続ける。(Lợi dụng lòng tốt xin mãi)",
      "- Nguồn: いいこと = ‘điều có lợi’ bị lạm dụng",
    ],
  },
  {
    front: "～いざ～となると",
    back: [
      "- Ý nghĩa: Đến khi thực sự... thì (phản ứng khác)",
      "- Key point: Thay đổi thái độ lúc vào tình huống thật",
      "- Cấu trúc: いざVるとなると / いざNとなれば",
      "- So sánh: いよいよ (cận kề thời điểm, không nhấn thay đổi)",
    ],
    more: [
      "- Ví dụ 1: いざ本番となると緊張する。(Thi thật thì lại căng)",
      "- Ví dụ 2: いざ出発となれば不安になる。(Tới lúc đi thì lo)",
      "- Nguồn: いざ = ‘nào, đến lúc’ cổ",
    ],
  },
  {
    front: "～との",
    back: [
      "- Ý nghĩa: Rằng... (truyền đạt nội dung)",
      "- Key point: Văn viết, câu tường thuật trang trọng",
      "- Cấu trúc: S + との + N / S + とのことだ",
      "- So sánh: ～という (phổ thông, ít trang trọng)",
    ],
    more: [
      "- Ví dụ 1: 彼が来ないとの連絡。(Liên lạc rằng anh ấy không tới)",
      "- Ví dụ 2: 明日休業との通知。(Thông báo rằng mai nghỉ)",
      "- Nguồn: と (trích dẫn) + の (danh hoá)",
    ],
  },
  {
    front: "～てもしかたがない",
    back: [
      "- Ý nghĩa: ... cũng đành / không còn cách",
      "- Key point: Chấp nhận kết quả không đổi",
      "- Cấu trúc: Vても / Adjくても + しかたがない",
      "- So sánh: ～てもしょうがない (khẩu ngữ hơn)",
    ],
    more: [
      "- Ví dụ 1: 失敗してもしかたがない。(Thất bại cũng đành)",
      "- Ví dụ 2: 怒ってもしかたがない。(Giận cũng vô ích)",
      "- Nguồn: 仕方がない = không có cách",
    ],
  },
  {
    front: "～ずにはおかない",
    back: [
      "- Ý nghĩa: Thế nào cũng / chắc chắn sẽ (gây tác động)",
      "- Key point: Tác động tự nhiên khó tránh",
      "- Cấu trúc: Vない語幹 + ずにはおかない",
      "- So sánh: ～に違いない (phỏng đoán, không nhấn tác động)",
    ],
    more: [
      "- Ví dụ 1: 彼の演技は人を感動させずにはおかない。(Diễn xuất chắc làm cảm động)",
      "- Ví dụ 2: その問題は議論を呼ばずにはおかない。(Chắc chắn gây tranh luận)",
      "- Nguồn: ず (phủ định cổ) + おかない (không thể bỏ qua)",
    ],
  },
  {
    front: "～たらどんなに…か",
    back: [
      "- Ý nghĩa: Nếu ... thì ... biết mấy (ước vọng)",
      "- Key point: Giả định không thực / nuối tiếc",
      "- Cấu trúc: もしVたらどんなにAdjか",
      "- So sánh: ～ばよかった (hối tiếc trực tiếp)",
    ],
    more: [
      "- Ví dụ 1: 休めたらどんなに楽か。(Nghỉ được thì thoải mái biết mấy)",
      "- Ví dụ 2: 会えたらどんなにうれしいか。(Gặp được thì vui biết bao)",
      "- Nguồn: どんなに～か = nhấn cường độ giả định",
    ],
  },
  {
    front: "～ぬ間に",
    back: [
      "- Ý nghĩa: Trong lúc chưa...",
      "- Key point: Trang trọng/cổ, nghĩa như ないうちに",
      "- Cấu trúc: Vない（ぬ）間に",
      "- So sánh: ～ないうちに (phổ biến hiện đại)",
    ],
    more: [
      "- Ví dụ 1: 日が暮れぬ間に帰る。(Về trước khi trời tối)",
      "- Ví dụ 2: 雨が降りぬ間に終える。(Xong trước khi mưa)",
      "- Nguồn: ぬ = phủ định cổ của ない",
    ],
  },
  {
    front: "～からとおもって",
    back: [
      "- Ý nghĩa: Vì nghĩ rằng... nên...",
      "- Key point: Quyết định dựa suy đoán có thể sai",
      "- Cấu trúc: S + からと思って",
      "- So sánh: ～と思い込んで (niềm tin sai rõ rệt)",
    ],
    more: [
      "- Ví dụ 1: 安いからと思って大量に買った。(Tưởng rẻ nên mua nhiều)",
      "- Ví dụ 2: 大丈夫だと思って連絡しなかった。(Nghĩ ổn nên không liên lạc)",
      "- Nguồn: と思って = ‘nghĩ là’ + nguyên nhân",
    ],
  },
  {
    front: "～かとおもえば...も",
    back: [
      "- Ý nghĩa: Nếu có ... thì cũng có ... (tương phản)",
      "- Key point: Hai trạng thái đối lập xen kẽ",
      "- Cấu trúc: ～かと思えば...も",
      "- So sánh: ～かと思うと (chuyển trạng thái nhanh, ít liệt kê đối lập loại)",
    ],
    more: [
      "- Ví dụ 1: 難しい問題かと思えば簡単なのもある。(Có câu khó cũng có câu dễ)",
      "- Ví dụ 2: 晴れかと思えば雨も降る。(Tưởng nắng mà cũng mưa)",
      "- Nguồn: かと思えば = nếu tưởng là thì lại...",
    ],
  },
  {
    front: "～といっても間違いない",
    back: [
      "- Ý nghĩa: Nói ... cũng không sai / gần như chắc chắn",
      "- Key point: Khẳng định mạnh độ đúng",
      "- Cấu trúc: Sと言っても間違いない",
      "- So sánh: ～と言っても (nhượng bộ khác nghĩa)",
    ],
    more: [
      "- Ví dụ 1: 彼は天才と言っても間違いない。(Gọi thiên tài không sai)",
      "- Ví dụ 2: これは成功と言っても間違いない。(Gọi là thành công không sai)",
      "- Nguồn: 間違いない = không sai chút nào",
    ],
  },
  {
    front: "～にいわせれば",
    back: [
      "- Ý nghĩa: Theo ý kiến của...",
      "- Key point: Quy gán quan điểm cho chủ thể",
      "- Cấu trúc: Nに言わせれば",
      "- So sánh: ～からすると (suy đoán từ căn cứ)",
    ],
    more: [
      "- Ví dụ 1: 彼に言わせれば簡単だ。(Theo anh ấy thì dễ)",
      "- Ví dụ 2: 専門家に言わせれば危険だ。(Theo chuyên gia thì nguy hiểm)",
      "- Nguồn: 言わせれば = ‘nếu để (ai) nói’",
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "- Ý nghĩa: Chính là... chứ còn gì nữa",
      "- Key point: Câu hỏi tu từ khẳng định tuyệt đối",
      "- Cấu trúc: Nでなくてなんだろう",
      "- So sánh: まさに～だ (khẳng định, không dạng hỏi)",
    ],
    more: [
      "- Ví dụ 1: これが愛でなくてなんだろう。(Nếu không phải tình yêu thì gì)",
      "- Ví dụ 2: 彼の行動は勇気でなくてなんだろう。(Đó chính là dũng khí)",
      "- Nguồn: なんだろう = tự hỏi, nhấn chắc chắn",
    ],
  },
  {
    front: "～にあっては",
    back: [
      "- Ý nghĩa: Riêng trong / trong hoàn cảnh...",
      "- Key point: Vai trò đặc thù trong bối cảnh đặc biệt",
      "- Cấu trúc: Nにあって（は）",
      "- So sánh: ～において (tại / trong, trung tính)",
    ],
    more: [
      "- Ví dụ 1: 非常時にあっては冷静さが重要だ。(Trong khẩn cấp bình tĩnh quan trọng)",
      "- Ví dụ 2: 変化期にあっては柔軟性が求められる。(Thời kỳ chuyển đổi cần linh hoạt)",
      "- Nguồn: あって = tồn tại trong điều kiện đó",
    ],
  },
  {
    front: "～というわけだ",
    back: [
      "- Ý nghĩa: Có nghĩa là... (kết luận)",
      "- Key point: Tóm tắt suy ra từ lý do trước",
      "- Cấu trúc: Sというわけだ",
      "- So sánh: ～わけではない (phủ định, khác chức năng)",
    ],
    more: [
      "- Ví dụ 1: 彼は来られないというわけだ。(Tức là anh ấy không tới)",
      "- Ví dụ 2: 時間がないというわけだ。(Có nghĩa là không có thời gian)",
      "- Nguồn: わけ = lý do / logic",
    ],
  },
  {
    front: "～ようで（は）",
    back: [
      "- Ý nghĩa: Nếu cứ (có vẻ / kiểu)... thì (kết quả xấu)",
      "- Key point: Phán đoán tiêu cực dựa hiện trạng",
      "- Cấu trúc: Vる / Adj / Nの + ようでは",
      "- So sánh: ～ようではなく (phủ định dạng đó)",
    ],
    more: [
      "- Ví dụ 1: そんな態度を取るようでは成功しない。(Thái độ đó sẽ không thành công)",
      "- Ví dụ 2: 練習しないようでは上達しない。(Không luyện sẽ không tiến bộ)",
      "- Nguồn: よう = dáng vẻ / tình trạng",
    ],
  },
  {
    front: "～あえて",
    back: [
      "- Ý nghĩa: Dám / cố ý chọn cách khó",
      "- Key point: Chấp nhận rủi ro đi ngược mong đợi",
      "- Cấu trúc: あえて + Vる / Vない",
      "- So sánh: わざわざ (nhấn công sức, không nhất thiết trái kỳ vọng)",
    ],
    more: [
      "- Ví dụ 1: あえて危険な道を選んだ。(Dám chọn đường nguy hiểm)",
      "- Ví dụ 2: あえて反対意見を述べる。(Dám nêu ý kiến phản đối)",
      "- Nguồn: あえて = cố tình dù biết rủi ro",
    ],
  },
  {
    front: "～が早いか",
    back: [
      "- Ý nghĩa: Vừa mới... thì lập tức...",
      "- Key point: Hành động sau xảy ra tức thì ngay sau trước",
      "- Cấu trúc: Vるが早いか",
      "- So sánh: ～かと思うと (nhanh + sắc thái bất ngờ)",
    ],
    more: [
      "- Ví dụ 1: 先生を見るが早いか静かになった。(Vừa thấy thầy là im)",
      "- Ví dụ 2: ベルが鳴るが早いか生徒が出た。(Chuông reo cái là ra)",
      "- Nguồn: 早いか = ‘vừa nhanh tới mức’ nối tiếp",
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
