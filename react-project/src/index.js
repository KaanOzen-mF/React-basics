import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Main";
import Footer from "./Footer";

function Page() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);
