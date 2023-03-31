import React from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>This is About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}