import Layout from "@/components/Layout";
import { useEffect, useContext, useState } from "react";
import { QuestionsContext } from "./_app";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { QuestionData } from "@/types";

export default function Summary() {
  const questions = useContext(QuestionsContext);
  const [score, setScore] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    let results = [] as string[];
    questions.map((question: QuestionData, index) => {
      const checkCorrect = localStorage.getItem(
        `question_${index + 1}_correct`
      );
      if (checkCorrect === "true") {
        results.push(checkCorrect);
      }
    });
    setScore(results.length);
  }, [questions]);

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
