import React, { useState } from "react";
import { decode } from "html-entities";

export default function Quiz(props) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [results, setResults] = useState(
    Array(props.questions.length).fill(null)
  );

  const handleAnswerClick = (questionIndex, answer) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const checkAnswers = () => {
    const newResults = selectedAnswers.map((answer, index) => {
      const correctAnswer = props.questions[index].correct_answer;
      return answer === correctAnswer;
    });
    setResults(newResults);
    setAnswersChecked(true);
  };

  console.log("results: ", results);

  return (
    <div className="quiz-page">
      {props.questions.map((question, index) => {
        return (
          <div className="quiz-container" key={index}>
            <p className="quiz-content">{decode(question.question)}</p>
            <ul className="quiz-answers-container">
              {props.answers[index].allAnswers.map((answer, i) => (
                <li
                  key={i}
                  onClick={() => handleAnswerClick(index, answer)}
                  className={`${
                    selectedAnswers[index] === answer ? "selected" : ""
                  } ${
                    answersChecked &&
                    selectedAnswers[index] === answer &&
                    results[index]
                      ? "correct"
                      : answersChecked &&
                        selectedAnswers[index] === answer &&
                        !results[index]
                      ? "incorrect"
                      : ""
                  }`}
                >
                  {decode(answer)}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        );
      })}
      <button className="check-answer-btn" onClick={checkAnswers}>
        Check Answer
      </button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            Question {index + 1}: {result ? "Correct" : "Incorrect"}
          </div>
        ))}
      </div>
    </div>
  );
}
