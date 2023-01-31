import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./Header.scss";

const Header = () => {
  return (
    <div id="header" className="app__flex app__container">
      <header className="app__container-width">
        <div className="header__content">
          <motion.h2
            initial={{ x: "-5vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to my site{" "}
          </motion.h2>
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="header__name"
          >
            Keanu Barnard.
          </motion.h1>
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Web Developer from Melbourne.
          </motion.h1>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="header__btn-container"
          >
            <HashLink className="header__link" to="/#footer">
              <button className=" header-btn work">Lets Work</button>
            </HashLink>
            <HashLink className="header__link" to="/resume">
              <button className=" header-btn">Resume</button>
            </HashLink>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Header;
