import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsPage from "./routes/ProductsPage";
import LandingPage from "./routes/LandingPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/home" element={<App />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
