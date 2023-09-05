import React from "react";
import logo from "../assets/reactLogo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} />
        <h1>ReactFacts</h1>
      </div>
      <h3>React Course - Project 2</h3>
    </nav>
  );
}
