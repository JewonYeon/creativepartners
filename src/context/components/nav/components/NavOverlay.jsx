import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavOverlay.scss";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import youtube from "./youtube.svg";
import brunch from "./brunch.svg";
import { ViewportContext } from "../../../hooks/useViewport.jsx";

const NavOverlay = () => {
  const { isMobile } = useContext(ViewportContext);
  console.log(isMobile);
  const menulist = [
    { route: "/aboutus", english: "ABOUT US", korean: "회사소개" },
    { route: "/service", english: "ONLINE SERVICE", korean: "비대면 서비스" },
    { route: "/client", english: "CLIENT", korean: "함께하는 고객" },
    { route: "/", english: "BLOG", korean: "블로그" }, // 수정
    { route: "/contact", english: "CONTACT US", korean: "문의" },
  ];

  const snsLinkList = [facebook, instagram, youtube, brunch];

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

  // const

  return (
    <div className="NavOverlay">
      <ul className="navOverlay-wrapper">
        {isMobile
          ? menulist.map(({ route, english, korean }, idx) => {
              return (
                <li key={idx}>
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
                <li key={idx}>
                  <Link
                    to={route}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    {english}
                  </Link>
                </li>
              );
            })}
        <li className="navOverlay-snsLink" key="link">
          <ul>
            {snsLinkList.map((link, idx) => {
              return (
                <li key={idx}>
                  <a>
                    <img src={link} alt="link" />
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavOverlay;
