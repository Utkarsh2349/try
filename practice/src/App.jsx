import React from "react";
import Demo from "./Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
