import React from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

//TODO
/*
 3) Track the time it took to win
 4) Save your best time to localStorage
*/

export default function App() {
  // State to manage the dice
  const [dice, setDice] = React.useState(allNewDice());

  //State to manage the roll number
  const [rollTracker, setRollTracker] = React.useState(-1);

  //State to manage the tenzies game win game decide
  const [tenzies, setTenzies] = React.useState(false);

  // Function to check if all dice are held
  function areAllDiceHeld() {
    return dice.every((die) => die.isHeld);
  }

  // Function to check if all dice have the same value
  function doAllDiceHaveSameValue() {
    const firstDieValue = dice[0].value;
    return dice.every((die) => die.value === firstDieValue);
  }

  React.useEffect(() => {
    if (areAllDiceHeld() && doAllDiceHaveSameValue()) {
      setTenzies(true);
      console.log("Game Won");
      setRollTracker(-1); //reset roll tracker
    }

    setRollTracker((prevVal) => prevVal + 1); // roll tracker counter
  }, [dice]);

  // Function to generate a new die
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), // Generates a random value between 1 and 6
      isHeld: false, // Indicates if the die is held or not
      id: nanoid(), // Generates a unique ID for each die
    };
  }

  // Function to generate an array of 10 new dice
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // Function to roll the dice
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  // Function to hold/unhold a die
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die; // Toggle the 'isHeld' property of the selected die
      })
    );
  }

  // Generate JSX elements for each die
  const diceElements = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="game-container">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <p>{rollTracker}</p>

      <div className="dice-container">{diceElements}</div>
      {tenzies && <Confetti />}
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}
