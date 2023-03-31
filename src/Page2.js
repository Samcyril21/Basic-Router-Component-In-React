import React from "react";
import "./style.css";
import   {Routes, Route,Link}  from "react-router-dom";








export default function Page2() {
  return (
    <div>
      <h1>This is page2</h1>
      <Link to="/">Home</Link>
    </div>
  );
}