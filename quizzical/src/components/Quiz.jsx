import React from "react";
import { decode } from "html-entities";

export default function Quiz(props) {
  return (
    <div className="quiz-page">
      {props.questions.map((question, index) => {
        return (
          <div className="quiz-container" key={index}>
            <p className="quiz-content">{decode(question.question)}</p>
            <ul className="quiz-answers-container">
              {props.answers[index].allAnswers.map((answer, i) => (
                <li key={i}>{decode(answer)}</li>
              ))}
            </ul>
            <hr />
          </div>
        );
      })}
      <button className="check-answer-btn" onClick={props.checkBtn}>
        Check Answer
      </button>
    </div>
  );
}
