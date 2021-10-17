import React from "react";
import "./Copyright.scss";
import up from "./up.svg";

const Copyright = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="Copyright">
      <div className="copyright-wrapper">
        <div className="content1">
          COPYRIGHT 2021. CREATIVE PARTNERS. All Rights Reserved.
        </div>
        <div className="content2" onClick={handleTop}>
          TOP
          <img src={up} alt="up" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
