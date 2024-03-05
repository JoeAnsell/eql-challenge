export interface QuestionData {
  question: string;
  answers: string | string[];
  correct_answer: string;
  question_type: string;
  image: {
    filename: string;
    alt: string;
  } | null;
}
[];
