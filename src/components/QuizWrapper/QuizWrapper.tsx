import styles from "./QuizWrapper.module.scss";
import type { QuestionData } from "@/types";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import QuizFields from "./QuizFields";
import clsx from "clsx";
import { answerChecker } from "./AnswerChecker";

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
  const { answers, question, image, correct_answer, question_type } =
    questions[questionIndex];
  const router = useRouter();
  const [correct, setCorrect] = useState<boolean | null>(null);

  const handleSubmit = (values) => {
    const answer = answerChecker(values, correct_answer, question_type);

    setCorrect(answer);

    setTimeout(() => {
      answerCallBack(answer);
      setCorrect(null);
    }, 2000);
  };

  return (
    <div className={styles.quizWrapper}>
      {image && (
        <div className={styles.quizWrapper__image}>
          <Image
            alt={image.alt}
            src={image.filename}
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      )}
      <div className={styles.quizWrapper__question}>
        {correct !== null ? (
          <p className={styles.quizWrapper__title}>
            {correct ? "CORRECT!" : "WRONG!"}
          </p>
        ) : (
          <p className={styles.quizWrapper__title}>{question}</p>
        )}
      </div>
      <div className={clsx(styles.buttonContainer)}>
        {quizFinished ? (
          <>
            <div>Quiz finished</div>
            <div>
              <Button
                onClick={(e) => {
                  router.push("/summary");
                }}
                variant="contained"
              >
                Continue to Summary
              </Button>
            </div>
          </>
        ) : (
          <form>
            <FormControl>
              <QuizFields
                answers={answers}
                question_type={question_type}
                question={question}
                valuesCallBack={(values) => {
                  handleSubmit(values);
                }}
              />
            </FormControl>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuizWrapper;
