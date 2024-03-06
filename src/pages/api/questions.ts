// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { QuestionData } from "@/types";

const questions = [
  {
    question: "Select the dog",
    answers: null,
    correct_answer: "1",
    images: [
      { filename: "/images/labrador.jpeg", alt: "labrador" },
      { filename: "/images/labrador.jpeg", alt: "labrador" },
      { filename: "/images/labrador.jpeg", alt: "labrador" },
      { filename: "/images/labrador.jpeg", alt: "labrador" },
    ],
    question_type: "image_select",
  },
  {
    question: "Is this a dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: "yes",
    image: {
      filename: "/images/labrador.jpeg",
      alt: "labrador",
    },
    images: null,
    question_type: "single_choice",
  },
  {
    question: "Is this a dog?",
    answers: ["yes", "no", "maybe"],
    correct_answer: ["yes", "no"],
    image: {
      filename: "/images/CatDog.jpg",
      alt: "cat dog",
    },
    images: null,
    question_type: "multiple_choice",
  },
  {
    question: "Who is this dog?",
    answers: null,
    correct_answer: "snoop dogg",
    image: {
      filename: "/images/snoop-dogg.jpg",
      alt: "Snoop dogg",
    },
    images: null,
    question_type: "text_input",
  },
  {
    question: "Is this a lot of dogs?",
    answers: ["yes", "no", "could be more"],
    correct_answer: "could be more",
    image: {
      filename: "/images/loads-of-dogs.jpeg",
      alt: "gang of dogs",
    },
    images: null,
    question_type: "single_choice",
  },
  {
    question: "Finish this sentence, what's up...",
    answers: null,
    correct_answer: "dog",
    image: {
      filename: "/images/upsidedowndog.jpeg",
      alt: "upside down dog",
    },
    question_type: "text_input",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([...questions]);
}
