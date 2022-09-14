import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="">
        <i className="fa-regular fa-envelope"></i>
      </a>
      <a href="">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Sidebar;
