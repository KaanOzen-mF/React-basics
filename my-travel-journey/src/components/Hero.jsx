import React from "react";

export default function Hero(props) {
  return (
    <div className="hero-section">
      <img src={props.locationImage} />
      <div className="containers">
        <div className="location-container">
          <img src="/location-pick.png" />
          <p className="location-name">{props.locationCountry}</p>
          <p className="location-link">
            <a href={props.locationLink}>
              <u>View on Google Maps</u>
            </a>
          </p>
        </div>
        <div className="location-info-container">
          <h3>{props.locationName}</h3>
          <p className="location-date">
            {props.locationStartDate} -{props.locationEndDate}
          </p>
          <p>{props.locationInfo}</p>
        </div>
      </div>
    </div>
  );
}
