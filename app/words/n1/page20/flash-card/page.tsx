import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "前途洋々",
    back: ["- ぜんとようよう", "- tiền đồ tươi sáng"],
    more: [
      "📚 Từ loại: Cụm từ (yojijukugo)",
      "📝 Ví dụ: 彼は前途洋々たる若者だ。 (Anh ấy là chàng trai có tiền đồ rộng mở.)",
      "❗ Ghi chú: 前途 = tương lai phía trước. 洋々 = rộng lớn, đầy hứa hẹn. Đối lập: 前途多難 = tương lai gian khó.",
    ],
  },
  {
    front: "前途多難",
    back: ["- ぜんとたなん", "- tiền đồ gian nan, đa nan"],
    more: [
      "📚 Từ loại: Cụm từ (yojijukugo)",
      "📝 Ví dụ: 計画は前途多難だが諦めない。 (Kế hoạch đầy gian nan nhưng không từ bỏ.)",
      "❗ Ghi chú: 多難 = nhiều khó khăn. Đây là thành ngữ 4 chữ Hán (四字熟語).",
    ],
  },
  {
    front: "隔月で雑誌を発売する",
    back: ["- かくげつ", "- phát hành tạp chí cách tháng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: この雑誌は隔月で発売される。 (Tạp chí này phát hành 2 tháng/lần.)",
      "❗ Ghi chú: 隔月 = cách tháng (tháng 1 có, tháng 2 không...). 隔週 (かくしゅう) = cách tuần.",
    ],
  },
  {
    front: "海に面した部屋",
    back: ["- めんした", "- phòng hướng ra biển"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 海に面した部屋に泊まりたい。 (Tôi muốn ở phòng hướng ra biển.)",
      "❗ Ghi chú: 面する (めんする) = đối mặt với, hướng về phía. 海に面した = nhìn ra biển.",
    ],
  },
  {
    front: "裏表のない性格",
    back: ["- うらおもて", "- tính cách không có hai mặt"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 彼女は裏表のない性格で信頼できる。 (Cô ấy có tính cách thẳng thắn, không hai mặt, đáng tin tưởng.)",
      "❗ Ghi chú: 裏表 (うらおもて) = mặt trước mặt sau, hai mặt. 裏表がない = không giả dối.",
    ],
  },
  {
    front: "区域に入る",
    back: ["- くいき", "- tiến vào khu vực"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 制限区域に入ることは禁止されている。 (Cấm vào khu vực hạn chế.)",
      "❗ Ghi chú: 区域 (くいき) = khu vực được phân ranh giới. Khác: 地域 (ちいき) = vùng, địa phương.",
    ],
  },
  {
    front: "条件が整う",
    back: ["- ととのう", "- các điều kiện đã được chuẩn bị chu đáo"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: ようやく条件が整ったので契約できる。 (Cuối cùng điều kiện đã đủ nên có thể ký hợp đồng.)",
      "❗ Ghi chú: 整う (ととのう) = được sắp xếp đầy đủ, hoàn chỉnh. Khác: 条件を満たす = thỏa mãn điều kiện.",
    ],
  },
  {
    front: "背後に人の気配を感じる",
    back: ["- はいご", "- cảm giác có người ở phía sau"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 背後に人の気配を感じてドキッとした。 (Cảm giác có người phía sau, giật mình.)",
      "❗ Ghi chú: 背後 (はいご) = phía sau lưng. 気配 (けはい) = dấu hiệu, hơi thở của ai đó.",
    ],
  },
  {
    front: "よい結果をもたらす",
    back: ["- もたらす", "- mang lại kết quả tốt"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 努力がよい結果をもたらした。 (Sự cố gắng đã mang lại kết quả tốt.)",
      "❗ Ghi chú: もたらす = mang lại, gây ra (kết quả, hậu quả). Dùng cho cả kết quả tốt lẫn xấu.",
    ],
  },
  {
    front: "完成の目途を立つ",
    back: ["- めど", "- định hướng hoàn thành công việc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: プロジェクト完成の目途が立った。 (Đã có phương hướng hoàn thành dự án.)",
      "❗ Ghi chú: 目途 (めど) = triển vọng, phương hướng cụ thể. 目途が立つ = có thể thấy được khả năng hoàn thành.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 20
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
