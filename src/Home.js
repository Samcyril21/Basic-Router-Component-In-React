import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This Is Home page</h1>
     <Link to="/Page2" >Page2</Link>
     {<br/>}
     {<br/>}
     <Link to="/About" >About</Link>
    </div>
  );
}