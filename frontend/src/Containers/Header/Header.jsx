import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__flex app__container">
      <header className="app__container-width">
        <div className="header__content">
          <h2>Welcome to my site </h2>
          <h1 className="header__name">Keanu Barnard.</h1>
          <h1>Web Developer from Melbourne.</h1>
          <div className="header__btn-container">
            <HashLink to="/#footer">
              <button className=" header-btn work">Lets Work</button>
            </HashLink>
            <HashLink to="/resume">
              <button className=" header-btn">Resume</button>
            </HashLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
