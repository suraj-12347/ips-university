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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-[var(--forest)]">
          Our Recruiters
        </h2>

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
                  min-w-[170px]
                  md:min-w-[220px]
                  bg-white
                  rounded-2xl
                  shadow-md
                  border
                  border-gray-100
                  p-4
                  md:p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 md:h-14 object-contain mb-3 md:mb-4"
                  loading="lazy"
                />

                <h3 className="text-sm md:text-base text-gray-700 font-semibold text-center">
                  {company.name}
                </h3>
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