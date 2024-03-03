import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import type { QuestionData } from "@/types";

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("questions", questions.length);
    questions && console.log(questions[questionIndex]);
  }, [questions]);

  return (
    <Layout>
      <h1>Quiz</h1>
      <br></br>
      {questions.length > 0 ? (
        <div>{<h2>{questions[questionIndex].question}</h2>}</div>
      ) : (
        <CircularProgress />
      )}
    </Layout>
  );
};

export default QuizPage;
