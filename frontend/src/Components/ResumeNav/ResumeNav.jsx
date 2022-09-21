import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { images } from "../../Constants/index";
import "./ResumeNav.scss";

const ResumeNav = () => {
  return (
    <div className="resume__side">
      <img src={images.keanu_portrait} alt="" />
      <div className="title__container">
        <h3>Keanu Barnard</h3>
        <p className="sub-title">
          <i className="fa-solid fa-location-dot"></i>3029 Melbourne, AU
        </p>
        <p className="sub-title">
          <i className="fa-solid fa-calendar-days"></i>07-02-2000
        </p>
        <p className="sub-title">
          <i className="fa-solid fa-phone"></i> 0455847718
        </p>
        <p className="sub-title">
          <i className="fa-solid fa-envelope"></i> keanu.barnardd@gmail.com
        </p>
      </div>
      <div className="resume__nav">
        <NavHashLink className={"resume__navlink"} to={"/resume#intro"}>
          Introduction
        </NavHashLink>
        <NavHashLink className={"resume__navlink"} to={"/resume#experience"}>
          Experience
        </NavHashLink>
        <NavHashLink className={"resume__navlink"} to={"/resume#education"}>
          Education
        </NavHashLink>
        <NavHashLink className={"resume__navlink"} to={"/resume#skills"}>
          Skills
        </NavHashLink>
        <NavHashLink className={"resume__navlink"} to={"/resume#references"}>
          References
        </NavHashLink>
        <NavHashLink className={"resume__navlink"} to={"/resume#interests"}>
          Interests
        </NavHashLink>
      </div>
    </div>
  );
};

export default ResumeNav;
