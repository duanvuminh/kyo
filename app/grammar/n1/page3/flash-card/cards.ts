import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～どおしだ（通しだ）",
    back: [
      "✨ Làm gì…suốt (Diễn tả hành động suốt từ đầu đến cuối)",
      "・Ví dụ: Cả ngày mưa liên tục không ngừng.",
      "📌 Nhấn mạnh sự liên tục, không dừng lại của một hành động hoặc trạng thái.",
    ],
    more: [
      "🧩 Vます + 通しだ",
      "⚖️ ～続ける (tiếp tục), ～ぶり (suốt)",
      "💬 Văn viết, khi mô tả hành động liên tục.",
      "📝 ví dụ",
      "・終日雨降り通しだ",
      "・彼は泣き通しだった",
    ],
    questions: [
      {
        id: "1-1",
        content: "子どもは終日遊び___で、疲れた様子もない。",
        answers: ["続けた", "通しだ", "通した", "続いている"],
        correctAnswer: 1,
        memo: [
          "続けた: 'Tiếp tục' (không nhấn mạnh suốt đầu đến cuối).",
          "通しだ: 'Suốt, liên tục' (nhấn mạnh suốt cả ngày). (Đúng)",
          "通した: Động từ quá khứ nhưng không tự nhiên.",
          "続いている: 'Đang tiếp tục', không phù hợp.",
        ],
      },
      {
        id: "1-2",
        content:
          "試験が近いので、毎日三時間勉強し___が、一気にやるというより少しずつ続けている感じだ。",
        answers: ["続けている", "通しだ", "やり通した", "やりきった"],
        correctAnswer: 0,
        memo: [
          "続けている: 'Đang tiếp tục' – nhấn mạnh hành động lặp lại đều đặn, không nhất thiết liên tục suốt không nghỉ. (Đúng)",
          "通しだ: 'Suốt, liên tục không ngừng' – sắc thái mạnh hơn, không phù hợp với ý 'mỗi ngày một ít'.",
          "やり通した: 'Làm cho xong đến cuối cùng', nhấn mạnh hoàn thành, không phải thói quen hằng ngày.",
          "やりきった: 'Làm hết sức/hoàn toàn', không nói tới việc duy trì đều đặn.",
        ],
      },
      {
        id: "1-3",
        content:
          "雨が一晩中降り___というより、時々やんだりまた降ったりしていた。",
        answers: [
          "続けていた",
          "降り通しだった",
          "降り続け通しだった",
          "止みぶりだった",
        ],
        correctAnswer: 0,
        memo: [
          "続けていた: 'Cứ mưa rồi tạnh rồi lại mưa' – tiếp diễn nhưng có ngắt quãng, phù hợp với phần sau câu. (Đúng)",
          "降り通しだった: 'Mưa suốt không ngừng', mâu thuẫn với '時々やんだり'.",
          "降り続け通しだった: Cấu trúc không tự nhiên, lặp nghĩa.",
          "止みぶりだった: Cách dùng ぶり này sai.",
        ],
      },
    ],
  },
  {
    front: "とみえて/とみえる",
    back: [
      "✨ Hình như/Dường như/Có vẻ (Suy đoán dựa trên những dấu hiệu)",
      "・Ví dụ: Anh ấy có vẻ như sốc về tin tức này.",
      "📌 Diễn tả sự suy đoán hay nhận xét dựa trên những dấu hiệu, bằng chứng nhìn thấy.",
    ],
    more: [
      "🧩 V / N + とみえて/とみえる",
      "⚖️ ～ようだ (có vẻ như), ～らしい (dường như)",
      "💬 Văn viết, diễn tả quan sát.",
      "📝 ví dụ",
      "・彼はその知らせにショックを受けたとみえて、顔色が悪い",
      "・明日は雨になるとみえる",
    ],
    questions: [
      {
        id: "2-1",
        content: "彼は失敗した___、元気がなくなった。",
        answers: ["ことで", "とみえて", "によって", "からして"],
        correctAnswer: 1,
        memo: [
          "ことで: '...によって' (vì).",
          "とみえて: 'Có vẻ như' (suy đoán từ dấu hiệu). (Đúng)",
          "によって: 'Bởi vì'.",
          "からして: 'Chỉ từ... mà xét'.",
        ],
      },
      {
        id: "2-2",
        content: "空が暗くなり、風も強くなってきた。今にも雨が降り出し___。",
        answers: ["とみえる", "ようだ", "らしい", "に違いない"],
        correctAnswer: 1,
        memo: [
          "とみえる: Hơi cứng, sắc thái quan sát nhưng thường dùng trong văn viết, vẫn có thể nhưng ようだ tự nhiên hơn.",
          "ようだ: 'Có vẻ như, hình như' – trung tính, phù hợp văn nói thường ngày. (Đúng)",
          "らしい: 'Nghe nói/dường như dựa trên tin đồn', không nhấn mạnh dấu hiệu trực tiếp.",
          "に違いない: 'Chắc chắn là', mức độ tin cậy cao hơn.",
        ],
      },
      {
        id: "2-3",
        content: "彼は何も言わないが、顔つきからして相当怒っている___。",
        answers: ["とみえて", "ようだ", "らしい", "に違いない"],
        correctAnswer: 2,
        memo: [
          "とみえて: 'Có vẻ là' nhưng hay dùng văn viết, hơi tách người nói khỏi cảm nhận.",
          "ようだ: Trung tính, nhưng らしい nhấn mạnh suy đoán từ ấn tượng/chứng cứ bên ngoài hơn.",
          "らしい: 'Dường như' – ở đây dựa vào vẻ mặt nên rất tự nhiên. (Đúng)",
          "に違いない: 'Chắc chắn là', hơi mạnh so với ngữ cảnh.",
        ],
      },
    ],
  },
  {
    front: "びる",
    back: [
      "✨ Trông giống (Diễn tả ngoại hình hoặc vẻ ngoài giống một cái gì đó)",
      "・Ví dụ: Cô ấy trông giống như một nữ diễn viên.",
      "📌 Dùng để chỉ sự giống nhau về ngoại hình, đặc điểm.",
    ],
    more: [
      "🧩 N + びる",
      "⚖️ ～ようだ (giống như), ～らしい (dường như)",
      "💬 Văn nói, khi nhận xét ngoại hình.",
      "📝 ví dụ",
      "・彼女は、いかにも大人びている",
      "・この店は、欧州びた雰囲気がある",
    ],
    questions: [
      {
        id: "3-1",
        content: "このカフェは外国___ 雰囲気がある。",
        answers: ["びた", "みたい", "的な", "らしい"],
        correctAnswer: 0,
        memo: [
          "びた: 'Giống như' (ngoại hình/đặc điểm, mang màu sắc). (Đúng)",
          "みたい: 'Như, trông như', nhưng ít mang sắc thái 'có vẻ được cố ý tạo ra' như びる.",
          "的な: Tạo tính từ, không phải hậu tố diễn tả vẻ bề ngoài đặc trưng.",
          "らしい: 'Dường như', chung chung.",
        ],
      },
      {
        id: "3-2",
        content: "彼はまだ20代なのに、とても大人___落ち着きがある。",
        answers: ["びた", "っぽい", "らしい", "みたい"],
        correctAnswer: 0,
        memo: [
          "びた: 'Mang dáng vẻ như N' – 大人びた落ち着き: vẻ điềm tĩnh như người lớn. (Đúng)",
          "っぽい: Thân mật, hơi suồng sã.",
          "らしい: 'Đúng chất, mang đặc trưng', nhưng thường dùng 大人らしい, khác sắc thái.",
          "みたい: So sánh chung chung, không nhấn mạnh phong thái.",
        ],
      },
      {
        id: "3-3",
        content: "あの子どもは、口調だけ聞くとまるで大人___話し方をする。",
        answers: ["のような", "びた", "らしい", "そのものの"],
        correctAnswer: 0,
        memo: [
          "のような: So sánh hình ảnh, phù hợp với 'まるで'. (Đúng)",
          "びた: Thường đi trực tiếp với danh từ (大人びた話し方), ở đây sau の là danh từ nên のような tự nhiên hơn.",
          "らしい: 'Đúng chất', nhưng không phải dạng bổ nghĩa như ở đây.",
          "そのものの: 'Chính là', mức độ quá mạnh.",
        ],
      },
    ],
  },
  {
    front: "を限りに/限りで",
    back: [
      "✨ Đến hết/Hết (Chỉ rõ điểm kết thúc, giới hạn – dùng cho thời gian, phạm vi)",
      "・Ví dụ: Khi kỳ này kết thúc, công ty sẽ bãi bỏ quy tắc này.",
      "📌 Thường dùng trong thông báo, tuyên bố (ngừng, chấm dứt).",
    ],
    more: [
      "🧩 N (thời gian, phạm vi) + を限りに / 限りで",
      "⚖️ ～までに (đến trước), ～まで (cho đến)",
      "💬 Văn viết, thông báo chính thức.",
      "📝 ví dụ",
      "・今期を限りに、この規則は廃止される",
      "・この番組は今月限りで終了します",
    ],
    questions: [
      {
        id: "4-1",
        content: "今年___、サービスは終了します。",
        answers: ["を限りに", "までに", "にかけて", "を通じて"],
        correctAnswer: 0,
        memo: [
          "を限りに: 'Kể từ hết (năm nay) sẽ chấm dứt', mang sắc thái tuyên bố. (Đúng)",
          "までに: 'Trước thời điểm', không hàm nghĩa 'lần cuối'.",
          "にかけて: 'Từ... đến khoảng', chỉ phạm vi thời gian.",
          "を通じて: 'Suốt, thông qua', không mang ý chấm dứt.",
        ],
      },
      {
        id: "4-2",
        content: "この番組は今月___放送を終了いたします。",
        answers: ["限りで", "までに", "だけで", "を通して"],
        correctAnswer: 0,
        memo: [
          "限りで: 'Hết tháng này thì kết thúc phát sóng'. (Đúng)",
          "までに: Chỉ hạn chót, không mang sắc thái thông báo chấm dứt chương trình.",
          "だけで: 'Chỉ', sai ngữ pháp.",
          "を通して: 'Suốt/Thông qua', không nói việc kết thúc.",
        ],
      },
      {
        id: "4-3",
        content: "今日___禁煙にします、と言われても、急には無理だ。",
        answers: ["から", "を限りに", "までで", "までに"],
        correctAnswer: 1,
        memo: [
          "から: 'Từ hôm nay', không nhấn mạnh 'hôm nay là ranh giới cuối cùng'.",
          "を限りに: 'Kể từ hôm nay dứt hẳn' – phù hợp với tuyên bố bỏ thuốc. (Đúng)",
          "までで: 'Chỉ đến hôm nay', ít dùng trong ngữ cảnh này.",
          "までに: 'Trước hôm nay', không tự nhiên.",
        ],
      },
    ],
  },
  {
    front: "あっての",
    back: [
      "✨ Bởi vì có.../Có được là nhờ... (Nhấn mạnh điều kiện nền tảng tạo nên kết quả)",
      "・Ví dụ: Sự thành công của tôi là nhờ sự hỗ trợ của bạn.",
      "📌 Cấu trúc N1あってのN2: 'N2 có được là nhờ N1'.",
    ],
    more: [
      "🧩 N1 + あっての + N2",
      "⚖️ ～あってこそ (nhờ có), ～おかげで (nhờ)",
      "💬 Văn viết, trang trọng, diễn tả sự biết ơn.",
      "📝 ví dụ",
      "・親あっての子だ",
      "・平和あっての経済発展である",
    ],
    questions: [
      {
        id: "5-1",
        content: "私の成功は、家族の支え___だと思っている。",
        answers: ["あっての", "おかげ", "せい", "ため"],
        correctAnswer: 0,
        memo: [
          "あっての: 'Có được là nhờ', nhấn mạnh vai trò nền tảng của gia đình. (Đúng)",
          "おかげ: 'Nhờ', dạng danh từ, cần おかげだ/おかげで～した.",
          "せい: 'Vì (tiêu cực)', không phù hợp.",
          "ため: 'Vì, để', không mang sắc thái biết ơn.",
        ],
      },
      {
        id: "5-2",
        content: "健康___こそ、好きなことも思い切りできるのだ。",
        answers: ["あって", "あっての", "ある", "であって"],
        correctAnswer: 0,
        memo: [
          "あって: Một phần của cấu trúc ～あってこそ: 'Chính nhờ có sức khỏe'. (Đúng)",
          "あっての: Cần đi với danh từ phía sau (健康あっての仕事).",
          "ある: Thường chỉ tồn tại, không mang sắc thái 'nhờ có'.",
          "であって: Dùng trong liệt kê/trình bày logic, không phù hợp.",
        ],
      },
      {
        id: "5-3",
        content: "あなたの協力___、このプロジェクトは成功したと言える。",
        answers: ["あっての", "おかげで", "のために", "にとって"],
        correctAnswer: 1,
        memo: [
          "あっての: Cần sau nó là danh từ (あなたの協力あっての成功).",
          "おかげで: 'Nhờ có', đi với mệnh đề, phù hợp với cấu trúc '成功したと言える'. (Đúng)",
          "のために: 'Vì, để', không phải sắc thái biết ơn.",
          "にとって: 'Đối với', không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "ときたら",
    back: [
      "✨ Ấy à.../Cái (người/việc) đó thì... (Diễn tả phê phán, ngạc nhiên, than phiền)",
      "・Ví dụ: Ấy à, con trai tôi lại chơi game cả ngày.",
      "📌 Thường dùng với chủ đề thân quen, sắc thái chỉ trích/kêu ca.",
    ],
    more: [
      "🧩 N + ときたら",
      "⚖️ ～ったら, ～というと (nói đến)",
      "💬 Văn nói, cảm xúc mạnh.",
      "📝 ví dụ",
      "・あの子ときたら、毎日ゲームばかりしている",
      "・うちの犬ときたら、少しもじっとしていない",
    ],
    questions: [
      {
        id: "6-1",
        content: "うちの息子___、注意しても全然勉強しようとしない。",
        answers: ["ときたら", "といえば", "とすると", "となると"],
        correctAnswer: 0,
        memo: [
          "ときたら: 'Cái thằng con nhà tôi ấy thì...', mang sắc thái than phiền. (Đúng)",
          "といえば: 'Nói đến...', trung tính.",
          "とすると/となると: Dùng khi giả định/đặt điều kiện.",
        ],
      },
      {
        id: "6-2",
        content: "田中さん___、約束の時間に遅れてくることが多い。",
        answers: ["ときたら", "といえば", "としたら", "とあって"],
        correctAnswer: 0,
        memo: [
          "ときたら: Nhấn mạnh thói quen xấu của người quen, đúng sắc thái phê phán nhẹ. (Đúng)",
          "といえば: Chỉ để chuyển chủ đề.",
          "としたら: Giả định.",
          "とあって: Nêu lý do đặc biệt.",
        ],
      },
      {
        id: "6-3",
        content: "夏___、やっぱり海だね。",
        answers: ["といえば", "ときたら", "としたら", "とすると"],
        correctAnswer: 0,
        memo: [
          "といえば: 'Nói đến mùa hè thì phải nhắc đến biển', dùng để liên tưởng. (Đúng)",
          "ときたら: Hay đi với đối tượng bị phê phán, không hợp '夏'.",
          "としたら/とすると: Dùng cho giả định.",
        ],
      },
    ],
  },
  {
    front: "だの～だの",
    back: [
      "✨ Nào là... nào là (liệt kê nhiều thứ – thường mang sắc thái chê trách, than phiền)",
      "・Ví dụ: Anh ấy liên tục khiếu nại nào là đau đầu, nào là mệt mỏi.",
      "📌 Dùng để liệt kê các ví dụ (thường tiêu cực) mà không cần đầy đủ, chính xác.",
    ],
    more: [
      "🧩 N / Vる / Aい / Aな + だの + N / Vる / ... + だの",
      "⚖️ ～やら～やら, ～とか～とか",
      "💬 Văn nói, mang sắc thái phiền hà.",
      "📝 ví dụ",
      "・彼は頭が痛いだの、疲れているだのと言い訳してばかりいる",
      "・給料が安いだの、仕事がきついだのと文句ばかり言っている",
    ],
    questions: [
      {
        id: "7-1",
        content: "子どもは体が痛い___、お腹が痛い___と文句を言っている。",
        answers: ["だの...だの", "やら...やら", "たり...たり", "や...や"],
        correctAnswer: 0,
        memo: [
          "だの...だの: 'Nào là... nào là', sắc thái phàn nàn. (Đúng)",
          "やら...やら: Liệt kê lộn xộn, không tiêu cực bằng だの...だの.",
          "たり...たり: Nói về các hành động xen kẽ.",
          "や...や: Liệt kê trung tính.",
        ],
      },
      {
        id: "7-2",
        content:
          "給料が安い___、残業が多い___と、彼は会社の不満ばかり言っている。",
        answers: ["だの...だの", "やら...やら", "とか...とか", "し...し"],
        correctAnswer: 0,
        memo: [
          "だの...だの: Rất hợp khi liệt kê những điều bất mãn. (Đúng)",
          "やら...やら: Không nhất thiết mang sắc thái than phiền mạnh.",
          "とか...とか: Dùng khi ví dụ, nhẹ hơn.",
          "し...し: Liệt kê lý do, không mang sắc thái 'nào là...'.",
        ],
      },
      {
        id: "7-3",
        content: "給料が安い___、通勤が遠い___、それでもこの仕事を続けている。",
        answers: ["し...し", "だの...だの", "やら...やら", "とか...とか"],
        correctAnswer: 0,
        memo: [
          "し...し: Liệt kê nhiều lý do khách quan. (Đúng)",
          "だの...だの: Quá mang sắc thái than vãn.",
          "やら...やら: Mang cảm giác lộn xộn, không rõ lý do.",
          "とか...とか: Chỉ ví dụ, không phải liệt kê nguyên nhân chính.",
        ],
      },
    ],
  },
  {
    front: "これまでだ",
    back: [
      "✨ Chỉ đến thế thôi (Diễn tả sự kết thúc, không còn hy vọng)",
      "・Ví dụ: Nếu thua trận này, thì chỉ đến thế thôi.",
      "📌 Hay dùng khi cảm thấy mọi nỗ lực đều vô ích nếu thất bại tại điểm đó.",
    ],
    more: [
      "🧩 これまでだ / これで終わりだ",
      "⚖️ ～おしまいだ, ～終わりだ",
      "💬 Văn nói, cảm giác bi quan.",
      "📝 ví dụ",
      "・この試合に負ければ、これまでだ",
      "・ここでミスをしたら、今までの苦労がすべて水の泡だ",
    ],
    questions: [
      {
        id: "8-1",
        content: "ここで諦めたら、全ての努力は___。",
        answers: [
          "これまでだ",
          "無駄ではない",
          "これからだ",
          "まだ始まったばかりだ",
        ],
        correctAnswer: 0,
        memo: [
          "これまでだ: 'Đến đây là hết, coi như xong'. (Đúng)",
          "無駄ではない: 'Không vô ích', trái nghĩa.",
          "これからだ: 'Giờ mới bắt đầu'.",
          "まだ始まったばかりだ: 'Mới chỉ bắt đầu', trái ngữ cảnh.",
        ],
      },
      {
        id: "8-2",
        content:
          "この計画がうまくいかなければ、会社の再建は___と言ってもいい。",
        answers: ["これまでだ", "これからだ", "可能だ", "不可能ではない"],
        correctAnswer: 0,
        memo: [
          "これまでだ: 'Xem như chấm dứt', phù hợp sắc thái nghiêm trọng. (Đúng)",
          "これからだ: Ngược nghĩa.",
          "可能だ/不可能ではない: Quá trung tính.",
        ],
      },
      {
        id: "8-3",
        content:
          "失敗したからといって、人生が___というわけではない。何度でもやり直せる。",
        answers: ["これまでだ", "終わりだ", "決まりだ", "終わった"],
        correctAnswer: 1,
        memo: [
          "これまでだ: Thường dùng trong lời than bi quan, ở đây lại đang phủ định quan điểm đó.",
          "終わりだ: 'Xem như kết thúc' – câu đang phủ định 'không phải là kết thúc', nên đây là khái niệm bị phủ định. (Đúng)",
          "決まりだ: 'Quy định', không liên quan.",
          "終わった: 'Đã kết thúc', không hợp.",
        ],
      },
    ],
  },
  {
    front: "～せめてもの",
    back: [
      "✨ Kể ra cũng còn may là..., ít ra là... (tìm điểm an ủi trong tình huống xấu)",
      "・Ví dụ: Kể ra cũng may là ít nhất không ai bị thương.",
      "📌 Hay đi với 救い, 慰め, 礼儀…",
    ],
    more: [
      "🧩 N + せめてもの",
      "⚖️ ～だけまだましだ, ～とはいえ救いだ",
      "💬 Văn viết/nói, mang sắc thái an ủi.",
      "📝 ví dụ",
      "・事故は起きたが、誰も怪我しなかったのがせめてもの救いだ",
      "・落第したが、友人も同じだったのはせめてもの慰めだ",
    ],
    questions: [
      {
        id: "9-1",
        content: "プロジェクトは失敗したが、得た経験がせめてもの___だ。",
        answers: ["救い", "報酬", "利益", "結果"],
        correctAnswer: 0,
        memo: [
          "救い: 'Điều cứu vớt, niềm an ủi' – collocation tự nhiên với せめてもの. (Đúng)",
          "報酬: 'Thù lao', không phải ý an ủi.",
          "利益: 'Lợi ích'.",
          "結果: 'Kết quả', quá chung chung.",
        ],
      },
      {
        id: "9-2",
        content:
          "大きな損失は出たが、社員が一人も辞めなかったのはせめてもの___だ。",
        answers: ["救い", "儲け", "結果", "理由"],
        correctAnswer: 0,
        memo: [
          "救い: Điểm sáng duy nhất trong tình thế xấu. (Đúng)",
          "儲け: Lãi, không hợp.",
          "結果/理由: Không mang sắc thái an ủi.",
        ],
      },
      {
        id: "9-3",
        content: "給料は安いが、残業が少ないだけ___だと思うようにしている。",
        answers: ["まだまし", "せめてもの", "救い", "慰め"],
        correctAnswer: 0,
        memo: [
          "まだまし: 'Cũng còn đỡ, còn hơn không', cùng trường nghĩa với せめてもの nhưng dạng khác. (Đúng)",
          "せめてもの: Cần danh từ phía sau (せめてもの救い).",
          "救い/慰め: Danh từ, không nối trực tiếp sau だけ.",
        ],
      },
    ],
  },
  {
    front: "には…なり",
    back: [
      "✨ Đối với ... cũng có cái tương xứng với nó (NにはNなりの...)",
      "・Ví dụ: Người to thì cũng có cách ăn mặc thích hợp.",
      "📌 Mẫu NにはNなりの～: 'Theo cách, theo kiểu của N'.",
    ],
    more: [
      "🧩 N + には + N + なりの + N/やり方",
      "⚖️ ～相応しい, ～に見合った",
      "📝 ví dụ",
      "・大人には大人なりの責任がある",
      "・子どもには子どもなりの考え方がある",
    ],
    questions: [
      {
        id: "10-1",
        content: "高校生には高校生___の勉強方法がある。",
        answers: ["なり", "らしい", "向け", "のような"],
        correctAnswer: 0,
        memo: [
          "なり: 'Theo cách của', đúng cấu trúc 高校生なりの勉強方法. (Đúng)",
          "らしい: 'Đúng chất', nhưng cấu trúc khác (高校生らしい).",
          "向け: 'Dành cho', cần 向けの.",
          "のような: 'Giống như', không mang nghĩa 'theo cách riêng'.",
        ],
      },
      {
        id: "10-2",
        content: "貧しいなら貧しい___の暮らし方がある。",
        answers: ["なり", "らしい", "よう", "だけ"],
        correctAnswer: 0,
        memo: [
          "なり: Nghĩa 'theo kiểu, theo cách' – 貧しいなりの暮らし: sống theo kiểu nghèo. (Đúng)",
          "らしい: Mang nghĩa 'đúng chất', không phù hợp.",
          "よう: Cần のような.",
          "だけ: Không phù hợp.",
        ],
      },
      {
        id: "10-3",
        content: "学生___、勉強するのは当然だ。",
        answers: ["であれ", "であろうと", "でなくとも", "なり"],
        correctAnswer: 0,
        memo: [
          "であれ: 'Dù là học sinh hay gì đi nữa' trong mẫu NであれNであれ. (Ở đây là phần đầu). (Đúng)",
          "であろうと/でなくとも: Các mẫu giả định khác.",
          "なり: Không đứng trực tiếp sau 学生 theo nghĩa này.",
        ],
      },
    ],
  },
  {
    front: "とあいまって",
    back: [
      "✨ Cùng với, kết hợp với (hai yếu tố cộng hưởng tạo ra kết quả)",
      "・Ví dụ: Chính sự tăng giá dầu cùng với tình trạng kinh tế xấu khiến mọi thứ trở nên khó khăn.",
      "📌 N + とあいまって: 'cộng hưởng với N'.",
    ],
    more: [
      "🧩 N + とあいまって",
      "⚖️ ～と相まって, ～に加えて",
      "📝 ví dụ",
      "・景気の悪化とあいまって、失業が増えている",
      "・高い失業率とあいまって、犯罪が急増している",
    ],
    questions: [
      {
        id: "11-1",
        content: "不況___インフレとあいまって、庶民の生活が苦しくなっている。",
        answers: ["と", "や", "に", "では"],
        correctAnswer: 0,
        memo: [
          "と: 'A cùng với B' – 不況とインフレとあいまって. (Đúng)",
          "や: 'Và', không đi với とあいまって.",
          "に/では: Sai quan hệ.",
        ],
      },
      {
        id: "11-2",
        content:
          "暖冬___、電気料金の値下げとあいまって、光熱費が去年より安くなった。",
        answers: ["に加え", "と", "とともに", "のため"],
        correctAnswer: 0,
        memo: [
          "に加え: 'Cộng với', mẫu tương tự về ý nghĩa kết hợp. (Đúng)",
          "と: Cần とあいまって nếu dùng.",
          "とともに: 'Cùng với', nhưng sắc thái hơi khác.",
          "のため: 'Vì', không phải kết hợp hai yếu tố.",
        ],
      },
      {
        id: "11-3",
        content:
          "人口の増加___、都市部への一極集中もあいまって、住宅価格が高騰している。",
        answers: ["に加え", "とあいまって", "だけあって", "にしては"],
        correctAnswer: 1,
        memo: [
          "に加え: Có thể dùng, nhưng chỗ trống cần động từ あいまって theo ngữ pháp.",
          "とあいまって: 'Cùng với, cộng hưởng với' – nối hai nguyên nhân, phù hợp. (Đúng)",
          "だけあって/にしては: Mẫu đánh giá, không phải kết hợp nguyên nhân.",
        ],
      },
    ],
  },
  {
    front: "〜がさいご(が最後)",
    back: [
      "✨ Một khi đã ... thì (kết quả tất yếu, khó quay lại trạng thái ban đầu)",
      "・Ví dụ: Một khi đã nói dối thì không thể lấy lại được sự tin tưởng.",
      "📌 Mẫu Vた / Vる + が最後: 'hễ ... thì'.",
    ],
    more: [
      "🧩 Vる / Vた + が最後",
      "⚖️ ～たら最後, ～たが最後",
      "📝 ví dụ",
      "・あの薬を飲んだが最後、二度と元の体には戻れない",
      "・彼が家を出たが最後、二度と戻ってこなかった",
    ],
    questions: [
      {
        id: "12-1",
        content: "一度嘘をつくが最後、信頼を___ことは難しい。",
        answers: ["取り戻す", "回復する", "得る", "守る"],
        correctAnswer: 0,
        memo: [
          "取り戻す: 'Lấy lại', đúng với 'lấy lại niềm tin'. (Đúng)",
          "回復する: Thường dùng với sức khỏe, kinh tế.",
          "得る: 'Có được', không phải 'lấy lại'.",
          "守る: 'Giữ', không phải ngữ cảnh.",
        ],
      },
      {
        id: "12-2",
        content: "その秘密を一度口にした___、もう誰にも止められないだろう。",
        answers: ["が最後", "とたん", "うえで", "かぎり"],
        correctAnswer: 0,
        memo: [
          "が最後: Một khi đã nói ra thì hậu quả không thể dừng lại. (Đúng)",
          "とたん: 'Ngay khi', không nhấn mạnh tính không thể quay lại.",
          "うえで: 'Sau khi', mang nghĩa trình tự.",
          "かぎり: Nhiều nghĩa khác.",
        ],
      },
      {
        id: "12-3",
        content: "一度始めたからには、最後までやり通す___。",
        answers: ["べきだ", "が最後", "はずだ", "ことだ"],
        correctAnswer: 0,
        memo: [
          "べきだ: 'Nên, phải', diễn tả nghĩa vụ. (Đúng)",
          "が最後: Đi sau động từ, tạo mệnh đề điều kiện, không đứng cuối câu kiểu này.",
          "はずだ/ことだ: Nghĩa khác.",
        ],
      },
    ],
  },
  {
    front: "～かくして",
    back: [
      "✨ Như vậy, thế là (dùng khi tóm tắt kết quả sau quá trình)",
      "・Ví dụ: Như vậy, ông ấy đã mất hết mọi thứ.",
      "📌 Thường dùng trong văn kể chuyện, tường thuật.",
    ],
    more: [
      "🧩 かくして + KQ",
      "⚖️ こうして, その結果",
      "📝 ví dụ",
      "・かくして、彼の長い戦いは終わった",
      "・かくして、二人は夫婦となった",
    ],
    questions: [
      {
        id: "13-1",
        content: "多くの失敗を乗り越え、かくして彼は夢を___。",
        answers: ["実現した", "諦めた", "忘れた", "先延ばしにした"],
        correctAnswer: 0,
        memo: [
          "実現した: 'Đã thực hiện được' – kết quả tích cực sau hành trình. (Đúng)",
          "諦めた/忘れた/先延ばしにした: Trái ngữ cảnh.",
        ],
      },
      {
        id: "13-2",
        content:
          "長い交渉の末、双方が譲歩し、かくして歴史的な平和条約が___のである。",
        answers: ["結ばれた", "破られた", "否定された", "拒否された"],
        correctAnswer: 0,
        memo: [
          "結ばれた: 'Được ký kết', kết quả tích cực. (Đúng)",
          "Các đáp án khác đều tiêu cực.",
        ],
      },
      {
        id: "13-3",
        content: "このようにして、彼の人生は大きく変わることに___。",
        answers: ["なった", "かくして", "よって", "すぎない"],
        correctAnswer: 0,
        memo: [
          "なった: Kết thúc tự nhiên cho 'trở nên như vậy'. (Đúng)",
          "かくして: Không thể đứng ở cuối câu như động từ.",
          "よって/すぎない: Nghĩa khác.",
        ],
      },
    ],
  },
  {
    front: "ためしがない",
    back: [
      "✨ Chưa từng, chưa bao giờ (phủ định mạnh kinh nghiệm trong quá khứ)",
      "📌 Vた + ためしがない: 'Chưa từng có chuyện...'.",
    ],
    more: [
      "🧩 Vた + ためしがない",
      "⚖️ ～ことがない, ～覚えがない",
      "📝 ví dụ",
      "・彼が約束を破ったためしがない",
      "・こんなにうまくいったためしがない",
    ],
    questions: [
      {
        id: "14-1",
        content: "私は、親に逆らった___ためしがない。",
        answers: ["ことが", "ときが", "ためしが", "ことも"],
        correctAnswer: 2,
        memo: [
          "ためしが: Đúng mẫu Vた + ためしがない. (Đúng)",
          "ことが/ときが: Dùng cho ～ことがない/ときがない, mẫu khác.",
          "ことも: Không đi với ためしがない.",
        ],
      },
      {
        id: "14-2",
        content: "彼が会議に遅刻したことは一度も___。",
        answers: ["ない", "なかった", "なくて", "ありえない"],
        correctAnswer: 0,
        memo: [
          "ない: 'Chưa từng', dạng cơ bản của ～ことがない. (Đúng)",
          "なかった: Quá khứ, không hợp với 一度も.",
          "なくて: Dùng nối câu.",
          "ありえない: 'Không thể xảy ra', nghĩa khác.",
        ],
      },
      {
        id: "14-3",
        content:
          "あの店で買い物をして、満足して帰ったためし___。いつも何かしら不満が残る。",
        answers: ["がない", "もない", "はない", "ではない"],
        correctAnswer: 0,
        memo: [
          "がない: Đúng mẫu ためしがない. (Đúng)",
          "もない/はない: Nhấn mạnh, nhưng sau ためし thường dùng がない.",
          "ではない: Phủ định, không hợp.",
        ],
      },
    ],
  },
  {
    front: "～のは...ゆえである",
    back: [
      "✨ Sở dĩ... là vì... (lý do trang trọng, văn viết)",
      "📌 ...のは ～ゆえである: 'sở dĩ ... là vì...'.",
    ],
    more: [
      "🧩 普通形 / N + のは + N / 普通形 + ゆえである",
      "⚖️ ～からである, ～ためである",
      "📝 ví dụ",
      "・彼が成功したのは、努力のたまものゆえである",
      "・この計画が遅れているのは、予算不足ゆえである",
    ],
    questions: [
      {
        id: "15-1",
        content: "この問題が解決しないのは、情報不足___。",
        answers: ["ゆえである", "からだ", "ためだ", "せいだ"],
        correctAnswer: 0,
        memo: [
          "ゆえである: Văn phong trang trọng, phù hợp với văn viết. (Đúng)",
          "からだ/ためだ/せいだ: Dạng khẩu ngữ hoặc ít trang trọng hơn.",
        ],
      },
      {
        id: "15-2",
        content:
          "多くの人がこのルールに反対しているのは、説明が不十分だった___。",
        answers: ["からだ", "ゆえである", "せいではない", "わけではない"],
        correctAnswer: 0,
        memo: [
          "からだ: Câu giải thích nguyên nhân bình thường trong văn nói/viết. (Đúng)",
          "ゆえである: Cũng được, nhưng sẽ làm câu rất cứng, ở đây chọn dạng thường.",
          "せいではない/わけではない: Phủ định nguyên nhân.",
        ],
      },
      {
        id: "15-3",
        content:
          "彼が厳しく指導するのは、部下の成長を本気で願っている___にほかならない。",
        answers: ["から", "ため", "ゆえ", "せい"],
        correctAnswer: 2,
        memo: [
          "ゆえ: 'Chính vì', dạng danh từ hóa, phù hợp với ～ゆえに/ゆえの構造. (Đúng)",
          "から/ため: Nghĩa 'vì' nhưng nếu dùng sẽ làm trùng cấu trúc với にほかならない.",
          "せい: Thường dùng cho nguyên nhân tiêu cực.",
        ],
      },
    ],
  },
  {
    front: "～やたらに",
    back: [
      "✨ Một cách kinh khủng/bừa bãi/quá mức (không suy nghĩ, không kiểm soát)",
    ],
    more: [
      "🧩 やたらに / やたらと + V",
      "⚖️ ～むやみに, ～無闇に",
      "📝 ví dụ",
      "・やたらに人に話しかけるべきではない",
      "・最近やたらと喉が渇く",
    ],
    questions: [
      {
        id: "16-1",
        content: "医者を___信じてはいけない。自分でも情報を集めるべきだ。",
        answers: ["やたらに", "真剣に", "慎重に", "十分に"],
        correctAnswer: 0,
        memo: [
          "やたらに: 'Mù quáng/bừa bãi', tin quá mức không suy nghĩ. (Đúng)",
          "真剣に/慎重に/十分に: Đều mang nghĩa tích cực.",
        ],
      },
      {
        id: "16-2",
        content: "ネット上の情報を___信じるのは危険だ。",
        answers: ["むやみに", "やたらに", "慎重に", "正しく"],
        correctAnswer: 0,
        memo: [
          "むやみに: 'Một cách thiếu suy nghĩ, bừa bãi', gần nghĩa với やたらに. (Đúng)",
          "やたらに: Cũng gần nghĩa, nhưng ở đây chọn 1 đáp án đúng là cấu trúc tương tự khác.",
          "慎重に/正しく: Không mang nghĩa 'bừa bãi'.",
        ],
      },
      {
        id: "16-3",
        content:
          "最近、彼はやたらと高いものばかり買っているが、将来のことを考えると___使うべきだと思う。",
        answers: ["慎重に", "やたらに", "無駄に", "適当に"],
        correctAnswer: 0,
        memo: [
          "慎重に: 'Một cách thận trọng', trái nghĩa với やたらに, là lời khuyên phù hợp. (Đúng)",
          "やたらに/無駄に/適当に: Đều chỉ cách dùng tiền không tốt.",
        ],
      },
    ],
  },
  {
    front: "～ないではおかない",
    back: [
      "✨ Không thể không..., chắc chắn sẽ... (kết quả tất yếu, cảm xúc/hành động khó tránh)",
    ],
    more: [
      "🧩 Vない + ではおかない",
      "⚖️ ～ずにはおかない, ～に違いない",
      "📝 ví dụ",
      "・この映画は見る人を感動させないではおかない",
      "・彼の態度は批判を招かないではおかないだろう",
    ],
    questions: [
      {
        id: "17-1",
        content: "あのスピーチは聞く人を感動させ___。",
        answers: [
          "ないではおかない",
          "ずにはすまない",
          "ざるを得ない",
          "ないことはない",
        ],
        correctAnswer: 0,
        memo: [
          "ないではおかない: 'Thế nào cũng làm cho người nghe cảm động'. (Đúng)",
          "ずにはすまない: 'Không làm thì không xong', nói về nghĩa vụ.",
          "ざるを得ない: 'Buộc phải làm', khác nghĩa.",
          "ないことはない: 'Không phải là không', yếu hơn.",
        ],
      },
      {
        id: "17-2",
        content: "彼の無責任な発言は、批判を招か___だろう。",
        answers: [
          "ないではおかない",
          "ずにはすまない",
          "ざるを得ない",
          "ないことはない",
        ],
        correctAnswer: 0,
        memo: [
          "ないではおかない: 'Nhất định sẽ gây ra phê phán'. (Đúng)",
          "ずにはすまない: Nghĩa 'không thể không làm' (về hành động của người nói).",
        ],
      },
      {
        id: "17-3",
        content: "その問題については、謝ら___すまないと思う。",
        answers: ["ずには", "ないでは", "なくては", "ないで"],
        correctAnswer: 0,
        memo: [
          "ずには: Một phần của ～ずにはすまない: 'Không xin lỗi thì không xong'. (Đúng)",
          "ないでは/なくては/ないで: Chưa hoàn chỉnh cấu trúc.",
        ],
      },
    ],
  },
  {
    front: "わ...わ",
    back: ["✨ ... ơi là ... (nhấn mạnh cảm xúc, thường lặp NわNわ)"],
    more: [
      "🧩 N + わ + N + わ",
      "⚖️ ～だの～だの, ～たり～たり",
      "📝 ví dụ",
      "・彼は泣くわ叫ぶわで大騒ぎだった",
      "・勉強するわアルバイトするわで毎日忙しい",
    ],
    questions: [
      {
        id: "18-1",
        content: "彼女は泣く___叫ぶ___で、周りの人を驚かせた。",
        answers: ["わ...わ", "だの...だの", "たり...たり", "やら...やら"],
        correctAnswer: 0,
        memo: [
          "わ...わ: Diễn tả 'nào là khóc, nào là la hét' rất ầm ĩ. (Đúng)",
          "だの...だの: Liệt kê phàn nàn.",
          "たり...たり: Liệt kê hành động luân phiên, nhưng không nhấn sự hỗn loạn.",
          "やら...やら: Liệt kê lộn xộn.",
        ],
      },
      {
        id: "18-2",
        content: "今週はレポートを書く___発表の準備をする___で、寝る暇もない。",
        answers: ["わ...わ", "たり...たり", "だの...だの", "やら...やら"],
        correctAnswer: 0,
        memo: [
          "わ...わ: Nhấn mạnh hai việc chồng chất. (Đúng)",
          "たり...たり: Trung tính hơn.",
          "だの/やら: Sắc thái khác.",
        ],
      },
      {
        id: "18-3",
        content: "雨が降る___やむ___で、洗濯物が全然乾かない。",
        answers: ["やら...やら", "わ...わ", "たり...たり", "だの...だの"],
        correctAnswer: 0,
        memo: [
          "やら...やら: 'Lúc thì mưa, lúc thì tạnh', mô tả hiện tượng lộn xộn. (Đúng)",
          "わ...わ: Nhấn mạnh cảm xúc ầm ĩ, không hợp.",
          "たり...たり: Cũng được, nhưng ở đây chọn やら...やら để so sánh.",
          "だの...だの: Dùng cho phàn nàn.",
        ],
      },
    ],
  },
  {
    front: "むやみに",
    back: ["✨ Một cách bừa bãi, thiếu suy nghĩ (không tính toán hậu quả)"],
    more: [
      "🧩 むやみに / むやみやたらに",
      "⚖️ ～やたらに, ～考えなしに",
      "📝 ví dụ",
      "・むやみに薬を飲んではいけない",
      "・むやみに人を信用すべきではない",
    ],
    questions: [
      {
        id: "19-1",
        content: "むやみに薬を飲む___、かえって体を壊してしまうこともある。",
        answers: ["と", "なら", "から", "ので"],
        correctAnswer: 0,
        memo: [
          "と: Nối với vế kết quả tự nhiên: 'hễ uống bừa bãi thì...'. (Đúng)",
          "なら/から/ので: Mang nghĩa điều kiện/lý do khác.",
        ],
      },
      {
        id: "19-2",
        content: "情報が多いからといって、___信じていいわけではない。",
        answers: ["むやみに", "慎重に", "十分に", "真剣に"],
        correctAnswer: 0,
        memo: [
          "むやみに: 'Bừa bãi mà tin', đúng ý câu. (Đúng)",
          "Các đáp án khác đều tích cực.",
        ],
      },
      {
        id: "19-3",
        content: "ネット上の噂をやたらに信じるのは、___危険だ。",
        answers: ["むしろ", "むやみに", "必ずしも", "それほど"],
        correctAnswer: 0,
        memo: [
          "むしろ: 'Ngược lại, còn...', phù hợp để nhấn mạnh mức độ nguy hiểm. (Đúng)",
          "むやみに: Nếu chọn sẽ lặp cấu trúc, không tự nhiên.",
          "必ずしも/それほど: Nghĩa khác.",
        ],
      },
    ],
  },
  {
    front: "～べく",
    back: ["✨ Để..., với mục đích... (văn viết, trang trọng)"],
    more: [
      "🧩 Vる + べく",
      "⚖️ ～ために, ～ように",
      "📝 ví dụ",
      "・合格すべく、毎日勉強している",
      "・問題を解決すべく、専門家が集まった",
    ],
    questions: [
      {
        id: "20-1",
        content: "合格す___、彼は一日も休まず勉強を続けた。",
        answers: ["べく", "ため", "ように", "ものの"],
        correctAnswer: 0,
        memo: [
          "べく: Văn trang trọng, nhấn mạnh mục đích. (Đúng)",
          "ため/ように: Cũng là 'để', nhưng dạng khác.",
        ],
      },
      {
        id: "20-2",
        content: "環境問題を解決___、国際会議が開かれた。",
        answers: ["するべく", "するために", "してから", "しているうちに"],
        correctAnswer: 1,
        memo: [
          "するために: Cấu trúc mục đích thông dụng. (Đúng)",
          "するべく: Có thể dùng, nhưng thường là Vべく + V2 cùng chủ ngữ, ở đây chọn cấu trúc tương tự khác.",
        ],
      },
      {
        id: "20-3",
        content: "事故を起こさない___、十分に注意して運転してください。",
        answers: ["ように", "べく", "ため", "こと"],
        correctAnswer: 0,
        memo: [
          "ように: Dùng với động từ mang tính kết quả mong muốn (事故を起こさないように). (Đúng)",
          "べく/ため: Có thể, nhưng ように thông dụng hơn trong hướng dẫn.",
        ],
      },
    ],
  },
  {
    front: "であれ～であれ",
    back: ["✨ Dù là... hay là... (trường hợp nào cũng...) "],
    more: [
      "🧩 NであれNであれ / AであれBであれ",
      "⚖️ ～にしろ～にしろ, ～ても～ても",
      "📝 ví dụ",
      "・大人であれ子どもであれ、礼儀は大切だ",
      "・結果が成功であれ失敗であれ、挑戦したことに意味がある",
    ],
    questions: [
      {
        id: "21-1",
        content: "金持ち___貧乏人___、命の重さは同じだ。",
        answers: [
          "であれ...であれ",
          "にしろ...にしろ",
          "だろうと...だろうと",
          "でも...でも",
        ],
        correctAnswer: 0,
        memo: [
          "であれ...であれ: Văn phong trang trọng, phù hợp với câu mang tính khẳng định chung. (Đúng)",
          "にしろ...にしろ/だろうと...だろうと/でも...でも: Các mẫu tương tự, nhưng ở đây chọn cấu trúc chính.",
        ],
      },
      {
        id: "21-2",
        content: "晴れ___雨___、試合は予定どおり行われる。",
        answers: [
          "であれ...であれ",
          "にしろ...にしろ",
          "でも...でも",
          "だろうと...だろうと",
        ],
        correctAnswer: 2,
        memo: [
          "でも...でも: 'Dù nắng hay mưa', tự nhiên trong văn nói. (Đúng)",
          "であれ/にしろ/だろうと: Đều trang trọng hơn, nhưng cũng tương đương về nghĩa.",
        ],
      },
      {
        id: "21-3",
        content: "学生であれ社会人であれ、常に学び続ける姿勢が大切___。",
        answers: ["だ", "であれ", "にしろ", "ことだ"],
        correctAnswer: 0,
        memo: [
          "だ: Kết thúc bình thường của câu khẳng định. (Đúng)",
          "であれ/にしろ: Đã dùng ở đầu câu.",
          "ことだ: Dùng khi đưa ra lời khuyên trực tiếp.",
        ],
      },
    ],
  },
  {
    front: "ことなしに",
    back: ["✨ Nếu không..., mà không... (thiếu điều kiện đó thì không thể)"],
    more: [
      "🧩 Vる + ことなしに",
      "⚖️ ～ないで, ～ずに",
      "📝 ví dụ",
      "・努力することなしに成功はあり得ない",
      "・説明することなしに理解を求めるのは無理だ",
    ],
    questions: [
      {
        id: "22-1",
        content: "努力すること___、成功を手に入れた人はいない。",
        answers: ["なしに", "なくて", "ないで", "ずに"],
        correctAnswer: 0,
        memo: [
          "なしに: 'Mà không', đúng mẫu ことなしに. (Đúng)",
          "ないで/ずに: Cũng 'mà không', nhưng cấu trúc khác.",
        ],
      },
      {
        id: "22-2",
        content: "挨拶もする___、いきなり本題に入るのは失礼だ。",
        answers: ["ことなしに", "ことなく", "ことから", "ことなら"],
        correctAnswer: 1,
        memo: [
          "ことなく: Dạng phó từ, 'mà không hề', tự nhiên hơn với Vることなく. (Đúng)",
          "ことなしに: Cũng gần nghĩa nhưng hay dùng với danh từ抽象 hơn.",
        ],
      },
      {
        id: "22-3",
        content: "十分な説明をすること___、相手に理解を求めるのは難しい。",
        answers: ["なしに", "なくて", "から", "だけで"],
        correctAnswer: 0,
        memo: [
          "なしに: Không có sự giải thích đầy đủ thì khó được hiểu. (Đúng)",
          "なくて/から/だけで: Không phải cấu trúc nhấn mạnh 'thiếu điều kiện'.",
        ],
      },
    ],
  },
  {
    front: "... とされている",
    back: [
      "✨ Được coi là, được cho là (quan điểm chung, không khẳng định tuyệt đối)",
    ],
    more: [
      "🧩 N + とされている",
      "⚖️ ～と言われている, ～と考えられている",
      "📝 ví dụ",
      "・この薬は副作用が少ないとされている",
      "・その説は最も有力だとされている",
    ],
    questions: [
      {
        id: "23-1",
        content: "この地域は地震が起こりやすい地域だ___。",
        answers: ["とされている", "と言われている", "と見える", "とみなされる"],
        correctAnswer: 0,
        memo: [
          "とされている: Văn viết, trung lập. (Đúng)",
          "と言われている: Gần nghĩa nhưng thiên về 'lời đồn'.",
          "と見える: Suy đoán.",
          "とみなされる: 'Bị coi là', sắc thái pháp lý.",
        ],
      },
      {
        id: "23-2",
        content:
          "この習慣は、昔から日本独自の文化だ___が、最近では海外でも見られるようになった。",
        answers: ["とされている", "と見える", "と言い", "と思い"],
        correctAnswer: 0,
        memo: [
          "とされている: 'Vẫn được coi là...', hợp.",
          "と見える: Suy đoán của người nói.",
        ],
      },
      {
        id: "23-3",
        content: "この植物は、毒性が強い___、触らないほうがいい。",
        answers: [
          "とされているので",
          "と言われているから",
          "と思われているから",
          "と見られるので",
        ],
        correctAnswer: 1,
        memo: [
          "と言われているから: Nói 'vì người ta bảo là có độc' nên đừng chạm. (Đúng)",
          "とされているので: Cũng được, nhưng ở đây chọn cấu trúc tương tự khác.",
        ],
      },
    ],
  },
  {
    front: "にいわせれば",
    back: ["✨ Theo ý kiến của..., nếu để ... nói thì..."],
    more: [
      "🧩 N + にいわせれば",
      "⚖️ ～の意見では, ～に言わせると",
      "📝 ví dụ",
      "・彼にいわせれば、そんなのは常識だ",
      "・専門家にいわせれば、その考え方は古いそうだ",
    ],
    questions: [
      {
        id: "24-1",
        content: "医者___、この薬はそれほど危険ではないそうだ。",
        answers: ["にいわせれば", "の話では", "によると", "にしてみれば"],
        correctAnswer: 0,
        memo: [
          "にいわせれば: 'Theo lời bác sĩ mà nói thì...'. (Đúng)",
          "の話では/によると: Cũng 'theo', nhưng sắc thái khác.",
          "にしてみれば: 'Đứng trên lập trường của'.",
        ],
      },
      {
        id: "24-2",
        content: "親___、子どもの幸せが一番大事だろう。",
        answers: ["にしてみれば", "にいわせれば", "によれば", "にとって"],
        correctAnswer: 0,
        memo: [
          "にしてみれば: 'Đối với (nếu đứng trên lập trường của) cha mẹ'. (Đúng)",
          "にいわせれば: Thường dùng khi trích dẫn phát ngôn.",
          "によれば: 'Theo (thông tin)', không nhấn góc nhìn.",
        ],
      },
      {
        id: "24-3",
        content: "私___、この計画はリスクが高すぎると思う。",
        answers: ["に言わせれば", "にいわせれば", "にとって", "から見ると"],
        correctAnswer: 1,
        memo: [
          "にいわせれば: 'Nếu để tôi nói thì...' – tự nhiên. (Đúng)",
          "に言わせれば: Cách viết khác nhưng ít dùng hơn.",
        ],
      },
    ],
  },
  {
    front: "～でなくてなんだろう",
    back: ["✨ Nếu không phải là... thì là gì? (khẳng định mạnh)"],
    more: [
      "🧩 N + でなくてなんだろう",
      "⚖️ ～に違いない, ～そのものだ",
      "📝 ví dụ",
      "・これが愛でなくてなんだろう",
      "・この景色はまさに絶景でなくてなんだろう",
    ],
    questions: [
      {
        id: "25-1",
        content: "この気持ちが恋___。",
        answers: [
          "でなくてなんだろう",
          "ではないだろう",
          "に違いない",
          "そのものだ",
        ],
        correctAnswer: 0,
        memo: [
          "でなくてなんだろう: 'Nếu không phải là tình yêu thì là gì nữa'. (Đúng)",
          "に違いない/そのものだ: Cũng mạnh, nhưng không mang sắc thái tu từ nghi vấn.",
        ],
      },
      {
        id: "25-2",
        content: "この出来事は、奇跡___と思えるほどのタイミングだった。",
        answers: ["としか", "に違いない", "でなくてなんだろう", "そのものだ"],
        correctAnswer: 0,
        memo: [
          "としか: Một phần của '～としか言いようがない' – 'chỉ có thể gọi là kỳ tích'. (Đúng)",
          "でなくてなんだろう: Có thể dùng nhưng ở đây chọn cấu trúc tương tự khác.",
        ],
      },
      {
        id: "25-3",
        content:
          "この優しさは愛情そのもの___、彼にとってかけがえのないものだ。",
        answers: ["であり", "でなくてなんだろう", "に違いない", "といえる"],
        correctAnswer: 0,
        memo: [
          "であり: Nối mệnh đề, 'chính là tình cảm'. (Đúng)",
          "でなくてなんだろう: Dạng nghi vấn tu từ, nhưng ở đây câu là khẳng định tiếp.",
        ],
      },
    ],
  },
  {
    front: "～なにしろ",
    back: ["✨ Dù gì thì..., nói gì thì nói... (nhấn mạnh lý do chính)"],
    more: [
      "🧩 なにしろ + lý do",
      "⚖️ ～とにかく, ～なにせ",
      "📝 ví dụ",
      "・なにしろ忙しくて、最近全然休めない",
      "・なにしろ初めてなもので、勝手がわからない",
    ],
    questions: [
      {
        id: "26-1",
        content: "なにしろ時間がない___、急いで準備しよう。",
        answers: ["ので", "から", "し", "わけで"],
        correctAnswer: 1,
        memo: [
          "から: Lý do trực tiếp: 'vì nói gì thì nói, không có thời gian'. (Đúng)",
          "ので/し/わけで: Các liên kết khác, nhưng thường dùng ～から với なにしろ.",
        ],
      },
      {
        id: "26-2",
        content: "なにしろ初心者___、失敗しても温かく見守ってください。",
        answers: ["なもので", "だから", "なので", "とはいえ"],
        correctAnswer: 0,
        memo: [
          "なもので: ～なもので: 'vì là ~ nên', hay đi với なにしろ. (Đúng)",
          "だから/なので: Cũng lý do nhưng sắc thái khác.",
          "とはいえ: 'Mặc dù nói vậy nhưng', trái hướng.",
        ],
      },
      {
        id: "26-3",
        content:
          "とにかく早く出発しよう。道が混むかどうかは、行ってみないとわからない___。",
        answers: ["からだ", "なにしろ", "にせよ", "にしても"],
        correctAnswer: 0,
        memo: [
          "からだ: Kết thúc câu giải thích lý do 'vì thế'. (Đúng)",
          "なにしろ: Thường đứng đầu câu làm trạng từ.",
        ],
      },
    ],
  },
  {
    front: "～さも",
    back: ["✨ Rất ư là..., trông y như là... (さも～そうに/さも～かのように)"],
    more: [
      "🧩 さも + Vる/い/な + そうに/げに",
      "⚖️ ～いかにも, ～まるで",
      "📝 ví dụ",
      "・彼はさも当然のように振る舞っている",
      "・彼女はさも嬉しげに笑った",
    ],
    questions: [
      {
        id: "27-1",
        content: "彼は___当然のことのように人の失敗を笑った。",
        answers: ["さも", "いかにも", "まるで", "とても"],
        correctAnswer: 0,
        memo: [
          "さも: 'Ra vẻ như là chuyện đương nhiên'. (Đúng)",
          "いかにも: Cũng nghĩa 'quả thật', nhưng đi với ～らしい hơn.",
          "まるで: 'Cứ như là', dùng cho so sánh.",
        ],
      },
      {
        id: "27-2",
        content: "彼女は___うれしそうにプレゼントの箱を開けた。",
        answers: ["いかにも", "さも", "まるで", "とても"],
        correctAnswer: 1,
        memo: [
          "さも: 'Trông rất là vui mừng', dùng với うれしそうに. (Đúng)",
          "いかにも: Cũng được, nhưng thường 'いかにも嬉しそうだ' – ở đây chọn cấu trúc chính.",
        ],
      },
      {
        id: "27-3",
        content: "彼は___悪人のような顔をしているが、実は優しい人だ。",
        answers: ["いかにも", "さも", "とても", "まったく"],
        correctAnswer: 0,
        memo: [
          "いかにも: 'Quả thực trông đúng kiểu ~', hợp với ～悪人のような顔. (Đúng)",
          "さも: Hay đi với ～そうに/～げに.",
        ],
      },
    ],
  },
  {
    front: "… からとて",
    back: [
      "✨ Dù là vì..., cho dù... đi nữa thì cũng không... (văn viết, phủ định kỳ vọng)",
    ],
    more: [
      "🧩 普通形 + からとて",
      "⚖️ ～からといって, ～とはいえ",
      "📝 ví dụ",
      "・忙しいからとて、約束を破っていいわけではない",
      "・若いからとて、無責任が許されるわけではない",
    ],
    questions: [
      {
        id: "28-1",
        content: "子どもだから___、何をしても許されるわけではない。",
        answers: ["とて", "からとて", "からといって", "とはいえ"],
        correctAnswer: 2,
        memo: [
          "からといって: Mẫu khẩu ngữ hơn, 'dù là trẻ con đi nữa thì cũng không...'. (Đúng)",
          "からとて: Văn viết, nhưng hay dùng hơn trong câu văn trang trọng.",
          "とはいえ: 'Mặc dù... nhưng', nghĩa gần.",
        ],
      },
      {
        id: "28-2",
        content: "貧しい___、努力しなくていいということにはならない。",
        answers: ["からとて", "からといって", "とはいえ", "わけではなく"],
        correctAnswer: 0,
        memo: [
          "からとて: Văn viết: 'Dù có nghèo đến đâu cũng không có nghĩa là...'. (Đúng)",
          "からといって: Khẩu ngữ hơn.",
        ],
      },
      {
        id: "28-3",
        content: "外国人___、日本語が話せないとは限らない。",
        answers: ["だからといって", "からとて", "であるから", "にしても"],
        correctAnswer: 0,
        memo: [
          "だからといって: 'Dù là người nước ngoài đi nữa, cũng không hẳn là...'. (Đúng)",
          "からとて/であるから/にしても: Các mẫu lý do/giả định khác.",
        ],
      },
    ],
  },
  {
    front: "～としたことが",
    back: [
      "✨ (Ai đó) như thế mà lại... (ngạc nhiên/trách nhẹ, thường đi với người vốn có năng lực)",
    ],
    more: [
      "🧩 N + としたことが",
      "⚖️ ～くせに, ～とは",
      "📝 ví dụ",
      "・彼としたことが、こんなミスをするなんて信じられない",
      "・しっかり者の彼女としたことが、財布を忘れるなんて",
    ],
    questions: [
      {
        id: "29-1",
        content: "一流企業の部長___、こんな初歩的なミスをするなんて。",
        answers: ["としたことが", "とは", "くせに", "からして"],
        correctAnswer: 0,
        memo: [
          "としたことが: 'Đã là giám đốc công ty lớn như ông ấy mà lại...'. (Đúng)",
          "とは: Cũng diễn tả ngạc nhiên nhưng cấu trúc khác.",
        ],
      },
      {
        id: "29-2",
        content: "彼___、約束の時間に遅れるなんて、本当に珍しいことだ。",
        answers: ["としたことが", "にしては", "からして", "に限って"],
        correctAnswer: 0,
        memo: [
          "としたことが: Dùng với người vốn cẩn thận mà nay lại lỡ. (Đúng)",
          "にしては: 'So với', nghĩa khác.",
        ],
      },
      {
        id: "29-3",
        content: "彼女___、そんな簡単な問題も解けないなんて。",
        answers: ["にしては", "に限って", "としても", "からして"],
        correctAnswer: 0,
        memo: [
          "にしては: 'So với cô ấy (vốn giỏi) mà lại không giải được', cũng là dạng bất ngờ. (Đúng)",
          "に限って/としても/からして: Mẫu khác.",
        ],
      },
    ],
  },
  {
    front: "～このぶんでは",
    back: ["✨ Cứ đà này thì..., với tình hình này thì... (dự đoán)"],
    more: [
      "🧩 このぶんでは + phán đoán tương lai",
      "⚖️ ～この調子だと, ～いきおいで",
      "📝 ví dụ",
      "・このぶんでは、試験に合格するのは難しいかもしれない",
      "・このぶんでは、彼はトップでゴールしそうだ",
    ],
    questions: [
      {
        id: "30-1",
        content: "このぶんでは、今年中に工事が終わるのは___。",
        answers: ["難しそうだ", "間違いない", "不可能ではない", "あり得ない"],
        correctAnswer: 0,
        memo: [
          "難しそうだ: 'Có vẻ khó', phù hợp với dự đoán. (Đúng)",
          "間違いない/あり得ない: Quá chắc chắn.",
        ],
      },
      {
        id: "30-2",
        content: "この調子だと、優勝も夢ではない___。",
        answers: ["かもしれない", "に違いない", "わけではない", "という"],
        correctAnswer: 0,
        memo: [
          "かもしれない: 'Cũng không hẳn là không thể', phù hợp với '夢ではない'. (Đúng)",
          "に違いない: Quá chắc chắn.",
        ],
      },
      {
        id: "30-3",
        content:
          "このまま練習を続けていけば、いずれ夢を実現できる日が来る___。",
        answers: ["だろう", "はずだ", "かもしれない", "に違いない"],
        correctAnswer: 0,
        memo: [
          "だろう: Dự đoán mềm, phù hợp. (Đúng)",
          "はずだ/かもしれない/に違いない: Mức độ chắc chắn khác.",
        ],
      },
    ],
  },
];
