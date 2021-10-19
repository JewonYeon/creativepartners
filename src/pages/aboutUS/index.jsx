import React from "react";
import Content from "../../context/layouts/content/Content.jsx";
import { AboutUs2, AboutUs3 } from "./components/index.js";
import AboutUs1 from "./components/AboutUs1/AboutUs1.jsx";

const AboutUs = () => {
  return (
    <Content>
      <div>
        <AboutUs1 />
        <AboutUs2 />
        <AboutUs3 />
      </div>
    </Content>
  );
};

export default AboutUs;
