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
        <Route path="/" component={<Home />} />
        <Route path="/resume" component={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

/*
  HOME CONTAINER = / 
    - ABOUT /#about
    - PROJECTS /#projects
    - CONTACT /#contact
  RESUME CONTAINER = /resume
*/

export default App;
