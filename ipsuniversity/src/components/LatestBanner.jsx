// LatestBanner.jsx

import React from "react";
import edubuilding from "../images1/edubuild.JPG";

const updates = [
  "📢 Admission Open 2025-26 — For free online registration form click here",
  "🎓 ICESCT 2025 — Register Now",
  "🏆 Technoparv 2025 — Registration Open for Technical Fest",
];

const LatestBanner = () => {
  return (
    <section
  className="
    relative
    w-full
    overflow-hidden
    py-3
    sm:py-4
    md:py-5
    bg-fixed
    bg-cover
    bg-center
    mt-15
    bg-transparent
  "
  style={{
    backgroundImage: `url(${edubuilding})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[var(--moss)]"></div>

  {/* Glass Banner */}
  <div className="relative z-20 max-w-[1350px] mx-auto px-2 sm:px-4">

    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        overflow-hidden
      "
    >

      {/* Left Label */}
      <div
        className="
          shrink-0
          px-4
          sm:px-6
          py-3
          sm:py-4
          border-b
          sm:border-b-0
          sm:border-r
          border-white/20
        "
      >
        <h3
          className="
            text-white
            font-bold
            tracking-wide
            text-xs
            sm:text-sm
            md:text-base
            whitespace-nowrap
            text-center
            sm:text-left
          "
        >
          Latest Updates »
        </h3>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden w-full">

        <div className="latest-track flex items-center gap-10 sm:gap-16 whitespace-nowrap">

          {[...updates, ...updates].map((item, index) => (
            <span
              key={index}
              className="
                text-[var(--white)]
                text-xs
                sm:text-sm
                md:text-base
                py-3
                sm:py-4
                font-medium
              "
            >
              {item}
            </span>
          ))}

        </div>
      </div>
    </div>
  </div>

  {/* Animation */}
  <style>
    {`
      .latest-track{
        width:max-content;
        animation: marquee 35s linear infinite;
      }

      @keyframes marquee{
        from{
          transform: translateX(0);
        }

        to{
          transform: translateX(-50%);
        }
      }
    `}
  </style>
</section>
  );
};

export default LatestBanner;