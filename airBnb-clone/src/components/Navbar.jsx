import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={airbnbLogo} />
    </nav>
  );
}
