import React from "react";
import { Facebook, Instagram, Youtube, Brunch } from "../../icon/index.js";
import "./NavOverlaySnsLink.scss";

const NavOverlaySnsLink = () => {
  return (
    <li className="NavOverlaySnsLink">
      <ul className="navOverlaySnsLink-list">
        <li className="navOverlaySnsLink-list-item">
          <a href="#!">
            <Facebook />
          </a>
        </li>
        <li className="navOverlaySnsLink-list-item">
          <a href="#!">
            <Instagram />
          </a>
        </li>
        <li className="navOverlaySnsLink-list-item">
          <a href="#!">
            <Youtube />
          </a>
        </li>
        <li className="navOverlaySnsLink-list-item">
          <a href="#!">
            <Brunch />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default NavOverlaySnsLink;
