import React from "react";
import starImg from "../assets/starImg.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={`src/assets/${props.coverImg}`} alt="" />
      <div className="rating-container">
        <img src={starImg} />
        <p className="rate">{props.stats.rating}</p>
        <p className="rate-info">
          ({props.stats.reviewCount}) ○ {props.location}
        </p>
      </div>
      <p className="card-info">{props.title}</p>
      <p>
        <span className="bold-text">From ${props.price}</span> / person
      </p>
    </div>
  );
}
