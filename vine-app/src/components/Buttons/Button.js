import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ title, cName, iconName }) => {
  return (
    <div className={cName}>
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={iconName}
        style={{ marginLeft: "20px" }}
      />
    </div>
  );
};

export default Button;
