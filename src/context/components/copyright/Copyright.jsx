import React, { useContext } from "react";
import "./Copyright.scss";
import { ViewportContext } from "../../hooks/useViewport.jsx";
import { Up } from "../icon/index.js";
import CopyrightTopButton from "./CopyrightTopButton.jsx";

const Copyright = () => {
  const { isMobile } = useContext(ViewportContext);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="Copyright">
      <div className="copyright-wrapper">
        <div className="copyright-content">
          COPYRIGHT 2021. CREATIVE PARTNERS. All Rights Reserved.
        </div>
        {isMobile ? <></> : <CopyrightTopButton onClick={handleTop} />}
      </div>
      {isMobile ? <CopyrightTopButton onClick={handleTop} /> : <></>}
    </div>
  );
};

export default Copyright;
