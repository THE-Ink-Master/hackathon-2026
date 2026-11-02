export interface QuizQuestionData {
  q: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  correct: number;
}

export interface QuizItem {
  question: QuizQuestionData;
}

export type QuizData = QuizItem[];
