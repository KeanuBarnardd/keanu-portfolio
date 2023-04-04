import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://github.com/KeanuBarnardd" target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://twitter.com/keanu__dev" target="_blank">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/keanu-barnard-057378264/" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Sidebar;
