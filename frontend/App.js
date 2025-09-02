import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./src/pages/Home";
import Auth from "./src/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
