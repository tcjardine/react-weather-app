import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://steady-stroopwafel-59b96d.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Tracy Jardine
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/tcjardine/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            opened-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
