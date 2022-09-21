import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const displayNav = () => {
    displayMobileNav === true ? setDisplayMobileNav(false) : setDisplayMobileNav(true);
    console.log("Nav beeing clicked");
    console.log(displayMobileNav);
  };

  return (
    <nav className={`app__flex nav ${displayMobileNav === true ? "active" : ""}`}>
      <div className="app__container-width nav__content">
        <HashLink
          onClick={() => {
            setDisplayMobileNav(false);
          }}
          className="logo"
          to={"/#header"}
        >
          <h1>
            K<span>B</span>
          </h1>
        </HashLink>
        <div className={"nav__content-links"}>
          <NavHashLink
            onClick={() => {
              setDisplayMobileNav(false);
            }}
            className={"nav-links"}
            to="/#about"
          >
            About
          </NavHashLink>
          <NavHashLink
            onClick={() => {
              setDisplayMobileNav(false);
            }}
            className={"nav-links"}
            to="/#projects"
          >
            Projects
          </NavHashLink>
          <NavHashLink
            onClick={() => {
              setDisplayMobileNav(false);
            }}
            className={"nav-links"}
            to="/#footer"
          >
            Contact
          </NavHashLink>
        </div>
        <div className="nav__content-details">
          <a href="https://github.com/KeanuBarnardd?tab=repositories" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <HashLink
            onClick={() => {
              setDisplayMobileNav(false);
            }}
            className="resume-link"
            to="/resume#resume"
          >
            <button className="resume-btn">Resume</button>{" "}
          </HashLink>
        </div>
        <button onClick={displayNav} className="nav__button">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
