import React, { useState } from "react";
import "./Content.scss";
import { Nav, Header, Footer, Copyright } from "../../components/index.js";
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
