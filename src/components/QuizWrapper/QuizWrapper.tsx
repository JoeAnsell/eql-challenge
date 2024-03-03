import styles from "./QuizWrapper.module.scss";
import type { QuestionData } from "@/types";
import { Button } from "@mui/material";

type QuizWrapperProps = {
  questions: QuestionData;
  questionIndex: number;
  answerCallBack: (value: boolean) => void;
};

const QuizWrapper: React.FC<QuizWrapperProps> = ({
  questions,
  questionIndex,
  answerCallBack,
}) => {
  const handleAnswerClick = (answer: string) => {
    if (questions[questionIndex].correct_answer === answer) {
      console.log("correct answer");
      answerCallBack(true);
    } else {
      console.log("wrong answer");
      answerCallBack(false);
    }
  };

  return (
    <div className={styles.quizWrapper}>
      <p className={styles.quizWrapper__title}>
        {questions[questionIndex].question}
      </p>
      <div className={styles.buttonContainer}>
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
      </div>
    </div>
  );
};

export default QuizWrapper;
