import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="card-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
