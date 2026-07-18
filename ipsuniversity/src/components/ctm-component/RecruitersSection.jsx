import React from "react";

import tcs from "../../images1/tcs.png";



const recruiters = [
  {
    name: "Google",
    logo: "https://img.icons8.com/color/96/google-logo.png",
  },
  {
    name: "Microsoft",
    logo: "https://img.icons8.com/color/96/microsoft.png",
  },
  {
    name: "Amazon",
    logo: "https://img.icons8.com/color/96/amazon.png",
  },
  {
    name: "IBM",
    logo: "https://img.icons8.com/color/96/ibm.png",
  },
  {
    name: "Oracle",
    logo: "https://img.icons8.com/color/96/oracle-logo.png",
  },
  {
    name: "TCS",
    logo: tcs,
  },
  {
    name: "Infosys",
    logo: "https://cdn.simpleicons.org/infosys",
  },
 



];

const RecruitersSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">

 <div className="text-center mb-20">

  <span className="uppercase tracking-[5px] text-xs font-semibold text-[var(--grass)]">
    Industry Partners
  </span>

  <h2
    className="mt-5 text-5xl lg:text-6xl text-[var(--forest)]"
    style={{ fontFamily: "Fraunces, serif" }}
  >
    Trusted Recruiters
  </h2>

  <div className="w-20 h-[2px] bg-[var(--grass)] mx-auto mt-6 rounded-full"></div>

  <p className="max-w-2xl mx-auto mt-8 text-gray-600 leading-8">
    Our graduates begin their careers with globally recognized organizations
    across technology, consulting, finance, manufacturing and emerging industries.
  </p>

</div>
</div>

        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="recruiter-scroll flex items-center gap-5 md:gap-8 py-4">
            {[...recruiters, ...recruiters].map((company, index) => (
              <div
  key={index}
  className="
    group
    relative
    min-w-[180px]
    md:min-w-[220px]
    h-[150px]
    bg-white
    rounded-3xl
    border
    border-gray-100
    overflow-hidden
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_20px_45px_rgba(49,87,44,0.12)]
  "
>
  {/* Top Border Animation */}
  <div
    className="
      absolute
      top-0
      left-0
      h-[4px]
      w-0
      bg-[var(--grass)]
      transition-all
      duration-500
      group-hover:w-full
    "
  />

  <img
    src={company.logo}
    alt={company.name}
    className="
      h-12
      md:h-14
      object-contain
     
      opacity-70
      transition-all
      duration-500
      group-hover:grayscale-0
      group-hover:opacity-100
      group-hover:scale-110
    "
  />

  <p
    className="
      mt-5
      text-sm
      font-medium
      text-gray-500
      group-hover:text-[var(--forest)]
      transition-colors
      duration-300
    "
  >
    {company.name}
  </p>
</div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .recruiter-scroll {
            width: max-content;
            animation: scroll 28s linear infinite;
            will-change: transform;
          }

          .recruiter-scroll:hover {
            animation-play-state: paused;
          }

          /* Tablet */
          @media (max-width: 1024px) {
            .recruiter-scroll {
              animation: scroll 22s linear infinite;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .recruiter-scroll {
              animation: scroll 18s linear infinite;
            }
          }

          /* Small Mobile */
          @media (max-width: 480px) {
            .recruiter-scroll {
              animation: scroll 15s linear infinite;
            }
          }
        `}
      </style>
    </section>
  );
};

export default RecruitersSection;