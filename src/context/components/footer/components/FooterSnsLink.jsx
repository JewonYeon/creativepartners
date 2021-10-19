import React from "react";
import { Facebook, Instagram, Youtube, Brunch } from "../../icon/index.js";
import "./FooterSnsLink.scss";

const FooterSnsLink = () => {
  return (
    <ul className="FooterSnsLink">
      <li className="footerSnsLink-item">
        <a href="#!">
          <Facebook />
        </a>
      </li>
      <li className="footerSnsLink-item">
        <a href="#!">
          <Instagram />
        </a>
      </li>
      <li className="footerSnsLink-item">
        <a href="#!">
          <Youtube />
        </a>
      </li>
      <li className="footerSnsLink-item">
        <a href="#!">
          <Brunch />
        </a>
      </li>
    </ul>
  );
};

export default FooterSnsLink;
