import React from "react";
import {
  FaBell,
  FaBullhorn,
  FaCalendarAlt,
  FaTrophy,
  FaChevronRight,
} from "react-icons/fa";

const updates = [
  {
    icon: <FaBullhorn />,
    text: "Admission Open 2025-26",
    badge: "NEW",
  },
  {
    icon: <FaCalendarAlt />,
    text: "ICESCT 2025 - Register Now",
    badge: "NEW",
  },
  {
    icon: <FaTrophy />,
    text: "Technoparv 2025 - Registration Open",
    badge: "NEW",
  },
];

const LatestBanner = () => {
  return (
    <section className="w-full mt-10 px-4 lg:px-8  mb-20">
      <div
        className="
        max-w-[1380px]
        mx-auto
        bg-white/95
        backdrop-blur-xl
        rounded-2xl
        border
        border-gray-200
        
        overflow-hidden
        z-20
      "
      >
        <div className="flex items-center z-20">

          {/* Left Title */}

          <div
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            border-r
            border-gray-200
            shrink-0
          "
          >
            <div
              className="
              w-10
              h-10
              rounded-full
              bg-[var(--forest)]/10
              flex
              items-center
              justify-center
            "
            >
              <FaBell className="text-[var(--forest)] text-lg" />
            </div>

            <h3 className="font-semibold text-gray-800 whitespace-nowrap">
              Latest Updates
            </h3>
          </div>

          {/* Marquee */}

          <div className="flex-1 overflow-hidden">
            <div className="latest-track flex items-center">

              {[...updates, ...updates].map((item, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  mx-4
                  px-5
                  py-2
                  rounded-full
                  bg-[#f7f8f6]
                  border
                  border-gray-100
                  whitespace-nowrap
                  shrink-0
                "
                >
                  <span className="text-[var(--forest)] text-sm">
                    {item.icon}
                  </span>

                  <span className="text-gray-700 text-sm font-medium">
                    {item.text}
                  </span>

                  <span
                    className="
                    text-[10px]
                    px-2.5
                    py-0.5
                    rounded-full
                    bg-[var(--forest)]
                    text-white
                    font-semibold
                    tracking-wide
                  "
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}

          <div className="px-4 shrink-0">
            <button
              className="
              w-10
              h-10
              rounded-full
              border
              border-gray-200
              bg-white
              flex
              items-center
              justify-center
              hover:bg-[var(--forest)]
              hover:text-white
              transition
            "
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .latest-track{
            width:max-content;
            animation: marquee 30s linear infinite;
          }

          .latest-track:hover{
            animation-play-state: paused;
          }

          @keyframes marquee{
            from{
              transform:translateX(0);
            }
            to{
              transform:translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default LatestBanner;