import React from "react";

export default function Home(props) {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={props.startBtn}>Start Quiz</button>
    </div>
  );
}
