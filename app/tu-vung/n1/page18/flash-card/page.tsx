import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "貧困層が急速に広がる",
    back: ["- ひんこんそう", "- tầng lớp nghèo khổ tăng nhanh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 経済危機で貧困層が急速に広がった。 (Tầng lớp nghèo khổ mở rộng nhanh chóng do khủng hoảng kinh tế.)",
      "❗ Ghi chú: 貧困 (ひんこん) = nghèo đói. 層 (そう) = tầng lớp. Đối lập: 富裕層 (ふゆうそう) = tầng lớp giàu.",
    ],
  },
  {
    front: "少子高齢化が進む",
    back: ["- しょうしこうれいか", "- dân số già thiếu trẻ em tăng nhanh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 日本では少子高齢化が進んでいる。 (Ở Nhật Bản, tình trạng ít trẻ em và nhiều người già ngày càng tiến triển.)",
      "❗ Ghi chú: 少子 = ít trẻ em. 高齢化 = già hóa. Đây là vấn đề lớn của Nhật.",
    ],
  },
  {
    front: "出生率が低下する",
    back: ["- しゅっしょうりつ", "- tỉ lệ sinh bị giảm sút"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 日本の出生率は年々低下している。 (Tỉ lệ sinh ở Nhật giảm qua mỗi năm.)",
      "❗ Ghi chú: 出生率 = tỉ lệ sinh. 低下 (ていか) = giảm xuống. Đối lập: 死亡率 (しぼうりつ) = tỉ lệ tử vong.",
    ],
  },
  {
    front: "いよいよ還暦を迎える",
    back: ["- かんれき", "- cuối cùng đã đến tuổi 60"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: いよいよ還暦を迎え、家族でお祝いをした。 (Cuối cùng đã đến tuổi 60, cả gia đình tổ chức ăn mừng.)",
      "❗ Ghi chú: 還暦 = tròn 60 tuổi (chu kỳ 60 năm của lịch can chi). いよいよ = cuối cùng, đã đến lúc.",
    ],
  },
  {
    front: "産休を取る",
    back: ["- さんきゅう", "- nghỉ sinh con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 来月から産休を取る予定だ。 (Dự định nghỉ thai sản từ tháng sau.)",
      "❗ Ghi chú: 産休 = 産前産後休業 (nghỉ trước và sau khi sinh). Khác: 育休 (いくきゅう) = nghỉ nuôi con.",
    ],
  },
  {
    front: "育休を取る",
    back: ["- いくきゅう", "- nghỉ chăm con"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 父親も育休を取ることが増えている。 (Ngày càng nhiều ông bố cũng nghỉ chăm con.)",
      "❗ Ghi chú: 育休 = 育児休業. Có thể cả bố lẫn mẹ đều được nghỉ.",
    ],
  },
  {
    front: "仕事と育児を両立させる",
    back: ["- りょうりつ", "- làm song song công việc và nuôi dạy con cái"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 仕事と育児を両立させるのは大変だ。 (Vừa làm việc vừa nuôi con là rất vất vả.)",
      "❗ Ghi chú: 両立 (りょうりつ) = cân bằng hai việc cùng lúc. Gần nghĩa: 掛け持ち (かけもち) = làm nhiều việc.",
    ],
  },
  {
    front: "福利厚生を充実させる",
    back: ["- ふくりこうせい", "- chăm lo đầy đủ an sinh phúc lợi"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 従業員のために福利厚生を充実させた。 (Cải thiện phúc lợi cho nhân viên.)",
      "❗ Ghi chú: 福利厚生 = chế độ phúc lợi (bảo hiểm, nghỉ phép, trợ cấp...). 充実 = đầy đủ, phong phú.",
    ],
  },
  {
    front: "発展途上国",
    back: ["- はってんとじょうこく", "- nước đang phát triển"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 発展途上国への支援が必要だ。 (Cần hỗ trợ cho các nước đang phát triển.)",
      "❗ Ghi chú: 発展途上 = đang trên con đường phát triển. Đối lập: 先進国 (せんしんこく) = nước phát triển.",
    ],
  },
  {
    front: "老後に備える",
    back: ["- ろうごにそなえる", "- chuẩn bị cho tuổi già"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 若いうちから老後に備えて貯金する。 (Tiết kiệm từ khi còn trẻ để chuẩn bị cho tuổi già.)",
      "❗ Ghi chú: 老後 (ろうご) = thời kỳ sau khi về hưu. 備える (そなえる) = chuẩn bị, đề phòng.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 18
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
