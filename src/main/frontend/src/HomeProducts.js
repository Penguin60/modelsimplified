import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

const HomeProducts = (props) => {
    return (
      <>
    <div className="secondHome">
        <h1 id = "productsGreeting">High Quality <br />Premade Cards </h1>
        <nav>
        <Link to="/productsPage" id='productsLink'>Visit Our Products Page!</Link>
        <Link to="/register">Register</Link>
      </nav>
        {props.children}
    </div>
      </>
    );
  }
  
  export default HomeProducts;