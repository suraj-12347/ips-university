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
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png",
  },
  {
    name: "Capgemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/512px-Capgemini_201x_logo.svg.png",
  },
  {
    name: "Cognizant",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png",
  },
  {
    name: "Nagarro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nagarro_logo.svg/512px-Nagarro_logo.svg.png",
  },
];

const RecruitersSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[var(--forest)]">
          Our Recruiters
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex py-4 items-center gap-10 animate-[scroll_25s_linear_infinite]">
            {[...recruiters, ...recruiters].map((company, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain mb-4"
                />

                <h3 className="text-gray-700 font-semibold text-center">
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
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default RecruitersSection;