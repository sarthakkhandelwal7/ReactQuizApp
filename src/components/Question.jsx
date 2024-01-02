import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Question({
  question_index,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selected_answer: "",
    is_correct: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selected_answer: answer,
      is_correct: null,
    });

    setTimeout(() => {
      setAnswer({
        selected_answer: answer,
        is_correct: QUESTIONS[question_index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let timer = 10000;
  if (answer.selected_answer) {
    timer = 1000;
  }

  if (answer.is_correct !== null) {
    timer = 2000;
  }

  let answer_state = "";
  if (answer.selected_answer && answer.is_correct !== null) {
    answer_state = answer.is_correct ? "correct" : "wrong";
  } else if (answer.selected_answer) {
    answer_state = "answered";
  }

  return (
    <div id="quesiton">
      <QuizTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selected_answer === "" ? onSkipAnswer : null}
        mode={answer_state}
      />
      <h2>{QUESTIONS[question_index].text}</h2>
      <Answer
        answers={QUESTIONS[question_index].answers}
        selected_answer={answer.selected_answer}
        responded={answer_state}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
