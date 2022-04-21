import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import AnimatedClouds from './AnimatedClouds'
import CardProfiles from './CardProfiles'
import HomeProducts from './HomeProducts';


function MainInterface() {
  return (
    <>
      <Greeting />
      <AnimatedClouds />
      <HomeProducts>
        <CardProfiles />
      </HomeProducts>
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
