import React from "react";
import "./AboutUs1.scss";
import Slogan from "./Slogan.jsx";
import Vision from "./Vision.jsx";
import Mission from "./Mission.jsx";

const AboutUs1 = () => {
  return (
    <div className="AboutUs1">
      <div className="aboutUs1-wrapper">
        <Slogan />
        <Vision />
        <Mission />
      </div>
    </div>
  );
};

export default AboutUs1;
