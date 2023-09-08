import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";

export default function App() {
  const hero = data.map((location) => {
    return (
      <Hero
        key={location.id}
        locationName={location.title}
        locationLink={location.googleMapsUrl}
        locationImage={location.imageUrl}
        locationCountry={location.location}
        locationInfo={location.description}
        locationStartDate={location.startDate}
        locationEndDate={location.endDate}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {hero}
    </div>
  );
}
