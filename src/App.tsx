import logo from "./logo.svg";
import "./App.css";
import { Hero } from "./Hero/Hero";
import React from "react";
import { MasterOfTime } from "./Hero/MasterOfTime";

function App() {
  return (
    <MasterOfTime>
      <Hero />
    </MasterOfTime>
  );
}

export default App;
