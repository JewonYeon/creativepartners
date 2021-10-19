import React from "react";

const Menu = ({ width = 24, height = 24, fill = "#003dab" }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};

export default Menu;
