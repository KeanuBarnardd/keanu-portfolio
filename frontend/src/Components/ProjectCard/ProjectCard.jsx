import React from "react";

import "./ProjectCard.scss";

const ProjectCard = ({ bgImage, projectLogo, title, description, reverse }) => {
  return (
    <div className={`project__card ${reverse}`}>
      <div className="project-img" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="project__container">
        <div className="project__details">
          <h1 className="head-text">
            <span></span>
            {title}
          </h1>

          <p className="p-text">{description}</p>
          <div className="skills__container">
            <p className="skill-tag">React</p>
            <p className="skill-tag">Javascript</p>
            <p className="skill-tag">Node JS</p>
          </div>
        </div>

        <div className="project__buttons">
          <button className="header-btn work">Live Preview</button>
          <button className="header-btn">Github</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
