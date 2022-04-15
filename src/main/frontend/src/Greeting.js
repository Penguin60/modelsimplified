import React, {useState, useEffect, useCallback} from 'react';

const Greeting = () => {
  return (
    <>
      <h1 id = "greetingMessage">Modelsimplified <br />Custom Characters</h1>
      <img src = "person.png" id = "greetingCharacter"></img>
    </>
  );
}

export default Greeting;