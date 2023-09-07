import React from "react";
import katieImg from "../assets/katie-img.png";
import starImg from "../assets/starImg.png";

export default function Card() {
  return (
    <div className="card-container">
      <img src={katieImg} alt="" />
      <div className="rating-container">
        <img src={starImg} />
        <p className="rate">5.0</p>
        <p className="rate-info">(6) ○ USA</p>
      </div>
      <p className="card-info">Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold-text">From $136</span> / person
      </p>
    </div>
  );
}
