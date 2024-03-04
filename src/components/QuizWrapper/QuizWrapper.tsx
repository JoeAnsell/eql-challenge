import styles from "./QuizWrapper.module.scss";
import type { QuestionData } from "@/types";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

type QuizWrapperProps = {
  questions: QuestionData;
  questionIndex: number;
  quizFinished: boolean;
  answerCallBack: (answer: string) => void;
};

const QuizWrapper: React.FC<QuizWrapperProps> = ({
  questions,
  questionIndex,
  answerCallBack,
  quizFinished,
}) => {
  const router = useRouter();
  const handleAnswerClick = (answer: string) => {
    answerCallBack(answer);
  };

  return (
    <div className={styles.quizWrapper}>
      <p className={styles.quizWrapper__title}>
        {questions[questionIndex].question}
      </p>
      <div className={styles.buttonContainer}>
        {quizFinished ? (
          <>
            <p>Quiz finished yo</p>
            <br></br>
            <Button
              onClick={(e) => {
                router.push("/summary");
              }}
              variant="contained"
            >
              Continue to Summary
            </Button>
          </>
        ) : (
          <>
            {questions[questionIndex].answers.map((answer, index) => {
              return (
                <Button
                  onClick={(e) => {
                    handleAnswerClick(e.currentTarget.value);
                  }}
                  key={index}
                  value={answer}
                  type="submit"
                  variant="contained"
                >
                  {answer}
                </Button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizWrapper;
