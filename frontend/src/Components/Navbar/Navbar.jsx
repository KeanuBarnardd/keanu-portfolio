import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import "./Navbar.scss";
import { images } from "../../Constants";

const Navbar = () => {
  return (
    <nav className="app__flex">
      <div className="app__container-width nav__content">
        <HashLink className="logo" to={"/"}> <h1>K<span>B</span></h1> </HashLink>
        <div className="nav__content-links">
          <NavHashLink className={"nav-links"} to="/#about">
            About
          </NavHashLink>
          <NavHashLink className={"nav-links"} to="/#projects">
            Projects
          </NavHashLink>
          <NavHashLink className={"nav-links"} to="/#footer">
            Contact
          </NavHashLink>
        </div>
        <div className="nav__content-details">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <HashLink to="/resume">
            {" "}
            <button className="resume-btn">Resume</button>{" "}
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
