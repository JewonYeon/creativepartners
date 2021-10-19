import React, { useState } from "react";
import Nav from "../../components/nav/Nav.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Copyright from "../../components/copyright/Copyright.jsx";
import "./Content.scss";
import NavOverlay from "../../components/nav/components/NavOverlay.jsx";

const Content = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <Nav state={openMenu} onClickMenu={handleMenu} />
      {openMenu ? <NavOverlay closeMenu={handleMenu} /> : <></>}
      <Header />
      <div className="LayoutContent">
        {children}
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Content;
