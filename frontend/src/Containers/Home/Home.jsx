import React from "react";
import { About, Projects, Header } from "../index";
import { Footer, Sidebar } from "../../Components/index";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
