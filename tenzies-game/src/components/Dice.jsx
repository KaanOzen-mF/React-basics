import React from "react";

export default function Dice(props) {
  const style = props.isHeld
    ? { backgroundColor: "#59E391" }
    : { backgroundColor: "#000" };

  // Mapping of dot positions for each value
  const dotPositions = [
    [], // 0 (not used)
    [4], // 1
    [0, 8], // 2
    [0, 4, 8], // 3
    [0, 2, 6, 8], // 4
    [0, 2, 4, 6, 8], // 5
    [0, 2, 3, 5, 6, 8], // 6
  ];

  const dots = dotPositions[props.value].map((position, index) => (
    <div
      key={index}
      className={`dot dot-${index + 1}`}
      style={{ gridArea: position }}
    />
  ));

  return (
    <div className="dice" style={style} onClick={props.holdDice}>
      {dots}
    </div>
  );
}
