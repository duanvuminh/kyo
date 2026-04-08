import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "病気に立ち向かう",
    back: ["- びょうきにたちむかう", "- chống chọi với bệnh tật"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 病気に立ち向かう勇気が必要だ。 (Cần dũng cảm để chống chọi với bệnh tật.)",
      "❗ Ghi chú: 立ち向かう (たちむかう) = đối mặt, chống lại.",
    ],
  },
  {
    front: "病気の兆候に気づく",
    back: ["- びょうきのちょうこうにきづく", "- phát hiện; nhận ra dấu hiệu bệnh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 早めに病気の兆候に気づくことが大切だ。 (Việc phát hiện sớm dấu hiệu bệnh rất quan trọng.)",
      "❗ Ghi chú: 兆候 (ちょうこう) = dấu hiệu, triệu chứng ban đầu.",
    ],
  },
  {
    front: "持病がある",
    back: ["- じびょうがある", "- có bệnh mãn tính; có bệnh nền"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 持病があるので薬を欠かせない。 (Vì có bệnh mãn tính nên không thể thiếu thuốc.)",
      "❗ Ghi chú: 持病 (じびょう) = bệnh lâu năm, bệnh nền mãn tính.",
    ],
  },
  {
    front: "体の不調を訴える",
    back: ["- からだのふちょうをうったえる", "- than thở về sự bất ổn của cơ thể"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 医者に体の不調を訴えた。 (Than với bác sĩ về sự bất ổn của cơ thể.)",
      "❗ Ghi chú: 不調 (ふちょう) = trạng thái không ổn, không khỏe.",
    ],
  },
  {
    front: "栄養失調になる",
    back: ["- えいようしっちょうになる", "- bị suy dinh dưỡng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 偏食が続くと栄養失調になる。 (Ăn uống mất cân bằng kéo dài dễ bị suy dinh dưỡng.)",
      "❗ Ghi chú: 栄養失調 (えいようしっちょう) = suy dinh dưỡng.",
    ],
  },
  {
    front: "先天的な病気",
    back: ["- せんてんてきなびょうき", "- bệnh bẩm sinh"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 先天的な病気を持って生まれた。 (Sinh ra đã mang bệnh bẩm sinh.)",
      "❗ Ghi chú: 先天的 (せんてんてき) = bẩm sinh. Đối lập: 後天的 (こうてんてき) = mắc phải sau này.",
    ],
  },
  {
    front: "慢性の病気",
    back: ["- まんせいのびょうき", "- bệnh mãn tính"],
    more: [
      "📚 Từ loại: Cụm danh từ",
      "📝 Ví dụ: 慢性の病気は長期の治療が必要だ。 (Bệnh mãn tính cần điều trị dài hạn.)",
      "❗ Ghi chú: Đối lập: 急性の病気 (きゅうせい) = bệnh cấp tính.",
    ],
  },
  {
    front: "関節が外れる",
    back: ["- かんせつがはずれる", "- trật khớp"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 転んで肩の関節が外れた。 (Ngã khiến khớp vai bị trật.)",
      "❗ Ghi chú: 関節 (かんせつ) = khớp. 外れる (はずれる) = bị lệch, bị trật.",
    ],
  },
  {
    front: "微熱が出る",
    back: ["- びねつがでる", "- bị sốt nhẹ"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 風邪気味で微熱が出ている。 (Hơi bị cảm nên đang bị sốt nhẹ.)",
      "❗ Ghi chú: 微熱 (びねつ) = sốt nhẹ (thường 37~38°C).",
    ],
  },
  {
    front: "自覚症状",
    back: ["- じかくしょうじょう", "- triệu chứng do chính người bệnh cảm nhận"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 自覚症状はないが検査で異常が見つかった。 (Không có triệu chứng tự giác nhưng xét nghiệm phát hiện bất thường.)",
      "❗ Ghi chú: 自覚 (じかく) = tự nhận thức. Đối lập: 他覚症状 (triệu chứng bác sĩ phát hiện).",
    ],
  },
  {
    front: "発作が起こる",
    back: ["- ほっさがおこる", "- bệnh phát ra; lên cơn"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 喘息の発作が起こった。 (Lên cơn hen suyễn.)",
      "❗ Ghi chú: 発作 (ほっさ) = cơn bệnh, cơn phát. Dùng cho các bệnh có cơn như tim, hen, động kinh.",
    ],
  },
  {
    front: "往診に来てもらう",
    back: ["- おうしんにきてもらう", "- nhờ bác sĩ đến khám tại nhà"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 高熱が出たので往診に来てもらった。 (Vì sốt cao nên đã nhờ bác sĩ đến khám tại nhà.)",
      "❗ Ghi chú: 往診 (おうしん) = khám bệnh tại nhà bệnh nhân.",
    ],
  },
  {
    front: "点滴",
    back: ["- てんてき", "- truyền dịch; truyền nước biển"],
    more: [
      "📚 Từ loại: Danh từ",
      "📝 Ví dụ: 入院して点滴を受けた。 (Nhập viện và được truyền dịch.)",
      "❗ Ghi chú: 点滴 (てんてき) = truyền tĩnh mạch (IV drip).",
    ],
  },
  {
    front: "応急処置をする",
    back: ["- おうきゅうしょちをする", "- xử lý khẩn cấp; sơ cứu"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 救急隊が来る前に応急処置をした。 (Đã sơ cứu trước khi xe cấp cứu đến.)",
      "❗ Ghi chú: 応急処置 (おうきゅうしょち) = sơ cứu, xử lý khẩn cấp.",
    ],
  },
  {
    front: "病人を介抱する",
    back: ["- びょうにんをかいほうする", "- chăm sóc người bệnh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 家族が病人を介抱する。 (Gia đình chăm sóc người bệnh.)",
      "❗ Ghi chú: 介抱 (かいほう) = chăm sóc, phục vụ người bệnh trực tiếp.",
    ],
  },
  {
    front: "痛みを和らげる",
    back: ["- いたみをやわらげる", "- làm dịu cơn đau"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 鎮痛剤で痛みを和らげる。 (Dùng thuốc giảm đau để làm dịu cơn đau.)",
      "❗ Ghi chú: 和らげる (やわらげる) = làm nhẹ, làm dịu bớt.",
    ],
  },
  {
    front: "面会謝絶になる",
    back: ["- めんかいしゃぜつになる", "- từ chối người đến thăm (bệnh nhân nặng)"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 手術後は面会謝絶になった。 (Sau phẫu thuật đã không cho phép thăm bệnh.)",
      "❗ Ghi chú: 面会謝絶 (めんかいしゃぜつ) = cấm thăm bệnh, thường dùng khi bệnh nhân nguy kịch.",
    ],
  },
  {
    front: "安静を保つ",
    back: ["- あんせいをたもつ", "- giữ yên tĩnh; nghỉ ngơi tĩnh dưỡng"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 医者に安静を保つよう言われた。 (Bác sĩ bảo phải tĩnh dưỡng.)",
      "❗ Ghi chú: 安静 (あんせい) = nghỉ ngơi, không vận động.",
    ],
  },
  {
    front: "患部に薬を塗る",
    back: ["- かんぶにくすりをぬる", "- bôi thuốc vào chỗ bị bệnh"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 傷口の患部に薬を塗る。 (Bôi thuốc lên vết thương.)",
      "❗ Ghi chú: 患部 (かんぶ) = vùng bị bệnh, chỗ đau.",
    ],
  },
  {
    front: "薬の効き目が切れる",
    back: ["- くすりのききめがきれる", "- hết tác dụng thuốc"],
    more: [
      "📚 Từ loại: Cụm động từ",
      "📝 Ví dụ: 薬の効き目が切れて痛みが戻ってきた。 (Thuốc hết tác dụng, cơn đau quay trở lại.)",
      "❗ Ghi chú: 効き目 (ききめ) = tác dụng, hiệu quả của thuốc.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 5
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
