import Layout from "@/components/Layout";
import { useEffect, useContext, useState } from "react";
import { QuestionsContext } from "./_app";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { QuestionData } from "@/types";
import global from "../components/globalComponentStyles.module.scss";

export default function Summary() {
  const questions = useContext(QuestionsContext);
  const [score, setScore] = useState<number | null>(null);
  const [userName, setUserName] = useState("");
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
    const firstName = localStorage.getItem(`user_first_name`);
    const lastName = localStorage.getItem(`user_last_name`);
    setUserName(`${firstName} ${lastName}`);
    setScore(results.length);
  }, [questions]);

  return (
    <Layout>
      <h1>Summary</h1>
      <div className={global.contentWrapper}>
        {score !== null ? (
          <>
            <h3>{userName}</h3>
            <h2>{`You Scored: ${score}/${questions.length}`}</h2>
          </>
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
      </div>
    </Layout>
  );
}
