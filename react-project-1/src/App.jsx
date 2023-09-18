import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function App() {
  const [dark, setDark] = React.useState(false);

  const toggleDarkMode = () => {
    setDark((prevTheme) => !prevTheme);
  };

  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={dark} />
    </div>
  );
}
