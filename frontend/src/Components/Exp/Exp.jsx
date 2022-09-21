import React from "react";

import "./Exp.scss";

const Exp = ({ position, company, location, start, end, content }) => {
  return (
    <div className="experience__container">
      <h4>{position}</h4>
      <div className="date">
        <p>{start} - </p>
        <p>{end}</p>
      </div>
      <div className="experience__content">
        <div className="company__details">
          <p className="company">{company}-</p> <p className="location">{location}</p>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Exp;
