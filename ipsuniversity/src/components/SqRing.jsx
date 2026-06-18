// SqRing.jsx

import React from "react";

const SqRing = ({ width = 500, height = 500 }) => {
  return (
    <div className="w-full h-screen bg-[#7b001c] flex items-center justify-center overflow-hidden">
      
      <svg
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* 5 dotted square rings */}

      
        <rect x="130" y="130" width="240" height="240" rx="0" />
        <rect x="150" y="150" width="200" height="200" rx="0" />
        <rect x="170" y="170" width="160" height="160" rx="0" />

        <style>
          {`
            rect{
              stroke: rgba(255,255,255,0.12);
              stroke-width: 8;

              /* dotted effect */
              stroke-dasharray: 0.5 15;

              stroke-linecap: round;
              fill: none;
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default SqRing;