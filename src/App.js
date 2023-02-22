import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./Home";
import Example1 from "./Example1";
import Example2 from "./Example2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/Example1">예제1</Link></li>
          <li><Link to="/Example2">예제2</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Example1" element={<Example1/>}/>
          <Route path="/Example2" element={<Example2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;