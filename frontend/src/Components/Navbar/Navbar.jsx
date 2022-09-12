import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__flex">
      <div className="app__container-width nav__content">
        <div className="nav__content-links">
          <NavHashLink to={"/#about"}>About</NavHashLink>
          <NavHashLink to={"/#projects"}>Projects</NavHashLink>
          <NavHashLink to={"/#footer"}>Contact</NavHashLink>
        </div>
        <div className="nav__content-details">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <HashLink>Resume</HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
