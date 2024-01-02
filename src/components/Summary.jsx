import quiz_completed_img from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
export default function Summary({ user_answers }) {
  const skipped_answers = user_answers.filter(
    (answer) => answer === null,
  ).length;
  const correct_answers = user_answers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer,
  ).length;
  const skipped_answers_percent = Math.round(
    (skipped_answers / QUESTIONS.length) * 100,
  );
  const correct_answers_percent = Math.round(
    (correct_answers / QUESTIONS.length) * 100,
  );
  const incorrect_answer_percent = Math.round(
    ((QUESTIONS.length - skipped_answers - correct_answers) /
      QUESTIONS.length) *
      100,
  );

  return (
    <div id="summary">
      <img src={quiz_completed_img} alt="Trophy Icon" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped_answers_percent} %</span>
          <span className="text">skipped</span>
          <span className="number">{correct_answers_percent} %</span>
          <span className="text">answered correctly</span>
          <span className="number">{incorrect_answer_percent} %</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {user_answers.map((answer, index) => {
          let css_class = "user-answer";
          if (answer === null) {
            css_class += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            css_class += " correct";
          } else {
            css_class += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={css_class}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
