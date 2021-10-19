import React, { useEffect } from "react";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Hamburger from "./components/Hamburger.jsx";

const Nav = ({ state, onClickMenu }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

  return (
    <>
      <div className="Nav">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <button className="nav-menuBtn" onClick={onClickMenu}>
          <span className="nav-menuBtn-label">
            <Hamburger />
          </span>
        </button>
      </div>
    </>
  );
};

export default Nav;
