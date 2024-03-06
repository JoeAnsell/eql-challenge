export interface imageProps {
  filename: string;
  alt: string;
}

export interface QuestionData {
  question: string;
  answers: string[];
  correct_answer?: string | undefined;
  question_type: string;
  image?: imageProps | null;
  images?: imageProps[] | null;
}
[];
