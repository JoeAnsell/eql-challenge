import Layout from "@/components/Layout";
import { useEffect, useContext, useState } from "react";
import { QuestionsContext } from "./_app";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

type AnswerData = {
  user_answer: string | null;
  correct_answer: string | null;
};

export default function Summary() {
  const questions = useContext(QuestionsContext);
  const [resultData, setResultData] = useState({});
  const [score, setScore] = useState<number | null>(null);
  const router = useRouter();

  // console.log(questions);

  useEffect(() => {
    let results = [] as AnswerData[];
    questions.map((question, index) => {
      const userAnswer = localStorage.getItem(`question_${index + 1}_answer`);
      const correctAnswer = question.correct_answer;

      const returnData = {
        user_answer: userAnswer,
        correct_answer: correctAnswer,
      };

      results.push(returnData);
    });

    setResultData(results);
    if (results.length > 0) {
      const correctAnswers = results.filter(
        (item) => item.user_answer === item.correct_answer
      );
      setScore(correctAnswers.length);
    }
  }, [questions]);

  useEffect(() => {
    console.log("score", score);
  }, [resultData]);

  return (
    <Layout>
      <h1>Summary</h1>
      <br></br>
      {score !== null ? <p>{`You Scored: ${score}`}</p> : <CircularProgress />}
      <br></br>
      <Button
        onClick={(e) => {
          router.push("/quiz");
          localStorage.setItem(`current_question_index`, `0`);
        }}
        variant="contained"
      >
        Play Again?
      </Button>
    </Layout>
  );
}
