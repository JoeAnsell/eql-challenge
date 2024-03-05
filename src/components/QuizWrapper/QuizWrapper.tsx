import styles from "./QuizWrapper.module.scss";
import global from "../globalComponentStyles.module.scss";
import { QuestionData } from "@/types";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import QuizFields from "./QuizFields";
import clsx from "clsx";
import { answerChecker } from "./AnswerChecker";

type QuizWrapperProps = {
  questions: QuestionData[];
  questionIndex: number;
  quizFinished: boolean;
  answerCallBack: (answer: boolean) => void;
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

  const handleSubmit = (values: string | string[]) => {
    // console.log("values", values);
    const answer = answerChecker(values, correct_answer, question_type);
    // console.log("answer", answer);
    if (answer === undefined) return;
    setCorrect(answer);

    setTimeout(() => {
      answerCallBack(answer);
      setCorrect(null);
    }, 2000);
  };

  useEffect(() => {}, [question]);

  return (
    <>
      <h1 className={styles.question}>{question}</h1>
      <div className={clsx(styles.quizWrapper, global.contentWrapper)}>
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
          <>
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
              {correct !== null && (
                <p className={styles.quizWrapper__title}>
                  {correct ? "CORRECT!" : "WRONG!"}
                </p>
              )}
            </div>
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
          </>
        )}
      </div>
    </>
  );
};

export default QuizWrapper;
