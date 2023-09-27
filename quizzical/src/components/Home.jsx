import React from "react";
import Select from "react-select";

export default function Home(props) {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p>Please Select Trivia Options</p>
      <Select
        className="select"
        options={props.options[0]}
        placeholder="Select Category"
        onChange={(selectedOption) => {
          props.setSelectedCategory(selectedOption.value);
        }}
      />
      <Select
        className="select"
        options={props.options[1]}
        placeholder="Select Difficulty"
        onChange={(selectedOption) => {
          props.setSelectedDifficulty(selectedOption.value);
        }}
      />
      <button onClick={props.startBtn}>Start Quiz</button>
    </div>
  );
}
