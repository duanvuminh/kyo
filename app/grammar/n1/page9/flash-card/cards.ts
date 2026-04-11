import { FlashCardItem } from "@/shared/component/flash-card/flash-card";

export const cards: FlashCardItem[] = [
  {
    front: "～とあれば",
    back: [
      "✨ Nếu là vì... thì (sẵn lòng làm vì điều kiện đặc biệt)",
      "・Ví dụ: Nếu là vì con thì tôi sẽ chịu đựng bất cứ việc gì.",
      "📌 Điều kiện đặc biệt ở vế trước. Vế sau thể hiện sự sẵn lòng, nỗ lực.",
    ],
    more: [
      "🧩 N / V通常形 + とあれば",
      "⚖️ ～なら (điều kiện thông thường), とあれば nhấn điều kiện đặc biệt, động lực mạnh",
      "💬 Thường thể hiện sự hy sinh, cống hiến vì ai đó hoặc điều gì đó quan trọng.",
      "📝 Ví dụ:",
      "・子供のためとあれば、どんな苦労も厭わない。",
    ],
    questions: [
      {
        id: "9-1",
        content: "彼女のため___、どこへでも行く覚悟がある。",
        answers: ["とあれば", "たら最後", "ようでは", "くらいなら"],
        correctAnswer: 0,
        memo: [
          "とあれば: Nếu là vì cô ấy thì sẵn sàng đi bất cứ đâu — điều kiện đặc biệt, sẵn lòng. (Đúng)",
          "たら最後: Nếu xảy ra thì kết quả tồi — sắc thái tiêu cực, không phù hợp.",
          "ようでは: Nếu cứ như vậy thì lo ngại — không phù hợp.",
          "くらいなら: Thà làm cái khác còn hơn — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～たら最後・～が最後",
    back: [
      "✨ Một khi đã...thì (chắc chắn kết quả tồi tệ)",
      "・Ví dụ: Nếu đưa tiền cho anh ấy giữ thì xài vào cái gì cũng không biết.",
      "📌 Nếu việc đó xảy ra thì chắc chắn sẽ rất tồi tệ. Nhấn hậu quả không thể tránh.",
    ],
    more: [
      "🧩 Vた + ら最後 / Vた + が最後",
      "⚖️ ～たら (điều kiện thông thường), たら最後 nhấn hậu quả tồi tệ không thể đảo ngược",
      "💬 Vế sau thường là hậu quả tiêu cực, chắc chắn xảy ra.",
      "📝 Ví dụ:",
      "・彼にお金を持たせたら最後、何に使うかわからない。",
    ],
    questions: [
      {
        id: "9-2",
        content: "あの人に秘密を話し___、すぐに広まってしまう。",
        answers: ["たら最後", "とあれば", "ようでは", "なしには"],
        correctAnswer: 0,
        memo: [
          "たら最後: Một khi đã nói bí mật cho người đó thì chắc chắn sẽ bị lan ra ngay — hậu quả tồi tệ không tránh được. (Đúng)",
          "とあれば: Điều kiện đặc biệt, sẵn lòng — không phù hợp ngữ cảnh hậu quả tiêu cực.",
          "ようでは: Nếu cứ như vậy thì lo ngại — không phù hợp cấu trúc.",
          "なしには: Nếu không có thì không — không phù hợp.",
        ],
      },
      {
        id: "9-3",
        content: "「たら最後」の後ろに来る表現として正しいものはどれか。",
        answers: [
          "ポジティブな結果（～て嬉しい）",
          "ネガティブな・避けられない結果",
          "中立な状況説明",
          "命令文（～しなさい）",
        ],
        correctAnswer: 1,
        memo: [
          "ポジティブな結果（～て嬉しい）: Sai — たら最後 luôn đi với hậu quả tiêu cực.",
          "ネガティブな・避けられない結果: Đúng — hậu quả tồi tệ không thể tránh được. (Đúng)",
          "中立な状況説明: Sai — không trung tính.",
          "命令文（～しなさい）: Sai — không dùng với mệnh lệnh.",
        ],
      },
    ],
  },
  {
    front: "～ようでは",
    back: [
      "✨ Nếu cứ...thế thì (lo ngại về tương lai)",
      "・Ví dụ: Nếu cứ hay quên như thế này thì tương lai phía trước thật đáng lo.",
      "📌 Thái độ/hành động không tốt ở vế trước → kết quả không tốt ở vế sau.",
    ],
    more: [
      "🧩 体通常形（Aな-な/である / N-である）+ ようでは",
      "⚖️ ～ようなら (nếu có vẻ như vậy, trung tính), ようでは mang lo ngại/phê bình",
      "📝 Ví dụ:",
      "・こんなにすぐ忘れるようでは、先が思いやられる。",
    ],
    questions: [
      {
        id: "9-4",
        content: "そんな簡単なことも知らない___、仕事にならない。",
        answers: ["ようでは", "とあれば", "たら最後", "くらいなら"],
        correctAnswer: 0,
        memo: [
          "ようでは: Nếu cứ không biết những điều đơn giản như thế thì không thể làm việc được — lo ngại. (Đúng)",
          "とあれば: Điều kiện đặc biệt, sẵn lòng — không phù hợp ngữ cảnh lo ngại.",
          "たら最後: Một khi đã xảy ra thì tồi — không phù hợp cấu trúc.",
          "くらいなら: Thà làm cái khác — không phù hợp.",
        ],
      },
    ],
  },
  {
    front: "～なしに（は）・なしでは・なくして（は）",
    back: [
      "✨ Nếu không có... thì không thể (điều kiện cần thiết)",
      "・Ví dụ: Nếu không đảm bảo được tiền vốn thì bất cứ kế hoạch gì cũng không thực hiện được.",
      "📌 A là điều kiện không thể thiếu để B thực hiện được.",
    ],
    more: [
      "🧩 N / V辞書形 + なしに（は）/ なしでは / なくして（は）",
      "⚖️ ～がなければ (nếu không có, thông thường), なしには trang trọng hơn, văn viết",
      "📝 Ví dụ:",
      "・資金を確保することなしには、どんな計画も実行できない。",
    ],
    questions: [
      {
        id: "9-5",
        content: "皆の協力___、このプロジェクトは成功しなかっただろう。",
        answers: ["なしには", "とあれば", "ようでは", "くらいなら"],
        correctAnswer: 0,
        memo: [
          "なしには: Nếu không có sự hợp tác của mọi người thì dự án không thành công — điều kiện cần. (Đúng)",
          "とあれば: Điều kiện đặc biệt, sẵn lòng — không phù hợp.",
          "ようでは: Lo ngại về hành động — không phù hợp.",
          "くらいなら: Thà làm cái khác — không phù hợp.",
        ],
      },
      {
        id: "9-6",
        content: "努力する___、夢は実現しない。",
        answers: ["なしに", "とあれば", "たら最後", "ようでは"],
        correctAnswer: 0,
        memo: [
          "なしに: Nếu không nỗ lực thì ước mơ không thành hiện thực — V辞書形 + なしに. (Đúng)",
          "とあれば: Điều kiện đặc biệt, sẵn lòng — nghĩa ngược lại.",
          "たら最後: Hậu quả tồi tệ — không phù hợp cấu trúc.",
          "ようでは: Lo ngại — không phù hợp ở đây.",
        ],
      },
    ],
  },
  {
    front: "～くらいなら",
    back: [
      "✨ Thà...còn hơn phải (so sánh, chọn cái ít tệ hơn)",
      "・Ví dụ: So với phải lên xe buýt chật ních người thì thà đi bộ 25 phút còn hơn.",
      "📌 Tình trạng không mong đợi ở vế trước. Vế sau là giải pháp ít tệ hơn.",
    ],
    more: [
      "🧩 V辞書形 + くらいなら",
      "⚖️ ～より (so sánh trung tính), くらいなら nhấn mạnh sự không muốn, thà chọn cái khác",
      "💬 Vế trước là điều không mong muốn. Vế sau là điều ít xấu hơn.",
      "📝 Ví dụ:",
      "・満員バスに乗るくらいなら、25分歩いて駅に行く方がましだ。",
    ],
    questions: [
      {
        id: "9-7",
        content: "あんな人に頭を下げる___、仕事を辞めた方がいい。",
        answers: ["くらいなら", "とあれば", "たら最後", "なしには"],
        correctAnswer: 0,
        memo: [
          "くらいなら: So với phải cúi đầu trước người như vậy thì thà nghỉ việc còn hơn — chọn cái ít tệ hơn. (Đúng)",
          "とあれば: Điều kiện đặc biệt — không phù hợp ngữ cảnh so sánh.",
          "たら最後: Hậu quả tồi tệ — không phù hợp.",
          "なしには: Điều kiện cần — không phù hợp.",
        ],
      },
      {
        id: "9-8",
        content: "「くらいなら」の前後の関係として正しいものはどれか。",
        answers: [
          "前：望ましい状況、後：より良い選択",
          "前：望ましくない状況、後：それよりはましな選択",
          "前：条件、後：当然の結果",
          "前：原因、後：結果",
        ],
        correctAnswer: 1,
        memo: [
          "前：望ましい状況、後：より良い選択: Sai — vế trước là tình trạng không mong muốn.",
          "前：望ましくない状況、後：それよりはましな選択: Đúng — vế trước không mong muốn, vế sau ít tệ hơn. (Đúng)",
          "前：条件、後：当然の結果: Đây là đặc điểm của とあれば.",
          "前：原因、後：結果: Không mô tả đúng くらいなら.",
        ],
      },
    ],
  },
];
