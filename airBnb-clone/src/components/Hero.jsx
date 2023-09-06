import React from "react";
import mainPhoto from "../assets/main-photo.png";

export default function Hero() {
  return (
    <main className="hero-section">
      <img src={mainPhoto} />
      <h3>Online Experiences</h3>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
