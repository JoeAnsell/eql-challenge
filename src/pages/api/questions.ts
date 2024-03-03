// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { QuestionData } from "@/types";

const questions = [
  {
    question: "is this a dog",
    answers: ["yes", "no", "maybe"],
    correct_answer: "yes",
  },
  {
    question: "is this not a dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: "no",
  },
  {
    question: "Click the dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: "maybe",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionData>
) {
  res.status(200).json([...questions]);
}
