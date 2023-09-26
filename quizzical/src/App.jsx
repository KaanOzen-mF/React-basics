import React from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  //State to manage start to quiz game
  const [start, setStart] = React.useState(true);

  //Handle function for home page start quiz button
  const handleStart = () => {
    setStart((preVal) => !preVal);
    console.log(start);
  };

  //Conditional render for JSX elements
  return <>{start ? <Home startBtn={handleStart} /> : <Quiz />}</>;
}

export default App;
