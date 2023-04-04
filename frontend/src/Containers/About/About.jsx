import React from "react";
import { Timeline } from "../index";
import "./About.scss";
import { images } from "../../Constants/index";
const About = () => {
  return (
    <div id="about" className="app__flex app__container">
      <div className="app__container-width">
        <div className="about__container">
          <div className="about__details">
            <p className="tag">About</p>
            <h1 className="head-text">
              More <span>about</span> me.
            </h1>
            <p className="p-text">
              I'm a <span>Melbourne</span> based student & developer. My focus area has been
              front-end development with <span>React</span> to create beautiful user and developer
              experiences that bring delight. I've spent most of my life deeply invested in
              technology, stumbling across <span>Unity Game Engine</span> which sky rocketed my
              interest in programming from an early age.
            </p>

            <div className="skills__container">
              <div className="skill__container">
                <i className="devicon-javascript-plain colored"></i>
                <p>Javascript</p>
              </div>
              <div className="skill__container">
                <i className="devicon-react-original colored"></i>
                <p>React</p>
              </div>
              <div className="skill__container">
                <i className="devicon-css3-plain colored"></i>
                <p>CSS/SCSS</p>
              </div>
              <div className="skill__container">
                <i className="devicon-nodejs-plain colored"></i>
                <p>Node Js</p>
              </div>
             
              <div className="skill__container">
                <i class="devicon-csharp-plain colored"></i>

                <p>C#</p>
              </div>
              <div className="skill__container">
                <i class="devicon-mysql-plain colored"></i>

                <p>MySQL</p>
              </div>
            </div>
          </div>
          <img src={images.keanu2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
