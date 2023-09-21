import React from "react";

export default function Dice(props) {
  const style = props.isHeld
    ? { backgroundColor: "#59E391" }
    : { backgroundColor: "#fff" };

  return (
    <div className="dice" style={style} onClick={props.holdDice}>
      {props.value}
    </div>
  );
}
