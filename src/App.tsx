import "./App.css";
import { Hero } from "./components/Hero/Hero";
import React from "react";
import { MasterOfTime } from "./components/Hero/MasterOfTime";
import { MasterOfWeather } from "./components/Hero/MasterOfWeather";

function App() {
  return (
    <MasterOfTime>
      <MasterOfWeather>
        <Hero />
      </MasterOfWeather>
    </MasterOfTime>
  );
}

export default App;
