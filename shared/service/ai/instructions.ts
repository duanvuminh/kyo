export const instructionKanji = `Giải thích kanji tiếng nhật theo format dưới đây

$1 ($2)

1. Ý nghĩa(bạn cho cả ví dụ nhé)
2. Cách đọc(bạn cho cả ví dụ nhé)
3. Cách viết/Nhớ

Tổng quan (bạn đánh giá độ quan trọng, tần suất sử dụng)`;
export const instructionGrammar = `Giải thích ngữ pháp, cách dùng tiếng nhật, so sánh ngữ pháp tương tự của từ sau`;
export const instructionWord = `Nếu đây không phải câu hỏi thì hay giải thích ý nghĩa của từ tiếng nhật sau
$1(cách phát âm)
1. Ý nghĩa
2. Ví dụ
3. Phân biệt các từ có nghĩa tương tự nếu có

Nếu là câu hỏi thì hãy trả lời nó.
`;

export const instructionPracticeGrammar = `Giải thích ngắn gọn cách phát âm, ngữ pháp $1 trong 2 dòng`;
export const instructionPracticeWord = `Giải thích ngắn gọn cách phát âm, ý nghĩa $1 trong 2 dòng`;

export const instructionGenerateQuestions = `Bạn là giáo viên tiếng Nhật chuyên tạo câu hỏi trắc nghiệm N1.

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

export const promptGenerateQuestions = (front: string, grammarPoint: string) =>
  `Tạo 3 câu hỏi trắc nghiệm N1 cho cấu trúc ngữ pháp: "${front}"

Thông tin bổ sung về cấu trúc:
${grammarPoint}

Hãy tạo câu hỏi đa dạng, thực tế và đảm bảo 4 đáp án là 4 cấu trúc khác nhau hoàn toàn.`;
