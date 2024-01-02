import { useRef } from "react";
export default function Answer({
  answers,
  selected_answer,
  responded,
  onSelect,
}) {
  const shuffeled_answers = useRef();
  if (!shuffeled_answers.current) {
    shuffeled_answers.current = [...answers];
    shuffeled_answers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffeled_answers.current.map((ans) => {
        let css_class = "";
        const is_selected = ans === selected_answer;

        if (responded === "answered" && is_selected) {
          css_class = "selected";
        }

        if (responded !== "selected" && is_selected) {
          css_class = responded;
        }
        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelect(ans)}
              className={css_class}
              disabled={responded !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
