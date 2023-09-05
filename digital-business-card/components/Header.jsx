import React from "react";

export default function Header() {
  return (
    <div>
      <img className="info-image" src="" alt="profile" />
      <div className="info-section">
        <p>Kaan Ozen</p>
        <p>Frontend Developer</p>
        <p>website</p>
      </div>
      <div className="info-btn-container">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
