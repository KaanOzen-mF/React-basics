import React from "react";
import logo from "../assets/TrollFace.png";

export default function Header() {
  return (
    <nav>
      <div className="navbar-logo-container">
        <img src={logo} />
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </nav>
  );
}
