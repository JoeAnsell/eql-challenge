// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { QuestionData } from "@/types";

const questions = [
  {
    question: "Is this a dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: ["yes", "no"],
    image: {
      filename: "/images/CatDog.jpg",
      alt: "cat dog",
    },
    question_type: "multiple_choice",
  },
  {
    question: "Is this a dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: "yes",
    image: {
      filename: "/images/labrador.jpeg",
      alt: "labrador",
    },
    question_type: "single_choice",
  },
  {
    question: "Click the dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: "maybe",
    image: null,
    question_type: "single_choice",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionData>
) {
  res.status(200).json([...questions]);
}
