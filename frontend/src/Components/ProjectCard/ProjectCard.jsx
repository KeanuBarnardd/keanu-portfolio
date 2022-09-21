import React from "react";
import { useState } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({
  bgImage,
  projectLogo,
  title,
  description,
  reverse,
  slides,
  skills,
  projectLink,
  githubLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functionality
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={`project__card ${reverse}`}>
      <div className="project-img" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
        <div onClick={goToPrevious} className="arrow left-arrow">
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div onClick={goToNext} className="arrow right-arrow">
          <i className="fa-solid fa-circle-right"></i>
        </div>
      </div>
      <div className="project__container">
        <div className="project__details">
          <h1 className="head-text">
            <span></span>
            {title}
          </h1>

          <div>{description}</div>
          <div className="skills__container">{skills}</div>
        </div>

        <div className="project__buttons">
          <a className="link-btn header-btn work" href={projectLink}target="_blank" >
            <i className="fa-solid fa-link"></i>Live Preview
          </a>
          <a className="link-btn header-btn" href={githubLink} target="_blank" >
            <i className="fa-brands fa-github"></i>Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
