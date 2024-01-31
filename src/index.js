import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./components/SignUp/SignUp";
import SignUp2 from "./components/SignUp/SignUp2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signUp" element={<SignUp2 />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
