import React from "react";
import "./Projects.scss";
import { ProjectCard, Tag } from "../../Components";
import { images } from "../../Constants/index";
import {
  wilsonSlides,
  lavueSlides,
  melbourneHomeSlides,
  proCleanersSlides,
} from "../../Constants/Slides";

const Projects = () => {
  return (
    <div id="projects" className="app__flex app__container-small">
      <div className="app__container-width project__content">
        <p className="tag">Projects</p>
        <h1 className="head-text">
          Checkout my <span>work</span>.
        </h1>
        <p className="p-text">
          Here is a few of my hand picked favourite projects I've completed. All work included below
          is designed and built myself.
        </p>
        <div className="projects__grid">
          <ProjectCard
            slides={melbourneHomeSlides}
            title={"Melbourne Homes"}
            reverse=""
            githubLink={"https://github.com/KeanuBarnardd/MelbourneHomes"}
            description={
              <p className="p-text">
                Melbourne Home is a fully functional front end website/web app designed by myself
                and built with <span>React</span>. This application allows users to search,filter
                and view available properties in Melbourne. I've also included a mortgage calculator
                so users can determine how much their mortgage payments will be.
              </p>
            }
            bgImage={images.wilsonHeader}
            skills={
              <>
                <Tag text={"React"} tagState={"major"} />
                <Tag text={"Node-Js"} tagState={"major"} />
                <Tag text={"Html"} tagState={"major"} />
                <Tag text={"Scss/css"} tagState={"major"} />
                <Tag text={"React-Router"} tagState={"minor"} />
                <Tag text={"Framer-motion"} tagState={"minor"} />
              </>
            }
          />
          <ProjectCard
            slides={proCleanersSlides}
            title={"ProCleaners"}
            reverse="true"
            githubLink={"https://github.com/KeanuBarnardd/Pro-clean"}
            description={
              <p className="p-text">
                ProCleaners is a website that I have built using <span>React</span> , CSS, and HTML. It is a website that provides information about cleaning services, including the types of services offered, prices, and company information. Users can also book cleaning services directly through the website. The website is designed to be user-friendly and visually appealing, making it easy for potential customers to navigate and find the information they need.  
              </p>
            }
            bgImage={images.wilsonHeader}
            skills={
              <>
                <Tag text={"React"} tagState={"major"} />
                <Tag text={"Html"} tagState={"major"} />
                <Tag text={"Scss/css"} tagState={"major"} />
                <Tag text={"React-Router"} tagState={"minor"} />
                <Tag text={"Framer-motion"} tagState={"minor"} />
              </>
            }
          />

          <ProjectCard
            slides={wilsonSlides}
            title={"Wilsons Trucking"}
            reverse=""
            githubLink={"https://github.com/KeanuBarnardd/Wilsons-Import-React"}
            description={
              <p className="p-text">
                Wilson's Trucks is a website I designed myself & created with <span>React</span>.
                The purpose is to advertise the business through a clean, modern & sharp tone.
                Including animations with <span>Framer-motion</span>, forms and beautiful UI
                incorporated into the companies orange theme.
              </p>
            }
            bgImage={images.wilsonHeader}
            skills={
              <>
                <Tag text={"React"} tagState={"major"} />
                <Tag text={"Html"} tagState={"major"} />
                <Tag text={"Scss/css"} tagState={"major"} />
                <Tag text={"React-Router"} tagState={"minor"} />
                <Tag text={"Framer-motion"} tagState={"minor"} />
              </>
            }
          />

          <ProjectCard
            slides={lavueSlides}
            title={"La Vue Restaurant"}
            githubLink={"https://github.com/KeanuBarnardd/la-vue-websit"}
            reverse="true"
            description={
              <p className="p-text">
                LaVue is a modern and minimilistic website that I designed for a sophisticated
                restaurant. I used <span>React</span> and <span>scss</span> in conjuction with{" "}
                <span>React-Router</span> to construct an elegant multi-page website.
              </p>
            }
            skills={
              <>
                <Tag text={"React"} tagState={"major"} />
                <Tag text={"Html"} tagState={"major"} />
                <Tag text={"Scss/css"} tagState={"major"} />
                <Tag text={"React-Router"} tagState={"minor"} />
                <Tag text={"Framer-motion"} tagState={"minor"} />
              </>
            }
            bgImage={images.lavue}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
