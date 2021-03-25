import logo from "./logo.svg";
import "./App.css";
import { Hero } from "./Hero/Hero";
import React from "react";
import { WeatherProvider } from "./WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <Hero />
    </WeatherProvider>
  );
}

export default App;
