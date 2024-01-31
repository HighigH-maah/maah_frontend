import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HiCardDesignSelect from "./pages/HiCardDesignSelect/HiCardDesignSelect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HiCardDesignSelect />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
