import Image from "next/image";
import styles from "./QuizWrapper.module.scss";
import { useEffect, useState } from "react";
import { QuestionData } from "@/types";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import clsx from "clsx";

interface QuizFieldsProps extends QuestionData {
  valuesCallBack: (answer: string[]) => void;
}
[];

export default function QuizFields({
  answers,
  question_type,
  question,
  valuesCallBack,
}: QuizFieldsProps) {
  const [returnValue, setReturnValue] = useState<string[]>([]);

  useEffect(() => {
    setReturnValue([]);
  }, [question]);

  useEffect(() => {
    valuesCallBack(returnValue);
  }, [returnValue, valuesCallBack]);

  switch (question_type) {
    case "text_input":
      return (
        <>
          <p className={styles.fieldNote}>Type your answer</p>
          <TextField
            fullWidth
            id="answer"
            label="answer"
            variant="outlined"
            margin="normal"
            required
            onChange={(e) => {
              const formatValue = e.target.value
                .replaceAll("-", " ")
                .toLowerCase();
              setReturnValue([formatValue]);
            }}
          />
          <Button
            className={clsx(
              styles.submitButton,
              returnValue.length <= 0 && styles.disable
            )}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </>
      );
    case "single_choice":
      const handleChangeRadio = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const name = event.target.name;
        setReturnValue([name]);
      };
      return (
        <>
          <p className={styles.fieldNote}>Single choice:</p>
          <RadioGroup
            row
            aria-labelledby={`${question} radio buttons`}
            name={question}
            className={styles.formGroup}
          >
            {answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer}
                  control={
                    <Radio
                      style={{ paddingRight: "4px" }}
                      name={answer}
                      onChange={handleChangeRadio}
                    />
                  }
                  label={answer}
                />
              );
            })}
          </RadioGroup>
          <Button
            className={clsx(
              styles.submitButton,
              returnValue.length <= 0 && styles.disable
            )}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </>
      );
    case "multiple_choice":
      const handleChangeCheckBox = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        if (isChecked) {
          setReturnValue([...returnValue, name]);
        } else {
          const removeReturnValue = returnValue.filter((item) => item !== name);
          setReturnValue(removeReturnValue);
        }
      };
      return (
        <>
          <p className={styles.fieldNote}>{`Multiple choice:`}</p>
          <FormGroup
            id="quiz-fields"
            row
            aria-labelledby={`${question} Check Boxes`}
            className={styles.formGroup}
          >
            {answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer}
                  control={
                    <Checkbox
                      style={{ paddingRight: "4px" }}
                      name={answer}
                      onChange={handleChangeCheckBox}
                    />
                  }
                  label={answer}
                />
              );
            })}
          </FormGroup>
          <Button
            className={clsx(
              styles.submitButton,
              returnValue.length <= 0 && styles.disable
            )}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </>
      );

    default:
      return <></>;
  }
}
