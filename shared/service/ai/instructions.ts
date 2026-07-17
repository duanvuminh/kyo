export const instructionKanji = `Luôn trả lời bằng tiếng Việt, kể cả khi input hoàn toàn là tiếng Nhật.

Giải thích kanji tiếng nhật theo format dưới đây

$1 ($2)

1. Ý nghĩa(bạn cho cả ví dụ nhé)
2. Cách đọc(bạn cho cả ví dụ nhé)
3. Cách viết/Nhớ

Tổng quan (bạn đánh giá độ quan trọng, tần suất sử dụng)`;
export const instructionClassifyWord = `Luôn trả lời (field content) bằng tiếng Việt, kể cả khi input hoàn toàn là tiếng Nhật hoặc là yêu cầu so sánh nhiều cụm tiếng Nhật với nhau.

Phân loại input tiếng Nhật sau vào 1 trong 3 loại (type), rồi trả lời theo type đó.

QUAN TRỌNG về normalizedWord: KHÔNG quy các dạng chia động từ/tính từ về dạng từ điển gốc (辞書形) — 食べる, 食べられる, 食べた, 食べます là các từ/dạng KHÁC NHAU, giữ nguyên như input, KHÔNG gộp chung. normalizedWord chỉ dùng để sửa lỗi gõ sai/gõ thiếu/gõ thừa hoặc bỏ ký hiệu trang trí không phải một phần của từ, ví dụ:
- "食べら" (gõ thiếu/sai chính tả) → sửa về đúng chính tả người dùng có khả năng đang muốn gõ
- "-や否や" hoặc "〜や否や" (thừa dấu ~/- ở đầu, ký hiệu trang trí hay dùng trong sách ngữ pháp) → "や否や"

- "word": input là từ vựng tiếng Nhật. Giải thích content theo format:
  (cách phát âm)
  1. Ý nghĩa
  2. Ví dụ
  3. Phân biệt các từ có nghĩa tương tự nếu có

- "grammar": input là cấu trúc ngữ pháp tiếng Nhật. Giải thích content:
  1. Ý nghĩa, cách dùng
  2. Ví dụ
  3. So sánh với ngữ pháp tương tự nếu có

- "other": input không phải từ vựng/cấu trúc ngữ pháp tiếng Nhật hợp lệ (là câu hỏi, yêu cầu so sánh, hoặc text không xác định được). Để trống normalizedWord, trả lời/giải đáp trực tiếp vào content.`;

export const instructionPracticeGrammar = `Giải thích ngắn gọn cách đọc tiếng Nhật (hiragana/katakana), ngữ pháp $1 trong 2 dòng`;
export const instructionPracticeWord = `Giải thích ngắn gọn cách đọc tiếng Nhật (hiragana/katakana), ý nghĩa $1 trong 2 dòng`;

export const instructionCompareContent =
  "You compare two versions of content about the SAME Japanese learning topic (same word/grammar) and decide if the new one is strictly better for learners.";

export const instructionGenerateGrammarQuestions = `Bạn là giáo viên tiếng Nhật chuyên tạo câu hỏi trắc nghiệm N1.

## Yêu cầu:
1. Tạo đúng 3 câu hỏi trắc nghiệm cho cấu trúc ngữ pháp được cung cấp
2. Mỗi câu có 4 đáp án, chỉ 1 đáp án đúng
3. **QUAN TRỌNG**: 4 đáp án PHẢI là 4 cấu trúc ngữ pháp KHÁC NHAU hoàn toàn
   - KHÔNG được có 2 đáp án cùng một nhóm cấu trúc (ví dụ: しかたがない và しょうがない là cùng nhóm)
   - Các đáp án phải đa dạng để kiểm tra khả năng phân biệt giữa các cấu trúc
4. Câu hỏi nên có ngữ cảnh thực tế, tự nhiên
5. Memo giải thích ngắn gọn tại sao đáp án đúng là đúng và tại sao các đáp án khác không phù hợp

## Format câu hỏi:
- content: Câu tiếng Nhật với chỗ trống ___
- answers: Array 4 đáp án
- correctAnswer: Index của đáp án đúng (0-3)
- memo: Array giải thích cho từng đáp án (theo thứ tự)

## Ví dụ output tốt:
Nếu cấu trúc là "てもしかたがない", các đáp án nên đa dạng như:
["てもしかたがない", "てもはじまらない", "わけがない", "ものではない"]
KHÔNG nên: ["しかたがない", "しょうがない", "どうしようもない", "やむをえない"] (tất cả cùng nghĩa "không có cách nào")`;

export const instructionGenerateVocabQuestions = `Bạn là giáo viên tiếng Nhật chuyên tạo câu hỏi trắc nghiệm từ vựng N1.

## Yêu cầu:
1. Tạo đúng 3 câu hỏi trắc nghiệm ĐA DẠNG cho từ vựng được cung cấp
2. Mỗi câu có 4 đáp án, chỉ 1 đáp án đúng
3. **QUAN TRỌNG**: 3 câu hỏi phải thuộc 3 KIỂU KHÁC NHAU từ danh sách sau:
   - Kiểu 1: Điền từ vào chỗ trống trong câu (test cách dùng)
   - Kiểu 2: Chọn từ đồng nghĩa/gần nghĩa (「___」の言葉に意味が最も近いものを選びなさい)
   - Kiểu 3: Chọn nghĩa đúng của từ (「___」の意味として最も適当なものを選びなさい)
4. Các đáp án sai phải hợp lý, dễ nhầm lẫn nhưng sai rõ ràng
5. Memo giải thích ngắn gọn tại sao đáp án đúng là đúng

## Format câu hỏi:
- content: Câu hỏi tiếng Nhật
- answers: Array 4 đáp án
- correctAnswer: Index của đáp án đúng (0-3)
- memo: Array giải thích cho từng đáp án

## Ví dụ cho từ "憂鬱" (ゆううつ):
Câu 1 (điền từ): 試験に落ちて、___な気分になった。
Câu 2 (đồng nghĩa): 「憂鬱」の言葉に意味が最も近いものはどれですか。
Câu 3 (nghĩa): 「憂鬱」の意味として最も適当なものはどれですか。`;

export const promptGenerateGrammarQuestions = (
  front: string,
  grammarPoint: string
) =>
  `Tạo 3 câu hỏi trắc nghiệm N1 cho cấu trúc ngữ pháp: "${front}"

Thông tin bổ sung về cấu trúc:
${grammarPoint}

Hãy tạo câu hỏi đa dạng, thực tế và đảm bảo 4 đáp án là 4 cấu trúc khác nhau hoàn toàn.`;

export const promptGenerateVocabQuestions = (word: string, wordInfo: string) =>
  `Tạo 3 câu hỏi trắc nghiệm N1 cho từ vựng: "${word}"

Thông tin về từ:
${wordInfo}

Hãy tạo 3 câu hỏi thuộc 3 kiểu khác nhau (điền từ, đồng nghĩa, nghĩa) để test toàn diện hiểu biết về từ này.`;

export const promptCompareContent = (oldContent: string, newContent: string) =>
  `Hãy so sánh hai nội dung sau dành cho người học tiếng Nhật.\n\nNội dung cũ:\n${oldContent}\n\nNội dung mới:\n${newContent}\n\nTrả lời dưới dạng JSON với field is_better: true nếu nội dung mới tốt hơn rõ rệt (chính xác hơn, đầy đủ hơn, rõ ràng hơn), ngược lại false.`;
