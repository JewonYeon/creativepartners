import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Close, Logo } from "../icon/index.js";
import "./Nav.scss";

const Nav = ({ state, onClickMenu }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

  return (
    <div className="Nav">
      <Link to="/">
        <Logo openMenu={state} />
      </Link>
      <button className="nav-menuBtn" onClick={onClickMenu}>
        <span className="nav-menuBtn-label">
          {state ? <Close /> : <Menu />}
        </span>
      </button>
    </div>
  );
};

export default Nav;
