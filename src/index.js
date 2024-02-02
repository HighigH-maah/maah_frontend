import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderLogoutBtn from "./components/Header/HeaderLogoutBtn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<HeaderLogoutBtn />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
