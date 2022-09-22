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
                  I'm a passionate self-taught developer studying for a Bachelor of Information Technology at Victoria University. My time is mostly spent creating beautiful front-end applications with seamless UX/UI. My current technology stack includes Javascript, React.JS, Html, CSS/SCSS, and node.js. I love encountering hard-to-solve problems and approach them with patience, determination, and relentless perseverance.
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
                    start={"September 2021"}
                    end={"Current"}
                    content={
                      <ul className="content__list">
                        <li>
                          Cooperating with Programmers to carry out home automation installing/testing
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
                          Working along side A-grade Electrcian, undertaking specific instructions
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
                          Currently undertaking a Bachelor of IT to gain a fundamental understanding of all
                          aspects of computing, computer hardware, operating systems, computer
                          networks, database systems and software engineering.
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
                          Completed this certificate in 2021 to become a qualified electrician in Victoria. Providing me with the skills to select, install, set up, test, repair and maintain electrical systems and equipment. Completed through on-the-job training with combined study.
                        </li>
                      </ul>
                    }
                  />
                  <Exp
                    company={"Cert II in Electrotechnology Studies"}
                    location={"Victoria University Polytechnic"}
                    start={"Feburary 2017"}
                    end={"August 2017"}
                    content={
                      <ul className="content__list">
                        <li>
                        Completed in 2017, this certification was used to learn all the fundamentals of the electrical trade as a pre-requisite to getting a position as an electrical apprentice. Over a 6 month period, I undertook this course.
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
                    After spending my childhood in New Zealand, I moved to Australia 12 years ago. Playing games, hanging out with friends, and enjoying sports have always been at the core of what I enjoy in life. As I have grown I've found a ton of fulfillment in accomplishing goals in sports, gym, my social life, and work. I try to cram as many activities into my day as possible. Going to work, completing uni assignments, gym, MMA training, and then always fitting some programming in before bed. On my off days, I'll go out with my mates or spend long days in bed on my 3rd playthrough of Elden Ring. It is important to me to also keep up with news or technology by constantly listening to audiobooks, podcasts, and recorded conferences, especially while I'm doing my daily commutes. 
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
