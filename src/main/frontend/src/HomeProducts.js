import React, {useState, useEffect, useCallback} from 'react';

const HomeProducts = (props) => {
    return (
      <>
    <div className="secondHome">
        <h1 id = "productsGreeting">High Quality <br />Premade Cards </h1>
        {props.children}
    </div>
      </>
    );
  }
  
  export default HomeProducts;