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
import SignUp from "./components/SignUp/SignUp";
import HiCard from "./components/HiCard/HiCard";
import VirtualCardApply from "./components/HiCard/VirtualCardApply";
import MyPaymentHistory from "./components/HiCard/MyPaymentHistory";
import VirtualCardNumView from "./components/HiCard/VirtualCardNumView";
import MyAccountChange from "./components/HiCard/MyAccountChange";
import MyCardList from "./pages/My/MyCardList";
import InputIncome from "./pages/InputIncome/InputIncome";
import InputIDCard from "./pages/InputIDCard/InputIDCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<HeaderLogoutBtn />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/hiCard" element={<HiCardDesignSelect />}></Route>
      <Route path="/cardApplication" element={<InputIncome />}></Route>
      <Route path="/cardApplication2" element={<InputIDCard/>}></Route>
      <Route path="/share" element={<Share />}></Route>
      <Route path="/cardCompare" element={<CardCompare />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/hiCardDetail" element={<HiCard />}></Route>
      <Route path="/myPaymentHistory" element={<MyPaymentHistory />}></Route>
      <Route path="/myAccountChange" element={<MyAccountChange />}></Route>
      <Route path="/virtualCardApply" element={<VirtualCardApply />}></Route>
      <Route
        path="/virtualCardNumView"
        element={<VirtualCardNumView />}
      ></Route>
      <Route path="/mycardlist" element={<MyCardList />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
