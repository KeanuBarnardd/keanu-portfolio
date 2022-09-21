import React from "react";

import "./Resume.scss";
import { Dropdown, Exp, ResumeNav } from "../../Components/index";
import { Footer } from "../../Components/index";
const Resume = () => {
  return (
    <>
      <div id="resume" className="app__flex app__container-small">
        <div className="app__container-width resume">
          <div className="resume__container">
            <Dropdown
              id={"intro"}
              title="Intro"
              content={
                <p className="p-text">
                  I'm a self-taught web developer and ex restaurateur looking for a new challenge.
                  For the last decade, I've build and helped early-stage startups to large
                  enterprise companies build businesses that are simple, beautiful, and impactful in
                  their field. I love encountering hard-to solve-problems and approach them with
                  patience, determination and relentless perseverance.
                </p>
              }
            />
            <Dropdown
              id={"experience"}
              title={"Experience"}
              content={
                <>
                  <Exp
                    position={"Electrician"}
                    company={"Nexus Electrical Solutions"}
                    location={"Oakleigh 3166, Melbourne "}
                    start={"September 2020"}
                    end={"Current"}
                    content={
                      <ul className="content__list">
                        <li>
                          Cooperating with Programmers to carry out testing home automation testing
                          on Domestic & Commercial projects.{" "}
                        </li>
                        <li>Teaching,mentoring and overseeing apprentices.</li>
                        <li>Communicating with clients to deliver services.</li>

                        <li>
                          Managing and organising large scale construction projects including supply
                          orders, inventory tracking and communicating with construction
                          managers/supervisors.{" "}
                        </li>
                        <li>
                          Handled all areas of electrical work
                          <ul>
                            <li>Fault Finding / Testing </li>
                            <li>
                              Domestic, Commercial & Industrial fit off, cut out and Rough ins.{" "}
                            </li>
                            <li>Home Automation Systems</li>
                            <li>Security, Data, home theatre and Tv systems</li>
                            <li>Underground mains</li>
                          </ul>
                        </li>
                      </ul>
                    }
                  />

                  <Exp
                    position={"Electrical Apprentice"}
                    company={"Breakwell Electrical Pytd"}
                    location={"Tullamarine 3043, Melbourne  "}
                    start={"November 2017"}
                    end={"September 2020"}
                    content={
                      <ul className="content__list">
                        <li>
                          Carrying out electrical work including rough-in, fit-offs and cut-outs.
                        </li>
                        <li>
                          Working along side A-grade Electrcian, undertaking specific instrucations
                          to complete tasks.
                        </li>
                        <li>Managing upkeep & storage of tools, materials and equipment.</li>
                      </ul>
                    }
                  />
                  <Exp
                    position={"Production Line Worker"}
                    company={"Breakwell Electrical Pytd"}
                    location={"Oakleigh 3166, Melbourne "}
                    start={"August 2016"}
                    end={"December 2016"}
                    content={
                      <ul className="content__list">
                        <li>Labor including lifting, pulling and moving of aluminum carts.</li>
                        <li>
                          Noting cutting amounts, measurements and job numbers onto worksheets.
                        </li>
                        <li>Operating heavy industrial machinery</li>
                      </ul>
                    }
                  />
                </>
              }
            />

            <Dropdown
              id={"education"}
              title={"Education"}
              content={
                <>
                  <Exp
                    company={"Bachelors of Information Technology (CS)"}
                    location={"Victoria University"}
                    start={"Current"}
                    end={"Septemeber 2024"}
                    content={
                      <ul className="content__list">
                        <li>
                          egree will also provide you with a fundamental understanding of all
                          aspects of computing, computer hardware, operating systems, computer
                          networks, database systems, software engineering and organisational
                          issues.{" "}
                        </li>
                      </ul>
                    }
                  />
                  <Exp
                    company={"Cert III in Electrotechnology Studies"}
                    location={"Victoria University Polytechnic"}
                    start={"November 2017"}
                    end={"September 2020"}
                    content={
                      <ul className="content__list">
                        <li>
                          This certificate provides you with the skills to select, install, set up,
                          test, repair and maintain electrical systems and equipment. On-the-job
                          training with your employer is combined with studying{" "}
                        </li>
                      </ul>
                    }
                  />
                  <Exp
                    company={"Cert II in Electrotechnology Studies"}
                    location={"Victoria University Polytechnic"}
                    start={"November 2017"}
                    end={"September 2020"}
                    content={
                      <ul className="content__list">
                        <li>
                          This certificate provides you with the skills to select, install, set up,
                          test, repair and maintain electrical systems and equipment. On-the-job
                          training with your employer is combined with studying{" "}
                        </li>
                      </ul>
                    }
                  />
                </>
              }
            />
            <Dropdown
              id={"skills"}
              title={"Skills"}
              content={
                <div className="resume__skills">
                  <div className="skills__container">
                    <h3>Programming Languages</h3>
                    <p>Javascript, Html, CSS, SCSS, React, Node JS, C# (Unity)</p>
                  </div>
                  <div className="skills__container">
                    <h3>Software</h3>
                    <p>Photoshop, Postman, Figma, Gimp, Git, MS Office, Npm</p>
                  </div>
                </div>
              }
            />
            <Dropdown
              id={"references"}
              title={"References"}
              content={
                <div className="resume__skills">
                  <div className="skills__container">
                    <h3>Darin Stewart</h3>
                    <h5>Co-owner of Nexus Electrical Solutions</h5>
                    <p>(Details found in resume)</p>
                  </div>
                  <div className="skills__container">
                    <h3>Taylor Manoy</h3>
                    <h5>Header Manager, Breakwell Electrical</h5>
                    <p>(Details found in resume)</p>
                  </div>
                </div>
              }
            />
            <Dropdown
              id={"interests"}
              title={"Interests"}
              content={
                <p className="p-text">
                  After spending my childhood in Germany and early work career, I moved to Cape Town
                  14 years ago. Cooking and hosting dinners for family and friends are some of my
                  favorite activities, and I enjoy connecting with people through good food,
                  technology, and intelligent discussion. You will often find me on and around Table
                  Mountain, hiking or running with my dog Alpha. I am very excited about the new age
                  Space Race and the innovation it brings, and I would like to witness a rocket
                  launch in my lifetime. It is also important to me to keep up with web technology
                  and UX design developments by listening to podcasts, attending local events,
                  attending conferences, and using Twitter.
                </p>
              }
            />
          </div>
          <ResumeNav />
        </div>
      </div>
    <div className="app__flex">
      <div className="app__container-width bottom">
        <p className="p-text">@2022 Designed and built by Keanu_Barnard</p>
      </div>
    </div>
    </>
  );
};

export default Resume;
