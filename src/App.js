import React from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from "./Home";
import Page2 from "./Page2";
import About from "./About";
import Career from "./Career";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Page2" element={<Page2/>}/>
        <Route path="/About" element={<About/>}/> 
        {/* <Route path="/Career" element={<Career/>}/>     */}
      </Routes>
    </div>
  );
}
