import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardProfiles from './CardProfiles';

const ProductsPage = () => {
  const handleNewProductBtn = () => {
      axios.post("api/v1/card-profile/addCard").then(res => {
      console.log(res);
      // setCardProfiles(res.data); 
    });
  }

  return(
  <>
    <div className='productsBackground'>
      <div className='productsContainer'>
        <h1 id='productsText'>Products</h1>
        <CardProfiles />
        <Link to="/home" id='homeLink'>Go Back Home!</Link>
        <button id = "newProductBtn" onClick={handleNewProductBtn}>Add Product</button>
      </div>
    </div>
    </>
  );
}
export default ProductsPage;