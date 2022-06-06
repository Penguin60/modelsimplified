import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import AnimatedClouds from "./AnimatedClouds";
import HomeProducts from "./HomeProducts";
import ResponsiveAppBar from "./routes/Navbar";

function MainInterface() {
  return (
    <>
      <ResponsiveAppBar />
      <Greeting />
      <AnimatedClouds />
      <HomeProducts />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <MainInterface />
    </div>
  );
}
export default App;
