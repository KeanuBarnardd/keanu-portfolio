import React from "react";
import "./Projects.scss";
import { ProjectCard } from "../../Components";
import { images } from "../../Constants/index";
import { wilsonSlides, lavueSlides } from "../../Constants/Slides";

const Projects = () => {
  return (
    <div id="projects" className="app__flex app__container-small">
      <div className="app__container-width project__content">
        <p className="tag">Projects</p>
        <h1 className="head-text">
          Checkout my <span>work</span>.
        </h1>
        <p className="p-text">
          Here is a few of my hand picked favourite projects I've completed. All work included below is designed and built myself. 
        </p>
        <div className="projects__grid">
          <ProjectCard
            slides={wilsonSlides}
            title={"Wilsons Trucking"}
            description={
              <p className="p-text">
                Wilson's Trucks is a website I designed myself & created with <span>React</span>. The purpose is to advertise the business through a clean, modern & sharp tone. Including animations with <span>Framer-motion</span>, forms and beautiful UI incorporated into the companies orange theme.
              </p>
            }
            bgImage={images.wilsonHeader}
          />

          <ProjectCard
            slides={lavueSlides}
            title={"La Vue Restaurant"}
            reverse="true"
            description={
              <p className="">
                LaVue is a modern and minimilistic website that I designed for a sophisticated restaurant. I used <span>React</span> and <span>scss</span> in conjuction with <span>React-Router</span> to construct an elegant multi-page website.
              </p>
            }
            bgImage={images.lavue}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
