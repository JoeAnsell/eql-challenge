import Layout from "@/components/Layout";
import { useEffect, useContext, useState } from "react";
import { QuestionsContext } from "./_app";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { QuestionData } from "@/types";

type AnswerData = {
  user_answer: string | null;
  correct_answer: string | null;
};

export default function Summary() {
  const questions = useContext(QuestionsContext);
  const [resultData, setResultData] = useState({});
  const [score, setScore] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    let results = [] as string[];
    questions.map((question: QuestionData, index) => {
      const checkCorrect = localStorage.getItem(
        `question_${index + 1}_correct`
      );
      console.log("checkCorrect", checkCorrect);
      if (checkCorrect === "true") {
        results.push(checkCorrect);
      }
    });
    console.log("results", results);
    setScore(results.length);
  }, [questions]);

  useEffect(() => {
    console.log("score", score);
  }, [resultData]);

  return (
    <Layout>
      <h1>Summary</h1>
      <br></br>
      {score !== null ? (
        <p>{`You Scored: ${score}/${questions.length}`}</p>
      ) : (
        <CircularProgress />
      )}
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
