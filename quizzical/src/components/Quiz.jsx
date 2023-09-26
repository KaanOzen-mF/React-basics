import React from "react";

export default function Quiz(props) {
  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <p className="quiz-content">How would one say goodbye in Spanish?</p>
        <ul className="quiz-answers-container">
          <li className="true-answer">Adiós</li>
          <li>Hola</li>
          <li>Au Revior</li>
          <li>Sair</li>
        </ul>
      </div>
      <hr />
      <button className="check-answer-btn">Check Answer</button>
    </div>
  );
}
