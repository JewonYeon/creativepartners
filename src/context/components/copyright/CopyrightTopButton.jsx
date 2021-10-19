import React from "react";
import { Up } from "../icon/index.js";
import "./CopyrightTopButton.scss";

const CopyrightTopButton = ({ onClick }) => {
  return (
    <div className="CopyrightTopButton" onClick={onClick}>
      TOP
      <Up />
    </div>
  );
};

export default CopyrightTopButton;
