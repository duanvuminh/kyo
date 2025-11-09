import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～がてら",
    back: [
      "- Ý nghĩa: Nhân tiện (làm A nhân tiện làm B)",
      "・Ví dụ: Đi dạo nhân tiện ghé cửa hàng tiện lợi.",
      "- Key point: Hành động chính kèm hành động phụ, thường có yếu tố di chuyển.",
      "- Cấu trúc: N / Vます + がてら",
      "- So sánh: ～ついでに (không nhấn yếu tố di chuyển), ～ながら (đồng thời)",
      "- Ngữ cảnh: Thường dùng trong văn nói, mang tính cá nhân.",
    ],
    more: [
      "- Ví dụ",
      "・散歩がてらコンビニに寄った",
      "・写真を撮りがてら山を登った",
    ],
    questions: [
      {
        id: "1-1",
        content: "気分転換___、近くの公園まで歩いて行った",
        answers: ["ながら", "につれて", "がてら", "ついでに"],
        correctAnswer: 2,
      },
      {
        id: "1-2",
        content: "友人の見舞い___、美術館にも立ち寄った",
        answers: ["がてら", "のせいで", "をめぐって", "のところに"],
        correctAnswer: 0,
      },
      {
        id: "1-3",
        content: "故郷のニュースを聞く___、昔のことを思い出す",
        answers: ["ながら", "つつ", "につけ", "がてら"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～なり",
    back: [
      "- Ý nghĩa: Ngay sau khi (vừa A thì ngay lập tức B xảy ra)",
      "・Ví dụ: Anh ấy vừa nhận điện thoại xong thì lập tức đứng dậy và ra khỏi phòng.",
      "- Key point: Hành động B là bất ngờ, ngoài ý muốn và xảy ra ngay sau A. Chỉ dùng cho ngôi thứ ba.",
      "- Cấu trúc: Vる + なり",
      "- So sánh: ～やいなや / ～が早いか (dùng cho hành động mang tính khách quan hơn)",
      "- Ngữ cảnh: Văn viết hoặc nói trang trọng, mang tính kịch tính.",
    ],
    more: [
      "- Ví dụ",
      "・彼は電話を受けるなり、席を立って部屋を出ていった",
      "・子供は母親の顔を見るなり、わっと泣き出した",
    ],
    questions: [
      {
        id: "2-1",
        content: "彼は電話を受ける___席を立って部屋を出ていった",
        answers: ["とたんに", "わけではない", "なり", "かぎり"],
        correctAnswer: 2,
      },
      {
        id: "2-2",
        content: "終業のベルを聞く___、学生たちは教室から飛び出していった",
        answers: ["が早いか", "なり", "わけにはいかない", "において"],
        correctAnswer: 0,
      },
      {
        id: "2-3",
        content: "子供は母親の顔を見る___、わっと泣き出した",
        answers: ["をものともせず", "なり", "やいなや", "が早いか"],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～手前（てまえ）",
    back: [
      "- Ý nghĩa: Vì đứng trước/vì đã hứa/vì thể diện (nên phải làm gì)",
      "・Ví dụ: Vì đã hứa với con trai, nên dù bận tôi cũng phải đi.",
      "- Key point: Hành động tiếp theo là bắt buộc phải làm vì giữ thể diện hoặc lời đã hứa.",
      "- Cấu trúc: Vる / Nの + 手前",
      "- So sánh: ～以上は (cũng là 'một khi đã', nhưng 手前 nhấn mạnh yếu tố thể diện)",
      "- Ngữ cảnh: Văn nói và viết, trang trọng, dùng để biện minh hoặc giải thích.",
    ],
    more: [
      "- Ví dụ",
      "・息子と遊園地へ行く約束をした手前、忙しくても行かないわけにはいかない",
      "・合格すると宣言した手前、勉強しないわけにはいかない",
    ],
    questions: [
      {
        id: "3-1",
        content: "合格すると宣言した___、勉強しないわけにはいかない",
        answers: ["以上は", "限りで", "手前", "かぎりだ"],
        correctAnswer: 0,
      },
      {
        id: "3-2",
        content: "引き受けると引き受けた___、途中であきらめるわけにはいかない",
        answers: ["にもかかわらず", "手前", "につけ", "というのに"],
        correctAnswer: 1,
      },
      {
        id: "3-3",
        content: "周りの人たちの前で言った___、実行するしかない",
        answers: ["にあたって", "をいいことに", "の限り", "上は"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～を限りに／限りで",
    back: [
      "- Ý nghĩa: Hết/Cho đến hết (dùng để tuyên bố chấm dứt một điều gì đó)",
      "・Ví dụ: Với ngày hôm nay là hết, tôi sẽ nghỉ việc.",
      "- Key point: Luôn đi kèm với danh từ chỉ thời gian và hành động sau là chấm dứt hoàn toàn.",
      "- Cấu trúc: N + を限りに / 限りで",
      "- So sánh: ～をもって (cũng là 'kết thúc', nhưng をもって trang trọng hơn, dùng cho sự kiện công cộng)",
      "- Ngữ cảnh: Trang trọng, dùng trong thông báo chính thức.",
    ],
    more: [
      "- Ví dụ",
      "・今日を限りに、会社を辞めさせていただきます",
      "・この度の講義を限りで、もう参加しません",
    ],
    questions: [
      {
        id: "4-1",
        content: "今シーズン___、このチームは解散することが決定した",
        answers: ["を限りに", "をもって", "かぎりだ", "限り"],
        correctAnswer: 0,
      },
      {
        id: "4-2",
        content: "本年度___、この制度を廃止いたします",
        answers: ["に限って", "をもって", "に限らず", "にかぎりでは"],
        correctAnswer: 1,
      },
      {
        id: "4-3",
        content: "私自身の知識の___、この件についてお答えできません",
        answers: ["を限りに", "をもって", "限りで", "限りだ"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～限りだ",
    back: [
      "- Ý nghĩa: Cực kỳ/Vô cùng (thể hiện cảm xúc mạnh mẽ của người nói)",
      "・Ví dụ: Thấy anh ấy thành công, tôi vô cùng vui mừng.",
      "- Key point: Luôn đi kèm với tính từ chỉ cảm xúc (vui, buồn, hối hận...) và là cách nói trang trọng.",
      "- Cấu trúc: Vる / Aい / Naである + 限りだ",
      "- So sánh: ～というものだ (thật là.../mang tính khách quan hơn)",
      "- Ngữ cảnh: Văn viết, trang trọng.",
    ],
    more: [
      "- Ví dụ",
      "・彼の成功を見て、喜ばしい限りだ",
      "・自分の軽率な行動を反省し、悔しい限りだ",
    ],
    questions: [
      {
        id: "5-1",
        content: "彼のような若者が国を担うことは、心強い___",
        answers: ["限りだ", "ばかりだ", "一方だ", "ものだ"],
        correctAnswer: 0,
      },
      {
        id: "5-2",
        content: "あの時の自分の行動を思い出すと、情けない___",
        answers: ["限りだ", "限りで", "かぎり", "を限りに"],
        correctAnswer: 0,
      },
      {
        id: "5-3",
        content: "皆様の温かいお心遣いに、感謝の___",
        answers: ["限り", "限りだ", "を限りに", "限りで"],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～あっての",
    back: [
      "- Ý nghĩa: Chính vì/Nhờ có (Nhấn mạnh A là điều kiện tiên quyết để có B)",
      "・Ví dụ: Thành công ngày hôm nay chính là nhờ có sự hỗ trợ của mọi người.",
      "- Key point: A là điều kiện quan trọng nhất, không có A thì không có B. Thường là các danh từ trừu tượng.",
      "- Cấu trúc: N + あっての + N",
      "- So sánh: ～のおかげで (cũng là 'nhờ có', nhưng あっての nhấn mạnh mối quan hệ phụ thuộc mạnh mẽ hơn)",
      "- Ngữ cảnh: Văn viết trang trọng hoặc văn nói nhấn mạnh.",
    ],
    more: [
      "- Ví dụ",
      "・今日の成功は、皆さんの協力あってのものです",
      "・健康あっての仕事だ。無理をして体を壊してはいけない",
    ],
    questions: [
      {
        id: "6-1",
        content: "どんなビジネスも、顧客の信頼___成功がある",
        answers: ["あっての", "おかげで", "ならではの", "ならでは"],
        correctAnswer: 0,
      },
      {
        id: "6-2",
        content: "日々の努力___、今日の素晴らしい結果がある",
        answers: ["にとっての", "のおかげ", "あっての", "をめぐっての"],
        correctAnswer: 2,
      },
      {
        id: "6-3",
        content: "信頼___友情だ。嘘をついてはいけない",
        answers: ["にあって", "にして", "にあらず", "あっての"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～だの～だの",
    back: [
      "- Ý nghĩa: Nào là... nào là... (Liệt kê các ví dụ tiêu cực, thể hiện sự chán nản/bất mãn)",
      "・Ví dụ: Anh ấy lúc nào cũng than phiền nào là tiền không đủ, nào là công việc vất vả.",
      "- Key point: Liệt kê các ví dụ tiêu cực hoặc không quan trọng, bày tỏ sự khó chịu, chán ghét của người nói.",
      "- Cấu trúc: N / Vる / Aい / Na + だの + ...",
      "- So sánh: ～やら～やら (cũng là liệt kê, nhưng không mang ý nghĩa tiêu cực mạnh mẽ như だのだの)",
      "- Ngữ cảnh: Văn nói suồng sã, mang tính phàn nàn, tiêu cực.",
    ],
    more: [
      "- Ví dụ",
      "・彼はいつも給料が安いだの、仕事がつらいだのと愚痴ばかり言っている",
      "・彼女の暑いだの寒いだのという文句はもう聞き飽きた",
    ],
    questions: [
      {
        id: "7-1",
        content: "新しい上司は、あれをしろ___、これをしろ___と命令ばかりだ",
        answers: ["やら/やら", "だの/だの", "につけ/につけ", "なら/なり"],
        correctAnswer: 1,
      },
      {
        id: "7-2",
        content: "彼は、店員の態度が悪い___、料理がまずい___と、文句ばかり言う",
        answers: ["といい/といい", "にしろ/にしろ", "なり/なり", "だの/だの"],
        correctAnswer: 3,
      },
      {
        id: "7-3",
        content: "うるさい___、遅い___と、文句ばかり言われた",
        answers: ["わ/わ", "にかぎり", "だの/だの", "をいいことに"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～であれ～であれ",
    back: [
      "- Ý nghĩa: Dù là A hay là B (thì kết quả vẫn không thay đổi, mang tính bao hàm)",
      "・Ví dụ: Dù là đàn ông hay phụ nữ thì lao động chân chính đều phải được tôn trọng.",
      "- Key point: Liệt kê hai trường hợp tương phản hoặc đối lập, kết quả sau đó là luôn luôn đúng với cả hai trường hợp.",
      "- Cấu trúc: N / Vる / Aい / Na + であれ + ...",
      "- So sánh: ～にしろ～にしろ (cũng là 'dù là/hay là', nhưng であれであれ trang trọng và bao quát hơn)",
      "- Ngữ cảnh: Văn viết trang trọng.",
    ],
    more: [
      "- Ví dụ",
      "・男であれ女であれ、正当な労働は尊重されるべきだ",
      "・勝つであれ負けるであれ、初めの気持ちを忘れてはいけない",
    ],
    questions: [
      {
        id: "8-1",
        content: "男___女___、正当な労働は尊重されるべきだ",
        answers: [
          "にしても/にしても",
          "であれ/であれ",
          "といい/といい",
          "ばかりか/も",
        ],
        correctAnswer: 1,
      },
      {
        id: "8-2",
        content: "勝つ___負ける___、初めの気持ちを忘れてはいけない",
        answers: ["であれ/であれ", "において/は", "はする/が", "につけ/につけ"],
        correctAnswer: 0,
      },
      {
        id: "8-3",
        content: "晴天___雨天___、明日の遠足は決行する",
        answers: [
          "にしても/にしても",
          "なり/なり",
          "を問わず",
          "であれ/であれ",
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～どうにも…ない",
    back: [
      "- Ý nghĩa: Hoàn toàn không thể (dù cố gắng thế nào cũng không thể, thường đi với V thể khả năng)",
      "・Ví dụ: Tôi hoàn toàn không thể tìm thấy chìa khóa đã đánh mất.",
      "- Key point: Đi kèm với động từ thể khả năng và phủ định để nhấn mạnh sự hoàn toàn bất lực.",
      "- Cấu trúc: どうにも + V (thể khả năng) ない",
      "- So sánh: どうしても...ない (nhấn mạnh sự bất lực mạnh mẽ hơn)",
      "- Ngữ cảnh: Văn nói suồng sã, diễn tả sự bất lực cá nhân.",
    ],
    more: [
      "- Ví dụ",
      "・いくら探しても、なくした鍵はどうにも見つからない",
      "・こんなに病気が重くては、どうにも動けない",
    ],
    questions: [
      {
        id: "9-1",
        content: "どんなに考えても、あの時の失敗の理由は___理解でき___",
        answers: [
          "どうしても/ない",
          "どんなに/ない",
          "いくら/ない",
          "どうにも/ない",
        ],
        correctAnswer: 3,
      },
      {
        id: "9-2",
        content: "相手が強すぎて、私たちはもう___抵抗でき___",
        answers: [
          "なんとか/ない",
          "とにかく/ない",
          "どうにも/ない",
          "どうにか/ない",
        ],
        correctAnswer: 2,
      },
      {
        id: "9-3",
        content: "状況が複雑すぎて、___解決でき___",
        answers: [
          "どうしても/ない",
          "いくら/ない",
          "どうにも/ない",
          "いかに/ない",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～はする",
    back: [
      "- Ý nghĩa: Có làm/Có xảy ra (Nhấn mạnh hành động hoặc sự thật, thường ngụ ý 'nhưng mà', mang tính nhượng bộ)",
      "・Ví dụ: Món ăn này có ngon, nhưng mà giá hơi đắt.",
      "- Key point: Đặt は giữa Vます và する để nhấn mạnh sự thật của hành động, nhưng luôn đi kèm với vế sau mang tính đối lập/nhượng bộ.",
      "- Cấu trúc: Vます + は + する",
      "- So sánh: VるにはVる (cũng là 'có... thì có...', nhưng はする nhấn mạnh yếu tố đối lập/hối tiếc sau đó hơn)",
      "- Ngữ cảnh: Văn nói, dùng để nhượng bộ và đối lập (Có A nhưng B).",
    ],
    more: [
      "- Ví dụ",
      "・この料理は美味しいはするが、値段が少し高い",
      "・来るとは言ったはするが、まだ確実ではないようだ",
    ],
    questions: [
      {
        id: "10-1",
        content: "このシステムは便利___が、操作が複雑だ",
        answers: ["ではある", "はする", "にしても", "こそする"],
        correctAnswer: 1,
      },
      {
        id: "10-2",
        content: "謝罪___が、彼の言葉には誠意が感じられなかった",
        answers: ["とはいえ", "にしても", "といい", "はするが"],
        correctAnswer: 3,
      },
      {
        id: "10-3",
        content: "努力はした___が、残念ながら結果は出なかった",
        answers: ["はする", "こそする", "ではある", "ならする"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "～ているばあいではない",
    back: [
      "- Ý nghĩa: Không phải lúc để.../Không thể... được (Nhấn mạnh tình huống khẩn cấp, không cho phép làm điều đó)",
      "・Ví dụ: Đây không phải là lúc để nghỉ ngơi.",
      "- Key point: Nhấn mạnh sự không phù hợp của một hành động trong một tình huống nghiêm trọng, cần phải làm việc khác ngay lập Fowler.",
      "- Cấu trúc: Vて いる / N + の + ばあいではない",
      "- So sánh: ～どころではない (cũng là 'không phải lúc', nhưng ばあいではない nhấn mạnh sự cần thiết phải hành động)",
      "- Ngữ cảnh: Văn nói và viết, dùng để nhấn mạnh tình huống khẩn cấp, cần hành động.",
    ],
    more: [
      "- Ví dụ",
      "・休んでいるばあいではない。すぐに出発しなければならない",
      "・こんなに危険な状況で、心配しているばあいではない、早く行動しろ",
    ],
    questions: [
      {
        id: "11-1",
        content: "試験前夜に、友達とゲーム___。徹夜で勉強しなきゃいけない",
        answers: [
          "ところではない",
          "わけではない",
          "ばあいではない",
          "どころではない",
        ],
        correctAnswer: 2,
      },
      {
        id: "11-2",
        content: "試験まであと一週間だ。遊んでいる___",
        answers: [
          "わけではない",
          "どころではない",
          "ことではない",
          "ばあいではない",
        ],
        correctAnswer: 3,
      },
      {
        id: "11-3",
        content: "会社が倒産の危機だ。新しい企画について議論して___",
        answers: ["どころか", "というわけだ", "ばあいではない", "によって"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～なら…なり",
    back: [
      "- Ý nghĩa: Nếu là A thì hãy làm tương ứng với A/Trong phạm vi có thể (thể hiện sự chấp nhận điều kiện hiện tại và hành động trong phạm vi đó)",
      "・Ví dụ: Nếu không có tiền thì hãy làm theo cách không có tiền",
      "- Key point: Hành động B phải là hành động tương xứng hoặc hợp lý với điều kiện A (dù A có thể là tiêu cực/kém lý tưởng).",
      "- Cấu trúc: N / Vる / Aい + なら + N / Vる / Aい + なりに/なり",
      "- So sánh: VるなりVるなり (là 'hoặc là làm V1 hoặc là làm V2', chỉ sự lựa chọn)",
      "- Ngữ cảnh: Văn nói, dùng để thể hiện sự chấp nhận điều kiện và hành động tương xứng.",
    ],
    more: [
      "- Ví dụ",
      "・金がないなら、金がないなりのやり方があるはずだ",
      "・気に入らないなら、気に入らないなりにそう言ってくれ",
    ],
    questions: [
      {
        id: "12-1",
        content: "完璧な道具がない___、持っている道具___工夫して使いなさい",
        answers: ["ならば/なりに", "なら/ならば", "なら/なり", "なら/ならば"],
        correctAnswer: 2,
      },
      {
        id: "12-2",
        content: "わからない___、わからない___に先生に聞くべきだ",
        answers: ["なり/なり", "ならば/ならば", "にしろ/にしろ", "なら/なり"],
        correctAnswer: 3,
      },
      {
        id: "12-3",
        content: "できない___、できない___に努力すればいい",
        answers: ["ならば/なりに", "なり/なり", "にしろ/にしろ", "なら/なり"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～わ...わ（で）",
    back: [
      "- Ý nghĩa: Nào là... nào là... (Liệt kê nhiều sự việc, thường là tiêu cực, dẫn đến kết quả tệ hại/khó khăn)",
      "・Ví dụ: Nào là bị cảm, nào là bị mất ví, tôi đã có một ngày thật tồi tệ.",
      "- Key point: Liệt kê tối thiểu hai sự kiện tiêu cực/khó khăn xảy ra liên tiếp, vế sau là kết quả tất yếu.",
      "- Cấu trúc: Vる / Aい / N / Na + わ + ...",
      "- So sánh: ～だの～だの (cũng là tiêu cực, nhưng わ…わ nhấn mạnh sự chồng chất của nhiều vấn đề)",
      "- Ngữ cảnh: Văn nói và viết, diễn tả sự chồng chất của nhiều vấn đề, mang tính tiêu cực.",
    ],
    more: [
      "- Ví dụ",
      "・風邪をひくわ、財布をなくすわ（で）、ひどい一日だった",
      "・義母は病気になるわ、子供は学費を要求するわ（で）、私は大変だ",
    ],
    questions: [
      {
        id: "13-1",
        content: "荷物は重い___、道は混んでいる___（で）、旅行は大変だった",
        answers: ["わ/わ", "だの/だの", "にしたところで", "にしろ/にしろ"],
        correctAnswer: 0,
      },
      {
        id: "13-2",
        content: "仕事の失敗はする___、彼女に振られる___（で）、人生最悪の年だ",
        answers: ["にしても/にしても", "だの/だの", "わ/わ", "なり/なり"],
        correctAnswer: 2,
      },
      {
        id: "13-3",
        content: "渋滞がひどい___、道に迷う___で、約束の時間に遅れてしまった",
        answers: ["やら/やら", "だの/だの", "にしろ/にしろ", "わ/わ"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～をいいことに",
    back: [
      "- Ý nghĩa: Lợi dụng... (Lợi dụng một điều kiện/sự vắng mặt để làm điều không tốt)",
      "・Ví dụ: Cô ấy lợi dụng việc thầy giáo không có ở đây để lười biếng",
      "- Key point: Lợi dụng một trạng thái thuận lợi (thường là tiêu cực hoặc sự vắng mặt) để thực hiện một hành vi tiêu cực/ích kỷ.",
      "- Cấu trúc: Vる / Vた / Aい / Na / N + の/こと + をいいことに",
      "- So sánh: ～につけこんで (ám chỉ việc lợi dụng điểm yếu/sơ hở)",
      "- Ngữ cảnh: Văn nói, mang tính tiêu cực, dùng để chỉ trích hành vi lợi dụng.",
    ],
    more: [
      "- Ví dụ",
      "・先生がいないのをいいことに、彼女は怠けている",
      "・皆が親切にしてくれるのをいいことに、彼はわがままなことをする",
    ],
    questions: [
      {
        id: "14-1",
        content: "上司が出張で留守な___、彼は仕事中にゲームをしていた",
        answers: ["につれて", "のをいいことに", "をめぐって", "の限り"],
        correctAnswer: 1,
      },
      {
        id: "14-2",
        content: "母親が何も言わないのを___、子供はやりたい放題だ",
        answers: ["につけ", "にしても", "のをいいことに", "にあっては"],
        correctAnswer: 2,
      },
      {
        id: "14-3",
        content: "親が病気で家にいるという___、彼はさっそくお金をせびりに来た",
        answers: ["のをいいことに", "を限りに", "にしろ", "につけこんで"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～いざ～となると／～となれば／～となったら",
    back: [
      "- Ý nghĩa: Cứ hễ đến lúc/Khi cần thiết (sẽ có sự thay đổi đột ngột về thái độ, hành động, hoặc sự thật được làm rõ)",
      "・Ví dụ: Mặc dù nói là biết, nhưng cứ hễ đến lúc làm thì lại hoàn toàn không thể",
      "- Key point: Diễn tả sự thay đổi đột ngột hoặc tiết lộ sự thật khi điều kiện đặc biệt/thời điểm quyết định đến.",
      "- Cấu trúc: いざ + N / Vる + となると/となれば/となったら",
      "- So sánh: となると (trang trọng hơn), となれば (nhấn mạnh điều kiện), となったら (thông thường hơn)",
      "- Ngữ cảnh: Văn nói và viết, dùng để nhấn mạnh sự thay đổi khi đến thời điểm quyết định.",
    ],
    more: [
      "- Ví dụ",
      "・知っていると言ったが、いざやるとなると、全然できない",
      "・いざお金がとなれば、彼は態度を変えて優しくなる",
    ],
    questions: [
      {
        id: "15-1",
        content:
          "いつでも逃げられると思っていたが、___逃げる___と、足が動かなかった",
        answers: [
          "いざ/になったら",
          "まさか/となると",
          "いざ/となると",
          "いざ/にしても",
        ],
        correctAnswer: 2,
      },
      {
        id: "15-2",
        content:
          "平和な時はそう思わないが、___戦争___、食料や水の大切さがわかる",
        answers: [
          "まさか/となると",
          "いざ/になれば",
          "たとえ/となれば",
          "いざ/となれば",
        ],
        correctAnswer: 3,
      },
      {
        id: "15-3",
        content: "普段はおとなしいが、___トラブル___、彼は頼りになる",
        answers: [
          "いざ/となると",
          "いざ/となっては",
          "まさか/となったら",
          "いざ/になったら",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "～との",
    back: [
      "- Ý nghĩa: Rằng/Nghe nói là (Chỉ nguồn tin, thông báo; dùng trong văn viết, phát thanh, báo chí)",
      "・Ví dụ: Có thông báo rằng cuộc họp đã bị hoãn lại",
      "- Key point: Chỉ dùng để trích dẫn hoặc thông báo nguồn tin chính thức/công cộng và mang tính trang trọng.",
      "- Cấu trúc: V / Aい / Na / N + との + N (danh từ chỉ thông tin: 連絡, ニュース...)",
      "- So sánh: ～という (cũng là 'rằng', nhưng との trang trọng hơn và bắt buộc phải đi kèm với một danh từ chỉ thông tin)",
      "- Ngữ cảnh: Văn viết, trang trọng, dùng trong thông báo chính thức, báo chí.",
    ],
    more: [
      "- Ví dụ",
      "・会議は中止されたとの連絡があった",
      "・社長が辞任するとのニュースを聞いた",
    ],
    questions: [
      {
        id: "16-1",
        content: "政府から、消費税が増税される___発表があった",
        answers: ["と", "という", "というわけだ", "との"],
        correctAnswer: 3,
      },
      {
        id: "16-2",
        content: "近隣住民から、工事の騒音がうるさい___苦情が入った",
        answers: ["としての", "という", "との", "とのこと"],
        correctAnswer: 2,
      },
      {
        id: "16-3",
        content: "犯人は逃走中だ___情報が入った",
        answers: ["との", "と", "というわけだ", "という"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "～てもしかたがない",
    back: [
      "- Ý nghĩa: Có làm... cũng vô ích/Không thể tránh khỏi (Thể hiện sự chấp nhận điều không mong muốn)",
      "・Ví dụ: Dù có hối hận về những gì đã xảy ra thì cũng vô ích",
      "- Key point: Diễn tả sự vô ích của một hành động, thường là hành động mang tính cảm xúc đối với một sự thật không thể thay đổi",
      "- Cấu trúc: Vて + もしかたがない/しょうがない/どうしようもない",
      "- So sánh: ～てもはじまらない (cũng là 'vô ích', trang trọng hơn)",
      "- Ngữ cảnh: Văn nói suồng sã, dùng để chấp nhận/biện minh cho sự vô ích.",
    ],
    more: [
      "- Ví dụ",
      "・起きてしまったことを後悔してもしかたがない",
      "・終わったことを泣いてもしかたがない",
    ],
    questions: [
      {
        id: "17-1",
        content: "過ぎ去った時間を悔やん___、前向きに考えるべきだ",
        answers: [
          "てもいい",
          "てもしかたがない",
          "ても構わない",
          "てもいいはずだ",
        ],
        correctAnswer: 1,
      },
      {
        id: "17-2",
        content: "地震は自然災害だ。怒っ___、どうしようもない",
        answers: [
          "てもいい",
          "てもいいはずだ",
          "てもかまわない",
          "てもしかたがない",
        ],
        correctAnswer: 3,
      },
      {
        id: "17-3",
        content: "自分の不注意で失敗したのだから、誰かのせいにし___",
        answers: [
          "てもいい",
          "てもしかたがない",
          "てもかまわない",
          "てもいいはずだ",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～Vずにはおかない",
    back: [
      "- Ý nghĩa: Nhất định sẽ.../Không thể không... (Diễn tả ý chí mạnh mẽ của người nói rằng hành động B nhất định sẽ xảy ra/ảnh hưởng đến người khác)",
      "・Ví dụ: Tác phẩm này nhất định sẽ gây ấn tượng mạnh mẽ cho người xem",
      "- Key point: Thể hiện sự chắc chắn rằng hành động sẽ gây ra một ảnh hưởng mạnh mẽ lên người/vật khác. Chỉ dùng cho ngôi thứ ba.",
      "- Cấu trúc: Vない + ずにはおかない (bỏ ない)",
      "- So sánh: ～ずにはいられない (là 'không thể không/không kìm được', dùng cho cảm xúc của chính người nói)",
      "- Ngữ cảnh: Văn viết, trang trọng.",
    ],
    more: [
      "- Ví dụ",
      "・この作品は見る人に感動を与えずにはおかないだろう",
      "・彼の言葉は、彼女の心を傷つけずにはおかないだろう",
    ],
    questions: [
      {
        id: "18-1",
        content: "彼の真剣な態度は、周りの人々の心を動かさ___",
        answers: [
          "ずにはおかない",
          "ずにはいられない",
          "ざるをえない",
          "ないわけにはいかない",
        ],
        correctAnswer: 0,
      },
      {
        id: "18-2",
        content: "この事態は、国中に大きな影響を与え___",
        answers: [
          "ずにはいられない",
          "ざるをえない",
          "ないわけにはいかない",
          "ずにはおかない",
        ],
        correctAnswer: 3,
      },
      {
        id: "18-3",
        content: "この悲惨な事件は、人々の心に深い影を落とさ___",
        answers: [
          "ずにいる",
          "ざるをえない",
          "ずにはおかない",
          "ないわけにはいかない",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～たらどんなに…か",
    back: [
      "- Ý nghĩa: Nếu... thì sẽ... biết bao/Ước gì (Thể hiện cảm xúc mạnh mẽ, mong muốn điều gì xảy ra, thường là điều khó xảy ra)",
      "・Ví dụ: Nếu tôi có thể hiểu được cảm xúc của người đó thì tốt biết mấy",
      "- Key point: Diễn tả cảm xúc tột độ đối với một giả định không có thực hoặc khó xảy ra",
      "- Cấu trúc: Vたら / Nなら + どんなに + Vる/Aい + か/だろうか",
      "- So sánh: ～ばいいのに (chỉ là ước muốn nhẹ nhàng hơn)",
      "- Ngữ cảnh: Văn nói, dùng để bày tỏ cảm xúc, ước muốn mạnh mẽ.",
    ],
    more: [
      "- Ví dụ",
      "・あの人の気持ちがわかったらどんなにいいか",
      "・昔の親友に再会できたらどんなにうれしいか",
    ],
    questions: [
      {
        id: "19-1",
        content: "彼が無事だと知っ___安心したことか",
        answers: ["たとしても", "たらどんなに", "たらいいのに", "たところで"],
        correctAnswer: 1,
      },
      {
        id: "19-2",
        content: "もし、あの時、別の道を選んでい___人生が変わっていただろうか",
        answers: [
          "たところで",
          "たとしても",
          "てからでなければ",
          "たらどんなに",
        ],
        correctAnswer: 3,
      },
      {
        id: "19-3",
        content: "宝くじに当たっ___幸せだろうか",
        answers: ["てもいい", "たとしたら", "たらどんなに", "てもしかたがない"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～ぬまに",
    back: [
      "- Ý nghĩa: Trong khi.../Trong lúc... (Trong lúc chưa xảy ra/chưa nhận thấy A thì làm nhanh B)",
      "・Ví dụ: Trong lúc mẹ không để ý, thằng bé đã ăn vụng chiếc bánh ngọt",
      "- Key point: Thể hiện hành động B được thực hiện ngay lập lập tức hoặc thầm lặng trong trạng thái không rõ ràng/chưa nhận thấy của A.",
      "- Cấu trúc: Vない + ぬまに (chỉ dùng với một số động từ cố định)",
      "- So sánh: ～ないうちに (cũng là 'trong khi chưa...', nhưng ぬまに trang trọng hơn và nhấn mạnh yếu tố bí mật/không nhận thấy)",
      "- Ngữ cảnh: Văn viết, trang trọng.",
    ],
    more: [
      "- Ví dụ",
      "・母親が目を離すぬまに、子供はお菓子をこっそり食べた",
      "・若く、経験がないぬまに、もっと多くのことにチャレンジするべきだ",
    ],
    questions: [
      {
        id: "20-1",
        content: "気がつか___、電車は終点に到着していた",
        answers: ["うちに", "ところだ", "あいだに", "ぬまに"],
        correctAnswer: 3,
      },
      {
        id: "20-2",
        content: "チャンスを逃さ___、積極的に行動するべきだ",
        answers: ["うちに", "あいだに", "うちに/ぬまに", "ぬまに"],
        correctAnswer: 3,
      },
      {
        id: "20-3",
        content: "誰も気づか___、会議が終わってしまった",
        answers: ["うちに", "ところだ", "あいだに", "ぬまに"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～からとおもって",
    back: [
      "- Ý nghĩa: Vì nghĩ rằng... (Là lý do cho một hành động nào đó, thường là tiêu cực hoặc có kết quả không tốt)",
      "・Ví dụ: Vì nghĩ rằng còn nhiều thời gian, nên tôi đã lơ là việc chuẩn bị",
      "- Key point: Biểu thị lý do mang tính suy đoán chủ quan của người nói, dẫn đến hành động thiếu cẩn trọng và thường có kết quả không mong muốn/tiêu cực.",
      "- Cấu trúc: V / Aい / Na / N + だ + からとおもって",
      "- So sánh: ～ので (chỉ lý do khách quan, còn からとおもって nhấn mạnh suy nghĩ chủ quan dẫn đến sai lầm)",
      "- Ngữ cảnh: Văn nói, dùng để biện minh cho hành động thiếu cẩn trọng.",
    ],
    more: [
      "- Ví dụ",
      "・まだ時間があるからとおもって、準備を怠ってしまった",
      "・ちょっとしたミスだからとおもって報告しなかったら、大きな問題になった",
    ],
    questions: [
      {
        id: "21-1",
        content:
          "ちょっとぐらい遅れても大丈夫だ___、約束の時間に間に合わなかった",
        answers: ["からこそ", "からとおもって", "のおかげで", "によって"],
        correctAnswer: 1,
      },
      {
        id: "21-2",
        content: "誰も見ていない___、彼はごみを道に捨てた",
        answers: ["からこそ", "とばかりに", "からといって", "からとおもって"],
        correctAnswer: 3,
      },
      {
        id: "21-3",
        content: "安い___、たくさん買ってしまったが、結局使わなかった",
        answers: ["とあって", "のおかげで", "によって", "からとおもって"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～かとおもえば...も",
    back: [
      "- Ý nghĩa: Vừa mới... đã lại.../Vừa A xong thì ngay lập tức B (Thể hiện sự thay đổi liên tục, nhanh chóng, thường là sự đối lập)",
      "・Ví dụ: Đứa bé vừa mới khóc xong thì đã lập tức cười",
      "- Key point: Diễn tả sự thay đổi trạng thái hoặc hành động nhanh chóng, bất ngờ, thường là sự đối lập hoặc luân phiên.",
      "- Cấu trúc: Vた + かと思えば / かと思ったら",
      "- So sánh: ～とたんに (chỉ sự thay đổi tức thì, nhưng かと思えば nhấn mạnh sự đối lập và luân phiên)",
      "- Ngữ cảnh: Văn nói, diễn tả sự thay đổi nhanh chóng, luân phiên.",
    ],
    more: [
      "- Ví dụ",
      "・あの赤ちゃんは泣いたかとおもえば、すぐ笑い出す",
      "・さっきまで晴れていたかとおもえば、急に雨が降り出した",
    ],
    questions: [
      {
        id: "22-1",
        content: "彼は大声で笑った___、急に真面目な顔になった",
        answers: ["とたんに", "かとおもえば", "が早いか", "やいなや"],
        correctAnswer: 1,
      },
      {
        id: "22-2",
        content: "静かになった___、また騒がしくなる。子供は本当に元気だ",
        answers: ["やいなや", "とたんに", "なり", "かとおもえば"],
        correctAnswer: 3,
      },
      {
        id: "22-3",
        content: "前の車が急ブレーキを踏んだ___、私も慌ててブレーキを踏んだ",
        answers: ["やいなや", "とたんに", "なり", "かとおもえば"],
        correctAnswer: 3,
      },
    ],
  },
  {
    front: "～といっても間違いない",
    back: [
      "- Ý nghĩa: Nói là... thì không sai (Nhấn mạnh sự thật/mức độ gần như tuyệt đối, mang tính khẳng định)",
      "・Ví dụ: Cô ấy là người thành công nhất trong công ty, nói là 'thiên tài' thì không sai",
      "- Key point: Khẳng định một sự thật/đặc điểm là hoàn toàn chính xác, không cần phải nghi ngờ. Dùng để phóng đại sự thật",
      "- Cấu trúc: V / Aい / Na / N + といっても間違いない",
      "- So sánh: ～といっても過言ではない (cũng là 'nói là... không quá lời', mạnh tương đương)",
      "- Ngữ cảnh: Văn nói và viết, dùng để khẳng định mạnh mẽ, phóng đại sự thật.",
    ],
    more: [
      "- Ví dụ",
      "・彼女は社内で最も成功した人だ。天才といっても間違いない",
      "・この車は最後の限定モデルであり、傑作といっても間違いない",
    ],
    questions: [
      {
        id: "23-1",
        content: "彼は日本文化の生き字引だ。専門家___",
        answers: [
          "というわけだ",
          "といっても間違いない",
          "にすぎない",
          "であれ",
        ],
        correctAnswer: 1,
      },
      {
        id: "23-2",
        content: "彼女の才能は、努力ではなく、天賦の才能___",
        answers: [
          "といっても過言ではない",
          "ということだ",
          "にしては",
          "にかぎりだ",
        ],
        correctAnswer: 0,
      },
      {
        id: "23-3",
        content: "彼の努力は想像を絶するもので、努力の化身___",
        answers: [
          "にすぎない",
          "にほかならない",
          "といっても間違いない",
          "といっても過言ではない",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～にいわせれば",
    back: [
      "- Ý nghĩa: Theo ý kiến của.../Nếu để... nói (Trích dẫn quan điểm của một người/nhóm người nào đó)",
      "・Ví dụ: Theo ý kiến của các chuyên gia thì biện pháp này là chưa đủ",
      "- Key point: Trích dẫn ý kiến mang tính chủ quan hoặc đánh giá của một người/nhóm người. Thường dùng cho các chủ thể có thẩm quyền.",
      "- Cấu trúc: N + にいわせれば",
      "- So sánh: ～によると (chỉ nguồn thông tin khách quan, còn にいわせれば nhấn mạnh ý kiến/quan điểm cá nhân)",
      "- Ngữ cảnh: Văn nói và viết.",
    ],
    more: [
      "- Ví dụ",
      "・専門家にいわせれば、この対策はまだ十分ではないそうだ",
      "・彼にいわせれば、できないことは何もないらしい",
    ],
    questions: [
      {
        id: "24-1",
        content: "専門家___、この対策はまだ十分ではないそうだ",
        answers: ["によれば", "によると", "にいわせれば", "にとっては"],
        correctAnswer: 2,
      },
      {
        id: "24-2",
        content: "彼___、できないことは何もないらしい",
        answers: ["にとって", "にしてみれば", "によれば", "にいわせれば"],
        correctAnswer: 3,
      },
      {
        id: "24-3",
        content: "流行に敏感な若者___、このファッションはもう古いそうだ",
        answers: ["によれば", "にいわせれば", "によると", "にとっては"],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: [
      "- Ý nghĩa: Không phải... thì là gì/Chính là... (Cách nói nhấn mạnh, khẳng định chắc chắn điều gì đó, thường là những danh từ trừu tượng)",
      "・Ví dụ: Sự cống hiến quên mình vì gia đình đó, không phải là tình yêu thì là gì?",
      "- Key point: Dùng để khẳng định một cách mạnh mẽ rằng sự vật/sự việc là N, không còn cách giải thích nào khác.",
      "- Cấu trúc: N + でなくてなんだろう",
      "- So sánh: ～にほかならない (cũng là 'chính là', nhưng でなくてなんだろう mang tính cảm thán, nhấn mạnh ý kiến cảm xúc của người nói hơn).",
      "- Ngữ cảnh: Văn viết, trang trọng, mang tính hùng biện, cảm thán mạnh mẽ.",
    ],
    more: [
      "- Ví dụ",
      "・家族のために尽くすその姿は、愛でなくてなんだろう",
      "・偶然の出来事が重なった。これは運命でなくてなんだろう",
    ],
    questions: [
      {
        id: "25-1",
        content: "困難に立ち向かうその勇気、正義___",
        answers: [
          "にほかならない",
          "でなくてなんだろう",
          "にすぎない",
          "というわけだ",
        ],
        correctAnswer: 1,
      },
      {
        id: "25-2",
        content: "偶然の出来事が重なった。これは運命___",
        answers: [
          "にほかならない",
          "でなくてなんだろう",
          "にすぎない",
          "というわけだ",
        ],
        correctAnswer: 0,
      },
      {
        id: "25-3",
        content: "困難に立ち向かい成功を収めた。これは努力の証___",
        answers: [
          "にほかならない",
          "にすぎない",
          "というわけだ",
          "でなくてなんだろう",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "～にあっては",
    back: [
      "- Ý nghĩa: Trong tình huống/hoàn cảnh... (Thường dùng cho hoàn cảnh đặc biệt, khó khăn hoặc đòi hỏi nghiêm ngặt, mang tính trang trọng)",
      "・Ví dụ: Trong hoàn cảnh thiên tai như thế này, sự hợp tác của mọi người là không thể thiếu",
      "- Key point: Dùng cho hoàn cảnh đặc biệt, khó khăn (thường là N) để rút ra một nhận định/yêu cầu mang tính trang trọng/nghiêm khắc.",
      "- Cấu trúc: N + にあっては",
      "- So sánh: ～においては (chỉ trong phạm vi/lĩnh vực nào đó, còn にあっては nhấn mạnh tính đặc thù/nghiêm trọng của hoàn cảnh)",
      "- Ngữ cảnh: Văn viết, rất trang trọng.",
    ],
    more: [
      "- Ví dụ",
      "・このような天災にあっては、皆の協力が不可欠だ",
      "・この緊急事態にあっては、一刻一秒が惜しい",
    ],
    questions: [
      {
        id: "26-1",
        content: "このような天災___、皆の協力が不可欠だ",
        answers: ["について", "において", "にあたって", "にあっては"],
        correctAnswer: 3,
      },
      {
        id: "26-2",
        content: "この国___、教育は最も重要な課題だ",
        answers: ["にあって", "にあたって", "において", "について"],
        correctAnswer: 2,
      },
      {
        id: "26-3",
        content: "この緊急事態___、一刻一秒が惜しい",
        answers: ["において", "にあって", "にあっては", "について"],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～といったところだ",
    back: [
      "- Ý nghĩa: Đại khái là/Chừng đó là cùng (Thể hiện mức độ tối đa, nhưng ở mức thấp hoặc trung bình, mang tính khiêm tốn)",
      "・Ví dụ: Tiền lương một tháng đại khái là 20 man là cùng",
      "- Key point: Đưa ra con số, mức độ hoặc phạm vi tối đa nhưng lại mang ý nghĩa không lớn/không đáng kể/chỉ đến thế mà thôi.",
      "- Cấu trúc: N / Vる + といったところだ",
      "- So sánh: ～ぐらい/ほどだ (chỉ mức độ thông thường, といったところだ nhấn mạnh mức độ tối đa nhưng không cao)",
      "- Ngữ cảnh: Văn nói và viết, mang tính khiêm tốn hoặc đánh giá mức độ thấp.",
    ],
    more: [
      "- Ví dụ",
      "・一ヶ月の収入は20万円といったところだ",
      "・講義の内容は6割理解できたといったところだ",
    ],
    questions: [
      {
        id: "27-1",
        content: "私が協力できるのは、せいぜいこの書類の作成まで___",
        answers: [
          "にすぎない",
          "にほかならない",
          "といったところだ",
          "というわけだ",
        ],
        correctAnswer: 2,
      },
      {
        id: "27-2",
        content: "彼女が知っているのは、噂話の範囲___",
        answers: [
          "にほかならない",
          "にすぎない",
          "といったところだ",
          "というわけだ",
        ],
        correctAnswer: 2,
      },
      {
        id: "27-3",
        content: "彼が話せる外国語は、英語とフランス語少々___",
        answers: [
          "にすぎない",
          "というわけだ",
          "といったところだ",
          "にほかならない",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    front: "～とあって",
    back: [
      "- Ý nghĩa: Vì/Do (Là lý do đặc biệt nên kết quả là một trạng thái đặc biệt)",
      "・Ví dụ: Vì là Giáng sinh nên khắp phố đều tấp nập",
      "- Key point: Đưa ra một lý do đặc biệt (N, Na) và kết quả là một tình trạng đặc trưng hoặc khác thường.",
      "- Cấu trúc: N / Na + とあって",
      "- So sánh: ～だけあって (cũng là 'vì', nhưng だけあって nhấn mạnh sự xứng đáng, còn とあって nhấn mạnh sự đặc trưng của hoàn cảnh)",
      "- Ngữ cảnh: Văn viết, trang trọng, thường dùng trong báo chí.",
    ],
    more: [
      "- Ví dụ",
      "・クリスマスとあって、街はにぎやかだ",
      "・経験者とあって、彼女の仕事ぶりは見事だ",
    ],
    questions: [
      {
        id: "28-1",
        content: "有名な俳優が来る___、会場は多くのファンで溢れていた",
        answers: ["ならではの", "ならでは", "とあって", "のおかげで"],
        correctAnswer: 2,
      },
      {
        id: "28-2",
        content: "経験者___、彼女の仕事ぶりは見事だ",
        answers: ["だけあって", "とあって", "ならでは", "というものだ"],
        correctAnswer: 0,
      },
      {
        id: "28-3",
        content: "部長の誕生日___、社員全員で盛大にお祝いした",
        answers: ["とあって", "ならでは", "だけあって", "というものだ"],
        correctAnswer: 0,
      },
    ],
  },
  {
    front: "～をものともせずに",
    back: [
      "- Ý nghĩa: Bất chấp/Mặc kệ (Làm điều gì đó một cách can đảm, bất chấp trở ngại)",
      "・Ví dụ: Anh ấy bất chấp bệnh tật mà tiếp tục nghiên cứu",
      "- Key point: Đi kèm với trở ngại, khó khăn (thường là N) và diễn tả hành động can đảm, kiên cường, kết quả thường là tích cực.",
      "- Cấu trúc: N + をものともせずに",
      "- So sánh: ～にもかかわらず (cũng là 'mặc dù', nhưng をものともせずに nhấn mạnh sự kiên cường, bất chấp mạnh mẽ hơn)",
      "- Ngữ cảnh: Văn viết, trang trọng, mang tính ca ngợi.",
    ],
    more: [
      "- Ví dụ",
      "・彼は病気をものともせずに研究を続けた",
      "・あらゆる批判をものともせずに、彼女は夢を追い続けた",
    ],
    questions: [
      {
        id: "29-1",
        content: "彼女は、周囲の冷たい視線___、自分の信念を貫いた",
        answers: ["をものともせずに", "にもかかわらず", "につけ", "にしろ"],
        correctAnswer: 0,
      },
      {
        id: "29-2",
        content: "彼は、厳しい環境___、登山を続けた",
        answers: ["にもかかわらず", "をものともせずに", "にかぎり", "にしろ"],
        correctAnswer: 1,
      },
      {
        id: "29-3",
        content: "強い反対___、そのプロジェクトは開始された",
        answers: ["にしろ", "にもかかわらず", "をものともせずに", "にせよ"],
        correctAnswer: 1,
      },
    ],
  },
  {
    front: "～が早いか / ～やいなや / ～なり / ～とたんに",
    back: [
      "- Ý nghĩa: Ngay sau khi (Diễn tả hành động B xảy ra tức thì sau khi hành động A vừa kết thúc)",
      "・Ví dụ: Vừa nghe chuông kết thúc, học sinh đã chạy ra khỏi lớp.",
      "- Key point: Nhấn mạnh tính tức thì, không có khoảng cách thời gian.",
      "- So sánh:",
      " * が早いか: Nhấn mạnh hành động bản năng, lặp lại. (Vる/Vた)",
      " * やいなや: Trang trọng, hành động bất ngờ. (Vる/Vた)",
      " * なり: Hành động bất ngờ, chủ ngữ duy nhất. (Vる)",
      " * とたんに: Thay đổi đột ngột (thường dùng cho hiện tượng tự nhiên). (Vる/Vた)",
      "- Ngữ cảnh: Cả văn nói và viết (trừ とたんに phổ biến hơn trong văn nói).",
    ],
    more: [
      "- Ví dụ",
      "・終業のベルを聞くが早いか、学生たちは教室から飛び出していった",
      "・私の顔を見るやいなや、彼はすぐに結果を聞いてきた",
      "・彼は電話を受けるなり、席を立って部屋を出ていった",
      "・窓を開けたとたんに、冷たい風が入ってきた",
    ],
    questions: [
      {
        id: "30-1",
        content: "終業のベルを聞く___、学生たちは教室から飛び出していった",
        answers: ["とたんに", "が早いか", "につれて", "ところだ"],
        correctAnswer: 1,
      },
      {
        id: "30-2",
        content: "私の顔を見る___、彼はすぐに結果を聞いてきた",
        answers: ["やいなや", "つつ", "なり", "はする"],
        correctAnswer: 0,
      },
      {
        id: "30-3",
        content: "窓を開けた___、冷たい風が入ってきた",
        answers: ["が早いか", "なり", "ところだ", "とたんに"],
        correctAnswer: 3,
      },
    ],
  },
];

export default cards;
