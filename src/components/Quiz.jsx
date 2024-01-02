import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userResponse, setUserResponse] = useState([]);
  const question_index = userResponse.length;
  const quiz_completed = QUESTIONS.length === question_index;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserResponse((prev_responses) => {
      return [...prev_responses, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quiz_completed) {
    return <Summary user_answers={userResponse} />;
  }

  return (
    <div id="quiz">
      <Question
        key={question_index}
        question_index={question_index}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
