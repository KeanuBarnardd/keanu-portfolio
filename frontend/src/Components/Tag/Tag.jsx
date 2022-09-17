import React from "react";

import "./Tag.scss";

const Tag = ({ tagState, text }) => {
  // Tag State will either be 'major' or 'minor' for styling...

  return <p className={`skill-tag ${tagState}`}>{text}</p>;
};

export default Tag;
