import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HiCardDesignSelect from "./pages/HiCardDesignSelect/HiCardDesignSelect";
import Main from "./pages/Main/Main";
import Main2 from "./pages/Main/Main2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/2" element={<Main2 />}></Route>
      <Route path="/hicard" element={<HiCardDesignSelect />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
