import React from "react";
import "./Header.scss";

const Header = ({ subtitle }) => {
  return (
    <div className="Header">
      <div className="header-section">
        <div className="header-section-title">{subtitle || "ABOUT US"}</div>
      </div>
    </div>
  );
};

export default Header;
