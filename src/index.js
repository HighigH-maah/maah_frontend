import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import HiCard from "./components/HiCard/HiCard";
import VirtualCardApply from "./components/HiCard/VirtualCardApply";
import MyPaymentHistory from "./components/HiCard/MyPaymentHistory";
import VirtualCardNumView from "./components/HiCard/VirtualCardNumView";
import MyAccountChange from "./components/HiCard/MyAccountChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/hiCardDetail" element={<HiCard />}></Route>
      <Route path="/myPaymentHistory" element={<MyPaymentHistory />}></Route>
      <Route path="/myAccountChange" element={<MyAccountChange />}></Route>
      <Route path="/virtualCardApply" element={<VirtualCardApply />}></Route>
      <Route
        path="/virtualCardNumView"
        element={<VirtualCardNumView />}
      ></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
