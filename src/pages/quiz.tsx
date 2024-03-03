import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import QuizWrapper from "@/components/QuizWrapper";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

import type { QuestionData } from "@/types";

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    };

    fetchData();
  }, []);

  const handleCallbackAnswer = (value: boolean) => {
    console.log("handleCallbackAnswer", value);
    localStorage.setItem(`question_${questionIndex + 1}_answer`, `${value}`);
    setQuestionIndex(questionIndex + 1);

    if (questionIndex + 1 === questions.length) {
      router.push("/summary");
    }
  };

  return (
    <Layout>
      <h1>Quiz</h1>
      <br></br>
      <p>{`Question ${questionIndex}`}</p>
      <br></br>
      {questions.length > 0 ? (
        <QuizWrapper
          answerCallBack={handleCallbackAnswer}
          questions={questions}
          questionIndex={questionIndex}
        />
      ) : (
        <CircularProgress />
      )}
    </Layout>
  );
};

export default QuizPage;
