import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import AnimatedClouds from './AnimatedClouds'
import HomeProducts from './HomeProducts';


function MainInterface() {
  return (
    <>
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
