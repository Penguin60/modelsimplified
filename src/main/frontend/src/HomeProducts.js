import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

const HomeProducts = (props) => {
    return (
      <>
    <div className="secondHome">
        <h1 id = "productsGreeting">High Quality <br />Premade Cards </h1>
        <nav>
        <Link to="/products" id='productsLink'>Visit Our Products Page!</Link>
      </nav>
        {props.children}
        <img src = "trumpsimplified.png" id = "homeProducts"></img>
    </div>
      </>
    );
  }
  
  export default HomeProducts;