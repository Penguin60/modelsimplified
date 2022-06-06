import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardProfiles from "./CardProfiles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ResponsiveAppBar from "./Navbar";

const ProductsPage = () => {
  const handleNewProductBtn = () => {
    axios.post("api/v1/card-profile/addCard").then((res) => {
      console.log(res);
      // setCardProfiles(res.data);
    });
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="productsBackground">
        <div className="productsContainer">
          <h1 id="productsText">Products</h1>
          <CardProfiles />
          <Link to="/home" id="homeLink">
            Go Back Home!
          </Link>
          <Fab color="primary" aria-label="add" onClick={handleNewProductBtn}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
