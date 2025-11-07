import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "- Ý nghĩa: Nhân tiện (làm A nhân tiện làm B)",
      "・Đi dạo nhân tiện ghé cửa hàng",
      "・Leo núi nhân tiện chụp ảnh",
      "- Key point: Hành động chính kèm phụ, thường có di chuyển",
      "- Cấu trúc: N / Vます + がてら",
      "- So sánh: ～ついでに (không nhấn yếu tố di chuyển)",
    ],
    more: [
      "- Ví dụ 1: 散歩がてらコンビニに寄った。",
      "- Ví dụ 2: 写真を撮りがてら山を登った。",
      "- Nguồn: trợ từ cổ mang nghĩa kiêm nhiệm hành động",
    ],
  },
  {
    front: "～なり",
    back: [
      "- Ý nghĩa: Vừa mới... thì lập tức...",
      "・Vừa ngồi xuống đã ngủ",
      "・Vừa mở cửa thì trẻ lao ra",
      "- Key point: Hai hành động nối tiếp ngay tức khắc",
      "- Cấu trúc: V辞書形 + なり",
      "- So sánh: ～たとたん(に) (gần nghĩa, phổ biến hơn)",
    ],
    more: [
      "- Ví dụ 1: 席に着くなり寝てしまった。",
      "- Ví dụ 2: ドアを開けるなり子どもが飛び出した。",
      "- Nguồn: ‘なり’ dạng kết nối cổ chỉ trạng thái vừa xảy ra",
    ],
  },
  {
    front: "～手前",
    back: [
      "- Ý nghĩa: Vì đã/đang làm/nói nên phải giữ thể diện",
      "・Đã hứa nên phải đi",
      "・Đã nói trước mọi người nên không rút lui",
      "- Key point: Tự ràng buộc trách nhiệm / sĩ diện",
      "- Cấu trúc: Vた / Vている / Nの + 手前",
      "- So sánh: ～以上(は) trung tính hơn về trách nhiệm",
    ],
    more: [
      "- Ví dụ 1: 約束した手前、行かないわけにいかない。",
      "- Ví dụ 2: 人前で言った手前、後に引けない。",
      "- Nguồn: 手前 = ‘trước mặt (người khác)’ → ý thức thể diện",
    ],
  },
  {
    front: "～を限りに／～限りで",
    back: [
      "- Ý nghĩa: Kể từ / đến hết (thời điểm) thì dừng",
      "・Từ hôm nay bỏ đồ ngọt",
      "・Dịch vụ kết thúc hết tháng này",
      "- Key point: Tuyên bố chấm dứt hành vi/thói quen",
      "- Cấu trúc: 時間語 + を限りに / 限りで",
      "- So sánh: ～までに chỉ hạn chót, không nhấn dứt bỏ",
    ],
    more: [
      "- Ví dụ 1: 今日を限りに甘い物をやめる。",
      "- Ví dụ 2: 今月限りでサービス終了。",
      "- Nguồn: 限り = giới hạn cuối",
    ],
  },
  {
    front: "～限りだ",
    back: [
      "- Ý nghĩa: Rất / vô cùng (cực độ cảm xúc)",
      "・Vui biết bao",
      "・Tiếc vô cùng",
      "- Key point: Cảm xúc chủ quan cực mạnh",
      "- Cấu trúc: 感情形容詞 + 限りだ",
      "- So sánh: ～てしかたがない dùng rộng hơn",
    ],
    more: [
      "- Ví dụ 1: うれしい限りだ。",
      "- Ví dụ 2: 残念な限りだ。",
      "- Nguồn: 限り = mức giới hạn cao nhất",
    ],
  },
  {
    front: "～あっての",
    back: [
      "- Ý nghĩa: N2 có được là nhờ N1 (nền tảng)",
      "・Hạnh phúc có được nhờ gia đình",
      "・Quan hệ công việc nhờ sự tin cậy",
      "- Key point: N1 không có thì N2 không tồn tại",
      "- Cấu trúc: N1あってのN2",
      "- So sánh: ～なしでは nhấn thiếu; mẫu này nhấn ‘nhờ có’",
    ],
    more: [
      "- Ví dụ 1: 家族あっての私だ。",
      "- Ví dụ 2: 信頼あっての仕事関係。",
      "- Nguồn: あって (tồn tại) + の (liên kết)",
    ],
  },
  {
    front: "～だの～だの",
    back: [
      "- Ý nghĩa: Nào là... nào là... (phàn nàn)",
      "・Lúc kêu nóng lúc kêu lạnh",
      "・Toàn than lương thấp với bận rộn",
      "- Key point: Liệt kê tạp, sắc thái chê trách",
      "- Cấu trúc: N/V/A + だの + N/V/A + だの",
      "- So sánh: ～やら～やら trung tính hơn",
    ],
    more: [
      "- Ví dụ 1: 暑いだの寒いだのとうるさい。",
      "- Ví dụ 2: 忙しいだの給料が安いだの文句ばかりだ。",
      "- Nguồn: だの = liệt kê phi chính thức",
    ],
  },
  {
    front: "～であれ～であれ",
    back: [
      "- Ý nghĩa: Dù là... hay... đều (không phân biệt)",
      "・Nam hay nữ đều tham gia được",
      "・Dù tán thành hay phản đối vẫn phải phát biểu",
      "- Key point: Hai khả năng ngang nhau về kết luận",
      "- Cấu trúc: N1であれN2であれ",
      "- So sánh: ～ても / ～にせよ mềm hơn",
    ],
    more: [
      "- Ví dụ 1: 男であれ女であれ参加できる。",
      "- Ví dụ 2: 賛成であれ反対であれ意見を述べて。",
      "- Nguồn: であれ = dạng giả định cổ của である",
    ],
  },
  {
    front: "～どうにも…ない",
    back: [
      "- Ý nghĩa: Không cách nào / hết cách",
      "・Việc đó không xử lý nổi",
      "・Máy hỏng không sửa được",
      "- Key point: Bất lực hoàn toàn",
      "- Cấu trúc: どうにも + Vない / Adjくない",
      "- So sánh: なかなか～ない chỉ khó chứ chưa tuyệt đối",
    ],
    more: [
      "- Ví dụ 1: それはどうにもならない。",
      "- Ví dụ 2: 機械が壊れてどうにも直せない。",
      "- Nguồn: どうにも = bằng mọi cách cũng không",
    ],
  },
  {
    front: "～はする",
    back: [
      "- Ý nghĩa: Tuy có làm ... nhưng (kết quả không tương xứng)",
      "・Có học mà điểm không tăng",
      "・Có giúp nhưng chẳng hữu ích",
      "- Key point: Nhấn sự ‘có làm’ nhưng không đủ",
      "- Cấu trúc: Nはする（が／けど）",
      "- So sánh: ～には～が trung tính hơn",
    ],
    more: [
      "- Ví dụ 1: 勉強はするが成績が上がらない。",
      "- Ví dụ 2: 手伝いはしたが役に立たなかった。",
      "- Nguồn: Nhấn phần hành động tách biệt",
    ],
  },
  {
    front: "～ているばあいではない",
    back: [
      "- Ý nghĩa: Không phải lúc để...",
      "・Không phải lúc ngủ",
      "・Không phải lúc chơi",
      "- Key point: Cần ưu tiên việc khác cấp bách",
      "- Cấu trúc: Vている場合ではない",
      "- So sánh: ～ている暇はない nhấn thiếu thời gian",
    ],
    more: [
      "- Ví dụ 1: 寝ている場合ではない。",
      "- Ví dụ 2: 遊んでいる場合ではない。",
      "- Nguồn: 場合 = tình huống thích hợp",
    ],
  },
  {
    front: "～なら…なり",
    back: [
      "- Ý nghĩa: Nếu chọn kiểu đó thì làm cho tương xứng",
      "・Nghỉ thì phải có kế hoạch nghỉ",
      "・Làm rẻ thì cần cách phù hợp",
      "- Key point: Đòi hỏi nhất quán, không nửa vời",
      "- Cấu trúc: VるならVるなり / NならNなり",
      "- So sánh: ～なら～で biến thể nhẹ hơn",
    ],
    more: [
      "- Ví dụ 1: 休むなら休むなりの計画がいる。",
      "- Ví dụ 2: 安く済ませるなら済ませるなりの工夫。",
      "- Nguồn: ‘なり’ = dạng phù hợp tương ứng",
    ],
  },
  {
    front: "～わ…わ（で）",
    back: [
      "- Ý nghĩa: Nào là... nào là... (chất chồng)",
      "・Nào bận nào buồn ngủ rất mệt",
      "・Nào mưa nào lạnh không muốn ra ngoài",
      "- Key point: Liệt kê ngập nhiều yếu tố (khẩu ngữ)",
      "- Cấu trúc: VるわNだわで / AdjいわAdjいわで",
      "- So sánh: ～し～し trung tính hơn",
    ],
    more: [
      "- Ví dụ 1: 忙しいわ眠いわで大変だ。",
      "- Ví dụ 2: 雨だわ寒いわで出たくない。",
      "- Nguồn: わ = trợ từ cảm thán (nữ tính cổ)",
    ],
  },
  {
    front: "～をいいことに",
    back: [
      "- Ý nghĩa: Lợi dụng (điều thuận lợi / sơ hở)",
      "・Lợi dụng thầy vắng gây ồn",
      "・Lợi dụng lòng tốt để nhờ mãi",
      "- Key point: Hành vi mang sắc thái tiêu cực",
      "- Cấu trúc: N / Sのを + いいことに",
      "- So sánh: ～につけこんで nhấn chen vào điểm yếu",
    ],
    more: [
      "- Ví dụ 1: 先生がいないのをいいことに騒いだ。",
      "- Ví dụ 2: 彼の優しさをいいことに頼み続ける。",
      "- Nguồn: いいこと = điều có lợi (bị lạm dụng)",
    ],
  },
  {
    front: "～いざ～となると",
    back: [
      "- Ý nghĩa: Đến khi thật sự (xảy ra) thì khác",
      "・Đến lúc thi thì căng thẳng",
      "・Đến lúc xuất phát lại lo lắng",
      "- Key point: Thay đổi phản ứng trong tình huống thật",
      "- Cấu trúc: いざVるとなると / いざNとなれば",
      "- So sánh: いよいよ chỉ cận kề thời điểm",
    ],
    more: [
      "- Ví dụ 1: いざ本番となると緊張する。",
      "- Ví dụ 2: いざ出発となれば不安になる。",
      "- Nguồn: いざ = ‘nào, đến lúc’ (cổ)",
    ],
  },
  {
    front: "～との",
    back: [
      "- Ý nghĩa: Rằng... (tường thuật trang trọng)",
      "・Liên lạc nói rằng anh ấy không tới",
      "・Nhận thông báo nói ngày mai nghỉ",
      "- Key point: Văn viết, truyền đạt thông tin nhận được",
      "- Cấu trúc: S + との + N / S + とのことだ",
      "- So sánh: ～という phổ thông hơn",
    ],
    more: [
      "- Ví dụ 1: 彼が来ないとの連絡。",
      "- Ví dụ 2: 明日休業との通知。",
      "- Nguồn: と (trích dẫn) + の (danh hoá)",
    ],
  },
  {
    front: "～てもしかたがない",
    back: [
      "- Ý nghĩa: ... cũng đành / không còn cách",
      "・Thất bại cũng đành chịu",
      "・Giận cũng vô ích",
      "- Key point: Chấp nhận vì không đổi được kết quả",
      "- Cấu trúc: Vても / Adjくても + しかたがない",
      "- So sánh: ～てもしょうがない khẩu ngữ hơn",
    ],
    more: [
      "- Ví dụ 1: 失敗してもしかたがない。",
      "- Ví dụ 2: 怒ってもしかたがない。",
      "- Nguồn: 仕方がない = không có cách",
    ],
  },
  {
    front: "～ずにはおかない",
    back: [
      "- Ý nghĩa: Thế nào cũng / chắc chắn sẽ (gây tác động)",
      "・Diễn xuất chắc chắn làm người xem cảm động",
      "・Vấn đề chắc chắn gây tranh luận",
      "- Key point: Tính tất yếu tạo ảnh hưởng",
      "- Cấu trúc: Vない語幹 + ずにはおかない",
      "- So sánh: ～に違いない là phỏng đoán thuần",
    ],
    more: [
      "- Ví dụ 1: 彼の演技は人を感動させずにはおかない。",
      "- Ví dụ 2: その問題は議論を呼ばずにはおかない。",
      "- Nguồn: ず (phủ định cổ) + おかない (không thể bỏ qua)",
    ],
  },
  {
    front: "～たらどんなに…か",
    back: [
      "- Ý nghĩa: Nếu ... thì ... biết mấy (ước vọng)",
      "・Nghỉ được thì nhẹ biết bao",
      "・Gặp được thì vui biết bao",
      "- Key point: Giả định không thật / nuối tiếc",
      "- Cấu trúc: もしVたらどんなにAdj/Advか",
      "- So sánh: ～ばよかった nhấn hối tiếc trực tiếp",
    ],
    more: [
      "- Ví dụ 1: 休めたらどんなに楽か。",
      "- Ví dụ 2: 会えたらどんなにうれしいか。",
      "- Nguồn: どんなに～か = nhấn cường độ giả định",
    ],
  },
  {
    front: "～ぬ間に",
    back: [
      "- Ý nghĩa: Trong lúc chưa...",
      "・Tranh thủ về trước khi trời tối",
      "・Hoàn thành trước khi mưa",
      "- Key point: Trang trọng/cổ, tương đương ないうちに",
      "- Cấu trúc: Vない（ぬ）間に",
      "- So sánh: ～ないうちに phổ biến hiện đại",
    ],
    more: [
      "- Ví dụ 1: 日が暮れぬ間に帰る。",
      "- Ví dụ 2: 雨が降りぬ間に終える。",
      "- Nguồn: ぬ = phủ định cổ của ない",
    ],
  },
  {
    front: "～からとおもって",
    back: [
      "- Ý nghĩa: Vì nghĩ rằng... nên...",
      "・Nghĩ rẻ nên mua nhiều",
      "・Nghĩ ổn nên không liên lạc",
      "- Key point: Quyết định dựa suy đoán (có thể sai)",
      "- Cấu trúc: S + からと思って",
      "- So sánh: ～と思い込んで nhấn niềm tin sai rõ rệt",
    ],
    more: [
      "- Ví dụ 1: 安いからと思って大量に買った。",
      "- Ví dụ 2: 大丈夫だと思って連絡しなかった。",
      "- Nguồn: と思って = ‘nghĩ là’ + nguyên nhân",
    ],
  },
  {
    front: "～かとおもえば...も",
    back: [
      "- Ý nghĩa: Có ... cũng có ... (tương phản)",
      "・Có câu khó cũng có câu dễ",
      "・Tưởng nắng nhưng cũng có lúc mưa",
      "- Key point: Hai trạng thái đối lập xen kẽ",
      "- Cấu trúc: ～かと思えば...も",
      "- So sánh: ～かと思うと nhấn chuyển đổi nhanh (ít liệt kê)",
    ],
    more: [
      "- Ví dụ 1: 難しい問題かと思えば簡単なのもある。",
      "- Ví dụ 2: 晴れかと思えば雨も降る。",
      "- Nguồn: かと思えば = nếu tưởng là thì lại...",
    ],
  },
  {
    front: "～といっても間違いない",
    back: [
      "- Ý nghĩa: Nói ... cũng không sai / gần như chắc chắn",
      "・Gọi anh ấy là thiên tài không sai",
      "・Gọi đây là thành công không sai",
      "- Key point: Khẳng định mạnh độ chính xác",
      "- Cấu trúc: Sと言っても間違いない",
      "- So sánh: ～と言っても (nhượng bộ) khác nghĩa",
    ],
    more: [
      "- Ví dụ 1: 彼は天才と言っても間違いない。",
      "- Ví dụ 2: これは成功と言っても間違いない。",
      "- Nguồn: 間違いない = không sai chút nào",
    ],
  },
  {
    front: "～にいわせれば",
    back: [
      "- Ý nghĩa: Theo ý kiến của...",
      "・Theo anh ấy thì dễ",
      "・Theo chuyên gia thì nguy hiểm",
      "- Key point: Gắn quan điểm cho chủ thể được nêu",
      "- Cấu trúc: Nに言わせれば",
      "- So sánh: ～からすると mang tính suy đoán",
    ],
    more: [
      "- Ví dụ 1: 彼に言わせれば簡単だ。",
      "- Ví dụ 2: 専門家に言わせれば危険だ。",
      "- Nguồn: 言わせれば = ‘nếu để (ai) nói’",
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "- Ý nghĩa: Chính là ... chứ còn gì nữa",
      "・Nếu không phải tình yêu thì là gì",
      "・Hành động đó chính là dũng khí",
      "- Key point: Câu hỏi tu từ khẳng định tuyệt đối",
      "- Cấu trúc: Nでなくてなんだろう",
      "- So sánh: まさに～だ khẳng định nhưng không tu từ",
    ],
    more: [
      "- Ví dụ 1: これが愛でなくてなんだろう。",
      "- Ví dụ 2: 彼の行動は勇気でなくてなんだろう。",
      "- Nguồn: なんだろう = tự hỏi nhấn chắc chắn",
    ],
  },
  {
    front: "～にあっては",
    back: [
      "- Ý nghĩa: Riêng trong / trong hoàn cảnh...",
      "・Trong khẩn cấp cần bình tĩnh",
      "・Thời kỳ chuyển đổi cần linh hoạt",
      "- Key point: Nhấn tính đặc thù của bối cảnh",
      "- Cấu trúc: Nにあって（は）",
      "- So sánh: ～において trung tính về địa điểm/thời điểm",
    ],
    more: [
      "- Ví dụ 1: 非常時にあっては冷静さが重要だ。",
      "- Ví dụ 2: 変化期にあっては柔軟性が求められる。",
      "- Nguồn: あって = tồn tại trong điều kiện đó",
    ],
  },
  {
    front: "～というわけだ",
    back: [
      "- Ý nghĩa: Có nghĩa là... (kết luận)",
      "・Tức là anh ấy không tới",
      "・Tức là không có thời gian",
      "- Key point: Tóm tắt suy luận từ thông tin trước",
      "- Cấu trúc: Sというわけだ",
      "- So sánh: ～わけではない là phủ định",
    ],
    more: [
      "- Ví dụ 1: 彼は来られないというわけだ。",
      "- Ví dụ 2: 時間がないというわけだ。",
      "- Nguồn: わけ = lý do / logic",
    ],
  },
  {
    front: "～ようで（は）",
    back: [
      "- Ý nghĩa: Nếu cứ tình trạng như vậy thì (kết quả xấu)",
      "・Thái độ đó sẽ không thành công",
      "・Không luyện tập thì chẳng tiến bộ",
      "- Key point: Phán đoán tiêu cực dựa hiện trạng",
      "- Cấu trúc: Vる / Adj / Nの + ようでは",
      "- So sánh: ～ようではなく phủ định dạng đó",
    ],
    more: [
      "- Ví dụ 1: そんな態度を取るようでは成功しない。",
      "- Ví dụ 2: 練習しないようでは上達しない。",
      "- Nguồn: よう = dáng vẻ / tình trạng",
    ],
  },
  {
    front: "～あえて",
    back: [
      "- Ý nghĩa: Dám / mạnh dạn làm điều khó hoặc trái mong đợi",
      "・Dám chọn đường nguy hiểm",
      "・Dám nêu ý kiến phản đối",
      "- Key point: Cố ý chọn rủi ro / đối nghịch chuẩn mực",
      "- Cấu trúc: あえて + Vる / Vない",
      "- So sánh: わざわざ nhấn công sức không nhất thiết trái kỳ vọng",
    ],
    more: [
      "- Ví dụ 1: あえて危険な道を選んだ。",
      "- Ví dụ 2: あえて反対意見を述べる。",
      "- Nguồn: あえて = cố tình dù biết rủi ro",
    ],
  },
  {
    front: "～が早いか",
    back: [
      "- Ý nghĩa: Vừa mới... thì lập tức...",
      "・Vừa thấy thầy là im",
      "・Chuông reo cái là ra ngay",
      "- Key point: Hành động sau xảy ra ngay tức thì",
      "- Cấu trúc: Vるが早いか",
      "- So sánh: ～かと思うと có sắc thái bất ngờ hơn",
    ],
    more: [
      "- Ví dụ 1: 先生を見るが早いか静かになった。",
      "- Ví dụ 2: ベルが鳴るが早いか生徒が出た。",
      "- Nguồn: 早いか = mức nhanh nối tiếp",
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
