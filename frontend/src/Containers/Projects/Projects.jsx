import React from "react";
import "./Projects.scss";
import { ProjectCard } from "../../Components";
import { images } from "../../Constants/index";

const Projects = () => {
  return (
    <div id="projects" className="app__flex app__container-small">
      <div className="app__container-width project__content">
        <p className="tag">Projects</p>
        <h1 className="head-text">
          Checkout my <span>work</span>.
        </h1>
        <p className="p-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis earum deserunt mollitia
          repellat quia, officiis officia consequuntur nemo temporibus dolor.
        </p>
        <div className="projects__grid">
          <ProjectCard
            title={"Wilsons Trucking"}
            description={
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis earum deserunt mollitia repellat quia officiis officia consequuntur nemo temporibus doloribus rerum perspiciatis"
            }
            bgImage={images.wilsonHeader}
          />
        
          <ProjectCard
            title={"La Vue Restaurant"}
            reverse="true"
            description={
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis earum deserunt mollitia repellat quia officiis officia consequuntur nemo temporibus doloribus rerum perspiciatis"
            }
            bgImage={images.lavue}
          />
       
        </div>
      </div>
    </div>
  );
};

export default Projects;
