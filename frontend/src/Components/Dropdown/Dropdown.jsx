import React from "react";
import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ tag, title, content }) => {
  const [dropdown, setDropdown] = useState(true);

  const toggleDropdown = () => {
    dropdown === true ? setDropdown(false) : setDropdown(true);
    console.log("Drop down clicked");
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown__title-section">
        <div className="title">
          <p className="tag">{tag}</p>
          <h1 className="head-text">{title}</h1>
        </div>
        <button
          onClick={() => {
            toggleDropdown();
          }}
        >
          Show
        </button>
      </div>
      <hr />
      <div className={`dropdown__content ${dropdown === true ? "active" : ""}`}>{content}</div>
    </div>
  );
};

export default Dropdown;
