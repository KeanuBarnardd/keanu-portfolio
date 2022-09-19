import React from "react";

import "./Resume.scss";
import { Dropdown } from "../../Components/index";

const Resume = () => {
  return (
    <div className="app__flex app__container-small">
      <div className="app__container-width resume">
        <div className="resume__container">
          <Dropdown
            title="Intro"
            tag="Objective"
            content={
              <p className="p-text">
                I'm a self-taught web developer and ex restaurateur looking for a new challenge. For
                the last decade, I've build and helped early-stage startups to large enterprise
                companies build businesses that are simple, beautiful, and impactful in their field.
                I love encountering hard-to solve-problems and approach them with patience,
                determination and relentless perseverance.
              </p>
            }
          />
        </div>
        <div className="resume__side">
          s
        </div>
      </div>
    </div>
  );
};

export default Resume;
