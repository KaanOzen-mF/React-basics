import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  const [start, setStart] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [questionArray, setQuestionArray] = useState([]);

  const handleStart = () => {
    setStart((prevVal) => !prevVal);

    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuestionArray(data.results); // Update state with fetched data
      });
  };

  const handlePlayAgain = () => {
    setStart((prevVal) => !prevVal);
  };

  const mergedAnswers = questionArray.map((question) => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffledAnswers = [...allAnswers].sort(() => Math.random() - 0.5);
    return {
      allAnswers: shuffledAnswers,
    };
  });

  const categoryOptions = [
    { value: "9", label: "Any Category" },
    { value: "10", label: "General Knowledge" },
    { value: "11", label: "Entertainment: Books" },
    { value: "12", label: "Entertainment: Music" },
    {
      value: "13",
      label: "Entertainment: Musicals & Theatres",
    },
    { value: "14", label: "Entertainment: Television" },
    {
      value: "15",
      label: "Entertainment: Video Games",
    },
    {
      value: "16",
      label: "Entertainment: Board Games",
    },
    { value: "17", label: "Science & Nature" },
    { value: "18", label: "Science: Computers" },
    { value: "19", label: "Science: Mathematics" },
    { value: "20", label: "Mythology" },
    { value: "21", label: "Sports" },
    { value: "22", label: "History" },
    { value: "23", label: "Politics" },
    { value: "24", label: "Art" },
    { value: "25", label: "Celebrities" },
    { value: "26", label: "Animals" },
  ];
  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];
  const options = [categoryOptions, difficultyOptions];

  return (
    <>
      {start ? (
        <Home
          startBtn={handleStart}
          options={options}
          setSelectedCategory={setSelectedCategory}
          setSelectedDifficulty={setSelectedDifficulty}
        />
      ) : (
        <Quiz
          questions={questionArray}
          answers={mergedAnswers}
          startBtn={handlePlayAgain}
        />
      )}
    </>
  );
}

export default App;
