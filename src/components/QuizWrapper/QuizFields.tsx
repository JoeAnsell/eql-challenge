import Image from "next/image";
import { useEffect, useState } from "react";
import type { QuestionData } from "@/types";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";

export default function QuizFields({
  answers,
  question_type,
  question,
  valuesCallBack,
}: QuestionData) {
  const [returnValue, setReturnValue] = useState<string[]>([]);

  useEffect(() => {
    console.log(returnValue);
  }, [returnValue]);

  const handleSubmit = () => {
    valuesCallBack(returnValue);
  };

  switch (question_type) {
    case "single_choice":
      const handleChangeRadio = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const name = event.target.name;
        console.log("name", name);
      };
      return (
        <>
          <RadioGroup
            row
            aria-labelledby={`${question} radio buttons`}
            name={question}
          >
            {answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer}
                  control={<Radio onChange={handleChangeRadio} />}
                  label={answer}
                />
              );
            })}
          </RadioGroup>
          <Button onClick={handleSubmit} variant="contained">
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
          <FormGroup
            id="quiz-fields"
            row
            aria-labelledby={`${question} Check Boxes`}
          >
            {answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer}
                  control={
                    <Checkbox name={answer} onChange={handleChangeCheckBox} />
                  }
                  label={answer}
                />
              );
            })}
          </FormGroup>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </>
      );

    default:
      return <></>;
  }
}
