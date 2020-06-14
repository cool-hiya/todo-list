import React from "react";
import "./filter.scss";

const Filter = ({ name, active }) => {
  let className = "filter";

  if (active) {
    className += " _active";
  }

  return <span className={className}>{name}</span>;
};

export default Filter;
