import React from "react";

export default function Header() {
  return (
    <div className="info-container">
      <img
        className="info-image"
        src="../public/Kaan'sPhoto.png"
        alt="profile"
      />
      <div className="info-section">
        <p className="first-element">Kaan Ozen</p>
        <p className="second-element">Frontend Developer</p>
        <p className="third-element">
          <a href="https://kaanozen-mf.github.io/">
            https://kaanozen-mf.github.io/
          </a>
        </p>
      </div>
      <div className="info-btn-container">
        <button className="email-btn">
          <img src="../public/Mail.png" /> Email
        </button>
        <button className="linkedin-btn">
          <img src="../public/linkedin.png" /> LinkedIn
        </button>
      </div>
    </div>
  );
}
