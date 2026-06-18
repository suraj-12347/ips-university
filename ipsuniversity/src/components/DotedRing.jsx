// DotetRing.jsx

import React from "react";

const DotetRing = ({ width = 500, height = 500 }) => {
  return (
    <div className=" bg-transparent flex items-center justify-center overflow-hidden z-40 overflow-x-hidden">
      
      <svg
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* 5 dotted circles */}
        <circle cx="250" cy="250" r="125" />
        <circle cx="250" cy="250" r="145" />
        <circle cx="250" cy="250" r="165" />
        <circle cx="250" cy="250" r="185" />
        <circle cx="250" cy="250" r="205" />

        <style>
          {`
            circle{
              stroke: rgba(255,255,255,0.12);
              stroke-width: 8;
              stroke-dasharray: 0.5 20;
              stroke-linecap: round;
              fill: none;
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default DotetRing;