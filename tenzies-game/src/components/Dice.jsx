import React from "react";

export default function Dice(props) {
  const style = props.isHeld
    ? { backgroundColor: "#59E391" }
    : { backgroundColor: "#000" };

  // Mapping of dot positions for each value
  const dotPositions = [
    [], // 0
    [0], // 1
    [0, 1], // 2
    [0, 1, 2], // 3
    [0, 1, 2, 3], // 4
    [0, 1, 2, 3, 4], // 5
    [0, 1, 2, 3, 4, 5], // 6
  ];

  const dots = dotPositions[props.value].map((position, index) => (
    <div
      key={index}
      className={`dot dot-${index + 1}`}
      style={{
        gridArea: position,
        backgroundColor: "#ffffff", // Ensure dots are white
      }}
    />
  ));

  return (
    <div className="dice" style={style} onClick={props.holdDice}>
      {dots}
    </div>
  );
}
