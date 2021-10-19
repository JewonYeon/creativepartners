import React from "react";

const Up = ({ width, height, fill }) => {
  return (
    <svg
      width={width ? width : "14px"}
      height={height ? height : "14px"}
      fill={fill ? fill : "white"}
      stroke="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path>
      </g>
    </svg>
  );
};

export default Up;
