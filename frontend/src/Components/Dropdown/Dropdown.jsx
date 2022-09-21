import React from "react";
import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ tag, title, content, id }) => {
  const [dropdown, setDropdown] = useState(true);

  const toggleDropdown = () => {
    dropdown === true ? setDropdown(false) : setDropdown(true);
  };

  return (
    <div className="dropdown__container" id={id}>
      <div className="dropdown__title-section">
        <div className="title">
          <p className="tag">{tag}</p>
          <h3 className="head-text">{title}</h3>
        </div>
        <button
          onClick={() => {
            toggleDropdown();
          }}
      >
          {dropdown ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>
      </div>
      <hr />
      <div className={`dropdown__content ${dropdown === true ? "active" : ""}`}>{content}</div>
    </div>
  );
};

export default Dropdown;
