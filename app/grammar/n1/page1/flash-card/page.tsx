import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "- Nhân tiện (làm A nhân tiện làm B)",
      "- Cấu trúc: N / Vます + がてら",
      "- 散歩がてらコンビニに寄った。",
      "- Dùng với hành động có kèm di chuyển / hành động chính kèm phụ",
    ],
  },
  {
    front: "～なり",
    back: [
      "- Vừa mới... thì đã (ngay lập tức)",
      "- Cấu trúc: V辞書形 + なり",
      "- 彼は席に着くなり寝てしまった。",
      "- Nhấn tính tức thời; chủ ngữ thường cùng người",
    ],
  },
  {
    front: "～手前（てまえ）",
    back: [
      "- Chính vì (đã làm/đã nói) nên phải...",
      "- Cấu trúc: Vた / Vている / Nの + 手前",
      "- 約束した手前、行かないわけにはいかない。",
      "- Mang sắc thái trách nhiệm / sĩ diện cá nhân",
    ],
  },
  {
    front: "～を限りに／～限りで",
    back: [
      "- Kể từ hết / đến hết (chấm dứt từ thời điểm)",
      "- Cấu trúc: 時間・期間 + を限りに / 限りで",
      "- 今日を限りに甘い物をやめる。",
      "- Thường tuyên bố kết thúc thói quen / hoạt động",
    ],
  },
  {
    front: "～限りだ",
    back: [
      "- Cảm thấy rất... / ... biết bao",
      "- Cấu trúc: 感情形容詞 + 限りだ",
      "- うれしい限りだ。",
      "- Chỉ dùng với cảm xúc chủ quan của người nói",
    ],
  },
  {
    front: "～あっての",
    back: [
      "- N2 tồn tại là nhờ N1",
      "- Cấu trúc: N1あってのN2",
      "- 家族あっての幸せだ。",
      "- N1 là nền tảng cốt lõi; không dùng với điều tầm thường",
    ],
  },
  {
    front: "～だの～だの",
    back: [
      "- Nào là... nào là... (liệt kê phàn nàn)",
      "- Cấu trúc: N/V/A + だの + N/V/A + だの",
      "- 彼は暑いだの寒いだのと文句ばかり言う。",
      "- Thường mang sắc thái phê phán, liệt kê lộn xộn",
    ],
  },
  {
    front: "～であれ～であれ",
    back: [
      "- Cho dù... hay... đều",
      "- Cấu trúc: N1であれN2であれ",
      "- 男であれ女であれ参加できる。",
      "- Văn viết / trang trọng, nhấn tính không phân biệt",
    ],
  },
  {
    front: "～どうにも…ない",
    back: [
      "- Không cách nào...",
      "- Cấu trúc: どうにも + Vない / Adjくない",
      "- この問題はどうにもならない。",
      "- Biểu thị sự bất lực, không giải pháp",
    ],
  },
  {
    front: "～はする",
    back: [
      "- Tuy có... nhưng / có mỗi ...",
      "- Cấu trúc: Nはする（が／けど）",
      "- 勉強はするが成績が上がらない。",
      "- Nhấn sự không đủ / kết quả không tương xứng",
    ],
  },
  {
    front: "～ているばあいではない",
    back: [
      "- Không phải lúc để...",
      "- Cấu trúc: Vている場合ではない",
      "- 寝ている場合ではない。",
      "- Thúc giục hành động khác cấp bách hơn",
    ],
  },
  {
    front: "～なら…なり",
    back: [
      "- Nếu ... thì (làm) theo cách tương xứng",
      "- Cấu trúc: VるならVるなり / NならNなり",
      "- 休むなら休むなり体を治しなさい。",
      "- Yêu cầu nhất quán, không nửa vời",
    ],
  },
  {
    front: "～わ…わ（で）",
    back: [
      "- Nào là... nào là... (quá nhiều)",
      "- Cấu trúc: VるわNだわで",
      "- 忙しいわ眠いわで大変だ。",
      "- Khẩu ngữ (thường nữ), diễn đạt trạng thái ngập",
    ],
  },
  {
    front: "～をいいことに",
    back: [
      "- Lợi dụng (điều thuận lợi)",
      "- Cấu trúc: N / Sのを + いいことに",
      "- 先生がいないのをいいことに騒いだ。",
      "- Hành vi tiêu cực, lợi dụng sơ hở",
    ],
  },
  {
    front: "～いざ～となると",
    back: [
      "- Đến khi thật sự... thì",
      "- Cấu trúc: いざVるとなると / いざNとなれば",
      "- いざ本番となると緊張する。",
      "- Thay đổi cảm xúc/hành vi khi vào tình huống thật",
    ],
  },
  {
    front: "～との",
    back: [
      "- Rằng... (truyền đạt nội dung)",
      "- Cấu trúc: S + との + N / S + とのことだ",
      "- 彼が来ないとの連絡があった。",
      "- Văn viết / tường thuật thông tin nhận được",
    ],
  },
  {
    front: "～てもしかたがない",
    back: [
      "- ... cũng đành / không còn cách",
      "- Cấu trúc: Vても / Adjくても + しかたがない",
      "- 失敗してもしかたがない。",
      "- Chấp nhận, không thể thay đổi",
    ],
  },
  {
    front: "～ずにはおかない",
    back: [
      "- Thế nào cũng / chắc chắn sẽ",
      "- Cấu trúc: Vない語幹 + ずにはおかない",
      "- 彼の演技は人を感動させずにはおかない。",
      "- Tác động tự nhiên khó tránh khỏi",
    ],
  },
  {
    front: "～たらどんなに…か",
    back: [
      "- Nếu ... thì ... biết bao",
      "- Cấu trúc: もしVたらどんなにAdjか",
      "- 休めたらどんなに楽か。",
      "- Mong ước giả định, nuối tiếc",
    ],
  },
  {
    front: "～ぬ間に",
    back: [
      "- Trong lúc chưa...",
      "- Cấu trúc: Vない（ぬ）間に",
      "- 日が暮れぬ間に帰ろう。",
      "- Văn trang trọng / cổ; nghĩa như ないうちに",
    ],
  },
  {
    front: "～からとおもって",
    back: [
      "- Vì nghĩ rằng ... nên ...",
      "- Cấu trúc: S + からと思って",
      "- 安いからと思って大量に買った。",
      "- Có thể dẫn tới sai lầm do suy đoán",
    ],
  },
  {
    front: "～かとおもえば...も",
    back: [
      "- Nếu có ... thì cũng có ...",
      "- Cấu trúc: ～かと思えば...（も）",
      "- 難しい問題かと思えば簡単なのもある。",
      "- Tương phản hai hiện tượng",
    ],
  },
  {
    front: "～といっても間違いない",
    back: [
      "- Nói ... cũng không sai",
      "- Cấu trúc: Sと言っても間違いない",
      "- 彼は天才と言っても間違いない。",
      "- Khẳng định mạnh, gần như chắc chắn",
    ],
  },
  {
    front: "～にいわせれば",
    back: [
      "- Theo ý kiến của ...",
      "- Cấu trúc: Nに言わせれば",
      "- 彼に言わせれば簡単だ。",
      "- Đưa quan điểm chủ quan của đối tượng",
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "- Chính là... chứ gì nữa",
      "- Cấu trúc: Nでなくてなんだろう",
      "- これが愛でなくてなんだろう。",
      "- Câu hỏi tu từ khẳng định mạnh",
    ],
  },
  {
    front: "～にあっては",
    back: [
      "- Riêng trong / trong hoàn cảnh...",
      "- Cấu trúc: Nにあって（は）",
      "- 非常時にあっては冷静さが重要だ。",
      "- Văn viết, nhấn vai trò trong bối cảnh đặc thù",
    ],
  },
  {
    front: "～というわけだ",
    back: [
      "- Có nghĩa là...",
      "- Cấu trúc: Sというわけだ",
      "- 彼は来ないというわけだ。",
      "- Kết luận / tóm lược lý do",
    ],
  },
  {
    front: "～ようで（は）",
    back: [
      "- Nếu cứ (có vẻ / kiểu)... thì (kết quả xấu)",
      "- Cấu trúc: Vる / Adj / Nの + ようでは",
      "- そんな態度を取るようでは成功しない。",
      "- Phán đoán tiêu cực về hiện trạng",
    ],
  },
  {
    front: "～あえて",
    back: [
      "- Dám / mạnh dạn...",
      "- Cấu trúc: あえて + Vる / Vない",
      "- あえて危険な道を選んだ。",
      "- Hành động trái mong đợi / chấp nhận rủi ro",
    ],
  },
  {
    front: "～が早いか（がはやいか）",
    back: [
      "- Vừa mới... thì lập tức...",
      "- Cấu trúc: Vるが早いか",
      "- ベルが鳴るが早いか生徒が教室を出た。",
      "- Nhấn sự nối tiếp ngay tức thì, thường văn viết",
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
