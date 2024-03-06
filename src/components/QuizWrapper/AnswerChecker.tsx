export function answerChecker(
  answers: string | string[],
  correct_answer: string | string[] | undefined,
  question_type: string
) {
  if (question_type === "single_choice" || question_type === "text_input") {
    if (answers[0] === correct_answer) {
      return true;
    } else {
      return false;
    }
  }
  if (question_type === "multiple_choice" && Array.isArray(correct_answer)) {
    let correct = true;
    if (answers.length > correct_answer.length) {
      correct = false;
    }
    correct_answer.map((item: string) => {
      if (answers.includes(item) && correct === true) {
        correct = true;
      } else {
        correct = false;
      }
    });
    return correct;
  }
}
