import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavOverlay.scss";
import { ViewportContext } from "../../../hooks/useViewport.jsx";

import NavOverlaySnsLink from "./NavOverlaySnsLink.jsx";

const NavOverlay = ({ closeMenu }) => {
  const { isMobile } = useContext(ViewportContext);

  const menulist = [
    { route: "/aboutus", english: "ABOUT US", korean: "회사소개" },
    { route: "/service", english: "ONLINE SERVICE", korean: "비대면 서비스" },
    { route: "/client", english: "CLIENT", korean: "함께하는 고객" },
    { route: "/", english: "BLOG", korean: "블로그" }, // 수정
    { route: "/contact", english: "CONTACT US", korean: "문의" },
  ];

  const handleMouseOver = (e) => {
    const content = e.target.innerHTML;
    const index = menulist.findIndex((el) => content === el.english);
    const korean = menulist[index].korean;
    return (e.target.innerHTML = korean);
  };

  const handleMouseOut = (e) => {
    const content = e.target.innerHTML;
    const index = menulist.findIndex((el) => content === el.korean);
    const english = menulist[index].english;
    return (e.target.innerHTML = english);
  };

  return (
    <div className="NavOverlay">
      <ul className="navOverlay-wrapper">
        {isMobile
          ? menulist.map(({ route, english, korean }, idx) => {
              return (
                <li className="navOverlay-menu" key={idx}>
                  <Link to={route}>
                    {english}
                    <br />
                    <span>{korean}</span>
                  </Link>
                </li>
              );
            })
          : menulist.map(({ route, english }, idx) => {
              return (
                <li className="navOverlay-menu" key={idx}>
                  <Link
                    to={route}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={closeMenu}
                  >
                    {english}
                  </Link>
                </li>
              );
            })}
        <NavOverlaySnsLink />
      </ul>
    </div>
  );
};

export default NavOverlay;
