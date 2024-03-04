export type QuestionData = {
  question: string;
  answers: Array<string>;
  correct_answer: string;
  question_type: string;
  image: {
    filename: string;
    alt: string;
  } | null;
}[];
