import React from "react";
import "./style.css";
import {  Routes, Route,Link } from "react-router-dom";
import Home from "./Home";







export default function Page2() {
  return (
    <div>
      <h1>page2</h1>
      <Link to="/">Home</Link>
    </div>
  );
}