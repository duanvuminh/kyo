import {
  FlashCard,
  FlashCardItem,
} from "@/shared/component/flash-card/flash-card";

const cards: FlashCardItem[] = [
  {
    front: "人",
    back: [
      "- ひと・じん・にん",
      "- con người; nhân loại; người; người khác; người ta",
    ],
  },
  {
    front: "的",
    back: ["- てき・まと", "- đích; mục tiêu; có tính ~ (dạng hậu tố: 的な)"],
  },
  { front: "前", back: ["- まえ・ぜん", "- phía trước; trước đây; phần đầu"] },
  { front: "俺", back: ["- おれ", "- tao; tôi (nam, thân mật)"] },
  {
    front: "分",
    back: ["- ふん・ぶん・ぶ", "- phần; phút; mức độ; thân phận; vai trò"],
  },
  { front: "万", back: ["- まん・ばん", "- mười nghìn; vô số; tất cả"] },
  {
    front: "何なり",
    back: ["- なんなり", "- bất cứ cái gì; dù thế nào chăng nữa"],
  },
  { front: "第", back: ["- だい", "- thứ; số thứ tự (thứ nhất, thứ hai...)"] },
  {
    front: "万人",
    back: ["- ばんにん・まんにん", "- mọi người; quần chúng; rất nhiều người"],
  },
  {
    front: "化する",
    back: ["- かする", "- biến đổi; hoá thành; chuyển thành"],
  },
  { front: "系", back: ["- けい", "- hệ thống; dòng; nhóm; loại"] },
  {
    front: "くらい（位）",
    back: ["- くらい", "- khoảng; chừng; cấp bậc; địa vị"],
  },
  { front: "会", back: ["- かい・え", "- cuộc họp; hội; nhóm"] },
  {
    front: "なんか",
    back: ["- なんか", "- kiểu như; ví dụ như; đại loại như"],
  },
  {
    front: "様",
    back: ["- さま・よう", "- ngài; ông/bà; dáng vẻ; cách thức; dạng"],
  },
  { front: "次", back: ["- つぎ・じ", "- lần sau; kế tiếp"] },
  { front: "歳", back: ["- さい", "- tuổi"] },
  {
    front: "生",
    back: [
      "- なま・せい・しょう・いく・き",
      "- sống; tươi; thô; chưa qua xử lý",
    ],
  },
  { front: "店", back: ["- みせ・てん", "- cửa hàng; tiệm"] },
  { front: "新", back: ["- あたら・しん・にい", "- mới; tân"] },
  { front: "先に", back: ["- さきに", "- trước; sớm hơn; phía trước"] },
  { front: "高", back: ["- たか・こう", "- cao; đắt; mức độ cao"] },
  {
    front: "代",
    back: ["- だい・たい・よ・しろ", "- thời đại; thay thế; đại diện; thế hệ"],
  },
  { front: "等", back: ["- など・とう", "- vân vân; v.v...; tương đương"] },
  { front: "超", back: ["- ちょう", "- siêu; vượt quá"] },
  { front: "版", back: ["- はん・ばん", "- bản in; phiên bản"] },
  {
    front: "部",
    back: ["- ぶ", "- bộ phận; phòng; ban; khoa; tập (trong loạt)"],
  },
  {
    front: "年生",
    back: [
      "- ねんせい",
      "- học sinh năm ~ (ví dụ: 一年生 – học sinh năm nhất)",
    ],
  },
  {
    front: "奴",
    back: ["- やつ", "- gã đó; thằng đó; đồ (thân mật hoặc khinh miệt)"],
  },
  { front: "氏", back: ["- し・うじ", "- họ; ngài; Mr./Mrs.; dòng họ"] },
];

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
