// DotetRing2.jsx

import React from "react";

const DotetRing2 = ({
  width = 500,
  height = 500,
  color = "var(--grass)",
  opacity = 0.5,
}) => {
  const rings = [125, 145, 165, 185, 205];

  return (
    <div className="relative flex items-center justify-center bg-transparent pointer-events-none">

      <svg
        width={width}
        height={height}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[95deg]"
      >

        {rings.map((radius, index) => (
          <circle
            key={index}
            cx="250"
            cy="250"
            r={radius}

            /* Important change */
            style={{
              stroke: color,
            }}

            strokeWidth="8"
            strokeOpacity={opacity}

            /* better visible dotted effect */
            strokeDasharray={`${2 + index} 18`}

            strokeLinecap="round"
            fill="none"
          />
        ))}

      </svg>

    </div>
  );
};

export default DotetRing2;