import Layout from "@/components/Layout";
import QuizWrapper from "@/components/QuizWrapper";
import { useState, useContext, useEffect, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { QuestionsContext } from "./_app";
// import { styles } from "../styles/globals.scss";

const QuizPage: React.FC = () => {
  const questions = useContext(QuestionsContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleCallbackAnswer = useCallback(
    (answer: boolean) => {
      localStorage.setItem(
        `question_${questionIndex + 1}_correct`,
        `${answer}`
      );
      if (isLastQuestion) {
        setQuizFinished(true);
        localStorage.setItem(`current_question_index`, `${questionIndex + 1}`);
        return;
      }

      setQuestionIndex(questionIndex + 1);
      localStorage.setItem(`current_question_index`, `${questionIndex + 1}`);

      if (questionIndex === questions.length - 2) {
        setIsLastQuestion(true);
      }
    },
    [questionIndex, isLastQuestion, questions.length]
  );

  useEffect(() => {
    if (questionIndex === questions.length - 1) {
      setIsLastQuestion(true);
    }
  }, [questionIndex, questions]);

  useEffect(() => {
    const currentQuestionIndex = localStorage.getItem(`current_question_index`);
    if (questionIndex === questions.length - 1) {
      setIsLastQuestion(true);
    }

    if (currentQuestionIndex === null) {
      localStorage.setItem(`current_question_index`, "0");
      return;
    } else {
      setQuestionIndex(Number(currentQuestionIndex));
    }
  }, [questionIndex, questions.length]);

  return (
    <Layout>
      {questions.length > 0 ? (
        <QuizWrapper
          answerCallBack={handleCallbackAnswer}
          questions={questions}
          questionIndex={questionIndex}
          quizFinished={quizFinished}
        />
      ) : (
        <CircularProgress />
      )}
    </Layout>
  );
};

export default QuizPage;
