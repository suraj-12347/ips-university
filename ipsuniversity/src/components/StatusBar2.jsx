import React, { useEffect, useState, useRef } from "react";
import edubuilding from "../images1/pharmawhiteflower2.jpeg";

import {
  FaAward,
  FaUserGraduate,
  FaUsers,
  FaTrophy,
  FaBookOpen,
} from "react-icons/fa";

/* DATA */
const statsData = [
  {
    number: 20,
    suffix: "+",
    label: "Years of Experience",
    icon: FaAward,
  },
  {
    number: 15000,
    suffix: "+",
    label: "Alumni",
    icon: FaUserGraduate,
  },
  {
    number: 80,
    suffix: "+",
    label: "Recruiters",
    icon: FaUsers,
  },
  {
    number: 100,
    suffix: "%",
    label: "Placement Assitence",
    icon: FaTrophy,
  },
  {
    number: 15,
    suffix: " LPA",
    label: "Highest Package",
    icon: FaBookOpen,
  },
];



/* COUNTER */
const Counter = ({ end, suffix, startTrigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let current = 0;
    const duration = 3500; // slower + smoother
    const steps = 70;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end, startTrigger]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* MAIN COMPONENT */
const StatsBar = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
 <section
  ref={sectionRef}
  className="relative   z-40 "
>
  <div className="max-w-[1380px] mx-auto mt-5">
    <div
      className="
        bg-transparent
        backdrop-blur-md
       
        border border-white/50
       
        overflow-hidden
        xl:h-[130px]
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:h-full">
        {statsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                h-full
                py-6
                xl:py-0
                px-5
                text-center
                transition-all
                duration-300
                group
                
              "
            >
              {/* Divider */}
              {index !== statsData.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}

              {/* Icon */}
              <div
                className="
                  w-12
                  h-12
                  xl:w-10
                  xl:h-10
                  rounded-full
                  bg-[#edf7ef]
                  flex
                  items-center
                  justify-center
                  mb-3
                  xl:mb-2
                  transition-all
                  duration-300
                  group-hover:bg-[#1b5e20]
                "
              >
                <Icon
                  className="
                    text-[#1b5e20]
                    text-xl
                    xl:text-lg
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              {/* Number */}
              <h2 className="text-[30px] xl:text-[24px] font-bold text-[var(--forest)] leading-none">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                  startTrigger={start}
                />
              </h2>

              {/* Label */}
              <p className="mt-2 xl:mt-1 text-[15px] xl:text-[14px] leading-tight text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
};

export default StatsBar;