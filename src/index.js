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
import MyCardList from "./pages/My/MyCardList";
import LostCard from "./pages/My/LostCard";
import InputIncome from "./pages/InputIncome/InputIncome";
import InputIDCard from "./pages/InputIDCard/InputIDCard";
import Cert from "./components/HiCard/Cert";
import ByCard from "./pages/ByCard/ByCard";
import MyHiCardAccountChange from "./components/HiCard/MyHiCardAccountChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<HeaderLogoutBtn />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/hiCard" element={<HiCardDesignSelect />}></Route>
      <Route path="/cardApplication" element={<InputIncome />}></Route>
      <Route path="/cardApplication2" element={<InputIDCard />}></Route>
      <Route path="/share" element={<Share />}></Route>
      <Route path="/cardCompare" element={<CardCompare />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/hiCardDetail" element={<HiCard />}></Route>
      <Route path="/myPaymentHistory" element={<MyPaymentHistory />}></Route>
      <Route
        path="/myAccountChange"
        element={<MyHiCardAccountChange />}
      ></Route>
      <Route path="/virtualCardApply" element={<VirtualCardApply />}></Route>

      <Route
        path="/virtualCardNumView"
        element={<VirtualCardNumView />}
      ></Route>
      <Route path="/myCardList" element={<MyCardList />}></Route>
      <Route path="/lostCard" element={<LostCard />}></Route>
      <Route path="/cert" element={<Cert />}></Route>

      <Route path="/byCardDetail" element={<ByCard />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
