import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollObserver from './scrollController.tsx';
import Greeting from './Greeting';
import AnimatedClouds from './AnimatedClouds'
import CardProfiles from './CardProfiles'

function SecondHome () {
  return (
    <>
      <ScrollObserver>
        <div class = "homeProducts">
          <p>e<br /> hello e<br /> hello e<br /> hello e<br /> hello</p>
        </div>
      </ScrollObserver>
  </>
  )
}

function MainInterface() {
  return (
    <>
      <Greeting />
      <CardProfiles />
      <AnimatedClouds />
      <SecondHome />
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
