import logo from "./logo.svg";
import "./App.css";
import { Hero } from "./components/Hero/Hero";
import React from "react";
import { MasterOfTime } from "./components/Hero/MasterOfTime";

function App() {
  return (
    <MasterOfTime>
      <Hero />
    </MasterOfTime>
  );
}

export default App;
