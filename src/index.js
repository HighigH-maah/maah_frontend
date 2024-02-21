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
import HiCard from "./pages/MyHiCard/HiCard";
import MyCardList from "./pages/MyCard/MyCardList";
import LostCard from "./pages/MyCard/LostCard";
import MyData from "./pages/MyData/MyData";
import CardApplication from "./pages/CardApplication/CardApplication";
import MyByCard from "./pages/MyByCard/MyByCard";
import ByCard from "./pages/ByCard/ByCard";
import ScrollToTop from "./components/Utils/ScrollToTop";
import MemberLoad from "./components/Utils/SessionStorage";
// import MyHiCardAccountChange from "./components/HiCard/MyHiCardAccountChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
//메인화면 진입 시 session 저장
MemberLoad();
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<HeaderLogoutBtn />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/hiCard" element={<HiCardDesignSelect />}></Route>
      <Route path="/cardApplication" element={<CardApplication />}></Route>
      <Route path="/share" element={<Share />}></Route>
      <Route path="/cardCompare" element={<CardCompare />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/myCardList" element={<MyCardList />}></Route>
      <Route path="/lostCard" element={<LostCard />}></Route>
      <Route path="/myData" element={<MyData />}></Route>
      <Route path="/myHiCardDetail" element={<HiCard />}></Route>
      <Route path="/myByCardDetail" element={<MyByCard />}></Route>
      <Route path="/byCardDetail/:byCardCode" element={<ByCard />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
