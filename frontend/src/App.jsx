import React from "react";
import { Navbar } from "./Components/index";
import { Resume, Projects, About, Header, Home } from "./Containers/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
