export interface QuestionData {
  question: string;
  answers: string[];
  correct_answer?: string | undefined;
  question_type: string;
  image?: {
    filename: string;
    alt: string;
  } | null;
}
[];
