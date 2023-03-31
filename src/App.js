import React from "react";
import "./style.css";
import {Routes, Route,link} from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Page2" element={<Page2/>}/>
      </Routes>
    </div>
  );
}
