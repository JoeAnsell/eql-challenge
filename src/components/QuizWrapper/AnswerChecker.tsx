export const answerChecker = (answers, correct_answer, question_type) => {
  if (question_type === "single_choice" || question_type === "text_input") {
    console.log("correct_answer", correct_answer);
    console.log("answers", answers);
    if (answers === correct_answer) {
      return true;
    } else {
      return false;
    }
  }
  if (question_type === "multiple_choice") {
    let correct = true;
    if (answers.length > correct_answer.length) {
      correct = false;
    }
    correct_answer.forEach((item: string) => {
      if (answers.includes(item) && correct === true) {
        correct = true;
      } else {
        correct = false;
      }
    });
    return correct;
  }
};
