export interface EditableQuestion {
  id: string;
  content: string;
  answers: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  memo: string[];
}

export interface EditableCard {
  front: string;
  back: string[];
  more: string[];
  questions: EditableQuestion[];
}
