import React from "react";
import logo from "../assets/reactLogo.png";
import "../index.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
