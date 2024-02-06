import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderLogoutBtn from "./components/Header/HeaderLogoutBtn";
import HiCardDesignSelect from "./pages/HiCardDesignSelect/HiCardDesignSelect";
import Main from "./pages/Main/Main";
import Share from "./pages/Share/Share";

import CardCompare from "./pages/CardCompare/CardCompare";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<HeaderLogoutBtn />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/hicard" element={<HiCardDesignSelect />}></Route>
      <Route path="/share" element={<Share />}></Route>
      <Route path="/cardcompare" element={<CardCompare />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
